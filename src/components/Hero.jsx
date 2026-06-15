import "./Hero.css";

function Hero(props) {
  return (
    <section className="hero">
      <h1>{props.title}</h1>
      <h2>{props.title2}</h2>
      <p>{props.description}</p>
      <button>Learn More</button>
      <button className="secondary-btn">Join Us</button>
    </section>
  );
}

export default Hero;