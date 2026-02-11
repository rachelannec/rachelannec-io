import React from 'react';
import type { Project } from '../types';
import '../styles/Archives.css';

const Archives = (): React.JSX.Element => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'RoBolts',
      url: 'https://robot-game-psi.vercel.app/',
      repoUrl: 'https://github.com/Deadbush225/Robot-Game',
      imageUrl: 'assets/robolts.png'
    },
    {
      id: 2,
      title: 'Matrix Solver',
      url: 'https://matrix-solver-nexus.vercel.app/',
      repoUrl: 'https://github.com/rachelannec/matrix-solver',
      imageUrl: 'assets/matrix-solver.png'
    },
    {
      id: 3,
      title: 'RSVP',
      url: 'https://rsvp-rho.vercel.app/',
      repoUrl: 'https://github.com/rachelannec/RSVP',
      imageUrl: 'assets/rsvp.png'
    },
    {
      id: 4,
      title: 'Figma Discord RPC Plugin',
      url: '',
      repoUrl: 'https://github.com/rachelannec/figma-rpc-bridge',
      imageUrl: ''
    },
    {
      id: 5,
      title: 'RR-R',
      url: 'https://robot-rr.vercel.app/',
      repoUrl: 'https://github.com/rachelannec/RR-R',
      imageUrl: 'assets/robot-rr.png'
    }
  ];

  return (
    <section className="my-4 archives">
      <h2 className="archives-title">Archives</h2>
      
      {projects.length === 0 ? (
        <div className="archives-empty">
          <div className="archives-empty-icon">📁</div>
          <p className="archives-empty-text">No projects archived yet.</p>
        </div>
      ) : (
        <div className="archives-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              {!project.url && (
                <span className="project-status">Offline</span>
              )}
              
              <div className="project-image-container">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-missing">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-links">
                  {project.url ? (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      <span>🌐</span> Live Demo
                    </a>
                  ) : (
                    <span 
                      className="project-link project-link-disabled project-tooltip"
                      data-tooltip="Demo currently unavailable"
                    >
                      <span>🚫</span> No Demo
                    </span>
                  )}
                  
                  <a 
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                  >
                    <span>💻</span> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Archives;