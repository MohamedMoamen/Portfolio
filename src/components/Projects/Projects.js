import React from "react";
import "./Projects.css";
import Ecommerce_FullStack_Project from "../../Images/Ecommerce_FullStack_Project.PNG";
import ChatApplication_FullStack_Project from "../../Images/ChatApplication_FullStack_Project.PNG";
import CRMModuleImage from "../../Images/CRMModuleImage.PNG";
import Multitenant_School_Management_System from "../../Images/Multitenant_School_Management_System.PNG";
import E_commerceImage from "../../Images/E_commerceImage.png";
import AdminDashboardImage from "../../Images/AdminDashboardImage.PNG";
import SurveyLandImage from "../../Images/SurveyLandImage.PNG";
import ProjectsItem from "./ProjectsItem";
const Projects = () => {
  const all_projects = [
    {
      id: 1,
      title: "SurveyLand",
      image: SurveyLandImage,
      type: "Frontend Project - AfaaqWare Training",
      description:
        "Full survey management platform built with Next.js, TypeScript, Tailwind CSS, and React Query, featuring authentication, survey and question management, response handling, and data export. Includes 31 UI screens, 29 features, and 33 REST endpoints with responsive Figma-based designs and Arabic RTL / English LTR support.",
      link: "https://surveyland-team1-round5.vercel.app/",
      sourcecode: "https://github.com/AfaaqWare/Surveyland-Team1-Round5",
    },
    {
      id: 2,
      title: "E-commerce Full Stack Application",
      image: Ecommerce_FullStack_Project,
      type: "Full Stack Project",
      description:
        "Full-stack e-commerce platform built with Laravel API and React.js featuring user authentication, product browsing, shopping cart, checkout, and a complete order-management workflow, with role-based access for admins to manage products, assign delivery members, track order status, and fully integrated CRUD operations, advanced SQL queries, and image upload functionality.",
      sourcecode:
        "https://github.com/MohamedMoamen/Ecommerce-FullStack-Application",
      hideDemo: true,
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      image: ChatApplication_FullStack_Project,
      type: "Full Stack Project",
      description:
        "Real-time chat platform developed using Laravel API and React.js with WebSocket-based instant messaging powered by Laravel Reverb, providing secure authentication, fast message broadcasting, and persistent message storage for a seamless and responsive communication experience.",
      sourcecode: "https://github.com/MohamedMoamen/Realtime_Chat_Application",
      hideDemo: true,
    },
    {
      id: 4,
      title: "CRM Module",
      image: CRMModuleImage,
      type: "Full Stack Project",
      description:
        "Role-based CRM platform built with Laravel API and React.js, featuring secure authentication for Admin, Sales, and Support users, management of leads, customers, deals, and tickets, a ticketing system with status tracking and activity logs, and responsive role-specific dashboards for efficient CRM workflows.",
      sourcecode: "https://github.com/MohamedMoamen/CRM_Module",
      hideDemo: true,
    },
    {
      id: 5,
      title: "Multi-Tenant School Management System",
      image: Multitenant_School_Management_System,
      type: "Full Stack Project",
      description:
        "SaaS school management system built with Laravel React Starter Kit, featuring a multi-tenant architecture with record-level tenant_id isolation in a shared database, and a secure school admin panel for managing teachers, students, courses, and enrollments.",
      sourcecode:
        "https://github.com/MohamedMoamen/multitenant_school_management_system_app",
      hideDemo: true,
    },
    {
      id: 6,
      title: "E-commerce Web Application",
      image: E_commerceImage,
      type: "Frontend Project",
      description:
        "Built an interactive and fully functional e-commerce shopping cart using React. The application allows users to browse products, add or remove items from the cart , update quantities, and view dynamic totals. It features a responsive UI optimized for all screen sizes and includes essential e-commerce functionality.",
      link: "https://e-commerce-website-cyan-sigma.vercel.app/",
      sourcecode: "https://github.com/MohamedMoamen/E-commerceWebsite",
    },
    {
      id: 7,
      title: "Admin Dashboard Web Application",
      image: AdminDashboardImage,
      type: "Frontend Project",
      description:
        "Developed an interactive dashboard for data visualization and management using React.js and Syncfusion Charts. Implemented multiple chart types, dynamic state management with Context API, responsive design with Tailwind CSS.",
      link: "http://admin-dashboard-app-opal.vercel.app/",
      sourcecode: "https://github.com/MohamedMoamen/Admin-Dashboard-App",
    },
  ];
  const projectshow = all_projects.map((p) => {
    return (
      <ProjectsItem
        key={p.id}
        title={p.title}
        image={p.image}
        type={p.type}
        description={p.description}
        link={p.link}
        sourcecode={p.sourcecode}
        hideDemo={p.hideDemo}
      />
    );
  });
  return (
    <section id="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-content">{projectshow}</div>
    </section>
  );
};

export default Projects;
