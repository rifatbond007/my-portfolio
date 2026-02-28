export default function Projects() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl">Projects</h2>
      <div className="space-y-4 md:space-y-6">
        <div className="border border-gray-300 rounded-lg p-4 md:p-6">
          <h3 className="font-semibold text-lg md:text-xl mb-2">
            E-Commerce Platform
          </h3>
          <p className="text-gray-700 mb-3 text-sm md:text-base">
            Full-stack e-commerce solution with real-time inventory management and payment
            integration.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
              PostgreSQL
            </span>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 md:p-6">
          <h3 className="font-semibold text-lg md:text-xl mb-2">
            Distributed Task Queue
          </h3>
          <p className="text-gray-700 mb-3 text-sm md:text-base">
            Scalable task processing system using RabbitMQ and microservices architecture.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
              RabbitMQ
            </span>
            <span className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
              Docker
            </span>
            <span className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
              Redis
            </span>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 md:p-6">
          <h3 className="font-semibold text-lg md:text-xl mb-2">
            Game Analytics Dashboard
          </h3>
          <p className="text-gray-700 mb-3 text-sm md:text-base">
            Real-time analytics platform for game metrics using Grafana and Prometheus.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
              Unity3D
            </span>
            <span className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
              Grafana
            </span>
            <span className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
              MongoDB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
