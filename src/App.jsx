import React from 'react';
import NavBar from './Components/NavBar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FullStackDev from './Pages/FullStackDev';
import CyberSecurity from './Pages/CyberSecurity';
import DataScience from './Pages/DataScience';
import Carrer from './Pages/Carrer';
import PageNotfound from './Pages/PageNotfound';

const App = () => {
  const data=[
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"Best Full-Stack Development Project Ideas in 2024"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"How Long Would It Take to Be a Full Stack Developer?"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2021/02/Full-Stack-Developer.png",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"6 Essential Prerequisites For Learning ReactJS"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"Cybersecurity Vs Ethical Hacking: Top 10 Differences"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"8 Different Types of Cybersecurity and Threats Involved"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"Roles and Responsibilities of a Data Scientist"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"Top Product-Based Companies for Data Science Freshers"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-2048x1365.jpg",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"A Complete Guide To Become A Data Scientist In 3 Months?"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text-2048x1024.png",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"Data Science vs Data Analytics | Best Career Choice in 2024"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
      Title:"Carrer",
      Date:"10 May 2024",
      Content:"Best Full-Stack Development Project Ideas in 2024"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      Title:"Carrer",
      Date:"10 May 2024",
      Content:"Cybersecurity Vs Ethical Hacking: Top 10 Differences"
    },
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
      Title:"Carrer",
      Date:"10 May 2024",
      Content:"Roles and Responsibilities of a Data Scientist"
    },
  ]

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/FullStackDevelopment' element={<FullStackDev data={data} />} />
        <Route path='/CyberSecurity' element={<CyberSecurity data={data} />} />
        <Route path='/DataScience' element={<DataScience data={data} />} />
        <Route path='/Carrer' element={<Carrer data={data} />} />
        <Route path='*' element={<PageNotfound />} />
      </Routes>
    </div>
  );
};

export default App;