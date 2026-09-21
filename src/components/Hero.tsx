import { ArrowDown, ArrowRight, Radar } from 'lucide-react';
import { company } from '../config/site';

export default function Hero() {
  return (
    <section className="hero sonar-hero" id="home">
      <div className="sonar-hero-background" aria-hidden="true" />
      <div className="sonar-hero-gradient" aria-hidden="true" />
      <div className="sonar-grid-overlay" aria-hidden="true" />

      <div className="wrap sonar-hero-content">
        <div className="hero-kicker rev">
          <span>SONAR · RADAR · SIGNAL PROCESSING</span>
          <span>ENGINEERING · TECHNOLOGY · EXPERTISE</span>
        </div>

        <div className="hero-title-row rev">
          <Radar
            className="hero-radar-icon"
            size={38}
            strokeWidth={1}
            aria-hidden="true"
          />

          <p className="hero-status">
            ADVANCED TECHNOLOGY
            <br />
            FOR COMPLEX ENVIRONMENTS
          </p>
        </div>

        <h1 className="rev">
          Deep Knowledge.
          <br />
          <span>Sharper Detection.</span>
        </h1>

        <p className="lead rev">
          Specialized consultancy, technical training, and engineering
          solutions for SONAR, RADAR, digital signal processing, embedded
          systems, VLSI, and advanced technology applications.
        </p>

        <div className="cta rev">
          <a href="#services" className="btn solid">
            Explore Our Services
            <ArrowRight size={17} />
          </a>

          <a href="#contact" className="btn ghost">
            Start a Conversation
          </a>
        </div>

        <a href="#services" className="scroll-indicator rev">
          <span>Scroll to explore</span>
          <ArrowDown size={16} />
        </a>
      </div>

      <div className="hero-side-label" aria-hidden="true">
        <span>SONAR</span>
        <span>RADAR</span>
        <span>DSP</span>
        <span>VLSI</span>
        <span>EMBEDDED SYSTEMS</span>
      </div>

      <div className="hero-bottom-line" aria-hidden="true">
        <span>VARUNA CONSULTANCY SERVICES LLP</span>
        <span>EXPLORING POSSIBILITIES BENEATH THE SURFACE</span>
      </div>
    </section>
  );
}
