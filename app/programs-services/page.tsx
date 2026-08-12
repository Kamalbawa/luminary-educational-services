import { Footer, Header, LeadForm } from "../site-components";

const degreeGroups = [
  { code: "MG", title: "Management & Commerce", programs: ["MBA", "BBA", "M.Com", "B.Com"], tone: "coral" },
  { code: "IT", title: "Computer & Information Technology", programs: ["M.Sc IT", "BCA", "B.Sc IT", "PGDCA", "Computer Applications"], tone: "blue" },
  { code: "ST", title: "Arts, Science & Technology", programs: ["B.A. Computer Science", "M.Sc Fashion Technology", "B.Sc Fashion Technology", "B.Tech"], tone: "gold" },
];

const trades = ["Carpenter", "Welder", "Electrician", "Nanny", "Computer", "Diesel Mechanic", "Fitter"];

export default function ProgramsServices() {
  return <><Header /><main>
    <section className="program-hero"><div className="program-hero-pattern" /><div className="shell program-hero-inner"><p className="eyebrow light">Programs & Services</p><h1>Explore a path built for <span>your ambition.</span></h1><p>Compare academic programs, practical ITI trades and credential-evaluation assistance—then talk to us about the option that fits your goal.</p></div></section>
    <nav className="anchor-nav" aria-label="Programs on this page"><div className="shell"><a href="#degree-programs"><span>01</span>Degree Programs</a><a href="#iti-trades"><span>02</span>ITI Trades</a><a href="#wes-evaluation"><span>03</span>WES Evaluation</a></div></nav>

    <section className="section degree-section" id="degree-programs"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">Academic pathways</p><h2>Degree programs for your next chapter.</h2></div><p>Explore a focused selection of undergraduate, postgraduate and diploma options. Speak with our team for eligibility, duration and intake details.</p></div><div className="degree-grid">{degreeGroups.map(group => <article className={`degree-card ${group.tone}`} key={group.title}><div className="degree-card-head"><span>{group.code}</span><a href="/#enquiry" aria-label={`Enquire about ${group.title}`}>↗</a></div><h3>{group.title}</h3><ul>{group.programs.map(program => <li key={program}>{program}<span>→</span></li>)}</ul><a className="text-button" href="/#enquiry">Ask about these programs <span>→</span></a></article>)}</div><div className="scholarship-note"><span className="scholarship-symbol">✦</span><div><small>Admissions 2026–27</small><strong>Ask about eligibility and applicable scholarship opportunities.</strong></div><a href="/#enquiry">Check eligibility →</a></div></div></section>

    <section className="section iti-section" id="iti-trades"><div className="shell iti-grid"><div className="iti-intro"><p className="eyebrow light">Practical pathways</p><h2>Skills you can take into the real world.</h2><p>Explore hands-on trade options designed around practical learning and career-focused development.</p><div className="iti-photo" role="img" aria-label="Students learning practical technical skills" /></div><div className="trade-grid">{trades.map((trade, index) => <a href="/#enquiry" className="trade-card" key={trade}><span className="trade-number">{String(index + 1).padStart(2, "0")}</span><span className="trade-icon">{["⌂", "⚒", "ϟ", "✚", "⌘", "⚙", "◇"][index]}</span><h3>{trade}</h3><p>View course details</p><b>↗</b></a>)}</div></div></section>

    <section className="section wes-section" id="wes-evaluation"><div className="shell wes-grid"><div className="wes-copy"><p className="eyebrow">Global credential pathway</p><h2>WES credential evaluation assistance, made clearer.</h2><p className="large-copy">Understand the process, prepare the required information and move forward with greater confidence.</p><p>A credential evaluation can help receiving organisations understand education completed in another country. Luminary provides independent assistance with understanding requirements and preparing for submission.</p><div className="wes-for"><strong>Common purposes</strong><span>Higher education</span><span>Professional licensing</span><span>Employment</span><span>Immigration requirements</span></div><a className="button button-primary" href="/#enquiry">Discuss my requirement <span>↗</span></a><small className="disclaimer">Luminary provides independent application assistance and does not issue WES evaluation reports.</small></div><div className="wes-process"><p className="eyebrow">How we help</p>{["Share your destination and goal", "Review likely requirements", "Organise application documents", "Prepare for provider submission", "Understand tracking and next steps"].map((step, index) => <div className="wes-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></div>)}</div></div></section>

    <section className="section faq-section"><div className="shell faq-grid"><div><p className="eyebrow">Common questions</p><h2>Answers before you begin.</h2><p>Still unsure? Send us your question and we’ll guide you to the relevant pathway.</p></div><div className="faq-list">{[
      ["Which program is right for me?", "We begin with your education, interests and career goal, then help you identify suitable options and the information needed to compare them."],
      ["What documents are needed for admission?", "Requirements vary by program and institution. Our team will share a relevant checklist after understanding the program you are considering."],
      ["Are scholarships available?", "Availability depends on category, institution, program and eligibility conditions. Contact us for the applicable details."],
      ["Can Luminary issue a WES report?", "No. Evaluation reports are issued by the evaluation provider. Luminary offers independent guidance and preparation assistance."],
    ].map(([q,a], index) => <details key={q} open={index === 0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    <LeadForm />
  </main><Footer /></>;
}
