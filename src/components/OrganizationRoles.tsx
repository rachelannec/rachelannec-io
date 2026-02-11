import React from "react";
import type { OrgRole } from "../types";
import '../styles/OrganizationRoles.css';

const OrganizationalRoles = (): React.JSX.Element => {
  const organizationalRoles: OrgRole[] = [
    {
      organization: "PUP The Programmers' Guild",
      role: 'AVP for Membership and Student Affairs',
      date: '2025 - Present',
      description: 'Leading initiatives to enhance member engagement and support student development within the organization.'
    },
    {
      organization: 'Google Developer Groups on Campus PUP',
      role: 'Compliance Analyst for Web Development Team',
      date: '2025 - Present',
      description: 'Ensuring adherence to web development standards and best practices, while supporting the team in creating compliant and efficient web applications.'
    },
    {
      organization: 'PUP Microsoft Student Community',
      role: 'Junior Data Scientist',
      date: '2024 - 2025',
      description: 'Practiced data analysis and machine learning techniques to derive insights from datasets, contributing to projects that enhance the community\'s understanding of data-driven decision making.'
    },
    {
      organization: 'Google Developer Groups on Campus PUP',
      role: 'Web Development Cadet',
      date: '2024 - 2025',
      description: 'Gained hands-on experience in web development, contributing to the creation and maintenance of web applications while learning industry best practices and technologies.'
    },
  ];

  return (
    <section className="my-4 orgs">
      <div className="mb-4">
        <h2>Organizational Roles</h2>
        <p className="text-muted">Leadership positions in student organizations</p>
      </div>

      <div>
        {organizationalRoles.map((item, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="mb-3">
                  <div>
                    <h5 className="card-title mb-1">{item.organization}</h5>
                    <h6 className="card-subtitle text-primary mb-2">{item.role}</h6>
                  </div>
                  <span className="card-date">{item.date}</span>
                </div>
                
                <div className="card-text">
                  <p className="mb-0">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizationalRoles;