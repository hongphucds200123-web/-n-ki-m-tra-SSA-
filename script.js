// script.js
const $ = (id) => document.getElementById(id);

const state = {
  mode: "quiz", // quiz | review | flash
  pool: [],
  idx: 0,
  answered: false,
  correct: 0,
  wrong: 0,
  streak: 0,
  wrongIds: new Set(JSON.parse(localStorage.getItem("wrongIds") || "[]")),
  markedIds: new Set(JSON.parse(localStorage.getItem("markedIds") || "[]")),
  order: "inorder"
};

function setMode(mode){
  state.mode = mode;

  $("btnModeQuiz").classList.toggle("primary", mode==="quiz");
  $("btnModeReview").classList.toggle("primary", mode==="review");
  $("btnModeFlash").classList.toggle("primary", mode==="flash");

  $("cardQuiz").hidden = (mode==="flash");
  $("cardFlash").hidden = (mode!=="flash");

  // khi đổi mode, không auto start — user bấm "Bắt đầu"
}

function persistSets(){
  localStorage.setItem("wrongIds", JSON.stringify([...state.wrongIds]));
  localStorage.setItem("markedIds", JSON.stringify([...state.markedIds]));
}

function labelSet(set){
  if(set==="study") return "Kỹ năng học tập & tư duy";
  if(set==="time") return "Quản lý thời gian & động lực";
  if(set==="finance") return "Tài chính cá nhân";
  if(set==="career") return "Định hướng nghề nghiệp";
  return "—";
}

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function buildPool(){
  const kw = $("searchInput").value.trim().toLowerCase();
  const setFilter = $("filterSet").value;
  const limit = Math.max(5, Math.min(200, Number($("limitInput").value || 20)));
  const order = $("orderSelect").value;
  state.order = order;

  let base = [...QUESTIONS];

  if(setFilter !== "all"){
    base = base.filter(x => x.set === setFilter);
  }

  if(kw){
    base = base.filter(x =>
      x.q.toLowerCase().includes(kw) ||
      Object.values(x.options).some(v => v.toLowerCase().includes(kw)) ||
      (x.explain || "").toLowerCase().includes(kw)
    );
  }

  // review mode: chỉ lấy câu sai/đánh dấu
  if(state.mode === "review"){
    base = base.filter(x => state.wrongIds.has(x.id) || state.markedIds.has(x.id));
  }

  if(order === "shuffle") base = shuffle(base);

  return base.slice(0, Math.min(limit, base.length));
}

function resetSessionStats(){
  state.idx = 0;
  state.answered = false;
  state.correct = 0;
  state.wrong = 0;
  state.streak = 0;
  updateStats();
}

function updateStats(){
  $("statProgress").textContent = `${Math.min(state.idx+1, state.pool.length)}/${state.pool.length}`;
  $("statCorrect").textContent = state.correct;
  $("statWrong").textContent = state.wrong;
  $("statStreak").textContent = state.streak;
}

function renderQuiz(){
  const q = state.pool[state.idx];
  if(!q){
    $("qText").textContent = "Không có câu nào khớp bộ lọc. Thử đổi filter/keyword/limit.";
    $("options").innerHTML = "";
    $("qMeta").textContent = "—";
    $("qSet").textContent = "—";
    $("explainBox").hidden = true;
    updateStats();
    return;
  }

  $("qMeta").textContent = `Q${String(q.id).padStart(2,"0")}`;
  $("qSet").textContent = labelSet(q.set);
  $("qText").textContent = q.q;

  $("explainBox").hidden = true;
  $("explainText").textContent = q.explain || "Chưa có giải thích cho câu này. Bạn có thể bổ sung trong questions.js.";

  const keys = ["A","B","C","D"];
  $("options").innerHTML = keys.map(k => {
    const safe = q.options[k] ?? "(trống)";
    return `<div class="option" data-k="${k}">
      <span class="key">${k}.</span><span>${escapeHtml(safe)}</span>
    </div>`;
  }).join("");

  [...$("options").querySelectorAll(".option")].forEach(el=>{
    el.addEventListener("click", ()=> choose(el.dataset.k));
  });

  state.answered = false;
  updateStats();
}

