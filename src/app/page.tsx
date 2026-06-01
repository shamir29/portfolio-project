export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b">
        <h1 className="text-2xl font-bold">Mohamed Shamir S</h1>

        <ul className="hidden md:flex gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          Mohamed Shamir S
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4 text-gray-700">
          Full Stack Developer
        </h2>

        <p className="max-w-2xl mt-6 text-gray-600">
          Building scalable web applications using
          React, Next.js, Node.js, Express.js and PostgreSQL.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-lg">
            View Projects
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Contact Me
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-600 max-w-3xl">
          I am Mohamed Shamir S, an aspiring Full Stack Developer
          passionate about building responsive, scalable and
          user-friendly web applications using modern technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-20 bg-gray-50">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Git",
            "GitHub",
            "Docker",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">
              SplitWise Clone
            </h3>

            <p className="text-gray-600 mt-3">
              Expense tracking application built using
              React, Node.js and PostgreSQL.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">
              Portfolio Website
            </h3>

            <p className="text-gray-600 mt-3">
              Personal portfolio built with
              Next.js, TypeScript and Tailwind CSS.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 bg-gray-50">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>

        <div className="space-y-3">
          <p>Email: mohamedshamir45@gmail.com</p>
          <p>GitHub: github.com/shamir29</p>
          <p>LinkedIn: www.linkedin.com/in/mohamed-shamir-a2725b2a5</p>
        </div>
      </section>

    </main>
  );
}