import React from 'react'
import Card from './component/card'
import './App.css'

const App = () => {
  const Job = [
  {
    "brandLogo": "https://tse3.mm.bing.net/th/id/OIP._YRByM7l5SCayIje5TRfuwHaHj?rs=1&pid=ImgDetMain&o=7&rm=3",
    "name": "Google",
    "datePosted": "5 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "45$/hr",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg",
    "name": "Apple",
    "datePosted": "2 weeks ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "50$/hr",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    "name": "Meta",
    "datePosted": "1 week ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "48$/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "data:image/webp;base64,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",
    "name": "Amazon",
    "datePosted": "3 days ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Entry Level",
    "pay": "42$/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://pngimg.com/uploads/netflix/netflix_PNG10.png",
    "name": "Netflix",
    "datePosted": "10 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "70$/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "https://freepnglogo.com/images/all_img/1708533802microsoft-logo-transparent.png",
    "name": "Microsoft",
    "datePosted": "6 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "47$/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/022/424/230/original/tesla-logo-editorial-free-vector.jpg",
    "name": "Tesla",
    "datePosted": "2 days ago",
    "post": "Embedded Systems Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "65$/hr",
    "location": "Austin, USA"
  },
  {
    "brandLogo": "https://tse1.explicit.bing.net/th/id/OIP.DrY_yQf8IyUwul9H5PBo_gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    "name": "NVIDIA",
    "datePosted": "4 days ago",
    "post": "AI Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "75$/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "https://i.pinimg.com/originals/7d/3a/a4/7d3aa450915125e7948175e1123a199a.jpg",
    "name": "Adobe",
    "datePosted": "3 weeks ago",
    "post": "Frontend Developer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "40$/hr",
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png",
    "name": "Uber",
    "datePosted": "8 days ago",
    "post": "Data Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "55$/hr",
    "location": "Bangalore, India"
  }

]

  return (
    <div className="app">
      <div className="cards-container">
        {Job.map((elem, index) => (
          <Card key={index} job={elem} />
        ))}
      </div>
    </div>
  )
}

export default App