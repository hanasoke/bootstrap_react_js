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
          <h2 className="text-center mb-5">Pesan Sekarang Juga</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow">
                <div className="card-body p-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Nama Pemesan</label>
                        <input type="text" className="form-control" id="name" placeholder='masukkan nama pemesan' />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">Nomor Handphone Pemesan</label>
                        <input type="number" className="form-control" id="phone" placeholder='masukkan nomor handphone pemesan' />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder='masukkan email pemesan'  />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="check_in" className="form-label">Check In</label>
                        <input type="date" className="form-control" id="check_in" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="check_out" className="form-label">Check Out</label>
                        <input type="date" className="form-control" id="check_out" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="metode_pembayaran" className="form-label">Metode Pembayaran</label>
                        <select class="form-select" id="metode_pembayaran" aria-label="Default select example">
                          <option selected>Pilih Metode Pembayaran</option>
                          <option value="ovo">Ovo</option>
                          <option value="shopee_pay">Shopee Pay</option>
                          <option value="dana">Dana</option>
                          <option value="link_aja">Link Aja</option>
                          <option value="bca">BCA</option>
                          <option value="bri">BRI</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">Jumlah Orang</label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Pilih jumlah Penyewa</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <label htmlFor="room" className="form-label">Room_Name</label>
                      <input type="text" className="form-control" id="room" value="room name" readonly/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Pesan (Tertarik dengan {room.name})</label>
                      <textarea className="form-control" id="message" rows="4" defaultValue={`saya tertarik dengan kamar ${room.name}. Apakah masih tersedia?`}></textarea>
                      <small className='text-success'>optional</small>
                    </div>
                    <button type="button" className="btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Kirim Pesan</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Detail Pemesan</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3 row">
                    <label for="nama_penyewa" class="col-sm-4 col-form-label">Nama Pemesan</label>
                    <div class="col-sm-8">
                      <input type="text" readonly class="form-control-plaintext" id="nama_penyewa" value="#"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="email_pemesan" class="col-sm-4 col-form-label">Email Pemesan</label>
                    <div class="col-sm-8">
                      <input type="text" readonly class="form-control-plaintext" id="email_pemesan" value="#"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="nomor_handphone" class="col-sm-4 col-form-label">Nomor Handphone</label>
                    <div class="col-sm-8">
                      <input type="text" readonly class="form-control-plaintext" id="nomor_handphone" value="#"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="check_in" class="col-sm-4 col-form-label">Check In</label>
                    <div class="col-sm-8">
                      <input type="text" readonly class="form-control-plaintext" id="check_in" value="#"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="check_out" class="col-sm-4 col-form-label">Check Out</label>
                    <div class="col-sm-8">
                      <input type="text" readonly class="form-control-plaintext" id="check_out" value="#"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="metode_pembayaran" class="col-sm-4 col-form-label">Metode Pembayaran</label>
                    <div class="col-sm-8">
                      <input type="text" readonly class="form-control-plaintext" id="metode_pembayaran" value="#"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="jumlah_penyewa" class="col-sm-4 col-form-label">Jumlah penyewa</label>
                    <div class="col-sm-8">
                      <input type="text" readonly class="form-control-plaintext" id="jumlah_penyewa" value="#"/>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="pesan" class="col-sm-4 col-form-label">Pesan</label>
                    <div class="col-sm-8">
                      <input type="text" readonly class="form-control-plaintext" id="pesan" value="#"/>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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