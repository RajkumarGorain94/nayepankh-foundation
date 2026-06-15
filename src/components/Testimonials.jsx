import "./Testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h3>Hear from individuals whose lives have been positively influenced through our programs and initiatives.</h3>

      <div className="testimonial-cards">
        <div className="testimonial">
          <p>
            "NayePankh helped me gain confidence and improve my
            learning journey."
          </p>
          <h4>- Student</h4>
        </div>

        <div className="testimonial">
          <p>
            "The mentorship sessions provided valuable guidance
            for my future career."
          </p>
          <h4>- Volunteer</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;