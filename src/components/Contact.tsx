import { useRef, useState, type FormEvent } from 'react';
import { company } from '../config/site';

type Field = 'name' | 'email' | 'org' | 'interest' | 'message';
type Errors = Partial<Record<Field, string>>;

const interests = [
  'Professional Training',
  'Consultancy Services',
  'Expert Talent & Capacity Building',
  'Collaboration / Careers',
  'Other',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: '',
    email: '',
    org: '',
    interest: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const set = (field: Field) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!EMAIL_RE.test(values.email.trim())) next.email = 'Please enter a valid email address.';
    if (!values.interest) next.interest = 'Please select an area of interest.';
    if (values.message.trim().length < 10)
      next.message = 'Please add a short message (at least 10 characters).';
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    const first = (Object.keys(next) as Field[])[0];
    if (first) {
      setStatus('');
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    /* No backend is connected. Nothing is transmitted or stored.
       To wire this up later, POST `values` to your endpoint here. */
    setStatus(
      'Validation passed. No backend is connected yet, so this enquiry was not sent — connect an email service to deliver it.'
    );
  }

  const err = (f: Field) => errors[f] ?? '';

  return (
    <section id="contact">
      <div className="wrap split">
        <div className="rev">
          <p className="eyebrow">Contact</p>
          <h2 className="h2">
            Let's discuss how specialized knowledge and interdisciplinary expertise can support your
            next project.
          </h2>
          <div className="meta">
            <div>
              <b>Email</b>
              {company.email}
            </div>
            <div>
              <b>Telephone</b>
              {company.phone}
            </div>
            <div>
              <b>Registered Address</b>
              {company.address}
            </div>
          </div>
        </div>

        <div className="rev">
          <form ref={formRef} onSubmit={onSubmit} noValidate>
            <div className="f full">
              <label htmlFor="n">Name</label>
              <input
                id="n"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={set('name')}
                aria-invalid={!!err('name')}
              />
              <p className="err">{err('name')}</p>
            </div>

            <div className="f">
              <label htmlFor="e">Email</label>
              <input
                id="e"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={set('email')}
                aria-invalid={!!err('email')}
              />
              <p className="err">{err('email')}</p>
            </div>

            <div className="f">
              <label htmlFor="o">Organization</label>
              <input
                id="o"
                name="org"
                autoComplete="organization"
                value={values.org}
                onChange={set('org')}
              />
              <p className="err" />
            </div>

            <div className="f full">
              <label htmlFor="s">Area of interest</label>
              <select
                id="s"
                name="interest"
                value={values.interest}
                onChange={set('interest')}
                aria-invalid={!!err('interest')}
              >
                <option value="">Select an area</option>
                {interests.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
              <p className="err">{err('interest')}</p>
            </div>

            <div className="f full">
              <label htmlFor="m">Message</label>
              <textarea
                id="m"
                name="message"
                value={values.message}
                onChange={set('message')}
                aria-invalid={!!err('message')}
              />
              <p className="err">{err('message')}</p>
            </div>

            <div className="f full">
              <button className="btn solid js-start" type="submit">
                Send Enquiry
              </button>
            </div>

            <p id="status" role="status" aria-live="polite">
              {status}
            </p>
          </form>

          <p className="disclaimer">
            This form validates input in the browser only. No backend is connected yet, so nothing is
            transmitted or stored — email integration can be added later without changing the markup.
          </p>
        </div>
      </div>
    </section>
  );
}
