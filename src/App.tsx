import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Set initial state to true for dark mode

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 ${
          darkMode ? "bg-black" : "bg-gray-200"
        } p-4 flex justify-between items-center`}
      >
        <h1 className="text-xl md:text-2xl font-bold">Danny G.</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-green-500">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-green-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-500">
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-full ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-900"
          }`}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Main Content */}
      <div
        id="home"
        className="pt-40 pb-20 px-4 md:px-8 lg:px-16 xl:px-32 max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Danny Garcia</h1>
          <p className="text-xl md:text-2xl mb-6">
            Software Engineer (Full Stack)
          </p>
          <img
            src="/Me in bomber jacket.PNG"
            alt="Danny Garcia in bomber jacket"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto"
          />
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Top Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Spring Boot",
              "PostgreSQL",
              "Java",
              "React",
              "TypeScript",
              "Figma",
            ].map((skill) => (
              <div
                key={skill}
                className={`p-4 rounded-lg text-center ${
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <h3 className="text-lg font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Projects
          </h2>
          <div className="space-y-12">
            {/* LeetCode Spaced Repetition App */}
            <div
              className={`p-4 md:p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                LeetCode Spaced Repetition App
              </h3>
              <p className="mb-4">
                This study app leverages spaced repetition to help users
                organize their folders, lists, and problems while tracking
                confidence levels. Items with lower confidence scores are
                prioritized, ensuring users focus on their most relevant study
                materials.
              </p>
              <div className="mb-4 space-y-2">
                <a
                  href="https://leetcode-spaced-repetition-study-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/dgarcia1724/leetcode_study_app_react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block"
                >
                  Front-end GitHub
                </a>
                <a
                  href="https://github.com/dgarcia1724/leetcode-study-app-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block"
                >
                  Back-end GitHub
                </a>
              </div>
              <h4 className="font-semibold mb-2">Technologies Used:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Frontend: React, Vite, Tailwind CSS, React Query</li>
                <li>Backend: Spring Boot, PostgreSQL</li>
                <li>Authentication: Firebase</li>
                <li>Other: Firebase Firestore, Toast notifications</li>
              </ul>
              <h4 className="font-semibold mb-2">Design Tools:</h4>
              <p className="mb-4">
                Figma: Used for UI design and database schema creation
              </p>
              <div className="space-y-4">
                <img
                  src="/ProjectPicture.png"
                  alt="Project Overview"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="/FigmaUserInterface.png"
                  alt="Figma UI Design"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="/FigmaDataBaseSchema.png"
                  alt="Database Schema"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            {/* Peak Sports Streaming App */}
            <div
              className={`p-4 md:p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Peak Sports Streaming App
              </h3>
              <p className="mb-4">
                Worked as UI Designer on a sports streaming app concept,
                focusing on user experience and modern design principles.
              </p>
              <a
                href="https://www.behance.net/gallery/143472421/Peak-Sports-Streaming-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mb-4 inline-block"
              >
                View on Behance
              </a>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Design Tools:</h4>
                <p>Figma: Used for UI design</p>
              </div>
              <div className="space-y-6">
                <img
                  src="/PeakSportsHero.png"
                  alt="Peak Sports Hero"
                  className="w-full h-auto rounded-lg"
                />

                <div>
                  <h4 className="text-lg font-semibold mb-2">Prototype</h4>
                  <img
                    src="/Peak0.png"
                    alt="Peak Sports Prototype"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">UI Design</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img
                      src="/Peak1.png"
                      alt="Peak Sports Design 1"
                      className="w-full h-auto rounded-lg"
                    />
                    <img
                      src="/Peak2.png"
                      alt="Peak Sports Design 2"
                      className="w-full h-auto rounded-lg"
                    />
                    <img
                      src="/Peak3.png"
                      alt="Peak Sports Design 3"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-4">
            Get in touch for opportunities or collaborations
          </p>
          <div className="space-y-2">
            <p className="text-blue-500">dannyg17017@gmail.com</p>
            <a
              href="https://www.linkedin.com/in/daniel-g-7490a8230/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dgarcia1724"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
