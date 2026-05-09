import { useState } from 'react';

const researchData = [];

const ResearchComponent = () => {
    const [research] = useState(researchData);

    const [selectedStatus, setSelectedStatus] = useState('all');

    const statusFilters = [
        { key: 'all', label: 'All Research', icon: 'bx-grid-alt' },
        { key: 'ongoing', label: 'Ongoing', icon: 'bx-time-five' },
        { key: 'completed', label: 'Completed', icon: 'bx-check-circle' }
    ];

    const filteredResearch = research.filter(item => 
        selectedStatus === 'all' ? true : item.status === selectedStatus
    );

    const getStatusBadge = (status) => {
        const badges = {
            ongoing: { color: '#00d9ff', label: 'In Progress' },
            completed: { color: '#10b981', label: 'Completed' },
            published: { color: '#8b5cf6', label: 'Published' }
        };
        return badges[status] || badges.ongoing;
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Present';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };

    return (
        <div className="research-container">
            <div className="research-filters">
                {statusFilters.map((filter) => (
                    <button
                        key={filter.key}
                        className={`filter-btn ${selectedStatus === filter.key ? 'active' : ''}`}
                        onClick={() => setSelectedStatus(filter.key)}
                    >
                        <i className={`bx ${filter.icon}`}></i>
                        <span>{filter.label}</span>
                    </button>
                ))}
            </div>

            <div className="research-grid">
                {filteredResearch.map((item) => (
                    <div className="research-card" key={item.id}>
                        <div className="research-header">
                            <div className="research-icon">
                                <i className={`bx ${item.icon}`}></i>
                            </div>
                            <div className="research-status">
                                <span
                                    className="status-badge"
                                    style={{
                                        background: `${getStatusBadge(item.status).color}20`,
                                        color: getStatusBadge(item.status).color
                                    }}
                                >
                                    {getStatusBadge(item.status).label}
                                </span>
                            </div>
                        </div>

                        <div className="research-content">
                            <h3>{item.title}</h3>
                            <p className="research-description">{item.description}</p>

                            <div className="research-meta">
                                <div className="meta-item">
                                    <i className="bx bx-calendar"></i>
                                    <span>
                                        {formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
                                    </span>
                                </div>
                                {item.collaborators.length > 0 && (
                                    <div className="meta-item">
                                        <i className="bx bx-group"></i>
                                        <span>{item.collaborators.join(', ')}</span>
                                    </div>
                                )}
                            </div>

                            <div className="research-technologies">
                                {item.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            {item.publications.length > 0 && (
                                <div className="publications">
                                    <h4>
                                        <i className="bx bx-book-open"></i> Publications
                                    </h4>
                                    <ul>
                                        {item.publications.map((pub, idx) => (
                                            <li key={idx}>{pub}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <button className="details-btn">
                                View Details <i className="bx bx-right-arrow-alt"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredResearch.length === 0 && (
                <div className="no-results">
                    <i className="bx bx-search-alt"></i>
                    <p>No research projects found</p>
                </div>
            )}

            <style>{`
                .research-container {
                    max-width: var(--container-max-width);
                    margin: 0 auto;
                }
                .research-filters {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 50px;
                    flex-wrap: wrap;
                }
                .filter-btn {
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
                .filter-btn i {
                    font-size: 20px;
                }
                .filter-btn:hover {
                    border-color: var(--primary-color);
                    transform: translateY(-3px);
                    box-shadow: var(--shadow-md);
                }
                .filter-btn.active {
                    background: var(--gradient-primary);
                    border-color: var(--primary-color);
                    color: var(--dark-bg);
                }
                .research-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
                    gap: 40px;
                }
                .research-card {
                    background: var(--gradient-card);
                    border-radius: 20px;
                    border: 1px solid rgba(0, 217, 255, 0.1);
                    padding: 30px;
                    transition: var(--transition-fast);
                }
                .research-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--primary-color);
                    box-shadow: var(--shadow-lg);
                }
                .research-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 20px;
                }
                .research-icon {
                    width: 60px;
                    height: 60px;
                    background: var(--gradient-primary);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 30px;
                    color: var(--dark-bg);
                }
                .status-badge {
                    padding: 6px 15px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 600;
                    border: 1px solid currentColor;
                }
                .research-content h3 {
                    font-size: 22px;
                    color: var(--text-primary);
                    margin-bottom: 15px;
                    line-height: 1.4;
                }
                .research-description {
                    font-size: 15px;
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 20px;
                }
                .research-meta {
                    margin-bottom: 20px;
                }
                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--text-muted);
                    font-size: 14px;
                    margin-bottom: 10px;
                }
                .meta-item i {
                    font-size: 18px;
                    color: var(--primary-color);
                }
                .research-technologies {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 20px;
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
                .publications {
                    background: rgba(0, 217, 255, 0.05);
                    padding: 15px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    border-left: 3px solid var(--primary-color);
                }
                .publications h4 {
                    font-size: 15px;
                    color: var(--primary-color);
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .publications ul {
                    list-style: none;
                    padding: 0;
                }
                .publications li {
                    color: var(--text-secondary);
                    font-size: 14px;
                    padding: 5px 0;
                }
                .publications li::before {
                    content: '•';
                    color: var(--primary-color);
                    margin-right: 10px;
                }
                .details-btn {
                    width: 100%;
                    padding: 12px;
                    background: transparent;
                    border: 2px solid var(--primary-color);
                    border-radius: 50px;
                    color: var(--primary-color);
                    font-size: 15px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition-fast);
                    font-family: 'Poppins', sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .details-btn:hover {
                    background: var(--primary-color);
                    color: var(--dark-bg);
                    transform: scale(1.02);
                }
                .details-btn i {
                    font-size: 20px;
                    transition: var(--transition-fast);
                }
                .details-btn:hover i {
                    transform: translateX(5px);
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
                    .research-grid {
                        grid-template-columns: 1fr;
                    }
                    .filter-btn span {
                        display: none;
                    }
                    .filter-btn {
                        padding: 10px 15px;
                    }
                    .research-card {
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ResearchComponent;
