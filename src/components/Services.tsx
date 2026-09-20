import {
  GraduationCap,
  Compass,
  Users,
  Cpu,
  CircuitBoard,
  Microchip,
} from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Professional Training',
    Icon: GraduationCap,
    body: 'Specialized training in underwater surveillance, detection, tracking, classification, surveillance systems, and SONAR/RADAR signal-processing algorithms.',
    href: '#training',
  },
  {
    num: '02',
    title: 'Consultancy Services',
    Icon: Compass,
    body: 'Technical consultancy, project advisory, research support, technology assessment, and interdisciplinary project assistance.',
    href: '#contact',
  },
  {
    num: '03',
    title: 'Expert Talent & Capacity Building',
    Icon: Users,
    body: 'Specialist manpower recruitment, professional training, knowledge transfer, and expert-led capacity-building programs delivered by highly qualified professionals.',
    href: '#careers',
  },
  {
    num: '04',
    title: 'DSP Processor Hardware Development',
    Icon: Cpu,
    body: 'Development and advisory services for DSP processor hardware, processor architecture, hardware acceleration, and specialized digital signal-processing systems.',
    href: '#contact',
  },
  {
    num: '05',
    title: 'VLSI Design & Development',
    Icon: CircuitBoard,
    body: 'VLSI-related services covering digital hardware architecture, RTL design, verification, FPGA prototyping, and specialized electronic systems.',
    href: '#contact',
  },
  {
    num: '06',
    title: 'Embedded Systems Engineering',
    Icon: Microchip,
    body: 'Embedded systems solutions involving microcontrollers, firmware development, real-time systems, hardware–software integration, and application-specific engineering.',
    href: '#contact',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <p className="eyebrow rev">What We Do</p>

        <h2 className="rev h2 mw20">
          Six areas of expertise, one standard of rigour.
        </h2>

        <div className="grid g3">
          {services.map(({ num, title, body, href, Icon }) => (
            <article className="cell rev" key={num}>
              <Icon className="ico" aria-hidden="true" />

              <p className="num">{num}</p>

              <h3>{title}</h3>

              <p>{body}</p>

              <a className="more" href={href}>
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
