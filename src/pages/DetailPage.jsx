import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom' // Import Link 
import Navbar from '../components/Navbar'
import roomData from '../assets/hanagakure.json'

const DetailPage = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const { roomName } = useParams()

  // Ambil data room dari state (dikirim dari HomePage) atau dari params 
  const room  = location.state?.room || 
    roomData.rooms.find(r => r.name.toLowerCase() === roomName) || 
    roomData.rooms[0] // Default ke kamar pertama 

  if (!room) {
    return <div>Room not found</div>
  }

  const images = [
    room.main_image, 
    room.image_1, 
    room.image_2, 
    room.image_3 
  ].filter(img => img) // Filter out undefined images  

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section text-center py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-4 fw-bold mb-4">{room.name}</h1>
              <p className="lead mb-4">
                {room.description}
              </p>
              <h3 className='text-primary mb-4'>
                Rp {room.price.toLocaleString()}/bulan 
              </h3>
              <img 
                src={`/rooms/${room.main_image}`} 
                className="img-fluid rounded shadow mb-4" 
                alt="{room.name}" 
                style={{ objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/" className="btn btn-secondary btn-lg">
                Back
              </Link>
            </div>
            <div className="col">
              <a href="#contact" className="btn btn-success btn-lg">
                Call Now 
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Galeri {room.name}</h2>
          <div className="row g-3">
            {images.map((image, index) => (
              <div className="col-md-3" key="{index}">
                <img 
                  src={`/rooms/${image}`} 
                  className="img-fluid rounded shadow" 
                  alt={`${room.name} - Image ${index + 1}`}
                  style={{ aspectRatio: '1', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Fasilitas {room.name}</h2>
          <div className="row g-4">
            {/* WiFi */}
            <div className="col-md-4">
              <div className="card feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-wifi display-4 text-primary mb-3 d-block"></i>
                  <h5 className="card-title">WiFi Gratis</h5>
                  <p className="card-text">Internet cepat 24 jam untuk kebutuhan belajar dan kerja.</p>
                </div>
              </div>
            </div>
            
            {/* Air Panas */}
            <div className="col-md-4">
              <div className="card feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-water display-4 text-primary mb-3 d-block"></i>
                  <h5 className="card-title">Air Panas</h5>
                  <p className="card-text">Shower air panas tersedia di setiap kamar mandi.</p>
                </div>
              </div>
            </div>
            
            {/* Parkir */}
            <div className="col-md-4">
              <div className="card feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-building display-4 text-primary mb-3 d-block"></i>
                  <h5 className="card-title">Parkir Luas</h5>
                  <p className="card-text">Area parkir aman untuk motor dan mobil.</p>
                </div>
              </div>
            </div>
            
            {/* Laundry */}
            <div className="col-md-4">
              <div className="card feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-cup-hot display-4 text-primary mb-3 d-block"></i>
                  <h5 className="card-title">Laundry</h5>
                  <p className="card-text">Jasa laundry profesional dengan harga terjangkau.</p>
                </div>
              </div>
            </div>
            
            {/* Keamanan */}
            <div className="col-md-4">
              <div className="card feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-person-check display-4 text-primary mb-3 d-block"></i>
                  <h5 className="card-title">Keamanan 24 Jam</h5>
                  <p className="card-text">CCTV dan satpam menjaga keamanan penghuni.</p>
                </div>
              </div>
            </div>
            
            {/* Kamar Bersih */}
            <div className="col-md-4">
              <div className="card feature-card h-100 text-center p-4 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-house-heart display-4 text-primary mb-3 d-block"></i>
                  <h5 className="card-title">Kamar Bersih</h5>
                  <p className="card-text">Pembersihan rutin untuk kenyamanan tinggal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Hubungi Kami</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow">
                <div className="card-body p-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Nama</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">No. Telepon</label>
                        <input type="tel" className="form-control" id="phone" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Pesan (Tertarik dengan {room.name})</label>
                      <textarea className="form-control" id="message" rows="4" defaultValue={`saya tertarik dengan kamar ${room.name}. Apakah masih tersedia?`}></textarea>
                    </div>
                    <button type="submit" className="btn btn-success w-100">Kirim Pesan</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 text-center">
            <div className="col-md-6">
              <h5>Alamat</h5>
              <p>{roomData.location}, Indonesia<br /> Dekat Sekolah TK - SMA Negeri / Swasta</p>
            </div>
            <div className="col-md-6">
              <h5>Kontak</h5>
              <p>WhatsApp: 0812-3456-7890<br />Email: info@{roomData.location.toLowerCase()}.id</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; {currentYear} Hanagakure. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}

export default DetailPage