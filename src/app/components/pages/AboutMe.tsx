export default function AboutMe() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl">
        Hello! I'm Rifat Hossain
      </h1>
      <p className="text-gray-600 text-sm md:text-base">
        Software Engineer specializing in Backend Systems.
      </p>

      <div className="space-y-4 text-gray-700 text-sm md:text-base">
        <p>
          I'm a{" "}
          <span className="font-semibold">
            Software Engineer
          </span>{" "}
          with experience across various technologies. My journey began in Game Development, and
          now I'm exploring the fascinating world of Backend and Distributed Systems.
        </p>
        <p>
          Currently, I primarily work with JavaScript/TypeScript, while maintaining
          proficiency in C/C++ and Python for academic pursuits. When not coding, you'll find me
          gaming with friends, reading books, or playing acoustic guitar.
        </p>
      </div>

      {/* Skills Section */}
      <div className="border-t border-gray-300 pt-6 md:pt-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">Skills</h2>
        <div className="space-y-3 md:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2 md:gap-4">
            <div className="font-semibold text-sm md:text-base">Programming</div>
            <div className="text-gray-700 text-sm md:text-base">
              Nodejs, DotNet Standard, Python, C/C++, SQL
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2 md:gap-4">
            <div className="font-semibold text-sm md:text-base">Server</div>
            <div className="text-gray-700 text-sm md:text-base">
              Express.js, Flask, Elastic Stack, RabbitMQ, BullMQ, Docker, Kubernetes
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2 md:gap-4">
            <div className="font-semibold text-sm md:text-base">Database</div>
            <div className="text-gray-700 text-sm md:text-base">
              PostgreSQL, MySQL, NoSQL, Redis, KeyDB, Dragonfly, Firebase, MongoDB
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2 md:gap-4">
            <div className="font-semibold text-sm md:text-base">Telemetry</div>
            <div className="text-gray-700 text-sm md:text-base">
              Open Telemetry, Prometheus, Grafana, Loki, Vector
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2 md:gap-4">
            <div className="font-semibold text-sm md:text-base">Cloud</div>
            <div className="text-gray-700 text-sm md:text-base">
              CPanel, CloudPanel, DigitalOcean, Bunny, Cloudflare
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2 md:gap-4">
            <div className="font-semibold text-sm md:text-base">CI/CD</div>
            <div className="text-gray-700 text-sm md:text-base">
              GitHub Actions, Jest, Supertest, Selenium, Cypress
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2 md:gap-4">
            <div className="font-semibold text-sm md:text-base">Web/Media</div>
            <div className="text-gray-700 text-sm md:text-base">
              Unity3D, HTML/CSS, TailwindCSS, ReactJS, Photoshop, Wondershare Filmora
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2 md:gap-4">
            <div className="font-semibold text-sm md:text-base">Others</div>
            <div className="text-gray-700 text-sm md:text-base">
              Prompt Engineering, Product Management
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}