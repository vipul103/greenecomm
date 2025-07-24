import React from "react";

const social_links = [
  {
    link: "https://www.facebook.com/greenenergypowerco",
    target: "_blank",
    icon: "fa-brands fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://x.com/Greenenergy_au",
    target: "_blank",
    icon: "fa-brands fa-twitter",
    name: "Twitter",
  },
  {
    link: "https://www.linkedin.com/company/green-energy-power-co/",
    target: "_blank",
    icon: "fa-brands fa-linkedin-in",
    name: "Linkedin",
  },
  {
    link: "https://www.instagram.com/greenenergypowerco.au/",
    target: "_blank",
    icon: "fa-brands fa-instagram",
    name: "Instagram",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a key={i} href={l.link} target={l.target}>
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;


export function SocialShare() {
  return (
    <>
      {social_links.slice(0, 3).map((l, i) => (
        <a key={i} href={l.link} target={l.target}>
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
}
