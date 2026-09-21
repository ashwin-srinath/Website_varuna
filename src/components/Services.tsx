import {
  GraduationCap,
  Compass,
  Users,
  Cpu,
  CircuitBoard,
  Microchip,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Professional Training',
    Icon: GraduationCap,
    image:
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85',
    body: 'Specialized training in underwater surveillance, detection, tracking, classification, surveillance systems, and SONAR/RADAR signal-processing algorithms.',
    href: '#training',
  },
  {
    num: '02',
    title: 'Consultancy Services',
    Icon: Compass,
    image:
      'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=85',
    body: 'Technical consultancy, project advisory, research support, technology assessment, and interdisciplinary project assistance.',
    href: '#contact',
  },
  {
    num: '03',
    title: 'Expert Talent & Capacity Building',
    Icon: Users,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
    body: 'Specialist manpower recruitment, professional training, knowledge transfer, and expert-led capacity-building programs.',
    href: '#careers',
  },
  {
    num: '04',
    title: 'DSP Processor Hardware Development',
    Icon: Cpu,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    body: 'Development and advisory services for DSP processor hardware, processor architecture, hardware acceleration, and specialized digital signal-processing systems.',
    href: '#contact',
  },
  {
    num: '05',
    title: 'VLSI Design & Development',
    Icon: CircuitBoard,
    image:
      'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1200&q=85',
    body: 'VLSI-related services covering digital hardware architecture, RTL design, verification, FPGA prototyping, and specialized electronic systems.',
    href: '#contact',
  },
  {
    num: '06',
    title: 'Embedded Systems Engineering',
    Icon: Microchip,
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
    body: 'Embedded systems solutions involving microcontrollers, firmware development, real-time systems, and hardware–software integration.',
    href: '#contact',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="wrap">
        <p className="eyebrow rev">Our Services</p>

        <div className="section-heading rev">
          <h2 className="h2">
            Expertise across technology,
            <br />
            engineering and the ocean.
          </h2>

          <p className="lead">
            We bring together specialized knowledge, engineering capability,
            and professional expertise to support complex projects.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ num, title, body, href, Icon, image }) => (
            <article className="service-card rev" key={num}>
              <a href={href} className="service-image-link">
                <div className="service-image-wrap">
                  <img
                    src={image}
                    alt={title}
                    className="service-image"
                    loading="lazy"
                  />

                  <div className="service-image-overlay">
                    <ArrowUpRight size={25} />
                  </div>
                </div>
              </a>

              <div className="service-card-content">
                <div className="service-card-top">
                  <span className="num">{num}</span>
                  <Icon className="ico" aria-hidden="true" />
                </div>

                <h3>{title}</h3>

                <p>{body}</p>

                <a className="more" href={href}>
                  Learn more <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
