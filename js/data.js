/**
 * Portfolio Data Configuration
 * 
 * This file contains all the editable content for your portfolio.
 * Update the values here to customize your portfolio.
 */

// ==================== PERSONAL INFORMATION ====================
export const personalInfo = {
    name: "Fathima Nafra",
    title: "Data Science Student",
    titles: ['Data Scientist', 'Data Analyst', 'ML Enthusiast', 'Tech Explorer'], // For typed animation
    bio: "Passionate Data Science student, tech enthusiast, and lifelong learner. I love exploring how data can reveal patterns, answer meaningful questions, and drive impactful decisions through thoughtful data storytelling.",
    email: "Nafrafathima8@gmail.com",
    phone: "+94 77 176 7986",
    location: "No 3A, Heenpandala Road, Galle, Sri Lanka",
    profileImage: "assets/images/profile.jpg",
    aboutImage: "assets/images/about.jpg"
};

// ==================== SOCIAL LINKS ====================
export const socialLinks = {
    github: "https://github.com/FathimaNafra",
    linkedin: "https://www.linkedin.com/in/fathimanafra",
    email: "mailto:Nafrafathima8@gmail.com"
};

// ==================== ABOUT SECTION ====================
export const about = {
    subtitle: "Data Science Student | Tech Enthusiast | Lifelong Learner",
    description: [
        "My journey in tech began with curiosity, and it continues to grow as I dive deeper into data analytics, machine learning, and real-world problem solving. I enjoy turning raw data into clear, insightful stories through analysis, visualization, and modeling.",
        "Whether it's exploring datasets, building predictive models, or experimenting with new tools, I'm always excited to learn and create. I aim to build projects that not only demonstrate technical skill but also highlight the power of thoughtful data storytelling."
    ],
    stats: [
        { value: "10+", label: "Projects Completed" },
        { value: "2+", label: "Years Learning" }
    ]
};

// ==================== SKILLS ====================
export const skills = {
    frontend: [
        { name: 'Python', level: 90, icon: 'bxl-python' },
        { name: 'Pandas', level: 85, icon: 'bx-data' },
        { name: 'NumPy', level: 85, icon: 'bx-math' },
        { name: 'SQL', level: 80, icon: 'bx-data' },
        { name: 'R Programming', level: 70, icon: 'bx-bar-chart' }
    ],
    backend: [
        { name: 'Machine Learning', level: 85, icon: 'bx-brain' },
        { name: 'Scikit-learn', level: 80, icon: 'bx-cog' },
        { name: 'TensorFlow', level: 75, icon: 'bx-chip' },
        { name: 'Keras', level: 75, icon: 'bx-chip' },
        { name: 'Spring Boot', level: 50, icon: 'bx-code-alt' },
        { name: 'Deep Learning', level: 70, icon: 'bx-network-chart' }
    ],
    tools: [
        { name: 'Jupyter Notebook', level: 90, icon: 'bx-book' },
        { name: 'Tableau', level: 75, icon: 'bx-bar-chart-alt-2' },
        { name: 'Power BI', level: 70, icon: 'bx-bar-chart' },
        { name: 'Git/GitHub', level: 85, icon: 'bxl-git' },
        { name: 'Excel', level: 85, icon: 'bx-spreadsheet' }
    ],
    other: [
        { name: 'Data Visualization', level: 85, icon: 'bx-line-chart' },
        { name: 'Statistical Analysis', level: 80, icon: 'bx-math' },
        { name: 'Data Cleaning', level: 90, icon: 'bx-data' },
        { name: 'Feature Engineering', level: 80, icon: 'bx-cog' },
        { name: 'Predictive Modeling', level: 75, icon: 'bx-target-lock' }
    ]
};

