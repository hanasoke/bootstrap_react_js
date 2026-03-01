import React from 'react'
// Import Link
import { Link } from 'react-router-dom'  
import Navbar from '../components/Navbar'
// Import data JSON
import roomData from '../assets/hanagakure.json'

const HomePage = () => {
  // Mendapatkan tahun saat ini 
  const currentYear = new Date().getFullYear()

  const rooms = roomData.rooms // Ambil array rooms dari JSON

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Selamat Datang di Website Hanagakure</h1>
          <p className="lead fs-3">
            Tempat Ngekost Nomor 1 Di {roomData.location}
          </p>
          <div className="mt-4">
            <a className="btn btn-outline-light btn-lg" href='#rooms'>Jelajahi</a>
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
                    Mulai dari Rp {Math.min(...rooms.map(r => r.price)).toLocaleString()} / Bulan 
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
                    {rooms.length} pilihan kamar nyama tersedia 
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
      <section className="py-5 bg-light" id='rooms'>
        <div className="container">
          <div className="row text-center mb-5">
            <h1 class="text-uppercase">Daftar Kamar yang tersedia</h1>
          </div>
          {/* First Slide */}
          <div className="row">
            {rooms.map((room, index) =>  (
              <div className="col-lg-3 mb-4" key={index}>
                <div class="card h-100">
                  <img src={`/rooms/${room.main_image}`} class="card-img-top" alt={room.name} style={{ height: '200px', objectFit: 'cover' }}/>
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{room.name}</h5>
                    <p class="card-text">{room.description}</p>
                    <p class="fw-bold text-primary">
                      {room.price.toLocaleString()}/bulan 
                    </p>
                    <Link 
                      to={`/detail/${room.name.toLowerCase()}`} 
                      state="{{ room: room }}" // Kirim data room ke halaman detail  
                      class="btn btn-primary mt-2">
                        Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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