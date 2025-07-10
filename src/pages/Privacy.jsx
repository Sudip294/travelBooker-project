import React from "react";
import "./Privacy.css";

const privacySections = [
  {
    title: "Introduction",
    desc: "At TravelBooker, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website."
  },
  {
    title: "Information We Collect",
    desc: "We may collect personal information such as your name, email address, contact details, and payment information when you register, book, or interact with our services. We also collect non-personal data like browser type, device information, and usage statistics."
  },
  {
    title: "How We Use Your Information",
    desc: "Your information is used to process bookings, personalize your experience, improve our website, communicate with you, and comply with legal obligations. We do not sell your personal information to third parties."
  },
  {
    title: "Cookies & Tracking",
    desc: "We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookies through your browser settings."
  },
  {
    title: "Data Security",
    desc: "We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security."
  },
  {
    title: "Third-Party Services",
    desc: "Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies before providing any information."
  },
  {
    title: "Children's Privacy",
    desc: "TravelBooker does not knowingly collect information from children under 13. If you believe we have such information, please contact us to have it removed."
  },
  {
    title: "Your Rights",
    desc: "You have the right to access, update, or delete your personal information. To exercise these rights, please contact our support team."
  },
  {
    title: "Changes to This Policy",
    desc: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date."
  },
  {
    title: "Contact Us",
    desc: "If you have any questions or concerns about this Privacy Policy, please contact us via the Contact page."
  }
];

export default function Privacy() {
  return (
    <div className="container py-5 fade-in-detail" style={{ maxWidth: 900 }}>
      <div className="text-center mb-4 mt-5">
        <img
          src="https://plus.unsplash.com/premium_vector-1726816313148-e281182cf809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmFjeXxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&w=900&q=80"
          alt="Privacy"
          className="img-fluid rounded shadow privacy-img-top"
          style={{ maxWidth: 340, marginBottom: 24 }}
        />
        <h1 className="display-5 fw-bold mb-2 mt-3">Privacy Policy</h1>
        <p className="lead text-muted mb-0">
          Your privacy matters. Please review how we handle your information at TravelBooker.
        </p>
      </div>
      <div className="privacy-list">
        {privacySections.map((item, idx) => (
          <div className="privacy-card" key={idx} style={{ animationDelay: `${idx * 0.07}s` }}>
            <div className="privacy-icon">
              <i className="bi bi-lock-fill"></i>
            </div>
            <div>
              <h4 className="fw-semibold mb-2">{item.title}</h4>
              <p className="mb-0 text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="privacy-footer-note text-center mt-5 text-muted">
        <small>
          Last updated: {new Date().toLocaleDateString()} &nbsp;|&nbsp; © {new Date().getFullYear()} TravelBooker. All rights reserved.
        </small>
      </div>
    </div>
  );
}