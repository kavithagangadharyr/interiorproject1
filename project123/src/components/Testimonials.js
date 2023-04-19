import React from 'react';
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';
import client3 from '../images/client3.jpg';
import './testi.css';


function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What people think about interno</h2>
      <div className="testimonial-grid">
        <div className="testimonial">
          <img src={client1} alt="client Avatar1" />
          <p>"I'm so happy with the results of my new living room. The designer really listened to my needs and created a space that is both beautiful and functional."</p>
          <cite>- John Smith</cite>
        </div>
        <div className="testimonial">
          <img src={client2} alt="client Avatar2" />
          <p>"The team at Interior Design Studio is incredibly talented and professional. I would highly recommend them to anyone looking to transform their home or office."</p>
          <cite>- Jane Doe</cite>
        </div>
        <div className="testimonial">
          <img src={client3} alt="client Avatar3" />
          <p>"Working with Interior Design Studio was a wonderful experience. They made the design process fun and easy, and the end result exceeded my expectations."</p>
          <cite>- Sarah Johnson</cite>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
