import "./Testimonials.css";
import face_1 from "../../assets/face1.jpg";
import face_2 from "../../assets/face2.jpg";
import face_3 from "../../assets/face3.jpg";

function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <h1 className="testimonials-header">What Out Clients Say About Us</h1>
        <div className="testimonial">
          <img src={face_1} alt="face" className="picture picture--1" />

          <div className="testimonial-text">
            <h1 className="testimonial-name">Leem Myan Jan </h1>
            <h2 className="testimonial-name__description">
              most popular Korean actress:
            </h2>
            <p>Best place to get in shape for filming.</p>
          </div>
        </div>
        <div className="testimonial">
          <img src={face_2} alt="face" className="picture picture--2" />

          <div className="testimonial-text">
            <h1 className="testimonial-name">Lara Flowerson</h1>
            <h2 className="testimonial-name__description">
              architect, designer:
            </h2>
            <p>This place cures my soul and inspires me.</p>
          </div>
        </div>
        <div className="testimonial ">
          <img src={face_3} alt="face" className="picture picture--3" />

          <div className="testimonial-text text--duke">
            <h1 className="testimonial-name">Duke Dangerous</h1>
            <h2 className="testimonial-name__description">
              heavyweight champion in everything:
            </h2>
            <p>
              This gym surpassed all my expectations, perfect for any style of
              training.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;

// function Testimonials() {
//   return (
//     <>
//       <section id="testimonials">
//         <div className="testimonial">
//           <img src={face_1} alt="face" className="picture picture--1" />

//           <div className="testimonial-text">
//             <p>Leem Myan Jan,most popular Korean actress:</p>
//             <p>Best place to get in shape for filming</p>
//           </div>
//         </div>
//         <div className="testimonial">
//           <img src={face_2} alt="face" className="picture picture--2" />

//           <div className="testimonial-text">
//             <p>Lara Flowerson,designer:</p>
//             <p>This place cures my soul and inspires me.</p>
//           </div>
//         </div>
//         <div className="testimonial">
//           <img src={face_3} alt="face" className="picture picture--3" />

//           <div className="testimonial-text">
//             <p>Duke Dangerous, heavyweight champion in everything:</p>
//             <p>
//               This gym surpassed all my expectations, perfect for any style of
//               training.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
