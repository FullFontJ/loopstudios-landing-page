import "./about.css";

export function About() {
  return (
    <>
      <section className="section-about" id="About">
        <img className="img-about" src="/img/desktop/image-interactive.jpg" alt="about" />
        <div className="info-about">
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </>
  );
}
