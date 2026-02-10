import React from 'react';
import type { Project } from '../types';

const Archives = (): React.JSX.Element => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Random String Generator',
      url: 'https://github.com/rachelannec/random-string-generator',
      imageUrl: 'https://github-readme-stats.vercel.app/api/pin/?username=rachelannec&repo=random-string-generator&theme=swift&description_lines_count=2'
    },
    {
      id: 2,
      title: 'Not So Secured',
      url: 'https://github.com/rachelannec/not-so-secured',
      imageUrl: 'https://github-readme-stats.vercel.app/api/pin/?username=rachelannec&repo=not-so-secured&theme=swift&description_lines_count=2'
    },
    {
      id: 3,
      title: 'Tap Counter',
      url: 'https://github.com/rachelannec/tap-counter',
      imageUrl: 'https://github-readme-stats.vercel.app/api/pin/?username=rachelannec&repo=tap-counter&theme=swift&description_lines_count=2'
    },
    {
      id: 4,
      title: 'C Micro',
      url: 'https://github.com/rachelannec/c-micro',
      imageUrl: 'https://github-readme-stats.vercel.app/api/pin/?username=rachelannec&repo=c-micro&theme=swift&description_lines_count=2'
    },
    {
      id: 5,
      title: 'RR-R',
      url: 'https://github.com/rachelannec/RR-R',
      imageUrl: 'https://github-readme-stats.vercel.app/api/pin/?username=rachelannec&repo=RR-R&theme=swift&description_lines_count=2'
    }
  ];

  return (
    <section className="my-4">
      <h2>Archives</h2>
      <div className="row justify-content-center">
        {projects.map(project => (
          <a 
            key={project.id}
            className="card col-md-3 mb-3 mx-1 h-100"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="card-img-top"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Archives;