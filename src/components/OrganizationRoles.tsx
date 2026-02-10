import React from "react";
import type { OrgRole } from "../types";

const OrganizationalRoles = (): React.JSX.Element => {
  const organizationalRoles: OrgRole[] = [
    {
        organization: "PUP The Programmers\' Guild",
        role: 'AVP for Membership and Student Affairs',
        date: '2025 - Present'
    },
    {
      organization: 'Google Developer Groups on Campus PUP',
      role: 'Compliance Analyst for Web Development Team',
      date: '2025 - Present'
    },
    {
      organization: 'PUP Microsoft Student Community',
      role: 'Junior Data Scientist',
      date: '2024 - 2025'
    },
    {
      organization: 'Google Developer Groups on Campus PUP',
      role: 'Web Development Cadet',
      date: '2024 - 2025'
    },
    {
      organization: 'Google Developer Groups on Campus PUP',
      role: 'Community Partnerships Associate',
      date: '2024 - 2025'
    }, 
  ];

  return (
    <section className="my-4">
      <h2>Organizational Roles</h2>
      <div className="list-unstyled">
        {organizationalRoles.map((item, index) => (
          <div key={index} className="mb-3">
            <strong>{item.organization}</strong>
            <br />
            <span>{item.role}</span>
            <br />
            <small className="text-muted">{item.date}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizationalRoles;