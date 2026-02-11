import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faInstagram, 
  faXTwitter, 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import type { SocialLink } from '../types';

const Socials = (): React.JSX.Element => {
  const socialLinks: SocialLink[] = [
    { icon: faEnvelope, url: 'mailto:rachelannecilon@gmail.com', label: 'Email' },
    { icon: faFacebook, url: 'https://www.facebook.com/rachelannecilonlisay', label: 'Facebook' },
    { icon: faInstagram, url: 'https://www.instagram.com/rachelcilon/', label: 'Instagram' },
    { icon: faXTwitter, url: 'https://x.com/_rachelannec', label: 'Twitter' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/rachel-anne-cilon/', label: 'LinkedIn' },
    { icon: faGithub, url: 'https://github.com/rachelannec', label: 'GitHub' }
  ];

  return (
    <section className="my-4 social">
      <h2>Socials</h2>
      <div className="socials">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            aria-label={social.label}
          >
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;