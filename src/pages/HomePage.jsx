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
          <div className="row text-center mb-5">
            <h1 class="text-uppercase">Daftar Kamar yang tersedia</h1>
          </div>
          {/* First Slide */}
          <div className="row align-items-center">
            <div className="col-lg-3 mb-4">
              <div class="card">
                <img src="/rooms/kirigakure.jpg" class="card-img-top" alt="Kirigakure"/>
                <div class="card-body">
                  <h5 class="card-title">Kirigakure</h5>
                  <p class="card-text">Kosan seperti Desan Kirigakure</p>
                  <a href="#" class="btn btn-primary float-end">Detail</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div class="card">
                <img src="/rooms/konohagakure.png" class="card-img-top" alt="Konohagakure"/>
                <div class="card-body">
                  <h5 class="card-title">Konohagakure</h5>
                  <p class="card-text">Desa yang menjadi pusat peradaban dunia shinobi</p>
                  <a href="#" class="btn btn-primary float-end">Detail</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div class="card">
                <img src="/rooms/sunagakure.jpg" class="card-img-top" alt="Sunagakure"/>
                <div class="card-body">
                  <h5 class="card-title">Sunagakure</h5>
                  <p class="card-text">Desa Pasir di Dunia Naruto</p>
                  <a href="#" class="btn btn-primary float-end">Detail</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div class="card">
                <img src="/rooms/komugakure.jpg" class="card-img-top" alt="Komugakure"/>
                <div class="card-body">
                  <h5 class="card-title">Komugakure</h5>
                  <p class="card-text">Desa Awan Tersembunyi yang menguasai elemen petir</p>
                  <a href="#" class="btn btn-primary float-end">Detail</a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="row align-items-center">
            <div className="col-lg-3 mb-4">
              <div class="card">
                <img src="/rooms/iwagakure.webp" class="card-img-top" alt="Iwagakure"/>
                <div class="card-body">
                  <h5 class="card-title">Iwagakure</h5>
                  <p class="card-text">Desa Batu Tersembunyi</p>
                  <a href="#" class="btn btn-primary float-end">Detail</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div class="card">
                <img src="/rooms/amegakure.webp" class="card-img-top" alt="Amegakure"/>
                <div class="card-body">
                  <h5 class="card-title">Amegakure</h5>
                  <p class="card-text">Desa Hujan tersembunyi yang menjadi tempat persembunyian Pain & Akatsuki</p>
                  <a href="#" class="btn btn-primary float-end">Detail</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div class="card">
                <img src="/rooms/otogakure.webp" class="card-img-top" alt="Otogakure"/>
                <div class="card-body">
                  <h5 class="card-title">Otogakure</h5>
                  <p class="card-text">Desa Bunyi Tersembunyi yang didirikan oleh Orochimaru</p>
                  <a href="#" class="btn btn-primary float-end">Detail</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div class="card">
                <img src="/rooms/takigakure.webp" class="card-img-top" alt="Takigakure"/>
                <div class="card-body">
                  <h5 class="card-title">Takigakure</h5>
                  <p class="card-text">Desa Air Terjun Tersembunyi</p>
                  <a href="#" class="btn btn-primary float-end">Detail</a>
                </div>
              </div>
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