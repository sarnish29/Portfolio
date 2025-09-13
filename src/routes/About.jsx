import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  FaCode, FaDatabase, FaServer, FaMobile,
  FaUserTie, FaGraduationCap, FaLightbulb,
  FaUsers, FaAward
} from 'react-icons/fa';
import './AboutStyles.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div className="content-section fade-in">
            <div className="skills-grid">
              {[
                { icon: <FaCode />, title: 'Frontend', items: ['HTML', 'CSS', 'Javascript', 'React.js'] },
                { icon: <FaServer />, title: 'Backend', items: ['Node.js'] },
                { icon: <FaDatabase />, title: 'Databases', items: ['MySQL'] },
                { icon: <FaMobile />, title: 'Tools', items: ['Git/GitHub', 'VS Code', 'Figma'] },
              ].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-container">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <ul>{skill.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'activities':
        return (
          <div className="content-section fade-in">
            <div className="activities-container">
              {[
                {
                  title: 'Project Presentation',
                  event: 'EVOGEN’23 (IDEATHON)',
                  institution: 'Karunya University',
                  description: 'AI-enhanced Cardiovascular disease risk assessment'
                },
                {
                  title: 'Paper Presentation',
                  event: 'MCCT-23',
                  institution: 'Saveetha School of Engineering',
                  description: 'Blockchain for the Metaverse'
                },
                {
                  title: 'Paper Presentation',
                  event: 'ICETET-23',
                  institution: 'St. Joseph College of Engineering',
                  description: 'Quantum Computing'
                }
              ].map((activity, index) => (
                <div key={index} className="activity-card">
                  <h3>{activity.title}</h3>
                  <p className="activity-event">“{activity.event}”</p>
                  <p className="activity-institution">{activity.institution}</p>
                  <p className="activity-description">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="content-section fade-in">
            <div className="bus-timeline">
              {[
                {
                  date: '2022 - Present',
                  title: 'B.Tech in Computer Technology',
                  institution: 'Bannari Amman Institute of Technology',
                  achievement: 'CGPA: 8.03 (6th Sem)'
                },
                {
                  date: '2022',
                  title: 'Higher Secondary',
                  institution: 'Vivekananda Vidyalaya Matriculation Higher Secondary School',
                  achievement: '88%'
                },
                {
                  date: '2020',
                  title: 'SSLC',
                  institution: 'Vivekananda Vidyalaya Matriculation Higher Secondary School',
                  achievement: '91%'
                },
              ].map((edu, index) => (
                <div key={index} className="bus-timeline-node">
                  <div className="bus-node-dot"></div>
                  <div className="bus-node-content">
                    <div className="bus-node-date">{edu.date}</div>
                    <h3>{edu.title}</h3>
                    <p className="institution">{edu.institution}</p>
                    <div className="achievement">{edu.achievement}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bus-timeline-line"></div>
          </div>
        );
      case 'achievements':
        return (
          <div className="content-section fade-in">
            <div className="achievements-container">
              {[
                {
                  title: 'Participation',
                  description: 'Participated in Himasheild Round-2'
                },
                {
                  title: 'Participation',
                  description: 'TN Skills Level-2: Mobile Application Development'
                }
              ].map((achieve, index) => (
                <div key={index} className="achievement-card">
                  <h3>{achieve.title}</h3>
                  <p>{achieve.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'interests':
        return (
          <div className="content-section fade-in">
            <div className="interests-container">
              {[
                { icon: <FaCode />, title: 'Web Development', description: 'Building modern, responsive web apps.' },
                { icon: <FaDatabase />, title: 'Database Systems', description: 'Designing efficient data models and queries.' },
                { icon: <FaLightbulb />, title: 'Problem Solving', description: 'Crafting elegant algorithmic solutions.' },
              ].map((interest, index) => (
                <div key={index} className="interest-card">
                  <div className="interest-icon">{interest.icon}</div>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`about-page ${animated ? 'animated' : ''}`}>
      <Navbar />
      <div className="about-page">
        <div className="navigation-tabs">
          <button className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
            <FaUserTie /> Skills
          </button>
          <button className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>
            <FaGraduationCap /> Education
          </button>
          <button className={`tab-btn ${activeTab === 'interests' ? 'active' : ''}`} onClick={() => setActiveTab('interests')}>
            <FaLightbulb /> Interests
          </button>
          <button className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => setActiveTab('activities')}>
            <FaUsers /> Co-curricular Activities
          </button>
          <button className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>
            <FaAward /> Achievements
          </button>
        </div>
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default About;
