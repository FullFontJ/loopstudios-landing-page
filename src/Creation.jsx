import data from "./data.json";
import "./creation.css";

export function Creation() {
  return (
    <>
      <section className="section-creation" id="Careers">
        <div className="header-creation">
          <h2>Our creations</h2>
          <button>See all</button>
        </div>
        <div className="grid-career">
          {data.map((data) => (
            <CardCareer key={data.id} mobile={data.mobile} desktop={data.desktop} title={data.title} />
          ))}
        </div>

        <button className="see-all">See all</button>

      </section>
    </>
  );
}

const CardCareer = ({ mobile, desktop, title }) => {
  return (
    <>
      <div className="card-career">
        <h3>{title}</h3>
        <picture className="img-career">
          <source media="(max-width:376px)" srcSet={mobile} />
          <img src={desktop} alt={title} />
        </picture>
        
      </div>
    </>
  );
};
