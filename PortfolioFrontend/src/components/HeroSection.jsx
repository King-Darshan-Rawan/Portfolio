import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import hatakeImg from '../assets/hatake.jpg';
export default function HeroSection() {
    const hckImage = `url(${hatakeImg})`;
  return (
    <div
      className="w-full h-screen bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: hckImage }}
    >
      <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-xl mb-2">Hi, I am</h2>
        <h1 className="text-5xl font-bold mb-4">Darshan Malviya</h1>
        <h2 className="text-2xl">
          I am a{' '}
          <span className="text-[#FFD700]">
            <Typewriter
              words={['Developer', 'Electronic Engineer', 'Open Source Contributor', 'Tech Enthusiast']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <div className="flex space-x-6 mt-6 text-2xl">
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}
