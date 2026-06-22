import type { Profile, SkillGroup, Achievement } from '@/lib/types'

export const profile: Profile = {
  name: 'Santhosh S',
  title: 'AI / Machine Learning Engineer Enthusiast',
  degree: 'BE — Electronics & Communication Engineering',
  graduationYear: '2026',
  location: 'Tamil Nadu, India',
  email: 'santhosh17905@gmail.com',
  shortIntro:
    'I build intelligent systems that turn raw data into decisions — from predictive models to end-to-end ML pipelines.',
  summary:
    'AI & Machine Learning enthusiast with hands-on experience delivering 30+ projects spanning supervised learning, deep learning, computer vision, NLP, and data analysis. I focus on building reproducible, well-evaluated models and translating ambiguous problems into measurable outcomes using Python and the modern ML stack.',
  objective:
    'To join a forward-thinking engineering team where I can apply machine learning and data-driven thinking to high-impact problems, grow alongside experienced engineers, and ship reliable AI systems into production.',
  resumeUrl: '/Santhosh_S_Resume.pdf',
  social: {
    github: 'https://github.com/Santhosh17905',
    linkedin: 'https://linkedin.com/in/santhosh-s-8a21802a0',
  },
}

export const skillGroups: SkillGroup[] = [
  { category: 'Programming', skills: ['Python', 'SQL'] },
  {
    category: 'Machine Learning',
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'XGBoost', 'Regression & Classification', 'Clustering'],
  },
  {
    category: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Feature Engineering', 'Statistical Analysis'],
  },
  { category: 'Tools', skills: ['Google Colab', 'VS Code', 'Streamlit', 'Power BI'] },
  { category: 'Version Control', skills: ['Git', 'GitHub', 'GitHub Actions'] },
]

