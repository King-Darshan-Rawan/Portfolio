import { useState } from "react";

const navItems = ["HOME", "ABOUT", "EXPERIENCE", "EDUCATION", "CONTACT"];

export default function Navbar() {
  const [active, setActive] = useState("HOME");

  return (
    <nav className="w-full bg-[#0a192f] px-10 py-4 flex justify-between items-center shadow-md">
      <div className="text-white text-2xl font-bold">DARSHAN  MALVIYA</div>
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li
            key={item}
            className={`relative cursor-pointer text-white transition duration-300 ${
              active === item ? "after:scale-x-100" : "after:scale-x-0"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
            <span
              className="absolute left-1/2 bottom-[-2px] w-full h-[2px] bg-[#FFD700] origin-center transform -translate-x-1/2 scale-x-0 transition-transform duration-300 ease-in-out"
              style={{
                transformOrigin: "center",
                transform: active === item ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(0)",
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
