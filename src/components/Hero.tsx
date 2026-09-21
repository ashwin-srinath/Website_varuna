import { ArrowDown, ArrowRight } from 'lucide-react';
import { company } from '../config/site';

export default function Hero() {
  return (
    <section className="hero interactive-hero" id="home">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="beams" aria-hidden="true" />

      <div className="sonar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="wrap hero-content">
        <div className="hero-kicker rev">
          <span>OCEAN INSIGHTS.</span>
          <span>REAL-WORLD IMPACT.</span>
        </div>

        <h1 className="rev">
          {company.headline}
        </h1>

        <p className="lead rev">
          {company.intro}
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

        <a className="scroll-indicator rev" href="#services">
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
    </section>
  );
}
