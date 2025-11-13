import React, { useEffect, useState } from "react";
import "../styles/Landing.css";

function Landing() {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("home");

  // animated values
const projCount = useCountFlicker(20000);
const vendorCount = useCountFlicker(8000);
const payoutCount = useCountFlicker(85000000); // 8.5 Cr in rupees


  // Testimonials auto-slider
  const testimonials = [
    {
      text: "Orvion helped me land 5 consistent projects in one week — payments are quick and support is great.",
      rating: 5,
    },
    {
      text: "Smooth experience from start to finish. Got my first client within days!",
      rating: 5,
    },
    {
      text: "Reliable payouts, responsive support, and great project opportunities.",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // ==== NUMBER ANIMATION HOOK ====
  function useCountFlicker(finalValue, duration = 1200) {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let start = 0;
      let startTime = performance.now();

      function animate(time) {
        const progress = Math.min((time - startTime) / duration, 1);

        // Flicker effect at the beginning (random numbers)
        if (progress < 0.4) {
          setValue(Math.floor(Math.random() * finalValue));
        } else {
          // Smooth easing toward final number
          const eased = start + (finalValue - start) * progress;
          setValue(Math.floor(eased));
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setValue(finalValue);
        }
      }

      requestAnimationFrame(animate);
    }, [finalValue, duration]);

    return value;
  }


  // handle active nav item on scroll
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[data-section]"));
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let sec of sections) {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        const id = sec.getAttribute("id") || sec.dataset.section;
        if (scrollPos >= top && scrollPos < bottom) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
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
      <header className={`landing-header ${navOpen ? "open" : ""}`}>
        <div className="nav-inner">
          <div className="brand">Orvion</div>

          <nav className={`nav-links ${navOpen ? "show" : ""}`}>
            <a href="#home" className={active === "home" ? "active" : ""} onClick={scrollTo("home")}>Home</a>
            <a href="#features" className={active === "features" ? "active" : ""} onClick={scrollTo("features")}>Features</a>
            <a href="#how" className={active === "how" ? "active" : ""} onClick={scrollTo("how")}>How it works</a>
            <a href="#projects" className={active === "projects" ? "active" : ""} onClick={scrollTo("projects")}>Projects</a>
            <a href="#stats" className={active === "stats" ? "active" : ""} onClick={scrollTo("stats")}>Stats</a>
            <a href="#pricing" className={active === "pricing" ? "active" : ""} onClick={scrollTo("pricing")}>Pricing</a>
            <a href="#faq" className={active === "faq" ? "active" : ""} onClick={scrollTo("faq")}>FAQ</a>
          </nav>

          <div className="nav-cta">
            <button className="btn-ghost" onClick={() => scrollTo("features")({ preventDefault: () => { } })}>See Demo</button>
            <a href="/signin" className="link-signin">Sign in</a>
            <a href="/signup" className="btn-gradient">Get started</a>
            <button className="burger" onClick={() => setNavOpen((s) => !s)} aria-label="menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" data-section="home" className="hero">
          <div className="hero-left">
            <h1 className="hero-title">Ready to Work Without Waiting?</h1>
            <p className="hero-sub">Join Orvion and experience the future of freelancing — fast, direct, and effortless.</p>
            <div className="hero-actions">
              <a href="/signup" className="btn-gradient">Get Started — It's Free</a>
              <button className="btn-outline" onClick={scrollTo("features")}>See Demo</button>
            </div>
            <ul className="hero-feats">
              <li>No upfront fees</li>
              <li>Weekly payouts</li>
              <li>24/7 support</li>
            </ul>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrap" aria-hidden>
              <img
                src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/22673086/384090_848491.png"
                alt="The future of your industry"
                className="hero-image"
              />
              <div className="badge orange">Instant Work</div>
              <div className="badge blue">24/7 Support</div>
              <div className="badge green">Weekly Payouts</div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" data-section="features" className="features">
          <h2>Everything you need to succeed</h2>
          <p className="subtitle">Powerful features designed to help vendors and freelancers manage work efficiently</p>

          <div className="feature-grid">
            <article className="feature-card float">
              <div className="icon square orange">⚡</div>
              <h3>Instant Work</h3>
              <p>Auto-matched projects delivered to you the moment they post.</p>
            </article>
            <article className="feature-card float">
              <div className="icon square blue">🎧</div>
              <h3>24/7 Help</h3>
              <p>Live support and a vendor success team available around the clock.</p>
            </article>
            <article className="feature-card float">
              <div className="icon square green">💵</div>
              <h3>Weekly Payments</h3>
              <p>Get paid fast by default — secure and transparent.</p>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" data-section="how" className="how">
          <h2>How It Works</h2>
          <p className="subtitle">Streamline Your AI Journey</p>
          <div className="how-steps">
            <div className="step float-slow">
              <div className="num">1</div>
              <h4>Sign Up</h4>
              <p>Create your free Orvion vendor account in minutes.</p>
            </div>
            <div className="step float-slow">
              <div className="num">2</div>
              <h4>Grab Projects</h4>
              <p>Browse a live marketplace — no proposals, no waiting.</p>
            </div>
            <div className="step float-slow">
              <div className="num">3</div>
              <h4>Start Earning</h4>
              <p>Claim a project, deliver quality work, and get paid.</p>
            </div>
          </div>
        </section>

        {/* PROJECT IMAGE (overlay removed) */}
        <section id="projects" data-section="projects" className="projects-hero">
          <div className="projects-banner">
            <img
              src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/22673086/662793_11806.png"
              alt="Projects showcase"
            />
          </div>
        </section>

        <section id="stats" data-section="stats" className="stats">
          <div className="stats-row">

            <div className="stat-card card-1 float-small">
              <div className="stat-num">{projCount.toLocaleString()}+</div>
              <div className="stat-label">Projects Posted</div>
            </div>

            <div className="stat-card card-2 float-small">
              <div className="stat-num">{vendorCount.toLocaleString()}+</div>
              <div className="stat-label">Active Vendors</div>
            </div>

            <div className="stat-card card-3 float-small">
              <div className="stat-num">₹{(payoutCount / 10000000).toFixed(1)} Cr</div>
              <div className="stat-label">Weekly Payouts</div>
            </div>

          </div>
        </section>



        <section className="project-grid" aria-labelledby="projects">
          <div className="project-grid-container">
            <h2 className="project-grid-heading">Browse Available Projects</h2>

            <div className="project-grid-row">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div className="project-card float" key={i}>
                  <h4>Project title sample #{i}</h4>
                  <p className="muted">Short description and tags — UI/UX, Figma, React</p>
                  <div className="card-meta">
                    <div>₹{(i * 10 + 5) * 1000}</div>
                    <div>{i + 1} days</div>
                  </div>
                  <button className="btn-card">Grab Project</button>
                </div>
              ))}
            </div>

            <div className="more-projects">
              <button className="btn-more">View all projects</button>
            </div>
          </div>
        </section>




        {/* TESTIMONIALS SLIDER */}
        <section className="testimonials" id="testimonials" data-section="testimonials">
          <h2>Loved by vendors worldwide</h2>
          <p className="subtitle">Join thousands of freelancers who trust Orvion</p>
          <div className="testimonial-box">
            <div className="quote-mark">❝</div>
            <div className="stars">{"★".repeat(testimonials[current].rating)}</div>
            <p className="review-text">{testimonials[current].text}</p>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" data-section="pricing" className="pricing">
          <h2>Simple, transparent pricing</h2>
          

          <div className="pricing-row">
            <div className="price-card float">
              <h4>Free</h4>
              <div className="price">₹0</div>
              <ul>
                <li>Platform access</li>
                <li>Project matching</li>
                <li>Weekly payouts</li>
              </ul>
              <button className="btn-outline">Start free</button>
            </div>

            <div className="price-card recommended float">
              <h4>Pro</h4>
              <div className="price">5% per project</div>
              <ul>
                <li>Priority surfacing</li>
                <li>Faster payouts</li>
                <li>Dedicated support</li>
              </ul>
              <button className="btn-gradient">Upgrade to Pro</button>
            </div>

            <div className="price-card float">
              <h4>Enterprise</h4>
              <div className="price">Custom</div>
              <ul>
                <li>Custom pricing</li>
                <li>Account manager</li>
                <li>SLAs</li>
              </ul>
              <button className="btn-outline">Contact sales</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" data-section="faq" className="faq">
          <h2>Frequently asked questions</h2>
          <div className="faq-grid">
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
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="brand-footer">Orvion</div>
            <p className="muted">
              The all-in-one platform for vendors and freelancers to find work, get paid, and grow their business.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Enter your email" />
              <button className="btn-sub">Subscribe</button>
            </div>
          </div>

          <div className="footer-cols">
            <div className="col">
              <h5>Product</h5>
              <a href="#features" onClick={scrollTo("features")}>Features</a>
              <a href="#pricing" onClick={scrollTo("pricing")}>Pricing</a>
              <a href="#projects" onClick={scrollTo("projects")}>Projects</a>
              <a href="#faq" onClick={scrollTo("faq")}>FAQ</a>
            </div>

            <div className="col">
              <h5>Company</h5>
              <a href="#home" onClick={scrollTo("home")}>About</a>
              <a href="#testimonials" onClick={scrollTo("testimonials")}>Reviews</a>
              <a href="/careers">Careers</a>
            </div>

            <div className="col">
              <h5>Resources</h5>
              <a href="/help">Help Center</a>
              <a href="/guides">Guides</a>
            </div>

            <div className="col">
              <h5>Legal</h5>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Orvion. All rights reserved. &nbsp; support@orvion.io</p>
          <div className="socials">
            <span className="social">f</span>
            <span className="social">t</span>
            <span className="social">in</span>
            <span className="social">ig</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
