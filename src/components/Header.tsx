export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">FWD</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Fresher Web Dev
            </h1>
          </div>
          <ul className="hidden md:flex gap-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Learn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Docs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
