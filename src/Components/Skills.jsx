import React from "react"; 
import HTML from "../assets/images/html.png"; 
import Css from "../assets/images/Css.png"; 
import Javascript from "../assets/images/Javascript.png"; 
import ReactJs from "../assets/images/React.png"; 
import NextJs from "../assets/images/nextjs.png"; 
import ExpressJS from "../assets/images/express.png"; 
import Mongodb from "../assets/images/mongodb.png"; 
import Bootstrap from "../assets/images/bootstrap.png"; 
import TailwindCss from "../assets/images/tailwind.png";  

const Skills = () => {  
  const skillsObj = [     
    { title: "HTML5", image: HTML },     
    { title: "CSS", image: Css },     
    { title: "Javascript", image: Javascript },     
    { title: "React JS", image: ReactJs },     
    { title: "Next Js", image: NextJs },     
    { title: "Mongo DB", image: Mongodb },     
    { title: "Express JS", image: ExpressJS },     
    { title: "Bootstrap", image: Bootstrap },     
    { title: "Tailwind Css", image: TailwindCss }   
  ];    

  return (     
    <div id="services" className="bg-black text-gray-100 py-10 px-5 sm:px-20 md:px-32">       
      <h2 className="text-3xl font-bold font-serif mb-8 text-center">My Skills</h2>       
      <div className="card-box flex flex-wrap items-center justify-evenly gap-8">       
        {skillsObj.map((data, ind) => {           
          return (             
            <div key={ind} className=" bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl card">               
              <img src={data.image} alt={data.title} />               
              <h1>{data.title}</h1>             
            </div>           
          );         
        })}       
      </div>    
    </div>   
  ); 
};  

export default Skills;
