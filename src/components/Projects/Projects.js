import React from 'react'
import "./Projects.css";
import E_commerceImage from "../../Images/E_commerceImage.png";
import AdminDashboardImage from "../../Images/AdminDashboardImage.PNG";
import TodoListImage from "../../Images/TodoListImage.png";
import WeatherForecastImage from "../../Images/WeatherForecastImage.png";
import ProjectsItem from './ProjectsItem';
const Projects = () => {
    const all_projects=[{id:1,title:"E-commerce Web Application",image:E_commerceImage,description:"Built an interactive and fully functional e-commerce shopping cart using React. The application allows users to browse products, add or remove items from the cart , update quantities, and view dynamic totals. It features a responsive UI optimized for all screen sizes and includes essential e-commerce functionality.",link:"https://e-commerce-website-cyan-sigma.vercel.app/",sourcecode:"https://github.com/MohamedMoamen/E-commerceWebsite"},
                        {id:2,title:"Admin Dashboard Web Application",image:AdminDashboardImage,description:"Developed an interactive dashboard for data visualization and management using React.js and Syncfusion Charts. Implemented multiple chart types, dynamic state management with Context API, responsive design with Tailwind CSS.",link:"http://admin-dashboard-app-opal.vercel.app/",sourcecode:"https://github.com/MohamedMoamen/Admin-Dashboard-App"},
                        {id:3,title:"Todo List Application",image:TodoListImage,description:"A dynamic web application developed using React.js, designed to help users efficiently organize and track their daily tasks by adding, editing and deleting tasks. the application focuses on providing a seamless user experience and robust task management functionalities, and a fully responsive design across all screen sizes.",link:"https://todo-list-eta-teal.vercel.app/",sourcecode:"https://github.com/MohamedMoamen/TodoList"},
                        {id:4,title:"Weather Forecast Application",image:WeatherForecastImage,description:"A responsive web application that displays real-time weather data by fetching live forecasts from an external API. Built with React and optimized for both desktop and mobile screens, and supports both Arabic and English languages.",link:"https://weather-forecast-zeta-nine.vercel.app/",sourcecode:"https://github.com/MohamedMoamen/WeatherForecast"}
    ]
    const projectshow=all_projects.map((p)=>{
        return(
            <ProjectsItem key={p.id} title={p.title} image={p.image} description={p.description} link={p.link} sourcecode={p.sourcecode}/>
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