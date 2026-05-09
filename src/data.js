export const personalInfo = {
  name: 'Fathima Nafra',
  title: 'Data Science Student',
  titles: ['Data Scientist', 'Data Analyst', 'ML Enthusiast', 'Tech Explorer'],
  bio: 'Passionate Data Science student, tech enthusiast, and lifelong learner. I love exploring how data can reveal patterns, answer meaningful questions, and drive impactful decisions through thoughtful data storytelling.',
  email: 'fathumanafra5@gmail.com',
  phone: '+94 77 915 0212',
  location: 'No 60 3 G, Wimalasurendra Road,Ossanagoda,Galle',
  profileImage: new URL('../assets/images/profile1.jpg', import.meta.url).href,
  aboutImage: new URL('../assets/images/profile2.jpg', import.meta.url).href
};

export const socialLinks = {
  github: 'https://github.com/FathimaNafra',
  linkedin: 'https://www.linkedin.com/in/fathimanafra',
  email: 'mailto:fathumanafra5@gmail.com'
};

export const about = {
  subtitle: 'Data Science Student | Tech Enthusiast | Lifelong Learner',
  description: [
    'My journey in tech began with curiosity, and it continues to grow as I dive deeper into data analytics, machine learning, and real-world problem solving. I enjoy turning raw data into clear, insightful stories through analysis, visualization, and modeling.',
    'Whether it\'s exploring datasets, building predictive models, or experimenting with new tools, I\'m always excited to learn and create. I aim to build projects that not only demonstrate technical skill but also highlight the power of thoughtful data storytelling.'
  ],
  stats: [
    { value: '5+', label: 'Projects Completed' },
    { value: '3+', label: 'Years Learning' }
  ]
};

export const skills = {
  Programming_Languages: [
    { name: 'Python', level: 90, icon: 'bxl-python' },
    { name: 'R Programming', level: 70, icon: 'bx-bar-chart' },
    { name: 'JavaScript', level: 60, icon: 'bx-bar-chart' }
  ],
  Web_Development_Frameworks: [
    { name: 'React', level: 60, icon: 'bx-brain' },
    { name: 'Flask', level: 40, icon: 'bx-cog' },
    { name: 'HTML', level: 80, icon: 'bx-code-alt' },
    { name: 'CSS', level: 80, icon: 'bx-code-alt' }
  ],
  ML_DataAnalysis: [
    { name: 'scikit-learn', level: 70, icon: 'bx-book' },
    { name: 'pandas', level: 70, icon: 'bx-bar-chart' },
    { name: 'NumPy', level: 70, icon: 'bxl-git' },
    { name: 'Matplotlib', level: 70, icon: 'bx-spreadsheet' },
    { name: 'Streamlit', level: 65, icon: 'bx-spreadsheet' }
  ],
  Databases: [
    { name: 'MySQL', level: 80, icon: 'bx-line-chart' },
    { name: 'Azure SQL', level: 60, icon: 'bx-math' },
    { name: 'PostgreSQL', level: 70, icon: 'bx-data' }
  ],
  Cloud_And_Development_Tools: [
    { name: 'Git', level: 80, icon: 'bx-line-chart' },
    { name: 'GitHub', level: 80, icon: 'bx-line-chart' },
    { name: 'Azure', level: 60, icon: 'bx-line-chart' },
    { name: 'AWS', level: 60, icon: 'bx-line-chart' },
    { name: 'Jupyter Notebook', level: 75, icon: 'bx-line-chart' },
    { name: 'Power BI', level: 80, icon: 'bx-line-chart' }
  ]
};

