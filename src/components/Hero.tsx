import { company } from '../config/site';
// import { images } from '../config/images';

export default function Hero() {
  /* Optional photographic background — see src/config/images.ts
  const heroImageStyle = images.heroBackground
    ? { backgroundImage: `url(${images.heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : undefined;
  */

  return (
    <section className="hero" id="home">
      <div className="beams" aria-hidden="true" />
      <div className="sonar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="wrap">
        <div className="mark rev">
          {company.shortName}
          <small>{company.wordmarkSub}</small>
        </div>
        <h1 className="rev">{company.headline}</h1>
        <p className="lead rev">{company.intro}</p>
        <div className="cta rev">
          <a href="#services" className="btn solid">
            Explore Our Services
          </a>
          <a href="#contact" className="btn ghost">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
