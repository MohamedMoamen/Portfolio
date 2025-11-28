import React from 'react'
import "./Projects.css";
import Ecommerce_FullStack_Project from "../../Images/Ecommerce_FullStack_Project.PNG";
import ChatApplication_FullStack_Project from "../../Images/ChatApplication_FullStack_Project.PNG";
import Multitenant_School_Management_System from "../../Images/Multitenant_School_Management_System.PNG"; 
import E_commerceImage from "../../Images/E_commerceImage.png";
import AdminDashboardImage from "../../Images/AdminDashboardImage.PNG";
import TodoListImage from "../../Images/TodoListImage.png";
import WeatherForecastImage from "../../Images/WeatherForecastImage.png";
import ProjectsItem from './ProjectsItem';
const Projects = () => {
    const all_projects=[
        {id:1,title:"E-commerce Full Stack Application",image:Ecommerce_FullStack_Project,type:"Full Stack Project",description:"Full-stack e-commerce platform built with Laravel API and React.js featuring user authentication, product browsing, shopping cart, checkout, and a complete order-management workflow, with role-based access for admins to manage products, assign delivery members, track order status, and fully integrated CRUD operations, advanced SQL queries, and image upload functionality.",sourcecode:"https://github.com/MohamedMoamen/Ecommerce-FullStack-Application",hideDemo:true},
        {id:2,title:"Real-Time Chat Application",image:ChatApplication_FullStack_Project,type:"Full Stack Project",description:"Real-time chat platform developed using Laravel API and React.js with WebSocket-based instant messaging powered by Laravel Reverb, providing secure authentication, fast message broadcasting, and persistent message storage for a seamless and responsive communication experience.",sourcecode:"https://github.com/MohamedMoamen/Realtime_Chat_Application",hideDemo:true},
        {id:3,title:"Multi-Tenant School Management System",image:Multitenant_School_Management_System,type:"Backend Project",description:"SaaS school management system built in Laravel using Blade templating, featuring multi-tenant architecture with record-level tenant_id isolation, and a secure admin panel enabling efficient management of teachers, students, courses, and enrollments across multiple schools within a shared database.",sourcecode:"https://github.com/MohamedMoamen/multitenant_school_management_system_app",hideDemo:true},
        {id:4,title:"E-commerce Web Application",image:E_commerceImage,type:"Frontend Project",description:"Built an interactive and fully functional e-commerce shopping cart using React. The application allows users to browse products, add or remove items from the cart , update quantities, and view dynamic totals. It features a responsive UI optimized for all screen sizes and includes essential e-commerce functionality.",link:"https://e-commerce-website-cyan-sigma.vercel.app/",sourcecode:"https://github.com/MohamedMoamen/E-commerceWebsite"},   
        {id:5,title:"Admin Dashboard Web Application",image:AdminDashboardImage,type:"Frontend Project",description:"Developed an interactive dashboard for data visualization and management using React.js and Syncfusion Charts. Implemented multiple chart types, dynamic state management with Context API, responsive design with Tailwind CSS.",link:"http://admin-dashboard-app-opal.vercel.app/",sourcecode:"https://github.com/MohamedMoamen/Admin-Dashboard-App"},
        {id:6,title:"Todo List Application",image:TodoListImage,type:"Frontend Project",description:"A dynamic web application developed using React.js, designed to help users efficiently organize and track their daily tasks by adding, editing and deleting tasks. the application focuses on providing a seamless user experience and robust task management functionalities, and a fully responsive design across all screen sizes.",link:"https://todo-list-eta-teal.vercel.app/",sourcecode:"https://github.com/MohamedMoamen/TodoList"},
        {id:7,title:"Weather Forecast Application",image:WeatherForecastImage,type:"Frontend Project",description:"A responsive web application that displays real-time weather data by fetching live forecasts from an external API. Built with React and optimized for both desktop and mobile screens, and supports both Arabic and English languages.",link:"https://weather-forecast-zeta-nine.vercel.app/",sourcecode:"https://github.com/MohamedMoamen/WeatherForecast"}
    ]
    const projectshow=all_projects.map((p)=>{
        return(
            <ProjectsItem key={p.id} title={p.title} image={p.image} type={p.type} description={p.description} link={p.link} sourcecode={p.sourcecode} hideDemo={p.hideDemo}/>
        ) 
    })
    return (
        <section id="projects">
            <h1 className="projects-title">
                Projects
            </h1>
            <div className="projects-content">
                {projectshow}
            </div>
            

        </section>
  )
    
}

export default Projects