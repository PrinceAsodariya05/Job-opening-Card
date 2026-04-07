import React from 'react'
import {Bookmark} from 'lucide-react'
import '../App.css'

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src="https://static.vecteezy.com/system/resources/previews/018/779/928/original/3d-illustration-of-amazon-logo-free-png.png" alt="Company logo" />
        <button>Save <Bookmark size={14} /></button>
      </div>
      <div className="center">
        <h3>Amazon <span>5 days ago</span></h3>
        <h2>Senior UI/UX Designer</h2>
        <div className="tags">
          <span className="tag">Part-Time</span>
          <span className="tag">Senior Level</span>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-info">
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default Card