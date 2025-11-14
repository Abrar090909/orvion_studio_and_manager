import React, { useEffect, useState } from "react";
import "../styles/Landing.css";

// ================= HOOK OUTSIDE COMPONENT =================
function useCountFlicker(finalValue, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    let startTime = performance.now();

    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);

      if (progress < 0.4) {
        setValue(Math.floor(Math.random() * finalValue));
      } else {
        const eased = start + (finalValue - start) * progress;
        setValue(Math.floor(eased));
      }

      if (progress < 1) requestAnimationFrame(animate);
      else setValue(finalValue);
    }

    requestAnimationFrame(animate);
  }, [finalValue, duration]);

  return value;
}

// =========================================================

function Landing() {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("home");

  // animated values
  const projCount = useCountFlicker(20000);
  const vendorCount = useCountFlicker(8000);
  const payoutCount = useCountFlicker(85000000);

  // testimonials
  const testimonials = [
    { text: "Orvion helped me land 5 consistent projects...", rating: 5 },
    { text: "Smooth experience from start to finish...", rating: 5 },
    { text: "Reliable payouts & responsive support.", rating: 5 },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // NAV ACTIVE STATE
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[data-section]"));
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let sec of sections) {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (scrollPos >= top && scrollPos < bottom) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="landing-root">

      {/* HEADER */}
      <header className={`landing-header ${navOpen ? "open" : ""}`}>
        <div className="landing-nav-inner">
          <div className="landing-brand">Orvion</div>

          <nav className={`landing-nav-links ${navOpen ? "show" : ""}`}>
            <a href="#home" className={active === "home" ? "active" : ""} onClick={scrollTo("home")}>Home</a>
            <a href="#features" className={active === "features" ? "active" : ""} onClick={scrollTo("features")}>Features</a>
            <a href="#how" className={active === "how" ? "active" : ""} onClick={scrollTo("how")}>How it works</a>
            <a href="#projects" className={active === "projects" ? "active" : ""} onClick={scrollTo("projects")}>Projects</a>
            <a href="#stats" className={active === "stats" ? "active" : ""} onClick={scrollTo("stats")}>Stats</a>
            <a href="#pricing" className={active === "pricing" ? "active" : ""} onClick={scrollTo("pricing")}>Pricing</a>
            <a href="#faq" className={active === "faq" ? "active" : ""} onClick={scrollTo("faq")}>FAQ</a>
          </nav>

          <div className="landing-nav-cta">
            <button className="landing-btn-ghost">See Demo</button>
            <a href="/signin" className="landing-link-signin">Sign in</a>
            <a href="/signup" className="landing-btn-gradient">Get started</a>

            <button className="landing-burger" onClick={() => setNavOpen((s) => !s)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" data-section="home" className="landing-hero">
          <div className="landing-hero-left">
            <h1 className="landing-hero-title">Ready to Work Without Waiting?</h1>
            <p className="landing-hero-sub">Join Orvion and experience the future of freelancing — fast, direct, and effortless.</p>

            <div className="landing-hero-actions">
              <a href="/signup" className="landing-btn-gradient">Get Started — It's Free</a>
              <button className="landing-btn-outline" onClick={scrollTo("features")}>See Demo</button>
            </div>

            <ul className="landing-hero-feats">
              <li>No upfront fees</li>
              <li>Weekly payouts</li>
              <li>24/7 support</li>
            </ul>
          </div>

          <div className="landing-hero-right">
            <div className="landing-hero-image-wrap" aria-hidden>
              <img
                src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/22673086/384090_848491.png"
                alt="The future of your industry"
                className="landing-hero-image"
              />
              <div className="landing-badge landing-orange">Instant Work</div>
              <div className="landing-badge landing-blue">24/7 Support</div>
              <div className="landing-badge landing-green">Weekly Payouts</div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" data-section="features" className="landing-features">
          <h2>Everything you need to succeed</h2>
          <p className="landing-subtitle">Powerful features designed to help vendors and freelancers manage work efficiently</p>

          <div className="landing-feature-grid">
            <article className="landing-feature-card float">
              <div className="landing-icon landing-square-orange">⚡</div>
              <h3>Instant Work</h3>
              <p>Auto-matched projects delivered to you the moment they post.</p>
            </article>

            <article className="landing-feature-card float">
              <div className="landing-icon landing-square-blue">🎧</div>
              <h3>24/7 Help</h3>
              <p>Live support and a vendor success team available around the clock.</p>
            </article>

            <article className="landing-feature-card float">
              <div className="landing-icon landing-square-green">💵</div>
              <h3>Weekly Payments</h3>
              <p>Get paid fast by default — secure and transparent.</p>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" data-section="how" className="landing-how">
          <h2>How It Works</h2>
          <p className="landing-subtitle">Streamline Your AI Journey</p>

          <div className="landing-how-steps">
            <div className="landing-step float-slow">
              <div className="landing-num">1</div>
              <h4>Sign Up</h4>
              <p>Create your free Orvion vendor account in minutes.</p>
            </div>

            <div className="landing-step float-slow">
              <div className="landing-num">2</div>
              <h4>Grab Projects</h4>
              <p>Browse a live marketplace — no proposals, no waiting.</p>
            </div>

            <div className="landing-step float-slow">
              <div className="landing-num">3</div>
              <h4>Start Earning</h4>
              <p>Claim a project, deliver quality work, and get paid.</p>
            </div>
          </div>
        </section>

        {/* PROJECT IMAGE */}
        <section id="projects" data-section="projects" className="landing-projects-hero">
          <div className="landing-projects-banner">
            <img
              src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/22673086/662793_11806.png"
              alt="Projects showcase"
            />
          </div>
        </section>

        {/* STATS */}
        <section id="stats" data-section="stats" className="landing-stats">
          <div className="landing-stats-row">

            <div className="landing-stat-card float-small">
              <div className="landing-stat-num">{projCount.toLocaleString()}+</div>
              <div className="landing-stat-label">Projects Posted</div>
            </div>

            <div className="landing-stat-card float-small">
              <div className="landing-stat-num">{vendorCount.toLocaleString()}+</div>
              <div className="landing-stat-label">Active Vendors</div>
            </div>

            <div className="landing-stat-card float-small">
              <div className="landing-stat-num">₹{(payoutCount / 10000000).toFixed(1)} Cr</div>
              <div className="landing-stat-label">Weekly Payouts</div>
            </div>

          </div>
        </section>

        {/* ================== FIXED PROJECT GRID ================== */}
        <section className="landing-project-grid">
          <div className="landing-project-grid-container">
            <h2 className="landing-project-grid-heading">Browse Available Projects</h2>

            <div className="landing-project-grid-row">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div className="landing-project-card landing-float" key={i}>
                  <h4>Project title sample #{i}</h4>
                  <p className="landing-muted">Short description and tags — UI/UX, Figma, React</p>

                  <div className="landing-card-meta">
                    <div>₹{(i * 10 + 5) * 1000}</div>
                    <div>{i + 1} days</div>
                  </div>

                  <button className="landing-btn-card">Grab Project</button>
                </div>
              ))}
            </div>

            <div className="landing-more-projects">
              <button className="landing-btn-more">View all projects</button>
            </div>
          </div>
        </section>


        {/* TESTIMONIALS */}
        <section id="testimonials" data-section="testimonials" className="landing-testimonials">
          <h2>Loved by vendors worldwide</h2>
          <p className="landing-subtitle">Join thousands of freelancers who trust Orvion</p>

          <div className="landing-testimonial-box">
            <div className="landing-quote-mark">❝</div>
            <div className="landing-stars">{"★".repeat(testimonials[current].rating)}</div>
            <p className="landing-review-text">{testimonials[current].text}</p>
          </div>
        </section>
        {/* PRICING (replaced with condensed long plans) */}
        <section id="pricing" data-section="pricing" className="pricing anim">
          <h2>Simple, transparent pricing</h2>
          <p className="subtitle">Choose the plan that works best for you. No hidden fees.</p>

          <div className="pricing-row">
            <div className="price-card float">
              <div className="price-top">Basic</div>
              <div className="price large">₹499</div>
              <div className="price-sub">per month</div>
              <ul className="plan-bullets">
                <li>Up to 5 team members</li>
                <li>Up to 50 projects / month</li>
                <li>Weekly payout cycle</li>
                <li>Instant project access</li>
              </ul>
              <button className="btn-gradient">Select</button>
            </div>

            <div className="price-card recommended float">
              <div className="price-top">Standard</div>
              <div className="price large">₹999</div>
              <div className="price-sub">per month</div>
              <ul className="plan-bullets">
                <li>Up to 100 team members</li>
                <li>Up to 150 projects / month</li>
                <li>Priority project access & faster payouts</li>
                <li>Weekly analytics report</li>
              </ul>
              <button className="btn-gradient">Select</button>
            </div>

            <div className="price-card float">
              <div className="price-top">Pro</div>
              <div className="price large">₹1,499</div>
              <div className="price-sub">per month</div>
              <ul className="plan-bullets">
                <li>Unlimited team members & projects</li>
                <li>API access for automation</li>
                <li>VIP support and account manager</li>
                <li>Custom payout cycles & white-label options</li>
              </ul>
              <button className="btn-gradient">Contact sales</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" data-section="faq" className="landing-faq">
          <h2>Frequently asked questions</h2>

          <div className="landing-faq-grid">
            <details>
              <summary>How fast can I get my first project?</summary>
              <p>Depends on availability and profile match, but many vendors get a job within days.</p>
            </details>

            <details>
              <summary>When do I get paid?</summary>
              <p>Weekly payouts by default — transparent and fast.</p>
            </details>

            <details>
              <summary>How does escrow work?</summary>
              <p>Escrow holds funds until delivery is approved, protecting both sides.</p>
            </details>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <div className="landing-footer-left">
            <div className="landing-brand-footer">Orvion</div>

            <p className="landing-muted">
              The all-in-one platform for vendors and freelancers to find work, get paid, and grow their business.
            </p>

            <div className="landing-subscribe">
              <input type="email" placeholder="Enter your email" />
              <button className="landing-btn-sub">Subscribe</button>
            </div>
          </div>

          <div className="landing-footer-cols">

            <div className="landing-col">
              <h5>Product</h5>
              <a href="#features" onClick={scrollTo("features")}>Features</a>
              <a href="#pricing" onClick={scrollTo("pricing")}>Pricing</a>
              <a href="#projects" onClick={scrollTo("projects")}>Projects</a>
              <a href="#faq" onClick={scrollTo("faq")}>FAQ</a>
            </div>

            <div className="landing-col">
              <h5>Company</h5>
              <a href="#home" onClick={scrollTo("home")}>About</a>
              <a href="#testimonials" onClick={scrollTo("testimonials")}>Reviews</a>
              <a href="/careers">Careers</a>
            </div>

            <div className="landing-col">
              <h5>Resources</h5>
              <a href="/help">Help Center</a>
              <a href="/guides">Guides</a>
            </div>

            <div className="landing-col">
              <h5>Legal</h5>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>

          </div>
        </div>

        <div className="landing-footer-bottom">
          <p>© 2025 Orvion. All rights reserved. &nbsp; support@orvion.io</p>

          <div className="landing-socials">
            <span className="landing-social">f</span>
            <span className="landing-social">t</span>
            <span className="landing-social">in</span>
            <span className="landing-social">ig</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Landing;