export const projects = [
  {
    id: 1,
    title: 'HallEase: Event & Hall Management System',
    description: 'A university-focused event and hall management system designed to streamline scheduling and booking of halls, classrooms, and event spaces. Features role-based authentication, real-time availability, automated workflows, AI/ML predictions, and comprehensive analytics.',
    image: new URL('../assets/images/a1.jpg', import.meta.url).href,
    technologies: ['Next.js', 'Tailwind CSS', 'ShadCN UI', 'Supabase', 'PostgreSQL'],
    category: 'web',
    githubLink: 'https://github.com/zaplink/HallEase',
    liveLink: '',
    featured: true
  },
  {
    id: 3,
    title: 'E-commerce Customer Segmentation',
    description: 'Data analysis and customer segmentation project for e-commerce sales. Identified distinct customer groups using clustering algorithms to enhance targeted marketing strategies and business insights with interactive visualizations.',
    image: new URL('../assets/images/E-commerce.png', import.meta.url).href,
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    category: 'ml',
    githubLink: 'https://github.com/FathimaNafra/ecommerce-customer-segmentation',
    liveLink: '',
    featured: true
  },
  {
    id: 4,
    title: 'COVID-19 Analysis Dashboard',
    description: 'Interactive data visualization dashboard analyzing global COVID-19 trends. Displays trend analysis, country-specific data, top 10 affected countries, and KPI cards for tracking pandemic patterns over time.',
    image: new URL('../assets/images/covid19.png', import.meta.url).href,
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit', 'Kaggle Dataset'],
    category: 'ml',
    githubLink: 'https://github.com/FathimaNafra/Covid19-Dashboard',
    liveLink: '',
    featured: false
  },
  {
    id: 5,
    title: 'Sign-Up and Sign-In Application',
    description: 'A Java Swing-based GUI application for user registration and login with MySQL database integration. Demonstrates account management functionality with secure authentication and a user-friendly interface.',
    image: new URL('../assets/images/project2.jpg', import.meta.url).href,
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
    category: 'web',
    githubLink: 'https://github.com/FathimaNafra/signup-signin-app',
    liveLink: '',
    featured: false
  },
  {
    id: 6,
    title: 'Crypto-Forex Signal Generator',
    description: 'AI-powered trading signal analysis platform for crypto and forex markets combining rule-based technical analysis with machine learning predictions. Features live market data fetching from Binance and Twelve Data APIs, technical indicators (RSI, EMA, MACD), Flask REST API backend, and React + Vite frontend with TradingView charts for multi-symbol analysis.',
    image: new URL('../assets/images/crypto.jpeg', import.meta.url).href,
    technologies: ['Python', 'Flask', 'React', 'Vite', 'Scikit-learn', 'Pandas', 'TradingView', 'Binance API'],
    category: 'ml',
    githubLink: 'https://github.com/chamodyaaa/Crypto-Forex-Signal-Generator',
    liveLink: '',
    featured: true
  },
  {
    id: 7,
    title: 'Loan Default Risk Approval Prediction System',
    description: 'Machine Learning system to predict loan approval status and generate loan risk scores using LightGBM classification and regression models. Features data preprocessing, feature engineering, SHAP-based model explainability, Flask web application for real-time predictions, and comprehensive model evaluation metrics.',
    image: new URL('../assets/images/loan.png', import.meta.url).href,
    technologies: ['Python', 'LightGBM', 'Scikit-learn', 'SHAP', 'Flask', 'Pandas', 'NumPy', 'HTML', 'CSS'],
    category: 'ml',
    githubLink: 'https://github.com/FathimaNafra/loan-default-risk-prediction',
    liveLink: '',
    featured: true
  },
  {
    id: 8,
    title: 'Netflix Movies and TV Shows Data Analysis',
    description: 'Comprehensive SQL-based analysis of Netflix movies and TV shows dataset with 15+ business problems and solutions. Features content distribution analysis, rating patterns, genre categorization, top performers, and content production insights.',
    image: new URL('../assets/images/netflix.png', import.meta.url).href,
    technologies: ['SQL', 'Power BI', 'Data Analysis', 'Kaggle Dataset'],
    category: 'ml',
    githubLink: 'https://github.com/FathimaNafra/Netflix_Movie_Analysis',
    liveLink: '',
    featured: false
  },
  {
    id: 9,
    title: 'Azure Data Engineering Pipeline',
    description: 'End-to-end data engineering pipeline demonstrating Microsoft Azure services for enterprise data processing. Features data ingestion from Azure Data Lake Storage, transformation using Azure Databricks with PySpark, processed data storage in Azure SQL Database, and interactive Power BI dashboards for visualization and analytics.',
    image: new URL('../assets/images/azure.png', import.meta.url).href,
    technologies: ['Azure Data Lake', 'Azure Databricks', 'PySpark', 'Azure Data Factory', 'Azure SQL Database', 'Power BI'],
    category: 'ml',
    githubLink: 'https://github.com/FathimaNafra/azure-data-engineering-pipeline',
    liveLink: '',
    featured: true
  }
];

