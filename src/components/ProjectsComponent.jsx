import { useState } from 'react';

// Import images
const a1Image = new URL('../assets/images/a1.jpg', import.meta.url).href;
const ecommerceImage = new URL('../assets/images/E-commerce.png', import.meta.url).href;
const covidImage = new URL('../assets/images/covid19.png', import.meta.url).href;
const cryptoImage = new URL('../assets/images/crypto.jpeg', import.meta.url).href;
const loanImage = new URL('../assets/images/loan.png', import.meta.url).href;
const netflixImage = new URL('../assets/images/netflix.png', import.meta.url).href;
const azureImage = new URL('../assets/images/azure.png', import.meta.url).href;

const projectsData = [
    {
        id: 1,
        title: 'HallEase: Event & Hall Management System',
        description: 'A university-focused event and hall management system designed to streamline scheduling and booking of halls, classrooms, and event spaces. Features role-based authentication (Students, Lecturers, Mentors, External Users, Admins), admin dashboard for approvals and calendar management, real-time availability with color-coded calendar, notification system with email & SMS alerts, reports & analytics for hall usage trends, and AI/ML features including peak time prediction, hall recommendations, and chatbot assistant.',
        image: a1Image,
        technologies: ['Next.js', 'Tailwind CSS', 'ShadCN UI', 'Supabase', 'PostgreSQL', 'Machine Learning'],
        category: 'web',
        githubLink: 'https://github.com/zaplink/HallEase',
        liveLink: '',
        featured: true
    },
    {
        id: 3,
        title: 'E-commerce Customer Segmentation',
        description: 'A collaborative data analysis and customer segmentation project designed for e-commerce sales data. Focuses on identifying distinct customer groups using clustering algorithms to enhance targeted marketing strategies and business insights. Includes customer data preprocessing, exploratory data analysis, segmentation using machine learning algorithms, and an interactive dashboard for visualizing customer groups and behavior patterns.',
        image: ecommerceImage,
        technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Plotly'],
        category: 'ml',
        githubLink: 'https://github.com/FathimaNafra/ecommerce-customer-segmentation',
        liveLink: '',
        featured: true
    },
    {
        id: 4,
        title: 'COVID-19 Analysis Dashboard',
        description: 'A self-initiated individual project analyzing global COVID-19 data and presenting insights through interactive visualizations. Features trend analysis of COVID-19 cases and deaths, country and continent filters for data exploration, visualization of top 10 countries affected, and interactive dashboard with KPI cards. Built with Streamlit for easy deployment and interactive user experience.',
        image: covidImage,
        technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit', 'Kaggle Dataset'],
        category: 'ml',
        githubLink: 'https://github.com/FathimaNafra/Covid19-Dashboard',
        liveLink: '',
        featured: true
    },
    {
        id: 6,
        title: 'Crypto-Forex Signal Generator',
        description: 'AI-powered trading signal analysis platform combining rule-based technical analysis with ML predictions for crypto and forex markets. Features live market data fetching from Binance and Twelve Data APIs, technical indicators (RSI, EMA, MACD), Flask REST API backend, React + Vite frontend with TradingView charts, and multi-symbol analysis capabilities.',
        image: cryptoImage,
        technologies: ['Python', 'Flask', 'React', 'Vite', 'Scikit-learn', 'Pandas', 'TradingView', 'Binance API'],
        category: 'ml',
        githubLink: 'https://github.com/chamodyaaa/Crypto-Forex-Signal-Generator',
        liveLink: '',
        featured: true
    },
    {
        id: 7,
        title: 'Loan Default Risk Approval Prediction System',
        description: 'Machine Learning system predicting loan approval status and generating risk scores using LightGBM classification and regression models. Features data preprocessing, feature engineering, SHAP-based explainability, Flask web application for real-time predictions, and comprehensive model evaluation with performance metrics.',
        image: loanImage,
        technologies: ['Python', 'LightGBM', 'Scikit-learn', 'SHAP', 'Flask', 'Pandas', 'NumPy', 'HTML', 'CSS'],
        category: 'ml',
        githubLink: 'https://github.com/FathimaNafra/loan-default-risk-prediction',
        liveLink: '',
        featured: true
    },
    {
        id: 8,
        title: 'Netflix Movies and TV Shows Data Analysis',
        description: 'Comprehensive SQL-based analysis of Netflix content with 15+ business problems including distribution analysis, rating patterns, genre categorization, and production insights. Features interactive Power BI dashboard with KPI cards, visualizations, and dynamic filters for exploring global Netflix library.',
        image: netflixImage,
        technologies: ['SQL', 'Power BI', 'Data Analysis', 'Kaggle Dataset'],
        category: 'ml',
        githubLink: 'https://github.com/FathimaNafra/Netflix_Movie_Analysis',
        liveLink: '',
        featured: false
    },
    {
        id: 9,
        title: 'Azure Data Engineering Pipeline',
        description: 'End-to-end data engineering pipeline using Microsoft Azure services for enterprise data processing. Features data ingestion from Azure Data Lake, transformation with Azure Databricks and PySpark, data storage in Azure SQL Database, and interactive Power BI dashboards for analytics and visualization.',
        image: azureImage,
        technologies: ['Azure Data Lake', 'Azure Databricks', 'PySpark', 'Azure Data Factory', 'Azure SQL Database', 'Power BI'],
        category: 'ml',
        githubLink: 'https://github.com/FathimaNafra/azure-data-engineering-pipeline',
        liveLink: '',
        featured: true
    }
];

