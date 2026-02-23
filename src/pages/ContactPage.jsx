import React from 'react'
import { Link } from 'react-router-dom' // Import Link 
import Navbar from '../components/Navbar'

const ContactPage = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <Navbar />

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Hubungi Kami</h2>
          <div className="row justify-content-center">
            <div className="col">
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
                    <div className="row">
                      <div className="col mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Pesan</label>
                      <textarea className="form-control" id="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success w-100">Kirim Pesan</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h5>Alamat</h5>
              <p>Jakarta, Indonesia<br /> Dekat Kampus UI / ITB</p>
            </div>
            <div className="col-md-6">
              <h5>Kontak</h5>
              <p>WhatsApp: 0812-3456-7890<br />Email: info@kosan.id</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 fixed-bottom">
        <div className="container">
          <p>&copy; {currentYear} Kosan Nyaman. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}

export default ContactPage