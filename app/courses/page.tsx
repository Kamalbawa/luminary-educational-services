import { Footer, Header } from "../site-components";
import type { Metadata } from "next";
import { MotionPage, MotionSection } from "../motion-ui";

export const metadata: Metadata = {
  title: "Courses in Punjab",
  description: "Explore MCA, MBA, undergraduate, nursing, skill and ITI courses with personal admission guidance for students across Punjab.",
  alternates: { canonical: "/courses/" },
};

const universityGroups = [
  {
    code: "PG",
    title: "Postgraduate Programs",
    description: "Advanced programs in management, commerce, technology and fashion.",
    programs: ["MBA", "MCA", "M.Sc IT", "M.Sc FT", "M.Com"],
    tone: "coral",
  },
  {
    code: "UG",
    title: "Undergraduate Programs",
    description: "Career-focused bachelor programs across business, arts, commerce and technology.",
    programs: ["BBA", "BCA", "B.A. (Computer Science)", "B.Com", "B.Sc IT", "B.Sc Fashion Technology", "B.Tech"],
    tone: "blue",
  },
  {
    code: "DP",
    title: "Diploma & Computer Programs",
    description: "Practical computer education and diploma-level study options.",
    programs: ["PGDCA", "Computer Application"],
    tone: "gold",
  },
];

const skillGroups = [
  {
    title: "Skill Courses",
    programs: ["CMPA", "MLS", "Nursing"],
  },
  {
    title: "Nursing Diploma",
    programs: ["Diploma in Nursing Assistant"],
  },
];

const trades = [
  ["Carpenter", "Practical woodwork and construction skills", "⌂"],
  ["Welder", "Fabrication and joining techniques", "⚒"],
  ["Electrician", "Electrical installation and maintenance", "ϟ"],
  ["Nanny", "Childcare and family support skills", "✚"],
  ["Computer", "Essential computer and digital skills", "⌘"],
  ["Diesel Mechanic", "Diesel engine service and repair", "⚙"],
  ["Fitter", "Mechanical assembly and fitting skills", "◇"],
];

export default function Courses() {
  return <MotionPage><Header /><main>
    <MotionSection className="program-hero course-hero">
      <div className="program-hero-pattern" />
      <div className="shell course-hero-grid">
        <div className="program-hero-inner">
          <p className="eyebrow light">Courses for students across Punjab</p>
          <h1>Punjab career pathways for <span>every kind of ambition.</span></h1>
          <p>Explore postgraduate, undergraduate, computer, nursing, skill and ITI courses with admission counselling available in Punjabi and English.</p>
          <div className="course-counts"><span><strong>14</strong> University programs</span><span><strong>4</strong> Nursing & skill courses</span><span><strong>7</strong> ITI trades</span></div>
        </div>
        <div className="course-hero-poster"><img src="/punjab-students-course-guidance.webp" alt="Punjab students discussing university and career options" width={1200} height={800} fetchPriority="high" /></div>
      </div>
    </MotionSection>

    <nav className="anchor-nav" aria-label="Course categories on this page"><div className="shell"><a href="#university-programs"><span>01</span>University Programs</a><a href="#nursing-skill-courses"><span>02</span>Nursing & Skill</a><a href="#iti-trades"><span>03</span>ITI Trades</a></div></nav>

    <MotionSection className="section degree-section" id="university-programs">
      <div className="shell">
        <div className="section-heading split-heading"><div><p className="eyebrow">University programs for Punjab students</p><h2>Academic options closer to home.</h2></div><p>Punjab students and parents can ask our team about eligibility, duration, study mode, fees and current intake information for each program.</p></div>
        <div className="degree-grid">{universityGroups.map(group => <article className={`degree-card ${group.tone}`} key={group.title}><div className="degree-card-head"><span>{group.code}</span><a href="/#enquiry" aria-label={`Enquire about ${group.title}`}>↗</a></div><h3>{group.title}</h3><p className="course-group-copy">{group.description}</p><ul>{group.programs.map(program => <li key={program}>{program}<span>→</span></li>)}</ul><a className="text-button" href="/#enquiry">Ask about these programs <span>→</span></a></article>)}</div>
        <div className="scholarship-note"><span className="scholarship-symbol">✦</span><div><small>Admissions open 2026-27</small><strong>100% scholarship advertised for SC students in the supplied material.</strong><span>Eligibility, covered fees and institutional terms must be confirmed before application.</span></div><a href="/#enquiry">Check eligibility →</a></div>
      </div>
    </MotionSection>

    <MotionSection className="section medical-section" id="nursing-skill-courses">
      <div className="shell medical-grid">
        <div className="medical-poster"><img src="/punjab-students-course-guidance.webp" alt="Students receiving guidance about nursing and skill courses" width={1200} height={800} loading="lazy" decoding="async" /><span>Career guidance for Punjab students</span></div>
        <div className="medical-content"><p className="eyebrow">Nursing & skill courses in Punjab</p><h2>Practical programmes for career-focused students.</h2><p>Explore focused nursing and professional skill options, with personal guidance on eligibility, duration, fees and the current admission process.</p><div className="medical-card-grid">{skillGroups.map((group, index) => <article key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><ul>{group.programs.map(program => <li key={program}>{program}</li>)}</ul><a href="/#enquiry">Request details →</a></article>)}</div><div className="verification-note"><strong>Before applying:</strong> Contact the Luminary team to confirm the latest eligibility, duration, fees and awarding institution for your selected programme.</div></div>
      </div>
    </MotionSection>

    <MotionSection className="section iti-section" id="iti-trades">
      <div className="shell iti-heading-row"><div><p className="eyebrow light">ITI courses for Punjab youth</p><h2>Practical skills for local career opportunities.</h2></div><p>Seven vocational trades are listed in the supplied Luminary ITI artwork. Punjab students can contact the team for current intake, certification, duration and training-location details.</p></div>
      <div className="shell iti-showcase"><div className="iti-source-poster"><img src="/iti-courses-poster-v2.webp" alt="Redesigned Luminary ITI admissions poster listing seven practical trades" width={1400} height={788} loading="lazy" decoding="async" /></div><div className="trade-grid">{trades.map(([trade, description, icon], index) => <a href="/#enquiry" className="trade-card" key={trade}><span className="trade-number">{String(index + 1).padStart(2, "0")}</span><span className="trade-icon">{icon}</span><h3>{trade}</h3><p>{description}</p><b>↗</b></a>)}</div></div>
    </MotionSection>

    <MotionSection className="admissions-band"><div className="shell admissions-inner"><div><p className="eyebrow light">Punjabi · English counselling</p><h2>Let’s identify the right course.</h2><p>Tell us your qualification, Punjab district and career goal. Your family can discuss relevant options in the language they prefer.</p></div><a className="button button-white" href="/#enquiry">Book a free consultation <span>→</span></a></div></MotionSection>
  </main><Footer /></MotionPage>;
}
