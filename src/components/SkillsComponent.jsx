import { useEffect, useState } from 'react';

const skillsData = {
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

const SkillsComponent = () => {
    const [skills] = useState(skillsData);
    const [activeCategory, setActiveCategory] = useState('Programming_Languages');
    const [animateSkills, setAnimateSkills] = useState(false);

    const categories = [
        { key: 'Programming_Languages', label: 'Programming', icon: 'bx-code' },
        { key: 'Web_Development_Frameworks', label: 'Web Dev', icon: 'bx-globe' },
        { key: 'ML_DataAnalysis', label: 'Data Science', icon: 'bx-brain' },
        { key: 'Databases', label: 'Databases', icon: 'bx-data' },
        { key: 'Cloud_And_Development_Tools', label: 'Tools & Tech', icon: 'bx-wrench' }
    ];

    useEffect(() => {
        setAnimateSkills(false);
        const timer = setTimeout(() => setAnimateSkills(true), 100);
        return () => clearTimeout(timer);
    }, [activeCategory]);

  return (
    <div className="skills-container">
      <div className="skills-categories">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.key)}
          >
            <i className={`bx ${category.icon}`}></i>
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skills[activeCategory].map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <div className="skill-icon">
                <i className={`bx ${skill.icon}`}></i>
              </div>
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
            <div className="skill-bar">
              <div
                className={`skill-progress ${animateSkills ? 'animate' : ''}`}
                style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
        }
        .skills-categories {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }
        .category-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 30px;
          background: var(--gradient-card);
          border: 2px solid rgba(0, 217, 255, 0.1);
          border-radius: 50px;
          color: var(--text-secondary);
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: 'Poppins', sans-serif;
        }
        .category-btn i {
          font-size: 20px;
        }
        .category-btn:hover {
          border-color: var(--primary-color);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .category-btn.active {
          background: var(--gradient-primary);
          border-color: var(--primary-color);
          color: var(--dark-bg);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .skill-card {
          background: var(--gradient-card);
          padding: 25px;
          border-radius: 15px;
          border: 1px solid rgba(0, 217, 255, 0.1);
          transition: var(--transition-fast);
        }
        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
          box-shadow: var(--shadow-md);
        }
        .skill-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }
        .skill-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          border-radius: 12px;
          font-size: 28px;
          color: var(--dark-bg);
        }
        .skill-info {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .skill-info h4 {
          font-size: 18px;
          color: var(--text-primary);
          margin: 0;
        }
        .skill-percentage {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-color);
        }
        .skill-bar {
          width: 100%;
          height: 8px;
          background: rgba(0, 217, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }
        .skill-progress {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
        }
        @media (max-width: 768px) {
          .category-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
          .category-btn span {
            display: none;
          }
          .category-btn i {
            font-size: 22px;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsComponent;

// Render component
const skillsRoot = document.getElementById('skills-root');
if (skillsRoot) {
    ReactDOM.render(<SkillsComponent />, skillsRoot);
}
