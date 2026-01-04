import React from 'react'
import Card from './Componenets/Card';
const jobCardsData = [
  {
    companyName: "Facebook (Meta)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    jobRole: "Software Development Engineer",
    salary: "₹35 LPA – ₹60 LPA",
    experience: "2–5 Years"
  },
  {
    companyName: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    jobRole: "SDE I / SDE II",
    salary: "₹30 LPA – ₹55 LPA",
    experience: "1–4 Years"
  },
  {
    companyName: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    jobRole: "Software Engineer",
    salary: "₹40 LPA – ₹65 LPA",
    experience: "3–6 Years"
  },
  {
    companyName: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    jobRole: "Backend Engineer",
    salary: "₹45 LPA – ₹80 LPA",
    experience: "4–7 Years"
  },
  {
    companyName: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    jobRole: "Software Engineer (L3–L5)",
    salary: "₹35 LPA – ₹70 LPA",
    experience: "2–6 Years"
  }
];
const App = () => {
  return (
      <div style={styles.container}>
      {jobCardsData.map((job, index) => (
               <Card
          key={index}
          companyName={job.companyName}
          logo={job.logo}
          jobRole={job.jobRole}
          salary={job.salary}
          experience={job.experience}
        />
      ))}
    </div>
  )
};
const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",   // moves to next row if space is less
    justifyContent: "center"
  }
};

export default App
