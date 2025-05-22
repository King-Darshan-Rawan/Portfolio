import { useEffect, useState } from "react";

const navItems = ["HOME", "ABOUT", "EXPERIENCE", "EDUCATION", "CONTACT"];

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [isAtTop, setIsAtTop] = useState(true);

  const handleClick = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAtTop(scrollY < 10);

      let current = "HOME"; // fallback
      for (const id of navItems) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isAtTop) return null;

  return (
    <nav className="w-full bg-[#0a192f] px-10 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="text-[#FFD700] text-2xl font-bold">DARSHAN MALVIYA</div>
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={`relative cursor-pointer text-white transition duration-300`}
          >
            {item}
            <span
              className={`absolute left-1/2 bottom-[-2px] w-full h-[2px] bg-[#FFD700] origin-center transform -translate-x-1/2 transition-transform duration-300 ease-in-out ${
                active === item ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
