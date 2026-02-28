export default function Skills() {
  return (
    <div>
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
  );
}
