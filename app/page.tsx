import Link from "next/link";
import type { Metadata } from "next";
import { Footer, Header, LeadForm } from "./site-components";
import { MotionPage, MotionSection } from "./motion-ui";

export const metadata: Metadata = {
  title: "Education & Career Guidance in Punjab",
  description: "Personal guidance for degree admissions, nursing and skill courses, ITI trades and WES evaluation assistance across Punjab.",
  alternates: { canonical: "/" },
};

const pathways = [
  {
    number: "01",
    label: "Academic & professional pathway",
    title: "Degree, Nursing & Skill Courses",
    copy: "Explore management, IT, commerce, nursing and professional skill courses with admission guidance.",
    href: "/courses/#university-programs",
    className: "path-card path-degree",
  },
  {
    number: "02",
    label: "Skills pathway",
    title: "ITI Skill Courses",
    copy: "Build practical, career-ready skills through focused trade and vocational training options.",
    href: "/courses/#iti-trades",
    className: "path-card path-iti",
  },
  {
    number: "03",
    label: "Global pathway",
    title: "WES Evaluation Assistance",
    copy: "Understand requirements, prepare documents and move through your credential-evaluation journey with clarity.",
    href: "/#wes-evaluation",
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
    <MotionPage>
      <Header />
      <main>
        <MotionSection className="hero home-hero">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="shell hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow light">Education & career guidance for Punjab</p>
              <h1>Punjab students deserve the <span>right guidance.</span></h1>
              <p className="hero-intro">Personal support for students and families across Punjab exploring university programs, nursing and skill courses, practical ITI trades and WES evaluation assistance.</p>
              <div className="button-row">
                <a className="button button-primary" href="#enquiry">Book a free consultation <span aria-hidden="true">↗</span></a>
                <Link className="button button-ghost" href="/courses/">Explore courses</Link>
              </div>
              <div className="hero-proof" aria-label="Service highlights">
                <span><b>01</b> Punjabi · English</span>
                <span><b>02</b> Punjab admission support</span>
                <span><b>03</b> Local career pathways</span>
              </div>
            </div>
            <div className="hero-visual reveal delay-one">
              <div className="hero-photo" role="img" aria-label="Students collaborating around a laptop" />
              <div className="official-brand-card"><img className="official-logo-view" src="/luminary-logo-source.webp" alt="Full Luminary Educational Services logo by Manpreet Saini" width={261} height={400} decoding="async" /></div>
              <div className="float-card admissions-card">
                <span className="pulse-dot" />
                <div><small>Punjab admissions</small><strong>Open for 2026–27</strong></div>
              </div>
              <div className="float-card paths-card">
                <span className="path-icon">✦</span>
                <div><strong>3 guided pathways</strong><small>Degree · ITI · WES</small></div>
              </div>
            </div>
          </div>
          <div className="hero-scroll"><span /> Scroll to discover</div>
        </MotionSection>

        <MotionSection className="section pathways" id="services">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">Choose your direction</p><h2>Three pathways.<br />One trusted guide.</h2></div>
              <p>Whether you are a student, parent or working professional in Punjab, start with the pathway that matches your education and career goal.</p>
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
        </MotionSection>

        <MotionSection className="section about-section" id="about">
          <div className="shell about-grid">
            <div className="about-visual">
              <div className="about-photo" role="img" aria-label="Education counsellor speaking with students" />
              <div className="about-stamp"><span>By</span><strong>Manpreet<br />Saini</strong></div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">About Luminary</p>
              <h2>Making important decisions feel clearer.</h2>
              <p className="large-copy">Luminary Educational Services supports students, families and professionals across Punjab with personal, dependable education guidance.</p>
              <p>From comparing courses in Punjab to preparing admission documents or understanding the WES process, we help turn uncertainty into a clear and practical next step—with counselling available in Punjabi and English.</p>
              <div className="value-strip">
                <div><strong>1-to-1</strong><span>Student counselling</span></div>
                <div><strong>2</strong><span>Counselling languages</span></div>
                <div><strong>A–Z</strong><span>Journey support</span></div>
              </div>
              <a className="text-button" href="#enquiry">Speak with our team <span>→</span></a>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section process-section">
          <div className="shell">
            <div className="section-heading centered-heading"><p className="eyebrow">A simple counselling process</p><h2>From a Punjab student’s question to a confident next step.</h2></div>
            <div className="process-line">
              {["Tell us your goal", "Get personal guidance", "Prepare your documents", "Move forward confidently"].map((step, index) => (
                <div className="process-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3></div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section why-section">
          <div className="shell why-grid">
            <div className="why-heading"><p className="eyebrow light">Why Punjab chooses personal guidance</p><h2>Guidance built around the student, not just the paperwork.</h2><p>We help Punjab students and parents understand choices in clear, practical language.</p></div>
            <div className="reason-grid">
              {reasons.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="admissions-band">
          <div className="shell admissions-inner">
            <div><p className="eyebrow light">Admissions for Punjab students</p><h2>Admissions open for 2026–27</h2><p>Ask about available programs in Moga, eligibility and applicable scholarship opportunities.</p></div>
            <a className="button button-white" href="#enquiry">Check my eligibility <span>→</span></a>
          </div>
        </MotionSection>

        <MotionSection className="section wes-section home-wes" id="wes-evaluation">
          <div className="shell wes-grid">
            <div className="wes-copy">
              <p className="eyebrow">WES assistance in Punjab</p>
              <h2>Global credential guidance, closer to home.</h2>
              <p className="large-copy">Punjab students and professionals can get independent guidance to understand likely requirements, organise information and prepare for submission.</p>
              <p>A credential evaluation can help universities, employers, licensing bodies and immigration authorities understand education completed in another country.</p>
              <div className="wes-for"><strong>Common purposes</strong><span>Higher education</span><span>Professional licensing</span><span>Employment</span><span>Immigration requirements</span></div>
              <a className="button button-primary" href="#enquiry">Discuss my WES requirement <span>↗</span></a>
              <small className="disclaimer">Luminary provides independent application assistance and does not issue WES evaluation reports.</small>
            </div>
            <div className="wes-process">
              <p className="eyebrow">How we help</p>
              {["Share your destination and goal", "Review likely requirements", "Organise application documents", "Prepare for provider submission", "Understand tracking and next steps"].map((step, index) => <div className="wes-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></div>)}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section faq-section">
          <div className="shell faq-grid">
            <div><p className="eyebrow">Questions from students and parents</p><h2>Clear answers before you begin.</h2><p>From course selection to documentation, Punjab families can speak with our team before making a decision.</p></div>
            <div className="faq-list">{[
              ["Which course is right for me?", "We begin with your education, interests and career goal, then help you identify suitable degree or skill-course options."],
              ["What documents are needed for admission?", "Requirements vary by course and institution. Our team will share a relevant checklist after understanding your preferred course."],
              ["Are scholarships available?", "Availability depends on category, institution, course and eligibility conditions. Contact us for applicable details."],
              ["Can Luminary issue a WES report?", "No. Evaluation reports are issued by the evaluation provider. Luminary offers independent preparation and guidance assistance."],
            ].map(([q,a], index) => <details key={q} open={index === 0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
          </div>
        </MotionSection>

        <LeadForm />
      </main>
      <Footer />
    </MotionPage>
  );
}
