export default function HonorsAwards() {
  return (
    <div>
      <h2 className="text-3xl mb-6">Honors & Awards</h2>
      <div className="space-y-6">
        <div className="flex justify-between items-start border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold">2nd RUNNERS UP</h3>
            <p className="text-gray-600 text-sm">
              BAIUST Fall Fest X Prompt Engineering
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">2025</p>
            <p className="text-gray-600 text-sm">Cumilla, BD</p>
          </div>
        </div>
        <div className="flex justify-between items-start border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold">1st RUNNERS UP</h3>
            <p className="text-gray-600 text-sm">
              BAIUST Fall Fest X Hackathon
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">2025</p>
            <p className="text-gray-600 text-sm">Cumilla, BD</p>
          </div>
        </div>
        <div className="flex justify-between items-start border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold">CHAMPION</h3>
            <p className="text-gray-600 text-sm">
              {/* NSU Tech Fest 2025 - Programming Hero X WebXtreme Hackathon */}
              CSE Fest Hackathon
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">2025</p>
            <p className="text-gray-600 text-sm">Cumilla, BD</p>
          </div>
        </div>
        <div className="flex justify-between items-start border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold">2nd RUNNERS UP</h3>
            <p className="text-gray-600 text-sm">
              Devfest AI Hackathon
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">2023</p>
            <p className="text-gray-600 text-sm">Cumilla, BD</p>
          </div>
        </div>
      </div>
    </div>
  );
}