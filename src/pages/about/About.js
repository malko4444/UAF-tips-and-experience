import React from 'react';
import './about.css'; // Ensure that your CSS file is properly linked.
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

const About = () => {
  return (<>
  
  
  <div className="about-page">
  
      {/* Developer Intro Section */}
      <section className="developer-intro">
      <Nav />    
        <div className="about-container">
          {/* Fatima Naveed's Card */}
          <div className="card">
            <img src="/assets/fatima.jpg" alt="Fatima Naveed" className="card-img" />
            <div className="card-content">
              <h2>Fatima Naveed</h2>
              <h2>Frontend Developer <br/>data collector</h2>
            </div>
          </div>

          {/* M Zubair Shehzad's Card */}
          <div className="card">
            <img src="/assets/zubair.jpg" alt="M Zubair Shehzad" className="card-img" />
            <div className="card-content">
              <h2>M Zubair Shehzad</h2>
              <h2>Backend Developer & Data integrator</h2>
            
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="project-details">
        <h1 className="project-title">Projects & Contributions</h1>
        <p className="project-description">
          In this section, I showcase my journey in building innovative and scalable web applications, particularly focused on the development of a CRUD app with user authentication using Firebase.
        </p>
        <ul className="project-features">
          <li>CRUD Functionality: Users can Create, Read, Update, and Delete their experiences.</li>
          <li>Secure Authentication: Users sign up and log in to manage their posts securely.</li>
          <li>Data Abstraction: Users can only manage their own data to ensure privacy and security.</li>
          <li>Responsive Design: The app is designed to be fully responsive across devices.</li>
        </ul>
        <p className="project-summary">
          This project is a modern approach to showcasing user-generated content while maintaining robust security measures and an intuitive interface. Built with React, Firebase, and styled with CSS and Bootstrap for responsiveness.
        </p>
      </section>

      {/* Tips & Experience Section */}
      <section className="uaftips-experience">
        <h1 className="tips-title">Tips and Experiences at UAF</h1>
        <p className="tips-description">
          As a student at the University of Agriculture Faisalabad (UAF), I’ve gathered a wealth of knowledge and insights that I’d like to share. UAF is renowned for its agricultural studies and hands-on approach to education. Here are a few tips and experiences that helped me during my time at UAF:
        </p>
        <ul className="tips-list">
          <li>Networking: UAF offers various events and seminars that allow students to connect with industry professionals. Don’t miss out on these opportunities!</li>
          <li>Hands-on Learning: Take advantage of the university’s practical approach to learning, particularly in agriculture and engineering. Practical knowledge will enhance your theoretical foundation.</li>
          <li>Time Management: With a rigorous academic schedule, it’s important to manage your time effectively. Plan ahead for assignments and exams to stay on top of your coursework.</li>
          <li>Utilize the Library: UAF's library is an excellent resource for both academic materials and research. Spend time there to improve your knowledge base and research skills.</li>
          <li>Involvement in Extra-Curriculars: UAF has numerous student societies and clubs that you can join. These offer excellent networking opportunities and also allow you to develop your leadership skills.</li>
          <li>Stay Informed About Campus Resources: UAF offers various resources such as workshops, internships, and research opportunities. Keep an eye on announcements to make the most of these resources.</li>
        </ul>
        <p className="tips-summary">
          Overall, UAF has provided me with a strong foundation in both my academic and personal growth. I highly recommend engaging with both the academic and extra-curricular activities to make the most out of your time at UAF.
        </p>
        <Footer/>
      </section>

    </div>
</>  );
};

export default About;
