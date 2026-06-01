export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">
          Mohamed Shamir S
        </h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="flex flex-col items-center justify-center text-center min-h-[80vh]">
        <h1 className="text-6xl font-bold">
          Full Stack Developer
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          Passionate about building modern web applications
          using React, Next.js, Node.js, Express and PostgreSQL.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg">
          View Projects
        </button>
      </section>

      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-600 max-w-3xl">
          I am Mohamed Shamir S, an aspiring Full Stack Developer
          focused on creating responsive, scalable and user-friendly
          web applications using modern technologies.
        </p>
      </section>
    </main>
  );
}