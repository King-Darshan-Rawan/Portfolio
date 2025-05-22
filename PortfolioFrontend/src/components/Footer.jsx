import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMediumM,
  FaAlignLeft,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-black py-8 relative bg-gradient-to-b from-[#1A1F29] to-[#30353e] text-white">
      {/* Floating Badges (Optional) */}

      {/* Copyright and Policy */}
      <div className="mb-4">
        <p className="text-sm">
          Copyright © 2025{" "}
          <a
            href="https://www.linkedin.com/in/darshan-malviya-431864258"
            className="text-blue-600 hover:underline"
          >
            Darshan Malviya
          </a>
          .{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://www.facebook.com/share/1EYAyCeayW/"
          target="_blank"
          rel="noreferrer"
        >
          <IconCircle Icon={FaFacebookF} />
        </a>
        <IconCircle Icon={FaTwitter} />
        <a
          href="https://www.linkedin.com/in/darshan-malviya-431864258"
          target="_blank"
          rel="noreferrer"
        >
          <IconCircle Icon={FaLinkedinIn} />
        </a>
        <IconCircle Icon={FaMediumM} />
        <IconCircle Icon={FaAlignLeft} />
        <a
          href="https://github.com/King-Darshan-Rawan"
          target="_blank"
          rel="noreferrer"
        >
          <IconCircle Icon={FaGithub} />
        </a>
        <a
          href="https://gitlab.com/King-Darshan-Rawan"
          target="_blank"
          rel="noreferrer"
        >
          <IconCircle Icon={FaGitlab} />
        </a>
      </div>
    </footer>
  );
};

// Reusable circle icon button
const IconCircle = ({ Icon }) => (
  <button className="border border-black rounded-full p-3 hover:bg-black hover:text-white transition">
    <Icon size={16} />
  </button>
);

export default Footer;
