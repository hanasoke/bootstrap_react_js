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
    if(!formData.email.trim()) {
      newErrors.email = 'Email harus diisi'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }
    
    // Message Validation 
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
  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setShowModal(true)
    }
  }

  // Handle close modal 
  const handleCloseModal = () => {
    setShowModal(false)
  }

  // Handle reset form 
  const handleResetForm = () => {
    setFormData({
      name: '', 
      phone: '',
      email: '', 
      message: ''
    })
    setErrors({})
    handleCloseModal()
  }

  return (
    <div>
      <Navbar />

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Hubungi Kami</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow">
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name <span className='text-danger'>*</span></label>
                        <input 
                          type="text" 
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                          id="name" 
                          placeholder='Masukkan nama lengkap'
                          value={formData.name}
                          onChange={handleInputChange}  
                        />
                        {errors.name && (
                          <div className='invalid-feedback'>{errors.name}</div>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></label>
                        <input 
                          type="tel" 
                          className={`form-control ${errors.phone ? `is-invalid` : ''}`} 
                          id="phone" 
                          placeholder='Masukkan nomor telpon'
                          value={formData.phone}
                          onChange={handleInputChange}  
                        />
                        {errors.phone && (
                          <div className='invalid-feedback'>{errors.phone}</div>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col mb-3">
                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                        <input 
                          type="email" 
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                          id="email" 
                          placeholder='Masukkan alamat email'
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                      <textarea 
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`} 
                        id="message" 
                        rows="4"
                        placeholder='Tulis pesan Anda disini'
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                      <small className="text-muted">
                        Karakter: {formData.message.length}/500
                      </small>
                    </div>

                    {/* Informasi field wajib diisi */}
                    <div className="mb-3">
                      <div className="text-muted">
                        <span className="text-danger">*</span> Field wajib diisi 
                      </div>
                    </div>

                    <button type="submit" className="btn btn-success w-100">Kirim Pesan</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div 
              class="modal fade show" 
              id="exampleModal" 
              tabindex="-1" 
              style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} 
              aria-modal="true"
              role='dialog' 
            >
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div class="modal-header bg-success text-white">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      <i className='bi bi-check-circle-fill me-2'></i>
                      Detail Pesan Anda
                    </h1>
                    <button 
                      type="button" 
                      class="btn-close btn-close-white"
                      onClick={handleCloseModal} 
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body p-4">
                    {/* Informasi Pengirim */}
                    <div className="mb-4">
                      <h6 className="text-primary border-bottom pb-2">
                        <i className="bi bi-person-fill me-2"></i>
                        Informasi Pengirim 
                      </h6>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="fw-bold text-secondary">Nama</label>
                            <p className="form-control-plaintext bg-light p-2 rounded">
                              {formData.name || '-'}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="fw-bold text-secondary">Phone Number</label>
                            <p className="form-control-plaintext bg-light p-2 rounded">
                              {formData.phone || '-'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="fw-bold text-secondary">Alamat Email</label>
                            <p className="form-control-plaintext bg-light p-2 rounded">
                              {formData.email || '-'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Isi Pesan */}
                    <div className="mb-4">
                      <h6 className="text-primary border-bottom pb-2">
                        <i className="bi bi-chat-dots-fill me-2"></i>
                        Isi Pesan 
                      </h6>
                      <div className="mt-3">
                        <div className="bg-light p-3 rounded">
                          <p className="mb-0" style={{ whiteSpace: 'pre-wrap'}}>
                            {formData.message || '-'}
                          </p>
                        </div>
                        <small className='text-muted mt-2 d-block'>
                          Jumlah karakter: {formData.message.length}/500
                        </small>
                      </div>
                    </div>

                    {/* Informasi Tambahan */}
                    <div className="alert alert-info">
                      <i className="bi bi-info-circle-fill me-2"></i>
                      Pesan anda akan segera kami balas melalui email atau nomor telpon yang Anda daftarkan
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      onClick={handleCloseModal}
                    >
                      <i className="bi bi-x-circle me-2"></i> 
                      Tutup
                    </button>
                    <button
                      type='button'
                      className='btn btn-success'
                      onClick={() => {
                        alert('Pesan Anda berhasil dikirim! Terima kasih telah menghubungi kami.')
                        handleResetForm()
                      }}
                    >
                      <i className="bi bi-send-fill me-2"></i>
                      Kirim Pesan 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

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