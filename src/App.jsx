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
      img:"https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"Best Full-Stack Development Project Ideas in 2024"
    },
    {
      img:"https://www.classicinformatics.com/hubfs/full-stack%20developer.png#keepProtocol",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"How Long Would It Take to Be a Full Stack Developer?"
    },
    {
      img:"https://miro.medium.com/v2/resize:fit:800/0*XH3rLskyOsCqVV-j.jpg",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfCGlqt45yu5aEjdmkQMIxlKfwLERb8Rxz4oqZTqf_W-InL9QQP77nzjIi8GpamfmaMg&usqp=CAU",
      Title:"Full Stack Development",
      Date:"10 May 2024",
      Content:"6 Essential Prerequisites For Learning ReactJS"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVOrfWvTa5OgqqJX0Y4rf8z8EEXV_DN8chp5gaRlHvg&s",
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
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1PZkcNUbk0qeC4coYQ9oGCKrffrg2OM1XDcbPsv1ZkzcUwUfnRUF-wucVQlo1BIPX-Y&usqp=CAU",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"
    },
    {
      img:"https://www.shutterstock.com/image-vector/business-teamwork-small-peoples-working-600nw-1156921555.jpg",
      Title:"Cyber Security",
      Date:"10 May 2024",
      Content:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytZMLvKNFPl0WXSpXmfeM7c_qrlrI6l2Jxw&s",
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
      img:"https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"A Complete Guide To Become A Data Scientist In 3 Months?"
    },
    {
      img:"https://thumbs.dreamstime.com/b/data-science-utilizza-metodi-scientifici-algoritmi-e-sistemi-per-estrarre-conoscenze-intuizioni-dai-dati-vari-concetto-di-207016521.jpg",
      Title:"Data Science",
      Date:"10 May 2024",
      Content:"Data Science vs Data Analytics | Best Career Choice in 2024"
    },
    {
      img:"https://www.classicinformatics.com/hubfs/full-stack%20developer.png#keepProtocol",
      Title:"Carrer",
      Date:"10 May 2024",
      Content:"Best Full-Stack Development Project Ideas in 2024"
    },
    {
      img:"https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
      Title:"Carrer",
      Date:"10 May 2024",
      Content:"Cybersecurity Vs Ethical Hacking: Top 10 Differences"
    },
    {
      img:"https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
      Title:"Carrer",
      Date:"10 May 2024",
      Content:"Roles and Responsibilities of  Data Scientist"
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