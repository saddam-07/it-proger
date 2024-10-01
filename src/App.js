import React, { useState, useEffect, useCallback } from 'react'
import { Github, Linkedin, Mail, FileText, Code, Monitor, Smartphone, Server, Instagram } from 'lucide-react'
import './App.css'
import profile from './images/Снимок.png'
import proj_1 from './images/s-2.jpg'
import proj_2 from './images/slider.jpeg'
import proj_3 from './images/jonas-morgner-F7u5fL11Lt0-unsplash 1.jpg'
import client1 from './images/client.jpg'
import client3 from './images/client3.jpg'

const SkillBar = ({ skill, level }) => (
  <div className="skill-bar">
    <div className="skill-info">
      <span className="skill-name">{skill}</span>
      <span className="skill-level">{level}%</span>
    </div>
    <div className="skill-progress">
      <div className="skill-progress-bar" style={{width: `${level}%`}}></div>
    </div>
  </div>
)

const ProjectCard = ({ title, description, image, link }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={link} className="project-link">Подробнее &raquo;</a>
    </div>
  </div>
)

const NavItem = ({ href, children, onClick }) => (
  <li>
    <a 
      href={href} 
      onClick={onClick}
      className="nav-item"
    >
      {children}
    </a>
  </li>
)

export default function EnhancedPortfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Учитываем высоту шапки
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <div className={`portfolio ${darkMode ? 'dark-mode' : ''}`}>
      <div className="portfolio-content">
        <header className="header">
          <nav className="nav-container">
            <div className="nav-content">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="logo">IT-proger</a>
              <ul className="nav-list">
                <NavItem href="#home" onClick={(e) => scrollToSection(e, 'home')}>Главная</NavItem>
                <NavItem href="#about" onClick={(e) => scrollToSection(e, 'about')}>Обо мне</NavItem>
                <NavItem href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Навыки</NavItem>
                <NavItem href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Проекты</NavItem>
                <NavItem href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Отзывы</NavItem>
                <NavItem href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Контакты</NavItem>
              </ul>
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="theme-toggle"
              >
                {darkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </nav>
        </header>

        <main>
          <section id="home" className="hero">
            <div className="hero-content">
              <h1 className="hero-title">Насриев Саддам</h1>
              <p className="hero-subtitle">Креативный Frontend Разработчик</p>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="cta-button"
              >
                Связаться со мной
              </a>
            </div>
          </section>

          <section id="about" className="about">
            <div className="section-container">
              <h2 className="section-title">Обо мне</h2>
              <div className="about-content">
                <img src={profile} alt="Фото профиля" className="profile-image" />
                <div className="about-text">
                  <p>
                    Привет! Я frontend разработчик с страстью к созданию красивых и функциональных веб-приложений. 
                    Мой опыт охватывает широкий спектр современных технологий, от отзывчивого дизайна до 
                    сложных одностраничных приложений.
                  </p>
                  <p>
                    Я верю в постоянное обучение и совершенствование своих навыков. Моя цель - создавать 
                    цифровые продукты, которые не только выглядят потрясающе, но и обеспечивают 
                    исключительный пользовательский опыт.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="skills">
            <div className="section-container">
              <h2 className="section-title">Мои навыки</h2>
              <div className="skills-grid">
                <div className="skills-column">
                  <SkillBar skill="HTML5 & CSS3" level={95} />
                  <SkillBar skill="JavaScript" level={90} />
                  <SkillBar skill="React" level={85} />
                  <SkillBar skill="Tilda" level={70} />
                </div>
                <div className="skills-column">
                  <SkillBar skill="Node.js" level={75} />
                  <SkillBar skill="SqlLite" level={70} />
                  <SkillBar skill="Git" level={60} />
                  <SkillBar skill="Figma" level={78} />
                </div>
              </div>
              <div className="skills-icons">
                <div className="skill-icon">
                  <Code size={48} />
                  <h3>Frontend</h3>
                </div>
                <div className="skill-icon">
                  <Server size={48} />
                  <h3>Backend</h3>
                </div>
                <div className="skill-icon">
                  <Smartphone size={48} />
                  <h3>Mobile</h3>
                </div>
                <div className="skill-icon">
                  <Monitor size={48} />
                  <h3>UI/UX</h3>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="projects">
            <div className="section-container">
              <h2 className="section-title">Мои проекты</h2>
              <div className="projects-grid">
                <ProjectCard 
                  title="Проект 1" 
                  description="Инновационное веб-приложение для интернет магазина по домам teaser" 
                  image={proj_1} 
                  link="https://saddam-07.github.io/teaser-houses/"
                />
                <ProjectCard 
                  title="Проект 2" 
                  description="Сайт про комысы был заказом компании 'КОМЫСА'" 
                  image={proj_2}  
                  link="https://saddam-07.github.io/my-kumys/"
                />
                <ProjectCard 
                  title="Проект 3" 
                  description="Завод Пионер. Проэкт для привлечения новых клиентов и работников" 
                  image={proj_3} 
                  link="https://saddam-07.github.io/pioner-project-ru/"
                />
              </div>
            </div>
          </section>

          <section id="testimonials" className="testimonials">
            <div className="section-container">
              <h2 className="section-title">Отзывы</h2>
              <div className="testimonials-grid">
                {[
                  { name: "Анна С.", img: client3, role: "CEO, TechStart", text: "Саддам создал для нас потрясающий сайт. Его внимание к деталям и креативный подход превзошли все наши ожидания." },
                  { name: "Петр М.", img: client1, role: "Менеджер проекта, InnoSoft", text: "Работать с Саддамом было одно удовольствие. Он не только талантливый разработчик, но и отличный командный игрок." }
                ].map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <img src={testimonial.img} alt={testimonial.name} className="testimonial-image" />
                      <div>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="section-container">
              <h2 className="section-title">Свяжитесь со мной</h2>
              <div className="contact-form-container">
                <form className="contact-form">
                  <input type="text" placeholder="Ваше имя" className="form-input" required />
                  <input type="email" placeholder="Ваш email" className="form-input" required />
                  <textarea placeholder="Ваше сообщение" className="form-textarea" rows={5} required></textarea>
                  <button type="submit" className="form-submit">Отправить</button>
                </form>
              </div>
              <div className="social-links">
                <a href="https://github.com/saddam-07" className="social-link">
                  <Github size={24} />
                </a>
                <a href="https://www.instagram.com/saddam_webdesigner?igsh=NTc4MTIwNjQ2YQ==" className="social-link">
                  <Instagram size={24} />
                </a>
                <a href="mailto:saddamnasriev07@gmail.com" className="social-link">
                  <Mail size={24} />
                </a>
                <a href="https://github.com/saddam-07" className="social-link">
                  <Server size={24} />
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Насриев Саддам. Все права защищены.</p>
            <p>Создано с ❤️ и React</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

