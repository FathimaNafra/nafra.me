import { useEffect, useMemo, useRef, useState } from 'react';
import Typed from 'typed.js';
import { personalInfo, socialLinks, about, skills, projects, education, certifications } from './data.js';
import cvFile from './assets/cv/Fathima_Nafra.pdf';
import ContactForm from './components/ContactForm.jsx';
import ProjectsComponent from './components/ProjectsComponent.jsx';
import SkillsComponent from './components/SkillsComponent.jsx';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const typedRef = useRef(null);

  const sectionRefs = useMemo(() => navItems.map(item => item.id), []);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: personalInfo.titles,
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setShowScrollTop(scrollY > 300);

      const header = document.querySelector('.header');
      if (header) {
        header.classList.toggle('scrolled', scrollY > 100);
      }

      sectionRefs.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 50px 0px' }
    );

    document.querySelectorAll('.fade-in, .card, .timeline-item, .stat-item, .info-box').forEach((el) => {
      el.classList.add('fade-in');
      observer.observe(el);
      
      // Check if element is already visible on page load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('show');
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const handleNavClick = (sectionId) => (event) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);

    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app-wrapper ${loaded ? 'loaded' : ''}`}>
      <header className="header">
        <a href="#home" className="logo" onClick={handleNavClick('home')}>
          <span className="logo-text">Fathima</span>
          <span className="logo-accent">Nafra</span>
        </a>

        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick(item.id)}
              className={activeSection === item.id ? 'active' : ''}
              style={{ '--i': index + 1 }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>
      </header>

      <main>
        <section id="home" className="home">
          <div className="home-content fade-in">
            <h3>Hi, I am</h3>
            <h1>{personalInfo.name}</h1>
            <h3>{personalInfo.title} &amp; <span className="multiple-text" ref={typedRef}></span></h3>
            <p className="intro-text">{personalInfo.bio}</p>

            <div className="social-media">
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href={socialLinks.email}>
                <i className="bx bx-envelope"></i>
              </a>
            </div>

            <div className="btn-group">
              <a href={cvFile} download="Fathima_Nafra.pdf" className="btn">View Resume</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>

          <div className="home-img fade-in">
            <div className="img-box">
              <img src={personalInfo.profileImage} alt="Profile" />
              <div className="img-glow"></div>
            </div>
          </div>
        </section>

        <section id="about" className="about fade-in">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">{about.subtitle}</p>
          </div>

          <div className="about-container">
            <div>
              {about.description.map((paragraph, index) => (
                <p key={index} className="about-text">{paragraph}</p>
              ))}

              <div className="about-stats">
                {about.stats.map((item) => (
                  <div className="stat-item" key={item.label}>
                    <h4>{item.value}</h4>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-img-wrapper fade-in">
              <img src={personalInfo.aboutImage} alt="About" />
            </div>
          </div>
        </section>

        <section id="skills" className="skills fade-in">
          <div className="section-header">
            <h2 className="section-title">Skills</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">My core strengths in data science and development.</p>
          </div>
          <SkillsComponent />
        </section>

        <section id="projects" className="projects fade-in">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Selected work demonstrating my data science and development experience.</p>
          </div>
          <ProjectsComponent />
        </section>

        <section id="experience" className="experience fade-in">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">A timeline of my learning and professional growth.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-section">
              <div className="timeline-category">
                <i className="bx bx-book"></i>
                Education
              </div>
              <div className="timeline-grid">
                {education.map((item) => (
                  <div className="timeline-item" key={item.id}>
                    <span className="timeline-dot"></span>
                    <div className="timeline-content fade-in">
                      <h4>{item.degree}</h4>
                      <p className="timeline-place">{item.institution} • {item.location}</p>
                      <span className="timeline-date">{item.startDate} - {item.endDate || 'Present'}</span>
                      <p className="timeline-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="certifications fade-in">
          <div className="section-header">
            <h2 className="section-title">Certifications</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Professional certifications and course completions.</p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div className="certification-card" key={cert.id}>
                <div className="cert-icon">
                  <i className={`bx ${cert.icon}`}></i>
                </div>
                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer} • {cert.issueDate}</p>
                  <p className="cert-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact fade-in">
          <div className="section-header">
            <h2 className="section-title">Contact</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Get in touch for collaboration, hiring, or questions.</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-box fade-in">
                <span className="info-icon"><i className="bx bx-envelope"></i></span>
                <h4>Email</h4>
                <p>{personalInfo.email}</p>
                <a className="info-link" href={socialLinks.email}>{personalInfo.email}</a>
              </div>
              <div className="info-box fade-in">
                <span className="info-icon"><i className="bx bx-phone"></i></span>
                <h4>Phone</h4>
                <p>{personalInfo.phone}</p>
                <a className="info-link" href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
              <div className="info-box fade-in">
                <span className="info-icon"><i className="bx bx-map"></i></span>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact-form-container fade-in">
              <div className="form-title">Send a message</div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer fade-in" aria-label="Site Footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>{personalInfo.bio}</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p aria-label="Email address">{personalInfo.email}</p>
            <p aria-label="Phone number">{personalInfo.phone}</p>
          </div>
          <div className="footer-section">
            <h3>Follow</h3>
            <div className="footer-social">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Visit GitHub profile"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()}{' '}
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Fathima Nafra on LinkedIn"
              className="footer-name-link"
            >
              {personalInfo.name}
            </a>
            {'. Crafted with '}
            <span className="tech-stack">
              <i className="bx bxl-react"></i> React
            </span>
            {' & '}
            <span className="tech-stack">
              <i className="bx bxl-javascript"></i> Vite
            </span>
            {'.'}
          </p>
        </div>
      </footer>

      <button className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`} onClick={handleScrollTop} aria-label="Scroll to top">
        <i className="bx bx-chevron-up"></i>
      </button>

      <div className={`preloader ${loaded ? 'hidden' : ''}`}>
        <div className="preloader-spinner"></div>
      </div>

      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
          box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
        }

        .scroll-top-btn.visible {
          opacity: 1;
          visibility: visible;
        }

        .scroll-top-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 217, 255, 0.4);
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }

        .preloader {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--darker-bg);
          z-index: 10000;
          transition: opacity 0.4s ease, visibility 0.4s ease;
        }

        .preloader.hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .preloader-spinner {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 6px solid rgba(0, 217, 255, 0.2);
          border-top-color: var(--primary-color);
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
