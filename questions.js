// questions.js
// key: 'A'|'B'|'C'|'D'
// set: 'study'|'time'|'finance'|'career'

const QUESTIONS = [
  { id: 1, set:'study', q:"What is the recommended task regarding reading before a class session begins?",
    options:{A:"Read the summary of the chapter only to save time",B:"Wait until after the lecture to read so you understand the context better",C:"Read the assigned material to make the lecture and complex concepts easier to follow",D:"Skim the bolded terms and look at the graphics"},
    key:"C", explain:"Đọc trước giúp bạn theo kịp bài giảng và hiểu nhanh các khái niệm khó." },

  { id: 2, set:'study', q:"During a class, what type of questions should a student ask to engage in critical thinking?",
    options:{A:"Questions about the format of the final exam",B:"Questions that distract the professor to use up class time",C:"Questions for clarification on areas that are confusing",D:"Nội dung câu trả lời 4"},
    key:"C", explain:"Hỏi để làm rõ phần bạn còn mơ hồ là tư duy phản biện trong lớp." },

  { id: 3, set:'study', q:"What should a student do with their notes immediately after a class session?",
    options:{A:"Put them in a folder and do not look at them until the midterm",B:"Review and rewrite them, adding in any missing details or clarifications",C:"Type them out word-for-word to ensure they are neat",D:"Share them immediately with a classmate who missed the lecture"},
    key:"B", explain:"Ôn và viết lại ngay sau giờ học giúp lấp chỗ hổng khi ký ức còn nóng." },

  { id: 4, set:'time', q:"What is the 'simplest way' to manage time according to the text?",
    options:{A:"Use a digital calendar with automated reminders",B:"Multitask by doing several assignments at once",C:"Accurately plan how much time a task will take and set aside that amount of time",D:"Prioritize tasks based on which are the most enjoyable"},
    key:"C", explain:"Cốt lõi: ước lượng đúng thời lượng và chặn đúng khung giờ để làm." },

  { id: 5, set:'time', q:"Define the student term 'pulling an all-nighter'.",
    options:{A:"Spending the entire night socializing with friends in the dorms",B:"Going without sleep for the entire night to use that time to finish an assignment",C:"Sleeping for more than 12 hours to catch up on rest",D:"Working a late-night shift at a part-time job"},
    key:"B", explain:"All-nighter = thức trắng đêm để làm bài." },

  { id: 6, set:'time', q:"Why is 'pulling an all-nighter' considered a poor planning method?",
    options:{A:"It ensures you have too much energy the next day",B:"It is the best way to utilize long-term memory",C:"It rarely produces the best work and is often a last-minute attempt to make up for poor planning",D:"It allows you to finish assignments early so you can socialize"},
    key:"C", explain:"Thường cho ra bài kém, là 'vá lỗi' do kế hoạch tệ." },

  { id: 7, set:'time', q:"Which time management app uses boards to organize obligations and share them with collaborators?",
    options:{A:"Toggl",B:"Trello",C:"Sticky Notes",D:"Google Calendar"},
    key:"B", explain:"Trello dùng board/list/card để quản lý và cộng tác." },

  { id: 8, set:'time', q:"Which motivation strategy involves adopting the mindset that you alone are responsible for your goals?",
    options:{A:"Reward Yourself",B:"Tap into Other People's Energy",C:"Increase Personal Responsibility",D:"Visualize the Results"},
    key:"C", explain:"Tăng trách nhiệm cá nhân: 'đời tôi tôi lái'." },

  { id: 9, set:'time', q:"Why is 'Visualizing the Results' considered an effective motivation strategy?",
    options:{A:"It helps you fall asleep faster after studying",B:"Keeping the benefits and end results in mind is extremely effective in keeping you motivated",C:"It allows you to skip the planning phase of goal setting",D:"It guarantees you will get an A in the class"},
    key:"B", explain:"Nhìn thấy 'đích' rõ ràng giúp bạn bền pin." },

  { id:10, set:'time', q:"How does breaking a goal down into manageable tasks aid in completion?",
    options:{A:"Accomplishing the whole is easier when each part is tackled individually",B:"It makes the goal look larger and more impressive",C:"It allows you to procrastinate on the smaller parts",D:"It removes the need for a timeline"},
    key:"A", explain:"Chia nhỏ → dễ xử lý → dễ hoàn thành." },

  { id:11, set:'time', q:"What is the primary purpose of recapturing 'lost moments' in a schedule?",
    options:{A:"To increase the amount of time spent on social media",B:"To find time for napping during the day",C:"To repurpose that time for studying or completing productive tasks",D:"To allow for more travel time between classes"},
    key:"C", explain:"Thu hồi thời gian vụn để học/hoàn thành việc nhỏ." },

  { id:12, set:'time', q:"What is the first step in identifying wasted time in a daily schedule?",
    options:{A:"Asking a friend to track your movements",B:"Immediately cutting out all leisure activities",C:"Analyzing your schedule to identify areas where you can recapture and repurpose time",D:"Downloading a complex time-management app"},
    key:"C", explain:"Bước 1: soi lịch của mình, tìm kẽ hở để tái phân bổ." },

  { id:13, set:'career', q:"Which career assessment tool identifies motivations by ranking different aspects of work?",
    options:{A:"MAPP Test",B:"MyPlan",C:"Career Cluster Interest Survey",D:"Myers-Briggs Type Indicator"},
    key:"B", explain:"MyPlan có bài đánh giá 'Motivations' kiểu xếp hạng yếu tố công việc." },

  { id:14, set:'study', q:"Approximately how many hours of reading per week might a full college course load require?",
    options:{A:"1–2 hours",B:"5–7 hours",C:"10–15 hours",D:"20+ hours"},
    key:"C", explain:"Full load thường yêu cầu khoảng 10–15 giờ đọc/tuần (tuỳ trường/môn)." },

  { id:15, set:'study', q:"What is the potential downside of creating overly complex mnemonics?",
    options:{A:"They are too easy to remember and thus boring.",B:"The reminder itself can become more difficult to remember than the information you are trying to relate it to",C:"They only work for math problems.",D:"Instructors generally forbid their use during exams."},
    key:"B", explain:"Mnemonic quá rối: nhớ cái 'mẹo' còn khó hơn nhớ kiến thức." },

  { id:16, set:'study', q:"Define 'Metacognition'.",
    options:{A:"The process of thinking about how other people think",B:"A type of rapid memorization technique",C:"The process of thinking about how you think, including planning, tracking, and assessing your own understanding",D:"A method for analyzing statistical data"},
    key:"C", explain:"Metacognition = nghĩ về cách mình nghĩ (lập kế hoạch, theo dõi, tự đánh giá)." },

  { id:17, set:'study', q:"Which type of thinking involves generating original and unconventional ideas?",
    options:{A:"Analytical Thinking",B:"Creative Thinking",C:"Critical Thinking",D:"Metacognition"},
    key:"B", explain:"Creative = tạo ý tưởng mới, khác thường." },

  { id:18, set:'study', q:"Which level of the revised Bloom's cognitive taxonomy is considered the apex (highest level)?",
    options:{A:"Remembering",B:"Analyzing",C:"Evaluating",D:"Creating"},
    key:"D", explain:"Bloom revised: đỉnh là Creating." },

  { id:19, set:'finance', q:"What is the first step in the five-step financial planning process?",
    options:{A:"Monitor and Adjust the Plan",B:"Implement the Plan",C:"Develop Personal Goals",D:"Write My Financial Plan"},
    key:"C", explain:"Bắt đầu từ mục tiêu: có đích thì mới có đường." },

  { id:20, set:'finance', q:"Define 'Net Worth' in the context of personal finance.",
    options:{A:"The total amount of income you earn in a year",B:"The value of your most expensive asset (like a car or house)",C:"The total measure of your wealth, calculated by subtracting what you owe from what you own",D:"The amount of money you have in your checking account"},
    key:"C", explain:"Net Worth = tổng tài sản ròng = sở hữu trừ nợ." },

  { id:21, set:'finance', q:"What is the mathematical formula for Net Worth?",
    options:{A:"Income + Expenses = Net Worth",B:"Assets + Liabilities = Net Worth",C:"Assets (Owned) – Liabilities (Owed) = Net Worth",D:"Savings – Debt = Net Worth"},
    key:"C", explain:"Công thức chuẩn: Assets − Liabilities." },

  { id:22, set:'finance', q:"In personal finance, what are 'Assets'?",
    options:{A:"The valuable things you own, such as earnings, savings, and investments",B:"The money you owe to banks or credit card companies",C:"Your monthly variable expenses",D:"The taxes deducted from your paycheck"},
    key:"A", explain:"Assets = những gì bạn sở hữu có giá trị (tiền, tiết kiệm, đầu tư…)." },

  { id:23, set:'finance', q:"In personal finance, what are 'Liabilities'?",
    options:{A:"Your monthly income sources",B:"The interest earned on savings accounts",C:"Borrowed money, or debt, that you owe",D:"Your fixed monthly expenses like rent"},
    key:"C", explain:"Liabilities = khoản nợ/bổn phận phải trả." },

  { id:24, set:'finance', q:"According to the text, what is a 'bad practice' that leads to a 'debt hole'?",
    options:{A:"Tracking all spending and saving",B:"Spending money on wants instead of saving",C:"Knowing the difference between needs and wants",D:"Paying yourself first"},
    key:"B", explain:"Chi cho 'wants' trước, không tiết kiệm → rơi vào hố nợ." },

  { id:25, set:'finance', q:"What is the 'most important' financial rule when buying an education?",
    options:{A:"Attend the most expensive college you can get into",B:"Use credit cards to pay for tuition",C:"If you fail to plan, you are planning to fail",D:"Borrow as much as possible; you can pay it later"},
    key:"C", explain:"Rule xương sống: không lập kế hoạch thì coi như lập kế hoạch để thất bại." },

  { id:26, set:'career', q:"What is the 'Career Planning Cycle' used for?",
    options:{A:"To find a job immediately after high school",B:"To determine which professors are the easiest graders",C:"To apply concrete steps to figure out where you might fit into the work world and to reconsider your approach and progress",D:"To guarantee a high salary upon graduation"},
    key:"C", explain:"Chu kỳ để làm từng bước rõ ràng + đánh giá lại hướng đi." },

  { id:27, set:'career', q:"Why is 'Learning About Yourself' considered a lifelong process in career planning?",
    options:{A:"Because career tests are unreliable",B:"Because knowing yourself as a professional by discovering interests, skills, and values is something everyone should do on an ongoing basis",C:"Because employers require you to retake personality tests every year",D:"Because it is required to maintain professional licensure"},
    key:"B", explain:"Hiểu mình (sở thích–kỹ năng–giá trị) là quá trình liên tục." },

  { id:28, set:'finance', q:"What is the primary benefit of being 'financially literate'?",
    options:{A:"It allows you to become a stockbroker",B:"It allows you to do more of what you want with your life by working hard, separating needs from wants, and avoiding debt pitfalls.",C:"It guarantees you will be rich immediately after college",D:"It eliminates the need to pay taxes"},
    key:"B", explain:"Biết tài chính → sống chủ động, tránh bẫy nợ, làm được điều mình muốn." },

  { id:29, set:'study', q:"How does 'Analytical Thinking' differ from 'Creative Thinking'?",
    options:{A:"Analytical thinking is only for math; creative thinking is only for art",B:"Analytical thinking involves systematically breaking a problem into component parts for analysis, while creative thinking involves generating original and unconventional ideas,",C:"Analytical thinking is optional; creative thinking is mandatory",D:"Analytical thinking creates clutter; creative thinking organizes it"},
    key:"B", explain:"Analytical = bóc tách có hệ thống; Creative = nảy ý mới." },

  { id:30, set:'study', q:"What is 'Information Literacy' for college students?",
    options:{A:"The ability to read very quickly",B:"Knowing how to use social media effectively",C:"The ability to weigh information, examine it for validity, and determine which information is appropriate to use",D:"Knowing how to build a website"},
    key:"C", explain:"Information literacy = cân đo thông tin, kiểm chứng, dùng đúng chỗ." },

  { id:31, set:'study', q:"Before class, why is it useful to record questions about the assigned reading?",
    options:{A:"To show the professor you did the work",B:"To establish a purpose for reading and to identify areas that need clarification during the lecture,",C:"To avoid having to take notes during class",D:"To memorize the textbook verbatim"},
    key:"B", explain:"Ghi câu hỏi trước: tạo mục tiêu đọc và 'gài' chỗ cần hỏi khi lên lớp." },

  { id:32, set:'study', q:"Why is it important to bring the book and reading notes to every class session?",
    options:{A:"To prove to the instructor that you bought the book.",B:"To avoid having to listen to the lecture.",C:"To engage with the material, avoid distractions, and ask critical or clarifying questions.",D:"To read ahead for next week's class."},
    key:"C", explain:"Mang tài liệu để bám bài, tránh trôi, và hỏi đúng trọng tâm." },

  { id:33, set:'study', q:"What is the intended outcome of the 'After Class' task of testing yourself?",
    options:{A:"To start the studying process and assess whether you understand the material.",B:"To memorize the textbook word-for-word.",C:"To replace taking notes in class.",D:"To prepare for an immediate pop quiz."},
    key:"A", explain:"Tự kiểm tra = bắt đầu học thật và đo mức hiểu." },

  { id:34, set:'time', q:"What is one common reason people waste time during the day?",
    options:{A:"They have too many entertainment apps on their phones.",B:"Being constrained by schedules and lacking the awareness to effectively repurpose short \"waiting times\" (15-20 minutes).",C:"They sleep more than 8 hours a night.",D:"They spend too much time planning."},
    key:"B", explain:"Không để ý thời gian chờ 15–20 phút nên lãng phí." },

  { id:35, set:'time', q:"How can 15 to 20 minutes of 'waiting time' be repurposed effectively?",
    options:{A:"By being organized enough to complete short tasks or review notes during that brief period.",B:"By taking a quick nap to catch up on sleep.",C:"By scrolling social media to relax the brain.",D:"By finishing an entire research paper."},
    key:"A", explain:"Chuẩn bị việc nhỏ/notes để rút ra làm trong thời gian chờ." },

  { id:36, set:'time', q:"In the 'Seven Ways to Stay Motivated', why is 'Rewarding Yourself' important?",
    options:{A:"It allows you to spend more money.",B:"Humans are motivated by rewards, so rewarding yourself for a job well done helps maintain motivation and avoid procrastination.",C:"It replaces the need for setting long-term goals.",D:"It guarantees you will get an A in the class."},
    key:"B", explain:"Thưởng đúng lúc giữ động lực và giảm trì hoãn." },

  { id:37, set:'time', q:"What is the risk of setting goals that are not truly your own?",
    options:{A:"You will complete them too quickly.",B:"You will be accused of plagiarism.",C:"You will have very little motivation to achieve them because you don't actually care.",D:"Your academic advisor will not approve them."},
    key:"C", explain:"Mục tiêu không thuộc về bạn → pin động lực yếu → dễ bỏ." },

  { id:38, set:'time', q:"Why is it easy to forget why you set a long-term goal?",
    options:{A:"Because short-term memory erases long-term goals.",B:"Because it is easy to become mired in the drudgery of current difficult tasks and forget the initial reason.",C:"Because long-term goals are usually not SMART goals.",D:"Because friends and family often distract you."},
    key:"B", explain:"Kẹt trong việc khó hiện tại nên quên mất lý do ban đầu." },

  { id:39, set:'career', q:"How do academic advisors help with career exploration?",
    options:{A:"They guarantee you a job right after graduation.",B:"They help you set educational/career goals, choose a major, and connect you with career services.",C:"They write your resume and cover letter for you.",D:"They provide loans to pay for your tuition."},
    key:"B", explain:"Cố vấn giúp đặt mục tiêu, chọn major, nối bạn với dịch vụ nghề nghiệp." },

  { id:40, set:'career', q:"What is the 'Occupational Outlook Handbook' used for?",
    options:{A:"To find the easiest classes in college.",B:"To research requirements for careers and identify fields with good job growth prospects.",C:"To apply for financial aid.",D:"To track your daily schedule."},
    key:"B", explain:"O.O.H = tra nghề: yêu cầu, triển vọng, tăng trưởng việc làm." },

  { id:41, set:'study', q:"How does annotating graphics differ from annotating text?",
    options:{A:"Graphics do not need any annotations.",B:"Deciphering graphics takes time, so you might want to create a copy before annotating to avoid making the information messy.",C:"Graphics should only be highlighted in yellow.",D:"Graphics should be memorized instead of annotated."},
    key:"B", explain:"Hình/biểu đồ dễ rối: nên copy trước khi ghi chú trực tiếp." },

  { id:42, set:'study', q:"Why should a student avoid taking 'short cuts' in the reading and note-taking cycle?",
    options:{A:"Because instructors will check your notebooks for a grade.",B:"Because each step is a building block in the continuous learning process, helping you become a stronger expert.",C:"Because taking shortcuts leads directly to academic suspension.",D:"Because reading is the only way to pass the course."},
    key:"B", explain:"Mỗi bước là viên gạch của học liên tục; cắt bước là yếu nền." },

  { id:43, set:'study', q:"What does 'true learning' mean beyond just earning high grades?",
    options:{A:"Getting a piece of paper that guarantees a job.",B:"Never making a mistake.",C:"It is a transformative process that expands your mind, challenges your identity, and helps you handle real-world situations.",D:"Memorizing every small detail in the textbook."},
    key:"C", explain:"Học thật = biến đổi tư duy, mở rộng năng lực xử lý đời thật." },

  { id:44, set:'study', q:"How does 'Critical Thinking' assist a student in identifying exam material?",
    options:{A:"By asking the professor to reveal the test questions",B:"By using data (like careful class notes) and reasoning to deduce what core content the professor might include on the exam.",C:"By blindly guessing the questions.",D:"By only studying the hardest questions."},
    key:"B", explain:"Dựa vào ghi chú và lập luận để đoán phần cốt lõi sẽ lên đề." },

  { id:45, set:'study', q:"What is the purpose of the 'Rethinking' exercises at the end of textbook chapters?",
    options:{A:"To provide extra homework assignments.",B:"To test your short-term memory.",C:"To revisit initial survey questions and reflect on how your understanding has changed after learning.",D:"To summarize the chapter instead of reading it."},
    key:"C", explain:"Rethinking = quay lại câu hỏi đầu chương và soi xem mình đã hiểu khác đi thế nào." },

  { id:46, set:'finance', q:"In the context of financial goals, what does it mean to 'align personal and financial goals'?",
    options:{A:"Recognizing that personal behaviors have financial consequences and planning your finances to support what you want to achieve in life.",B:"Putting all your money into a savings account.",C:"Borrowing as much money as possible to fund your personal lifestyle.",D:"Choosing a career based solely on salary."},
    key:"A", explain:"Hành vi cá nhân có hậu quả tài chính; lập kế hoạch để nuôi mục tiêu sống." },

  { id:47, set:'career', q:"Why is 'Information Literacy' essential for modern careers?",
    options:{A:"It allows you to read faster than everyone else.",B:"It is only required for IT workers.",C:"Workers are expected to be proficient, ethical users and producers of information to solve problems in a connected world.",D:"It helps you avoid using the internet."},
    key:"C", explain:"Đi làm thời nay: phải biết dùng–tạo–kiểm chứng thông tin một cách đạo đức." },

  { id:48, set:'time', q:"Which motivation strategy suggests that moods and emotions can be influenced by those around you?",
    options:{A:"Visualize the Results.",B:"Tap into Other People's Energy.",C:"Break the Goal Down.",D:"Increase Personal Responsibility."},
    key:"B", explain:"Năng lượng tập thể kéo mood của bạn lên/xuống." },

  { id:49, set:'study', q:"What is the 'Hidden Curriculum' as mentioned in the chapter outlines?",
    options:{A:"Courses not listed in the course catalog.",B:"Test answers hidden in the textbook.",C:"The unwritten, unspoken rules and expectations that students must follow to succeed in the college environment",D:"A secret club on campus."},
    key:"C", explain:"Hidden curriculum = luật bất thành văn để sống sót và phát triển ở môi trường đại học." },

  { id:50, set:'finance', q:"How can a balance sheet help a student in the future?",
    options:{A:"It helps balance their class schedule.",B:"It provides a comprehensive picture (\"snapshot\") of assets and liabilities, allowing them to track financial progress at a point in time.",C:"It automatically pays bills.",D:"It prevents students from getting into debt."},
    key:"B", explain:"Balance sheet = ảnh chụp tài chính tại một thời điểm: tài sản vs nợ." },

  { id:51, set:'finance', q:"What is a 'Liability' example provided for college students?",
    options:{A:"A savings account.",B:"A student loan or credit card debt.",C:"Income from a part-time job.",D:"A scholarship."},
    key:"B", explain:"Ví dụ nợ: student loan, credit card debt." },

  { id:52, set:'finance', q:"Why is 'Evaluating' a necessary step in the financial planning process?",
    options:{A:"To judge other people's spending habits.",B:"To assess your current financial situation (e.g., income, expenses) before making a plan.",C:"To calculate bank interest rates.",D:"To decide which bank to choose."},
    key:"B", explain:"Đánh giá hiện trạng (thu–chi) trước khi lập kế hoạch." },

  { id:53, set:'finance', q:"What is 'Monitoring' in the financial planning process?",
    options:{A:"Continually tracking your income, spending, and progress toward your financial goals.",B:"Watching the stock market daily.",C:"Letting the bank manage all your money.",D:"Setting a goal and never looking back."},
    key:"A", explain:"Monitoring = theo dõi liên tục thu–chi–tiến độ." },

  { id:54, set:'study', q:"How does 'Metacognition' improve problem-solving?",
    options:{A:"By increasing your reading speed.",B:"By practicing self-awareness, helping you recognize knowledge gaps and adjust problem-solving strategies promptly.",C:"By relying strictly on emotions to make decisions.",D:"By helping you rote-memorize faster."},
    key:"B", explain:"Tự nhận thức giúp thấy lỗ hổng và đổi chiến lược kịp thời." },

  { id:55, set:'career', q:"What is one way a nurse might use 'Creative Thinking' on the job?",
    options:{A:"By ignoring hospital safety protocols.",B:"By prescribing untested medication.",C:"By finding an original and effective way to convey patient care information to other medical team members.",D:"By singing to the patient instead of giving an injection."},
    key:"C", explain:"Sáng tạo đúng cách = truyền đạt thông tin chăm sóc bệnh nhân hiệu quả hơn." },

  { id:56, set:'career', q:"What is the career planning step of 'Self-Awareness'?",
    options:{A:"Applying for as many jobs as possible.",B:"The process of exploring your personal interests, skills, values, and personality traits to find a suitable career path.",C:"Negotiating a starting salary.",D:"Writing a cover letter."},
    key:"B", explain:"Self-awareness = khám phá interests–skills–values–personality để chọn hướng." },

  { id:57, set:'career', q:"Why is volunteering recommended during the 'Exploring Options' phase of career planning?",
    options:{A:"Because it pays a very high salary.",B:"Because it is required for graduation.",C:"Because it allows you to gain additional skills and real-world experience outside the classroom.",D:"Because it completely replaces the need for a college degree."},
    key:"C", explain:"Volunteer để lấy kỹ năng + trải nghiệm thật ngoài lớp." },

  { id:58, set:'career', q:"What should a student do with their resume throughout college?",
    options:{A:"Write it once in freshman year and never look at it again.",B:"Continuously update it as they acquire new Knowledge, Skills, Abilities (KSAs), and experiences.",C:"Copy a friend's resume.",D:"Wait until the day before graduation to start writing it."},
    key:"B", explain:"Resume là sinh vật sống: update liên tục theo KSAs & trải nghiệm." },

  { id:59, set:'career', q:"In the SMART acronym, what does 'T' usually stand for?",
    options:{A:"Technical.",B:"Tested.",C:"Time-bound.",D:"Theoretical."},
    key:"C", explain:"SMART: Time-bound (có deadline)." },

  { id:60, set:'finance', q:"What is the average cost of tuition for local community colleges mentioned in the text?",
    options:{A:"About $50,000 per year.",B:"About $100,000 per year.",C:"The text does not give an exact figure, but emphasizes that attending a community college for the first two years can save a lot of money.",D:"Community colleges are completely free."},
    key:"C", explain:"Điểm chính là tiết kiệm đáng kể, không nhất thiết nêu con số cố định." },

  { id:61, set:'finance', q:"How much can on-campus housing and meals add to the annual cost of college?",
    options:{A:"The exact cost is not stated, but the text recommends living at home (if possible) to save a significant amount of money.",B:"It is always cheaper than living at home.",C:"An extra $50,000 per year.",D:"Universities do not charge for room and board."},
    key:"A", explain:"Không chốt số; khuyên ở nhà (nếu được) để giảm chi phí lớn." },

  { id:62, set:'career', q:"Why is it important to research 'job market trends' for a chosen major?",
    options:{A:"To find the easiest jobs to do.",B:"To ensure you are preparing for a growing and promising field, rather than a declining one.",C:"To know what clothes to wear to work.",D:"To guarantee a six-figure starting salary."},
    key:"B", explain:"Xem xu hướng để né ngành đang xuống và chọn hướng có triển vọng." },

  { id:63, set:'career', q:"What is the benefit of practicing for interviews with career counselors?",
    options:{A:"They will tell you the exact questions employers will ask.",B:"They will hire you immediately.",C:"It helps you prepare mentally, gain experience, and learn how to communicate your skills effectively.",D:"It completely replaces submitting a resume."},
    key:"C", explain:"Luyện phỏng vấn = quen tâm lý + tăng trải nghiệm + nói kỹ năng rõ hơn." },

  { id:64, set:'finance', q:"According to the text, what is the link between financial health and personal life?",
    options:{A:"Financial health only determines what car you drive.",B:"Studies show that people with stronger finances are healthier, happier, have better marriages, and better cognitive functioning.",C:"There is no connection at all.",D:"Having strong finances guarantees you will never be stressed."},
    key:"B", explain:"Tài chính tốt thường đi cùng sức khỏe, hạnh phúc, quan hệ, và nhận thức tốt hơn." },

  { id:65, set:'time', q:"In the context of 'Knowing Yourself' for time management, how does fatigue affect study?",
    options:{A:"It makes you read faster.",B:"It helps your brain absorb information automatically.",C:"If you are tired, your attention and retention will be much poorer than if you were well-rested.",D:"It prevents test anxiety."},
    key:"C", explain:"Mệt = giảm tập trung và khả năng nhớ." },

  { id:66, set:'career', q:"What is the 'first year experience' described in the Chapter 1 outline?",
    options:{A:"A big party held at the end of the school year.",B:"A mandatory physical education course.",C:"A transitional experience that requires academic, cultural, emotional, financial, intellectual, and social adjustments.",D:"A period where grades do not count toward your transcript."},
    key:"C", explain:"Năm nhất là giai đoạn chuyển tiếp nhiều mặt: học thuật, cảm xúc, tài chính, xã hội…" },
];
