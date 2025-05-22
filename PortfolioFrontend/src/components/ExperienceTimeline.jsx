const experiences = [
  {
    title: "Inter collage Iot Project",
    role: "Iot & Robotics Engineer",
    date: "March 2025 – May 2025",
    align: "left",
    icon: "💼",
  },
  {
    title: "Aayam 2025",
    role: "Won Events Kaho Kahani & Paper Presentation",
    date: "Jan 2025 (3days)",
    align: "right",
    icon: "🧠",
  },
  {
    title: "MERN Stack Development",
    role: "Full Stack JavaScript (React JS) Specialist",
    date: "May 2024 – July 2024",
    align: "left",
    icon: "⚙️",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative bg-gradient-to-b from-[#0a0a23] to-[#1A1F29] text-white py-20 ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">EXPERIENCE</h2>
        <p className="text-center text-gray-400 mb-12">
          A variety of experiences all over the world.
        </p>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-16 flex items-center justify-between w-full ${
                exp.align === "left" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Spacer */}
              <div className="w-5/12"></div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center z-10 shadow-lg">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="bg-[#161B22] border border-gray-700 text-white p-6 rounded-lg shadow-lg w-5/12">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-300">{exp.role}</p>
                <p className="mt-2 text-sm text-gray-500">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
