import React, { useState } from 'react' 
import Navbar from '../components/Navbar'
import roomData from '../assets/hanagakure.json'

const ContactPage = () => {
  const currentYear = new Date().getFullYear()

  // State untuk menyimpan data form 
  const [formData, setFormData] = useState({
    name: '', 
    phone: '',
    email: '',
    message: '',
  })

  // state untuk menyimpan error validasi 
  const [errors, setErrors] = useState({})

  // State untuk menyimpan error validasi 
  const [showModal, setShowModal] = useState(false)

  // Handle input change 
  const handleInputChange = (e) => {
    const {id, value } = e.target 
    setFormData({
      ...formData, 
      [id]: value 
    })

    // Hapus error untuk field yang sedang diisi 
    if(errors[id]) {
      setErrors({
        ...errors, 
        [id]: null 
      })
    }
  }

  // Validasi form 
  const validateForm = () => {
    const newErrors = {}

    // Name Validation
    if(!formData.name.trim()) {
      newErrors.name = 'Name must be filled'
    } else if (formData.name.length < 3) {
      newErrors.name = '3 Character Minimum Name'
    } else if(formData.name.length > 50) {
      newErrors.name = '3 Character Maximum Name'
    }

    // Phone Number Validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number must be filled'
    } else if(!/^[0-9]{10,13}$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number must be 10 - 13 Digits'
    }

    // Email Validation 
    if(!formData.message.trim()) {
      newErrors.message = 'The Message must be filled'
    } else if(formData.message.length < 10) {
      newErrors.message = '10 Characters Minimum Message'
    } else if(formData.message.length > 500) {
      newErrors.message = '500 Characters Maximal Message'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 
  }

  // Handle submit errors

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
                        <label htmlFor="phone" className="form-label">Phone Number</label>
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
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" rows="4"></textarea>
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
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Detail Pesan</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label fw-bold">Nama</label>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">Saitama</p>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label fw-bold">Email</label>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">saitama@gmail.com</p>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label fw-bold">Phone Number</label>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">087322132321</p>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label fw-bold">Mesage</label>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis provident, possimus modi at accusamus temporibus ex magni voluptatem, iusto cumque veritatis officia. Amet pariatur ipsam sunt in vero distinctio!</p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


          <div className="row mt-4">
            <div className="col-md-6">
              <h5>Alamat</h5>
              <p>{roomData.location}, Indonesia<br />Dekat Sekolah TK - SMA Negeri / Swasta</p>
            </div>
            <div className="col-md-6">
              <h5>Kontak</h5>
              <p>WhatsApp: 0812-3456-7890<br />Email: info@{roomData.location.toLowerCase()} .id</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center pt-2 fixed-bottom">
        <div className="container">
          <p>&copy; {currentYear} Hanagakure</p>
        </div>
      </footer>
    </div>
  )
}

export default ContactPage