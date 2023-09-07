import React, { useState } from "react";
import "../css/AboutBanner2Styles.css"

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 0) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

// use fade-in-left and fade0in-right for animations
const AboutBanner2 = () => {
  return (
    <div className='about_banner_second_container'>
      <div className='main_content_banner'>
        <h1 className='main_heading'>The Learning Folks Story: Empowering Students on their Academic Journey
        </h1>
        <p className="second_banner_content">Welcome to Learning Folks – Your Gateway to Academic Excellence!
        </p>
        <br />
        <p className="second_banner_content">
          <b>Who We Are</b>
          <br />
          Learning Folks is more than just an educational platform; we are a student support community driven by a passion for enhancing your academic journey. Founded by Divya Gupta and Mayank Hora,  forward-thinking students pursuing Bachelor of Technology at Bharati Vidyapeeth College of Engineering, Learning Folks was born out of a shared frustration among students.
        </p>
        <br />
        <p className="second_banner_content">
          <ReadMore>
            In the world of academia, we've all been there: last-minute cramming, frantic searches for study materials, and the constant quest for effective learning resources. We understand the challenges that come with juggling coursework, extracurricular activities, and personal growth. That's why Learning Folks is here to revolutionize the way you prepare for your exams.
            <br /><br />
            <b>Our Vision:</b>
            <br />
            At Learning Folks, we envision a future where students can effortlessly prepare for their exams, find the right study resources, and explore their passions alongside their academic journey. We believe that studying should be a seamless and enriching experience. Our primary focus is on fostering student interaction and creating a vibrant community where students can connect with mentors, discover their true passions, and channel their energy effectively.
            <br /> <br />
            We are a team of entrepreneurs who started our journey with little market knowledge. Mentorship played a critical role in helping us navigate the complexities of the startup world. Our mentors guided us in making the right decisions and accelerated our path to profitability and growth.
            <br /> <br />
            At Learning Folks, we are on a mission to redefine how students approach their B.Tech education. Our journey has been one of dedication, innovation, and community-building. We invite you to explore our platform at learningfolks.in and join us in empowering the next generation of students to excel in their academic pursuits and beyond. Together, we can make learning a truly enriching and fulfilling experience. Thank you for being a part of our story.
            <br/><br/>
          </ReadMore>
        </p>
      </div>
      <div className="about_second_banner_section">
        <img src="/static/media/logo.abe88664698e890898be.png" alt="learning" />
      </div>
    </div>
  )
}

export default AboutBanner2