import "./Membership.css";

function Membership() {
  return (
    <>
      <section id="memberships">
        <h1 className="memberships-header">Select your member card</h1>
        <article className="membership-option basic">
          <h1 className="title">Basic</h1>
          <h1 className="price">99 $</h1>
          <h2 className="description">Will get you familiar whith our club</h2>
          <ul className="features">
            <li className="feature">One month acces to the club</li>
            <li className="feature">All sport activities included</li>
            <li className="feature"></li>
            <li className="feature"></li>
          </ul>
          <button className="buy-card">CHOOSE OPTION</button>
        </article>
        <article className="membership-option pro">
          <h1 className="title">Pro</h1>
          <h1 className="price">999 $</h1>
          <h1 className="recommended">Recommended</h1>
          <h2 className="description">Best choise for real fitness</h2>
          <ul className="features">
            <li className="feature">One year acces to the club</li>
            <li className="feature">All sport activities included</li>
            <li className="feature">Free parking</li>
            <li className="feature">10 guest visits</li>
          </ul>
          <button className="buy-card">CHOOSE OPTION</button>
        </article>
        <article className="membership-option premium">
          <h1 className="title">Premium</h1>
          <h1 className="price">1599 $</h1>
          <h2 className="description">Get the best for your money</h2>
          <ul className="features">
            <li className="feature">One year acces to the club</li>
            <li className="feature">Everything from "pro" option</li>
            <li className="feature">Free kids room</li>
            <li className="feature">Personal trainer</li>
            <li className="feature">Access to SPA</li>
          </ul>
          <button className="buy-card">CHOOSE OPTION</button>
        </article>
      </section>
    </>
  );
}
export default Membership;