function revealAnswer(){
  const q = state.pool[state.idx];
  if(!q) return;
  showExplain();
  markOptions(q.key, null);
  state.answered = true;
}

function showExplain(){
  $("explainBox").hidden = false;
}

function markOptions(correctKey, chosenKey){
  const opts = [...$("options").querySelectorAll(".option")];
  opts.forEach(o=>{
    const k = o.dataset.k;
    o.classList.remove("correct","wrong");
    if(k === correctKey) o.classList.add("correct");
    if(chosenKey && k === chosenKey && chosenKey !== correctKey) o.classList.add("wrong");
  });
}

function choose(k){
  const q = state.pool[state.idx];
  if(!q || state.answered) return;

  const ok = (k === q.key);
  showExplain();
  markOptions(q.key, k);

  state.answered = true;

  if(ok){
    state.correct += 1;
    state.streak += 1;
    state.wrongIds.delete(q.id); // trả lại "sạch"
  }else{
    state.wrong += 1;
    state.streak = 0;
    state.wrongIds.add(q.id);
  }
  persistSets();
  updateStats();
}

function next(){
  if(state.pool.length===0) return;
  state.idx = Math.min(state.idx+1, state.pool.length-1);
  if(state.mode === "flash") renderFlash();
  else renderQuiz();
}
function prev(){
  if(state.pool.length===0) return;
  state.idx = Math.max(state.idx-1, 0);
  if(state.mode === "flash") renderFlash();
  else renderQuiz();
}

function markForReview(){
  const q = state.pool[state.idx];
  if(!q) return;
  if(state.markedIds.has(q.id)) state.markedIds.delete(q.id);
  else state.markedIds.add(q.id);
  persistSets();
  // nhỏ thôi nhưng “đã” — kiểu tick vào sổ tay
  alert(state.markedIds.has(q.id) ? "Đã đánh dấu để ôn lại." : "Đã bỏ đánh dấu.");
}

function start(){
  state.pool = buildPool();
  resetSessionStats();

  if(state.mode === "flash"){
    renderFlash();
  }else{
    renderQuiz();
  }
}

function renderFlash(){
  const q = state.pool[state.idx];
  const card = $("flashCard");
  card.classList.remove("flipped");

  if(!q){
    $("fMeta").textContent = "—";
    $("fQuestion").textContent = "Không có flashcards. Thử đổi filter/keyword hoặc mode.";
    $("fAnswer").textContent = "—";
    $("fExplain").textContent = "—";
    updateStats();
    return;
  }

  $("fMeta").textContent = `Q${String(q.id).padStart(2,"0")} • ${labelSet(q.set)}`;
  $("fQuestion").textContent = q.q;
  $("fAnswer").textContent = `${q.key}. ${q.options[q.key] || ""}`;
  $("fExplain").textContent = q.explain || "Chưa có giải thích.";
  updateStats();
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function hardReset(){
  if(!confirm("Reset = xóa toàn bộ câu sai/đánh dấu và thống kê. Làm luôn?")) return;
  state.wrongIds.clear();
  state.markedIds.clear();
  persistSets();
  start();
}

function bind(){
  $("btnModeQuiz").addEventListener("click", ()=> setMode("quiz"));
  $("btnModeReview").addEventListener("click", ()=> setMode("review"));
  $("btnModeFlash").addEventListener("click", ()=> setMode("flash"));

  $("btnStart").addEventListener("click", start);

  $("btnNext").addEventListener("click", next);
  $("btnPrev").addEventListener("click", prev);
  $("btnReveal").addEventListener("click", revealAnswer);
  $("btnMarkWrong").addEventListener("click", markForReview);

  $("btnFNext").addEventListener("click", next);
  $("btnFPrev").addEventListener("click", prev);
  $("btnFShuffle").addEventListener("click", ()=>{
    state.pool = shuffle(state.pool);
    state.idx = 0;
    renderFlash();
  });

  $("flashCard").addEventListener("click", ()=>{
    $("flashCard").classList.toggle("flipped");
  });

  $("btnReset").addEventListener("click", hardReset);
}

bind();
setMode("quiz");
