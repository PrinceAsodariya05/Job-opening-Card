import React from 'react'
import {Bookmark} from 'lucide-react'
import '../App.css'

const Card = ({ job }) => {
  return (
    <div className="card">
      <div className="top">
        <img src="https://tse3.mm.bing.net/th/id/OIP.-gdVi6c27ebQfsDpDybg3QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <button>Save <Bookmark size={14} /></button>
      </div>
      <div className="center">
        <h3>{job.name} <span>{job.datePosted}</span></h3>
        <h2>{job.post}</h2>
        <div className="tags">
          <span className="tag">{job.tag1}</span>
          <span className="tag">{job.tag2}</span>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-info">
          <h3>{job.pay}</h3>
          <p>{job.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default Card