const ProjectsComponent = () => {
    const [projects] = useState(projectsData);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { key: 'all', label: 'All Projects', icon: 'bx-grid-alt' },
        { key: 'featured', label: 'Featured', icon: 'bx-star' },
        { key: 'web', label: 'Web Dev', icon: 'bx-code-alt' },
        { key: 'ml', label: 'ML/AI', icon: 'bx-brain' }
    ];

    const filteredProjects = projects.filter(project => {
        const matchesCategory = 
            selectedCategory === 'all' ? true :
            selectedCategory === 'featured' ? project.featured :
            project.category === selectedCategory;
        
        const matchesSearch = 
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

  return (
    <div className="projects-container">
      <div className="projects-controls">
        <div className="search-box">
          <i className="bx bx-search"></i>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${selectedCategory === category.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.key)}
            >
              <i className={`bx ${category.icon}`}></i>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card">
              {project.featured && (
                <div className="featured-badge">
                  <i className="bx bx-star"></i> Featured
                </div>
              )}

              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" title="View Code">
                      <i className="bx bxl-github"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <i className="bx bx-search-alt"></i>
            <p>No projects found matching your criteria</p>
          </div>
        )}
      </div>

      <style>{`
        .projects-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
        }
        .projects-controls {
          margin-bottom: 50px;
        }
        .search-box {
          position: relative;
          max-width: 500px;
          margin: 0 auto 30px;
        }
        .search-box i {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 20px;
          color: var(--text-muted);
        }
        .search-box input {
          width: 100%;
          padding: 15px 20px 15px 50px;
          background: var(--gradient-card);
          border: 2px solid rgba(0, 217, 255, 0.1);
          border-radius: 50px;
          color: var(--text-primary);
          font-size: 16px;
          font-family: 'Poppins', sans-serif;
          transition: var(--transition-fast);
        }
        .search-box input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: var(--shadow-md);
        }
        .search-box input::placeholder {
          color: var(--text-muted);
        }
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }
        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 25px;
          background: var(--gradient-card);
          border: 2px solid rgba(0, 217, 255, 0.1);
          border-radius: 50px;
          color: var(--text-secondary);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: 'Poppins', sans-serif;
        }
        .filter-btn i {
          font-size: 18px;
        }
        .filter-btn:hover {
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }
        .filter-btn.active {
          background: var(--gradient-primary);
          border-color: var(--primary-color);
          color: var(--dark-bg);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
        }
        .project-card {
          background: var(--gradient-card);
          border-radius: 20px;
          border: 1px solid rgba(0, 217, 255, 0.1);
          overflow: hidden;
          transition: var(--transition-fast);
          position: relative;
        }
        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
          box-shadow: var(--shadow-lg);
        }
        .featured-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--gradient-primary);
          color: var(--dark-bg);
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .project-image {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-normal);
        }
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-fast);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-links {
          display: flex;
          gap: 20px;
        }
        .project-links a {
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: var(--dark-bg);
          text-decoration: none;
          transition: var(--transition-fast);
        }
        .project-links a:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: var(--shadow-glow);
        }
        .project-content {
          padding: 25px;
        }
        .project-content h3 {
          font-size: 22px;
          color: var(--text-primary);
          margin-bottom: 12px;
        }
        .project-content p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tech-tag {
          padding: 6px 15px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid rgba(0, 217, 255, 0.3);
          border-radius: 20px;
          color: var(--primary-color);
          font-size: 13px;
          font-weight: 500;
        }
        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: var(--text-muted);
        }
        .no-results i {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.5;
        }
        .no-results p {
          font-size: 18px;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .filter-btn span {
            display: none;
          }
          .filter-btn {
            padding: 10px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsComponent;
