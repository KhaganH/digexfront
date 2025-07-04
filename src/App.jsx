import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/common/Header'
import LoginModal from './components/common/LoginModal'
import { AuthProvider } from './contexts/AuthProvider'

function App() {
  const [count, setCount] = useState(0)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <AuthProvider>
      <Header />
      <main className="container mt-4">
        <div className="text-center">
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>DigEx - Digital Marketplace</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <div className="mt-3">
            <button 
              className="btn btn-primary me-2" 
              onClick={() => setIsLoginModalOpen(true)}
            >
              Test Login
            </button>
            <button 
              className="btn btn-success" 
              onClick={() => {
                // Simulate adding product to cart
                console.log('Adding product to cart...');
              }}
            >
              Test Add to Cart
            </button>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </main>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </AuthProvider>
  )
}

export default App
