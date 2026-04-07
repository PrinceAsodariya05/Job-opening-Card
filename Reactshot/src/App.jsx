import React from 'react'
import Card from './component/card'
import './App.css'

const App = () => {
  const Job = [
  {
    "brandLogo": "https://logo.clearbit.com/google.com",
    "name": "Google",
    "datePosted": "5 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "45$/hr",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/apple.com",
    "name": "Apple",
    "datePosted": "2 weeks ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "50$/hr",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/meta.com",
    "name": "Meta",
    "datePosted": "1 week ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "48$/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "https://logo.clearbit.com/amazon.com",
    "name": "Amazon",
    "datePosted": "3 days ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Entry Level",
    "pay": "42$/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/netflix.com",
    "name": "Netflix",
    "datePosted": "10 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "70$/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "https://logo.clearbit.com/microsoft.com",
    "name": "Microsoft",
    "datePosted": "6 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "47$/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/tesla.com",
    "name": "Tesla",
    "datePosted": "2 days ago",
    "post": "Embedded Systems Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "65$/hr",
    "location": "Austin, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/nvidia.com",
    "name": "NVIDIA",
    "datePosted": "4 days ago",
    "post": "AI Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "75$/hr",
    "location": "Remote"
  },
  {
    "brandLogo": "https://logo.clearbit.com/adobe.com",
    "name": "Adobe",
    "datePosted": "3 weeks ago",
    "post": "Frontend Developer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "40$/hr",
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/uber.com",
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