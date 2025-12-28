export default function AboutMe() {
  return (
    <div>
      <h1 className="text-4xl mb-4">
        Hello! I'm Rifat Hossain 👋
      </h1>
      <p className="text-gray-600 mb-6">
        Software Engineer specializing in Backend Systems.
      </p>

      <div className="space-y-4 text-gray-700 mb-12">
        <p>
          I'm a{" "}
          <span className="font-semibold">
            Language Agnostic Engineer
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
      <div className="border-t border-gray-300 pt-8">
        <h2 className="text-3xl mb-6">Skills</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-[150px_1fr] gap-4">
            <div className="font-semibold">Programming</div>
            <div className="text-gray-700">
              Nodejs, DotNet Standard, Python, C/C++, SQL
            </div>
          </div>
          <div className="grid grid-cols-[150px_1fr] gap-4">
            <div className="font-semibold">Server</div>
            <div className="text-gray-700">
              Express.js, Flask, Elastic Stack, RabbitMQ, BullMQ, Docker, Kubernetes
            </div>
          </div>
          <div className="grid grid-cols-[150px_1fr] gap-4">
            <div className="font-semibold">Database</div>
            <div className="text-gray-700">
              PostgreSQL, MySQL, NoSQL, Redis, KeyDB, Dragonfly, Firebase, MongoDB
            </div>
          </div>
          <div className="grid grid-cols-[150px_1fr] gap-4">
            <div className="font-semibold">Telemetry</div>
            <div className="text-gray-700">
              Open Telemetry, Prometheus, Grafana, Loki, Vector
            </div>
          </div>
          <div className="grid grid-cols-[150px_1fr] gap-4">
            <div className="font-semibold">Cloud</div>
            <div className="text-gray-700">
              CPanel, CloudPanel, DigitalOcean, Bunny, Cloudflare
            </div>
          </div>
          <div className="grid grid-cols-[150px_1fr] gap-4">
            <div className="font-semibold">CI/CD</div>
            <div className="text-gray-700">
              GitHub Actions, Jest, Supertest, Selenium, Cypress
            </div>
          </div>
          <div className="grid grid-cols-[150px_1fr] gap-4">
            <div className="font-semibold">Web/Media</div>
            <div className="text-gray-700">
              Unity3D, HTML/CSS, TailwindCSS, ReactJS, Photoshop, Wondershare Filmora
            </div>
          </div>
          <div className="grid grid-cols-[150px_1fr] gap-4">
            <div className="font-semibold">Others</div>
            <div className="text-gray-700">
              Prompt Engineering, Product Management
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}