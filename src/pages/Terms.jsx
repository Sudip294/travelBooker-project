import React from "react";
import "./Terms.css";

const terms = [
  {
    title: "Acceptance of Terms",
    desc: "By accessing and using TravelBooker, you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our website."
  },
  {
    title: "User Responsibilities",
    desc: "You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your device. You agree to accept responsibility for all activities that occur under your account."
  },
  {
    title: "Booking & Payments",
    desc: "All bookings are subject to availability and confirmation. Payments are processed securely. Please review your booking details carefully before confirming. TravelBooker is not responsible for errors in booking details provided by users."
  },
  {
    title: "Cancellations & Refunds",
    desc: "Cancellation policies vary by destination and service provider. Refunds, if applicable, will be processed according to the provider’s policy. Please review the cancellation terms before booking."
  },
  {
    title: "Intellectual Property",
    desc: "All content, trademarks, and data on this website, including but not limited to text, images, logos, and software, are the property of TravelBooker or its licensors and are protected by copyright and intellectual property laws."
  },
  {
    title: "Limitation of Liability",
    desc: "TravelBooker is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website or services, including but not limited to loss of data or profits."
  },
  {
    title: "Privacy Policy",
    desc: "We value your privacy. Please review our Privacy Policy to understand how we collect, use, and safeguard your information."
  },
  {
    title: "Changes to Terms",
    desc: "We reserve the right to update these Terms at any time. Continued use of the site constitutes acceptance of the revised Terms. We encourage you to review this page periodically."
  },
  {
    title: "Contact Us",
    desc: "If you have any questions about these Terms, please contact our support team via the Contact page."
  }
];

export default function Terms() {
  return (
    <div className="container py-5 fade-in-detail" style={{ maxWidth: 900 }}>
      <div className="text-center mb-4 mt-5">
        <img
          src="https://plus.unsplash.com/premium_vector-1683141046588-e7d469b8d507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fHww?auto=format&fit=crop&w=900&q=80"
          alt="Travel"
          className="img-fluid rounded shadow terms-img-top"
          style={{ maxWidth: 340, marginBottom: 24 }}
        />
        <h1 className="display-5 fw-bold mb-2 mt-3">Terms of Service</h1>
        <p className="lead text-muted mb-0">
          Please read these terms carefully before using TravelBooker. Your use of our website means you accept these terms.
        </p>
      </div>
      <div className="terms-list">
        {terms.map((item, idx) => (
          <div className="terms-card" key={idx} style={{ animationDelay: `${idx * 0.07}s` }}>
            <div className="terms-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <div>
              <h4 className="fw-semibold mb-2">{item.title}</h4>
              <p className="mb-0 text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="terms-footer-note text-center mt-5 text-muted">
        <small>
          Last updated: {new Date().toLocaleDateString()} &nbsp;|&nbsp; © {new Date().getFullYear()} TravelBooker. All rights reserved.
        </small>
      </div>
    </div>
  );
}