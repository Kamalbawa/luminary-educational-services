import Link from "next/link";
import { Footer, Header, LeadForm } from "./site-components";

const pathways = [
  {
    number: "01",
    label: "Academic pathway",
    title: "Degree Admissions",
    copy: "Choose from undergraduate, postgraduate and diploma programs with guidance from application to enrolment.",
    href: "/programs-services/#degree-programs",
    className: "path-card path-degree",
  },
  {
    number: "02",
    label: "Skills pathway",
    title: "ITI Skill Courses",
    copy: "Build practical, career-ready skills through focused trade and vocational training options.",
    href: "/programs-services/#iti-trades",
    className: "path-card path-iti",
  },
  {
    number: "03",
    label: "Global pathway",
    title: "WES Evaluation Assistance",
    copy: "Understand requirements, prepare documents and move through your credential-evaluation journey with clarity.",
    href: "/programs-services/#wes-evaluation",
    className: "path-card path-wes",
  },
];

const reasons = [
  ["Personal attention", "Guidance shaped around your education, goals and preferred career path."],
  ["Clear documentation", "Practical support to understand requirements and prepare the right information."],
  ["Multiple pathways", "Academic, vocational and international credential options in one place."],
  ["Continued support", "A clear point of contact from your first question through the next step."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero home-hero">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="shell hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow light">Admissions · Career Training · Credential Guidance</p>
              <h1>Your next step starts with the <span>right guidance.</span></h1>
              <p className="hero-intro">Personal support for degree admissions, practical ITI courses and WES credential evaluation assistance—all in one place.</p>
              <div className="button-row">
                <a className="button button-primary" href="#enquiry">Book a free consultation <span aria-hidden="true">↗</span></a>
                <Link className="button button-ghost" href="/programs-services/">Explore programs</Link>
              </div>
              <div className="hero-proof" aria-label="Service highlights">
                <span><b>01</b> Personal guidance</span>
                <span><b>02</b> Application support</span>
                <span><b>03</b> Career-focused options</span>
              </div>
            </div>
            <div className="hero-visual reveal delay-one">
              <div className="hero-photo" role="img" aria-label="Students collaborating around a laptop" />
              <div className="float-card admissions-card">
                <span className="pulse-dot" />
                <div><small>Now accepting enquiries</small><strong>Admissions 2026–27</strong></div>
              </div>
              <div className="float-card paths-card">
                <span className="path-icon">✦</span>
                <div><strong>3 guided pathways</strong><small>Degree · ITI · WES</small></div>
              </div>
            </div>
          </div>
          <div className="hero-scroll"><span /> Scroll to discover</div>
        </section>

        <section className="section pathways" id="services">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">Choose your direction</p><h2>Three pathways.<br />One trusted guide.</h2></div>
              <p>Whether your goal is a degree, a practical skill or recognition of international education, start with the path that matches your ambition.</p>
            </div>
            <div className="path-grid">
              {pathways.map((item) => (
                <Link key={item.number} href={item.href} className={item.className}>
                  <div className="path-card-top"><span className="path-number">{item.number}</span><span className="path-arrow">↗</span></div>
                  <p>{item.label}</p><h3>{item.title}</h3><span className="path-copy">{item.copy}</span>
                  <span className="text-link">Explore this pathway <b>→</b></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="shell about-grid">
            <div className="about-visual">
              <div className="about-photo" role="img" aria-label="Education counsellor speaking with students" />
              <div className="about-stamp"><span>By</span><strong>Manpreet<br />Saini</strong></div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">About Luminary</p>
              <h2>Making important decisions feel clearer.</h2>
              <p className="large-copy">Luminary Educational Services helps students and professionals navigate education and career choices with personal, dependable guidance.</p>
              <p>From selecting a suitable program to preparing admission documents or understanding the WES process, we help turn uncertainty into a practical next step.</p>
              <div className="value-strip">
                <div><strong>1-to-1</strong><span>Personal guidance</span></div>
                <div><strong>3</strong><span>Focused pathways</span></div>
                <div><strong>A–Z</strong><span>Journey support</span></div>
              </div>
              <a className="text-button" href="#enquiry">Speak with our team <span>→</span></a>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="shell">
            <div className="section-heading centered-heading"><p className="eyebrow">A simple process</p><h2>From question to confident next step.</h2></div>
            <div className="process-line">
              {["Tell us your goal", "Get personal guidance", "Prepare your documents", "Move forward confidently"].map((step, index) => (
                <div className="process-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="shell why-grid">
            <div className="why-heading"><p className="eyebrow light">Why Luminary</p><h2>Guidance built around the person, not just the paperwork.</h2><p>We keep the journey human, organised and easy to understand.</p></div>
            <div className="reason-grid">
              {reasons.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="admissions-band">
          <div className="shell admissions-inner">
            <div><p className="eyebrow light">Plan your next intake</p><h2>Admissions open for 2026–27</h2><p>Ask about available programs, eligibility and applicable scholarship opportunities.</p></div>
            <a className="button button-white" href="#enquiry">Check my eligibility <span>→</span></a>
          </div>
        </section>

        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
