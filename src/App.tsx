import { useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card 
            title="React 18" 
            description="Modern UI library for building interactive components"
          />
          <Card 
            title="TypeScript" 
            description="Add type safety to your JavaScript code"
          />
          <Card 
            title="Tailwind CSS" 
            description="Utility-first CSS for rapid UI development"
          />
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Counter Example
          </h2>
          <p className="text-gray-600 mb-6">
            Click the button to increment the counter. This demonstrates React state management.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-indigo-600">{count}</span>
            <Button 
              onClick={() => setCount((c) => c + 1)}
              label="Increment"
            />
            <Button 
              onClick={() => setCount(0)}
              label="Reset"
              variant="secondary"
            />
          </div>
        </section>

        <section className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Getting Started
          </h3>
          <ul className="text-gray-600 max-w-2xl mx-auto space-y-2 text-left">
            <li>✓ Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.tsx</code> to get started</li>
            <li>✓ Components are in <code className="bg-gray-200 px-2 py-1 rounded">src/components/</code></li>
            <li>✓ Run <code className="bg-gray-200 px-2 py-1 rounded">npm run dev</code> to start development</li>
            <li>✓ Run <code className="bg-gray-200 px-2 py-1 rounded">npm run build</code> for production</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
