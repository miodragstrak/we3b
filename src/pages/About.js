import React from "react";
import "../styles/about.css";

const teamMembers = [
  { name: "Miodrag Strak", role: "Director", bio: "Founder" },
  { name: "Kristina Mosić", role: "Developer", bio: "Full-stack expert driving innovation." },
];

const externalMembers = [
  { name: "Nenad Dimitrovski", role: "IoT Expert", bio: "IoT Expert" },
];

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <h2>Our Team</h2>
      <table className="team-table">
        <tbody>
          {teamMembers.map((member, index) => (
            <tr key={index}>
              <td className="team-member">{member.name} <br /><small>{member.role}</small></td>
              <td className="team-bio">{member.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>External Team Members</h2>
      <table className="team-table">
        <tbody>
          {externalMembers.map((member, index) => (
            <tr key={index}>
              <td className="team-member">{member.name} <br /><small>{member.role}</small></td>
              <td className="team-bio">{member.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Contact Us</h2>
      <div className="contact-section">
        <p><strong>Block Build DOO</strong></p>
        <p><strong>Ledger Lemur PR</strong></p>
        <p>3. oktobar<br />19210 Bor<br />Serbia</p>
        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <p><a href="https://www.linkedin.com/company/block-build-bor/" target="_blank" rel="noopener noreferrer">LinkedIn Profile Block Build</a></p>
        <p><a href="https://www.linkedin.com/company/lelemur/" target="_blank" rel="noopener noreferrer">LinkedIn Profile Ledger Lemur</a></p>
      </div>
    </div>
  );
};

export default About;