// ==================== PROJECTS ====================
export const projects = [
    {
        id: 1,
        title: 'HallEase: Event & Hall Management System',
        description: 'A university-focused event and hall management system designed to streamline scheduling and booking of halls, classrooms, and event spaces. Features role-based authentication, real-time availability, automated workflows, AI/ML predictions, and comprehensive analytics.',
        image: 'assets/images/project1.jpg',
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
        image: 'assets/images/project3.jpg',
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
        image: 'assets/images/project4.jpg',
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
        image: 'assets/images/project5.jpg',
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
        image: 'assets/images/crypto.jpeg',
        technologies: ['Python', 'Flask', 'React', 'Vite', 'Scikit-learn', 'Pandas', 'TradingView', 'Binance API'],
        category: 'ml',
        githubLink: 'https://github.com/chamodyaaa/Crypto-Forex-Signal-Generator',
        liveLink: '',
        featured: true
        title: 'Loan Default Risk Approval Prediction System',
        description: 'Machine Learning system to predict loan approval status and generate loan risk scores using LightGBM classification and regression models. Features data preprocessing, feature engineering, SHAP-based model explainability, Flask web application for real-time predictions, and comprehensive model evaluation metrics.',
        image: 'assets/images/loan.png',
        technologies: ['Python', 'LightGBM', 'Scikit-learn', 'SHAP', 'Flask', 'Pandas', 'NumPy', 'HTML', 'CSS'],
        category: 'ml',
        githubLink: 'https://github.com/FathimaNafra/loan-default-risk-prediction',
        liveLink: '',
        featured: true
        description: 'Comprehensive SQL-based analysis of Netflix movies and TV shows dataset with 15+ business problems and solutions. Features content distribution analysis, rating patterns, genre categorization, top performers, and content production insights. Includes interactive Power BI dashboard with KPI cards, charts, filters, and visualizations for data exploration and insights.',
        image: 'assets/images/netflix.png',
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
        image: 'assets/images/azure.png',
        technologies: ['Azure Data Lake', 'Azure Databricks', 'PySpark', 'Azure Data Factory', 'Azure SQL Database', 'Power BI'],
        category: 'ml',
        githubLink: 'https://github.com/FathimaNafra/azure-data-engineering-pipeline',
        liveLink: '',
        featured: true
    }
];

// ==================== RESEARCH ====================
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

// ==================== EXPERIENCE ====================
export const experience = [
    {
        id: 1,
        title: 'Data Science Student',
        company: 'University',
        location: 'Sri Lanka',
        startDate: '2024',
        endDate: null, // null for current position
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

// ==================== EDUCATION ====================
export const education = [
    {
        id: 1,
        degree: 'Specialization in Data Science',
        institution: 'University',
        location: 'Sri Lanka',
        startDate: '2024',
        endDate: null, // null if currently studying
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

// ==================== CV/RESUME ====================
export const cv = {
    filename: 'Fathima_Nafra.pdf',
    path: 'assets/cv/Fathima_Nafra.pdf'
};

// ==================== INSTRUCTIONS ====================
/*
HOW TO USE THIS FILE:

1. Update all the information above with your actual data
2. For images, make sure they exist in the assets/images folder
3. For skills, adjust the level (0-100) based on your proficiency
4. For projects, add as many as you want following the same structure
5. Icons are from Boxicons (https://boxicons.com/) - use their class names
6. Dates should be in 'YYYY-MM' or 'YYYY' format
7. Set endDate to null for ongoing/current items

CATEGORY OPTIONS:
- Projects: 'web', 'ml', 'mobile', 'desktop'
- Research: 'ml', 'nlp', 'cv', 'blockchain', 'web', 'other'

STATUS OPTIONS:
- Research: 'ongoing', 'completed', 'published'

ICON SUGGESTIONS (from Boxicons):
- Web: 'bx-code-alt', 'bx-globe', 'bx-laptop'
- ML/AI: 'bx-brain', 'bx-chip', 'bx-bot'
- Mobile: 'bx-mobile', 'bx-smartphone'
- Research: 'bx-flask', 'bx-test-tube', 'bx-book-open'
- Health: 'bx-health', 'bx-plus-medical'
- Data: 'bx-data', 'bx-chart', 'bx-bar-chart'
- Security: 'bx-lock', 'bx-shield'
- Social: 'bx-message-dots', 'bx-chat'
- Business: 'bx-store', 'bx-briefcase', 'bx-package'

For more icons, visit: https://boxicons.com/
*/