export const research = [
  {
    id: 1,
    title: 'HallEase: Event & Hall Management System',
    description: 'A university-focused event and hall management system with AI/ML features including peak time prediction, hall recommendations, and chatbot assistant. Developed as a group project with advanced features for scheduling optimization and real-time availability management.',
    status: 'completed',
    category: 'ml',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Machine Learning'],
    startDate: '2024-06',
    endDate: '2024-12',
    collaborators: ['Group Project Team'],
    publications: [],
    icon: 'bx-calendar'
  },
  {
    id: 2,
    title: 'E-commerce Customer Segmentation Analysis',
    description: 'Data analysis and customer segmentation project focused on identifying distinct customer groups using clustering algorithms. Created interactive dashboard for visualizing segmentation results and understanding customer behavior patterns for targeted marketing strategies.',
    status: 'completed',
    category: 'ml',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Plotly'],
    startDate: '2024-08',
    endDate: '2024-11',
    collaborators: ['Collaboration Project Team'],
    publications: [],
    icon: 'bx-bar-chart'
  },
  {
    id: 3,
    title: 'COVID-19 Global Analysis and Trend Visualization',
    description: 'Self-initiated data analysis project tracking global COVID-19 patterns with interactive visualizations. Dashboard displays trend analysis, country filters, top 10 affected nations, and KPI cards for tracking pandemic patterns and trends over time.',
    status: 'completed',
    category: 'analytics',
    technologies: ['Python', 'Pandas', 'Streamlit', 'Matplotlib', 'Kaggle Dataset'],
    startDate: '2024-05',
    endDate: '2024-08',
    collaborators: ['Individual Project'],
    publications: [],
    icon: 'bx-line-chart'
  }
];

export const experience = [
  {
    id: 1,
    title: 'Data Science Student',
    company: 'University',
    location: 'Sri Lanka',
    startDate: '2024',
    endDate: null,
    description: 'Specializing in Data Science with focus on analytics, machine learning, and statistical modeling. Building real-world projects and exploring data storytelling.',
    type: 'experience'
  },
  {
    id: 2,
    title: 'Data Analytics Projects',
    company: 'Personal Learning',
    location: 'Remote',
    startDate: '2023',
    endDate: null,
    description: 'Exploring datasets, building predictive models, creating visualizations, and experimenting with various data science tools and techniques.',
    type: 'experience'
  }
];

export const education = [
  {
    id: 1,
    degree: 'BSc (Hons) in Computer Science ( Specialization:Data Science)',
    institution: 'Faculty of Computing & Technology , University of Kelaniya',
    location: 'Sri Lanka',
    startDate: '2023',
    endDate: null,
    description: 'Specializing in Data Science with emphasis on data analytics, machine learning, statistical analysis, and data visualization. Building projects that demonstrate thoughtful data storytelling.',
    type: 'education'
  },
  {
    id: 2,
    degree: 'English and ICT Diploma',
    institution: 'ICBT Campus',
    location: 'Sri Lanka',
    startDate: '2022',
    endDate: '2023',
    description: 'Completed diploma in English and Information and Communication Technology.',
    type: 'education'
  },
  {
    id: 3,
    degree: 'G.C.E Advanced Level',
    institution: 'Rippon Girls College',
    location: 'Galle',
    startDate: '2021',
    endDate: '2021',
    description: 'Physical Science Stream with excellent results.',
    type: 'education'
  }
];

export const certifications = [
  {
    id: 1,
    title: 'Machine Learning with Python Free Course',
    issuer: 'ScholarHat',
    issueDate: 'Apr 2026',
    description: 'Completed comprehensive machine learning course covering algorithms, model evaluation, and practical implementations with Python.',
    icon: 'bx-book'
  },
  {
    id: 2,
    title: 'Azure Fundamentals Course for Beginners',
    issuer: 'ScholarHat',
    issueDate: 'Apr 2026',
    description: 'Foundational course covering Azure cloud services, deployment options, and Azure management tools.',
    icon: 'bx-cloud'
  },
  {
    id: 3,
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Udacity',
    issueDate: 'Mar 2026',
    description: 'Advanced challenge course on AWS AI/ML services, including SageMaker and AI implementation strategies.',
    icon: 'bx-brain'
  },
  {
    id: 4,
    title: 'Python 101 for Data Science',
    issuer: 'Cognitive Class',
    issueDate: 'Aug 2025',
    description: 'Comprehensive Python fundamentals course tailored for data science applications and analysis.',
    icon: 'bxl-python'
  },
  {
    id: 5,
    title: 'Power BI for Beginners',
    issuer: 'Simplilearn',
    issueDate: 'Mar 2026',
    description: 'Introduction to Power BI including data visualization, dashboards, and business intelligence reporting.',
    icon: 'bx-bar-chart'
  },
  {
    id: 6,
    title: 'SQL Server Foundations Course',
    issuer: 'ScholarHat',
    issueDate: 'Mar 2026',
    description: 'Foundational SQL Server course covering database design, queries, and server management.',
    icon: 'bx-data'
  }
];