export const achievements: Achievement[] = [
  // ── Assessments & Qualifications ──────────────────────────────────────────────
  {
    title: 'TCS iON NQT — Cognitive Qualified',
    subtitle: 'Tata Consultancy Services · Jan 2026',
    description: 'Cleared the TCS NQT Cognitive assessment with a total score of 987.20 / 1800 (54.84%).',
    detailDescription:
      'Successfully cleared the TCS iON National Qualifier Test (NQT) — Cognitive, one of the most competitive entry-level assessments for TCS hiring. The score card was issued on 21st January 2026 and is valid for two years. Registration No: 22071638014.',
    year: '2026',
    category: 'Assessment',
    image: '/certificates/completion/22071638014-1.jpg',
    link: '/certificates/completion/22071638014-1.jpg',
    meta: [
      { label: 'Exam', value: 'TCS iON NQT — Cognitive' },
      { label: 'Registration No', value: '22071638014' },
      { label: 'Numerical Ability', value: '311.46 / 600' },
      { label: 'Verbal Ability', value: '296.62 / 600' },
      { label: 'Reasoning Ability', value: '379.12 / 600' },
      { label: 'Total Score', value: '987.20 / 1800 (54.84%)' },
      { label: 'Date of Exam', value: 'January 2026' },
      { label: 'Valid Until', value: 'January 2028' },
    ],
  },
  {
    title: 'TCS iON Career Edge — Young Professional',
    subtitle: 'Tata Consultancy Services · Jul 2025',
    description: 'Completed TCS iON Career Edge Young Professional course covering communication, soft skills, interview skills, and business etiquette.',
    detailDescription:
      'Successfully completed TCS iON Career Edge — Young Professional programme from 01 Jul 2025 to 15 Jul 2025. The course covered Communication Skills, Presentation Skills, Soft Skills, Career Guidance Framework, Resume Writing, Group Discussion Skills, Interview Skills, Business Etiquette, Effective Email Writing, Telephone Etiquette, Accounting Fundamentals, IT Foundational Skills, and Overview of Artificial Intelligence. Certified by Mehul Mehta, Global Delivery Head – TCS iON. Certificate ID: 240640-28579658-1016.',
    year: '2025',
    category: 'Assessment',
    image: '/certificates/completion/Santhosh_S_4904081-1.jpg',
    link: '/certificates/completion/Santhosh_S_4904081-1.jpg',
    meta: [
      { label: 'Course', value: 'TCS iON Career Edge — Young Professional' },
      { label: 'Duration', value: '01 Jul 2025 – 15 Jul 2025' },
      { label: 'Certificate ID', value: '240640-28579658-1016' },
      { label: 'Certified By', value: 'Mehul Mehta, Global Delivery Head – TCS iON' },
      { label: 'Result', value: 'Completed ✓' },
      
    ],
  },
  {
    title: 'TCS iON Career Edge — IT for Non-IT',
    subtitle: 'Tata Consultancy Services · Jul 2025',
    description: 'Completed TCS iON Career Edge IT for Non-IT course covering IT industry overview, job tools, and trending technologies.',
    detailDescription:
      'Successfully completed TCS iON Career Edge — IT for Non-IT course from 04 Jul 2025 to 18 Jul 2025. The course covered IT Industry Overview, IT Job Tools, Basics of Industry Elements, Basics of Trending Technologies, and Career & Growth pathways. Certified by Mehul Mehta, Global Delivery Head – TCS iON. Certificate ID: 8739-28579658-1016.',
    year: '2025',
    category: 'Assessment',
    image: '/certificates/completion/Santhosh_S_21920-1.jpg',
    link: '/certificates/completion/Santhosh_S_21920-1.jpg',
    meta: [
      { label: 'Course', value: 'TCS iON Career Edge — IT for Non-IT' },
      { label: 'Duration', value: '04 Jul 2025 – 18 Jul 2025' },
      { label: 'Certificate ID', value: '8739-28579658-1016' },
      { label: 'Certified By', value: 'Mehul Mehta, Global Delivery Head – TCS iON' },
      { label: 'Result', value: 'Completed ✓' },
    ],
  },
  {
    title: 'AWS Solutions Architecture Job Simulation',
    subtitle: 'Forage · Sep 2025',
    description: 'Completed AWS Solutions Architecture Job Simulation on Forage — designed a simple, scalable hosting architecture.',
    detailDescription:
      'Completed the AWS Solutions Architecture Job Simulation on Forage on September 21st, 2025. The simulation involved practical tasks including designing a simple, scalable, hosting architecture — mirroring the kind of work done by AWS Solutions Architects. Enrolment Verification Code: mrfumNt6LrLgrHTud. Issued by Forage.',
    year: '2025',
    category: 'Professional',
    image: '/certificates/completion/Forage_completion_certificate-1.jpg',
    link: '/certificates/completion/Forage_completion_certificate-1.jpg',
    meta: [
      { label: 'Simulation', value: 'AWS Solutions Architecture' },
      { label: 'Platform', value: 'Forage' },
      { label: 'Date', value: 'September 21, 2025' },
      { label: 'Task', value: 'Designing a Simple, Scalable Hosting Architecture' },
      { label: 'Verification Code', value: 'mrfumNt6LrLgrHTud' },
    ],
  },
  // ── Academic ─────────────────────────────────────────────────────────────────
  {
    title: 'Department Rank Holder 2026',
    subtitle: 'ECE Department · St. Joseph College of Engineering',
    description: 'Top academic performer in the Electronics & Communication Engineering department.',
    detailDescription:
      'Recognised as a top academic performer in the Electronics & Communication Engineering department at St. Joseph College of Engineering. Maintained consistently high CGPA across multiple semesters, demonstrating strong command over both core ECE subjects and elective courses in AI and data science.',
    year: '2026',
    category: 'Academic',
    image: '/santhosh2.jpeg',
    link: 'https://www.instagram.com/p/DV-pdbKE735/?hl=en&img_index=1',
    meta: [
      { label: 'Department', value: 'Electronics & Communication Engineering' },
      { label: 'Institution', value: 'St. Joseph College of Engineering' },
      { label: 'Recognition', value: 'Department Rank Holder' },
    ],
  },
  {
    title: 'Department Rank Holder 2025',
    subtitle: 'ECE Department · St. Joseph College of Engineering',
    description: 'Top academic performer in the Electronics & Communication Engineering department.',
    detailDescription:
      'Recognised as a top academic performer in the Electronics & Communication Engineering department at St. Joseph College of Engineering. Maintained consistently high CGPA across multiple semesters, demonstrating strong command over both core ECE subjects and elective courses in AI and data science.',
    year: '2025',
    category: 'Academic',
    image: 'certificates/participation/image.png',
    link: 'https://www.instagram.com/p/DJRI_BYzr7a/?hl=en&img_index=6',
    meta: [
      { label: 'Department', value: 'Electronics & Communication Engineering' },
      { label: 'Institution', value: 'St. Joseph College of Engineering' },
      { label: 'Recognition', value: 'Department Rank Holder' },
    ],
  },
  {
  title: 'LG Scholarship Holder',
  subtitle: 'LG Electronics · 2024',
  description: 'Awarded the LG Scholarship for academic excellence and outstanding performance.',
  detailDescription:
    'Awarded the LG Scholarship in recognition of academic excellence, consistent performance, and merit. The scholarship is granted to top-performing students selected through a competitive evaluation process, reflecting strong academic standing and potential for professional growth.',
  year: '2024',
  category: 'Academic',
  image: undefined,
  link: '/LG Scholarship offer letter.pdf',   // ← scholarship certificate image இருந்தா path போடு
  meta: [
    { label: 'Award',        value: 'LG Scholarship' },
    { label: 'Awarded By',   value: 'LG Electronics' },
    { label: 'Basis',        value: 'Academic Excellence & Merit' },
    { label: 'Year',         value: '2024' },
  ],
},
  // ── Competition / Symposium ───────────────────────────────────────────────────
  {
    title: 'Hackathon 2K25 — Project Expo Participant',
    subtitle: 'Dept. of ECE, SJCE · May 2025',
    description: 'Participated in the Project Expo at Hackathon 2K25 organised by Department of ECE, St. Joseph College of Engineering.',
    detailDescription:
      'Participated in the Project Expo at Hackathon 2K25 organised by the Department of Electronics & Communication Engineering, St. Joseph College of Engineering on 10th May 2025. Presented a technical project in front of faculty, HOD, Principal, and competing participants from across departments.',
    year: '2025',
    category: 'Competition',
    image: '/certificates/participation/awards.jpg',
    link: '/certificates/participation/awards.jpg',
    meta: [
      { label: 'Event', value: 'Hackathon 2K25 — Project Expo' },
      { label: 'Organiser', value: 'Dept. of ECE, St. Joseph College of Engineering' },
      { label: 'Date', value: '10th May 2025' },
      { label: 'HOD', value: 'Mr. R. Dineshkumar' },
    ],
  },
  {
  title: 'Academic Excellence Recognition',
  subtitle: 'St. Joseph College of Engineering · 2025',
  description:
    'Recognized for outstanding academic performance and excellence in Anna University Examinations during the academic year 2024–2025.',
  detailDescription:
    'Awarded the Certificate of Appreciation by St. Joseph College of Engineering in recognition of exceptional academic achievement and consistent scholastic excellence. This recognition highlights strong academic performance, subject proficiency, and dedication to maintaining high standards throughout the Electronics and Communication Engineering program.',
  year: '2025',
  category: 'Academic Achievement',
  image: '/santhosh3.jpeg',
  link: '/santhosh3.jpeg',
  meta: [
    { label: 'Recognition', value: 'Academic Excellence' },
    { label: 'Institution', value: 'St. Joseph College of Engineering' },
    { label: 'Award Type', value: 'Certificate of Appreciation' },
    { label: 'Academic Year', value: '2024–2025' },
    { label: 'Department', value: 'Electronics and Communication Engineering' }
  ],
},
]
