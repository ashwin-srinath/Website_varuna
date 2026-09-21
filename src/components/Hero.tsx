import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero sonar-hero" id="home">
      <div className="sonar-hero-background" aria-hidden="true" />
      <div className="sonar-hero-gradient" aria-hidden="true" />
      <div className="sonar-grid-overlay" aria-hidden="true" />

      <div className="wrap sonar-hero-content">
        <div className="hero-kicker rev">
          OCEAN INSIGHTS. REAL-WORLD IMPACT.
        </div>

        <h1 className="rev">
          Expertise Beneath the
          <br />
          Surface. Possibilities
          <br />
          Beyond Boundaries.
        </h1>

        <p className="lead rev">
          Specialized consultancy, technical expertise, professional training,
          and interdisciplinary solutions for a complex and evolving world.
        </p>

        <div className="cta rev">
          <a href="#services" className="btn solid">
            Explore Our Services
            <ArrowRight size={17} />
          </a>

          <a href="#contact" className="btn ghost">
            Get in Touch
          </a>
        </div>

        <a href="#services" className="scroll-indicator rev">
          <span>Scroll to explore</span>
          <ArrowDown size={16} />
        </a>
      </div>

      <div className="hero-side-label" aria-hidden="true">
        <span>PEOPLE</span>
        <span>TECHNOLOGY</span>
        <span>OCEAN</span>
        <span>A SAFER WORLD</span>
      </div>

      <div className="hero-bottom-line" aria-hidden="true">
        <span>VARUNA CONSULTANCY SERVICES LLP</span>
        <span>EXPLORING POSSIBILITIES BENEATH THE SURFACE</span>
      </div>
    </section>
  );
}
