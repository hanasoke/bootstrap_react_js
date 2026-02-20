import React from 'react'
import Navbar from '../components/Navbar'

const HomePage = () => {
  // Mendapatkan tahun saat ini 
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Selamat Datang di Website Hanagakure</h1>
          <p className="lead fs-3">
            Tempat Ngekost Nomor 1 Di Indonesia 
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
                  <div className="display-1 text-primary mb-3">
                    <img src="/icons/funding.png" alt="Funding" width="100"/>
                  </div>
                  <h3 className="card-title">Affordable</h3>
                  <p className="card-text">
                    Biaya Ngekost Hanya 1.300 Rupiah Per Jam 
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="display-1 text-primary mb-3">
                    <img src="/icons/convenient.png" alt="Convenient" width="100"/>
                  </div>
                  <h3 className="card-title">Comfortable</h3>
                  <p className="card-text">
                    Rasakan kenyamanannya seperti tinggal dirumah sendiri
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="display-1 text-primary mb-3">
                    <img src="/icons/park.png" alt="Convenient" width="100"/>
                  </div>
                  <h3 className="card-title">Free Open Space</h3>
                  <p className="card-text">
                    Rasakan sinar matahari di space terbuka yang sudah disediakan
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
            &copy; {currentYear} Hanagakure. Tempat Kost Terbaik 
          </p>
          <p className="mb-0 mt-2 small">
            React {React.version} | Bootstrap 5
          </p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage