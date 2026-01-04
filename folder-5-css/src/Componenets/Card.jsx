import React from 'react'
import "../Css/Card.css";
const Card = () => {
  return (
     <div className="job-card">
      <div className="card-header">
        <span className="company-logo">A</span>
        <button className="save-btn">Save</button>
      </div>

      <p className="company-name">Amazon • 2 weeks ago</p>
      <h2 className="job-role">Backend Developer</h2>

      <div className="tags">
        <span>Full Time</span>
        <span>Mid Level</span>
      </div>

      <hr />

      <div className="card-footer">
        <div>
          <h3>$70/hour</h3>
          <p>Mumbai, India</p>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  )
}

export default Card
