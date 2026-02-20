import React from 'react'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Selamat Datang di Website Pertamaku!</h1>
          <p className="lead fs-3">
            Dibuat dengan React.js dan Bootstrap
          </p>
          <div className="mt-4">
            <button className="btn btn-light btn-lg me-2">Mulai</button>
            <button className="btn btn-outline-light btn-lg">Pelajari</button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="display-1 text-primary mb-3">⚛️</div>
                  <h3 className="card-title">React.js</h3>
                  <p className="card-text">
                    Menggunakan React versi terbaru dengan performa tinggi dan komponen yang reusable.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="display-1 text-primary mb-3">🎨</div>
                  <h3 className="card-title">Bootstrap 5</h3>
                  <p className="card-text">
                    Desain responsif dan modern dengan framework CSS terpopuler.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="display-1 text-primary mb-3">⚡</div>
                  <h3 className="card-title">Vite</h3>
                  <p className="card-text">
                    Build tool super cepat untuk pengembangan React yang optimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h2 className="display-6 fw-bold mb-4">Mulai Petualangan React-mu!</h2>
              <p className="lead">
                Website ini adalah langkah pertamamu dalam membangun aplikasi web modern 
                menggunakan React.js dan Bootstrap. Kamu bisa mengembangkannya menjadi 
                apapun yang kamu inginkan!
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">✅ Komponen yang terstruktur</li>
                <li className="mb-2">✅ Desain responsif dengan Bootstrap</li>
                <li className="mb-2">✅ Siap dikembangkan lebih lanjut</li>
              </ul>
              <button className="btn btn-primary btn-lg mt-3">Jelajahi Sekarang</button>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://placehold.co/600x400/007bff/white?text=React+%2B+Bootstrap" 
                alt="React Bootstrap"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">
            &copy; 2024 MyReactApp. Dibuat dengan ❤️ menggunakan React & Bootstrap
          </p>
          <p className="mb-0 mt-2 small">
            React {React.version} | Bootstrap 5
          </p>
        </div>
      </footer>
    </>
  )
}

export default HomePage