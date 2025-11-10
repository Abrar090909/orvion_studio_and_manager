import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Landing.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="landing-container">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-text">
          <h1>Ready to Work Without Waiting?</h1>
          <p>
            Join Orvion and experience the future of freelancing fast, direct, and effortless.
          </p>
          <Link to="/signup" className="glow-button">Get Started</Link>

        </div>
      </section>

      {/* HERO IMAGE BELOW BUTTON */}
      <section className="feature-section" data-aos="zoom-in">
        <h2>The Future of Your Industry Starts Here</h2>
        <img
          src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/22673086/384090_848491.png"
          alt="Orvion Report"
        />
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works" data-aos="fade-up">
        <h2>How It Works</h2>
        <p className="subtitle">Streamline Your AI Journey</p>

        <div className="steps">
          <div className="step" data-aos="fade-right">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Sign Up</h3>
              <p>Create your free Orvion vendor account in minutes.</p>
            </div>
          </div>

          <div className="step" data-aos="fade-right" data-aos-delay="200">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Grab Projects</h3>
              <p>Browse a live marketplace of available tasks — no proposals, no waiting.</p>
            </div>
          </div>

          <div className="step" data-aos="fade-right" data-aos-delay="400">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Start Earning</h3>
              <p>Claim a project, deliver quality work, and get paid seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ORVION SECTION */}
      <section className="why-orvion">
        <h2 data-aos="fade-up">Why Orvion</h2>

        <div className="why-item" data-aos="fade-up">
          <img
            src="https://uploads.strikinglycdn.com/static/backgrounds/business-2/138.jpg"
            alt="Instant Access"
          />
          <div className="why-text">
            <h3>⚡ Instant Access</h3>
            <p>No middlemen, no waiting for approval.</p>
          </div>
        </div>

        <div className="why-item" data-aos="fade-up" data-aos-delay="200">
          <img
            src="https://uploads.strikinglycdn.com/static/backgrounds/business-2/152.jpg"
            alt="Real Projects"
          />
          <div className="why-text">
            <h3>📂 Real Projects</h3>
            <p>Verified tasks from trusted clients.</p>
          </div>
        </div>

        <div className="why-item" data-aos="fade-up" data-aos-delay="400">
          <img
            src="https://uploads.strikinglycdn.com/static/backgrounds/business-2/148.jpg"
            alt="Seamless Payments"
          />
          <div className="why-text">
            <h3>💸 Seamless Payments</h3>
            <p>Fast, direct, and secure transactions.</p>
          </div>
        </div>
      </section>
      {/* Final futuristic image section (the purple one) */}
<section className="future-banner" data-aos="zoom-in">
  <h2>The Future of Industry Collaboration</h2>
  <div className="future-banner-image">
    <img
      src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/22673086/662793_11806.png"
      alt="The future of your industry starts here"
    />
  </div>
</section>


      <Footer />
    </div>
  );
}

export default Landing;
