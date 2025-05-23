import { useState } from 'react';
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProfileSkills() {
  const [showContact, setShowContact] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a23] text-white py-12 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[75%] mx-auto space-y-12 lg:space-y-0 lg:space-x-12">

        {/* Profile Section */}
        <div className="w-full lg:w-1/2 leading-[5vh]">
          <h2 className="text-2xl font-bold text-white mb-6 border-b-4 border-[#FFD700] inline-block">PROFILE</h2>
          <p className="mb-4">💡 MERN Stack Developer, IoT Enthusiast, and Open Source Contributor</p>
          <p className="mb-4">🎓 Pursuing B.E. from SGSITS Indore, with a passion for Cloud, Development, IoT, and Embedded Systems</p>
          <p className="mb-4">🚀 Built projects combining ESP32, Blynk, OpenCV, and camera modules for real-world impact</p>

          <div className="space-y-3 mt-6">
            <p><strong>Full Name:</strong> Darshan Malviya</p>
            <p><strong>Birth Date:</strong> 15 May</p>
            <p><strong>Professional Interests:</strong> Full Stack Development, IoT Projects, OpenCV</p>
            <p>
              <strong>Phone:</strong>{' '}
              {showContact ? (
                '+91-9479812392'
              ) : (
                <span className="text-[#FFD700] cursor-pointer underline" onClick={() => setShowContact(true)}>
                  CLICK TO REVEAL
                </span>
              )}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              {showEmail ? (
                'malviyadarshan03@gmail.com'
              ) : (
                <span className="text-[#FFD700] cursor-pointer underline" onClick={() => setShowEmail(true)}>
                  CLICK TO REVEAL
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full lg:w-1/2 leading-[5vh]">
          <h2 className="text-2xl font-bold text-white mb-6 border-b-4 border-[#FFD700] inline-block">SKILLS</h2>
          <p className="mb-6 leading-relaxed">
            I specialize in developing scalable web applications and hardware-integrated systems using the MERN stack, ESP32, and OpenCV. Currently exploring AI-powered automation in IoT environments.
          </p>

          <div className="space-y-5">
            {[
              { skill: 'Web Application Development', level: 95 },
              { skill: 'HTML & CSS, JavaScript', level: 100 },
              { skill: 'IoT + ESP32 Projects', level: 90 },
              { skill: 'OpenCV with Python', level: 85 },
              { skill: 'Cloud & Blynk Integration', level: 80 },
            ].map(({ skill, level }) => (
              <div key={skill}>
                <div className="flex justify-between mb-1">
                  <span>{skill}</span>
                  <span>{level}%</span>
                </div>
                <div className="w-full bg-white h-2 rounded-full">
                  <div className="bg-[#FFD700] h-2 rounded-full" style={{ width: `${level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://www.linkedin.com/in/darshan-malviya-431864258"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-yellow-400 transition"
        >
          <SiLinuxprofessionalinstitute className="text-lg" />
          View Profile
        </a>
      </div>
    </div>
  );
}
