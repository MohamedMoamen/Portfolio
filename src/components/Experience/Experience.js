import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-title">
        <h1 className="experience-title-paragraph">Experience</h1>
      </div>

      <div className="experience-content">
        <div className="experience-item">
          <h2>Huma Volve — Backend Developer Intern</h2>
          <span>September 2026</span>

          <ul>
            <li>
              Worked with GitHub, Postman, and ClickUp in a professional
              software development workflow.
            </li>
            <li>
              Analyzed business requirements through SRS documentation and Figma
              designs, reviewed and refactored AI-generated code, and applied
              Clean Code practices.
            </li>
            <li>
              Learned and applied Laravel Jobs & Queues through practical
              backend tasks.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h2>AfaaqWare — Frontend Developer Intern | Level 2</h2>
          <span>May 2026 – August 2026</span>

          <ul>
            <li>
              Built responsive and reusable components for SurveyLand using
              Next.js, TypeScript, Tailwind CSS, and React Query.
            </li>
            <li>
              Integrated REST APIs, implemented Figma-based UI designs, and
              reviewed team pages to ensure consistency and quality.
            </li>
            <li>
              Worked with Git Flow, Pull Requests, code reviews, and Agile
              workflows.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h2>AfaaqWare — Frontend Developer Intern | Fundamentals</h2>
          <span>April 2026</span>

          <ul>
            <li>
              Practiced Git Flow, branching, Pull Requests, and team development
              workflows.
            </li>
            <li>
              Applied Atomic Design, Clean Architecture, reusable components,
              and responsive UI development.
            </li>
            <li>
              Built responsive UIs from Figma designs and integrated REST APIs
              using Postman, React Query, and Next.js.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h2>ECOTEL — Network Engineer</h2>
          <span>August 2021 – January 2025</span>

          <ul>
            <li>
              Managed and troubleshot switches, routers, firewalls, and servers
              across multiple sites.
            </li>
            <li>
              Implemented security solutions using Forcepoint firewalls and DHCP
              configurations, while performing preventive maintenance and
              troubleshooting.
            </li>
            <li>
              Organized structured cabling systems with patch panels and
              color-coding.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
