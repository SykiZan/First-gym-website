import "./GymInfo.css";

function GymInfo() {
  return (
    <>
      <section id="about-section">
        <h1 className="about-header">About Our Gym</h1>
        <div className="about-info">
          <article className="article article--1">
            <p>
              Founded in 2021 by great programmer businessman and
              fitness-superstar Eugene Smith, this gym has become center
              training spot for elite athlets, actors, supermodels and other
              succesfull people - therefore it's more than a gym - it's a club
              where you meet the best, whatever you are looking for.
            </p>
          </article>
          <article className="article article--2">
            <p>Choose from wide variety of fitness activities:</p>
            <ul className="activities">
              <li>Weightlifting</li>
              <li>Swimming</li>
              <li>ArmWrestling</li>
              <li>Martial Arts</li>
              <li>Yoga</li>
              <li>Archery</li>
            </ul>
          </article>
          <article className="article article--3">
            <p>
              7000 m<sup>2</sup> in your disposal, located in the heart of the
              city with underground parking for 2000 cars, kids room, 5
              restaraunts, SPA{" & "} massage center.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default GymInfo;
