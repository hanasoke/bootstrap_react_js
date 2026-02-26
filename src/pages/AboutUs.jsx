import React from 'react'
import { Link } from 'react-router-dom'  
import Navbar from '../components/Navbar'
import hanagakureData from '../assets/hanagakure.json'

const AboutUs = () => {
    const currentYear = new Date().getFullYear()

    const rooms = hanagakureData.rooms 

    const employees = hanagakureData.employees

    const icon = hanagakureData.icon 

    return (
        <div>
            <Navbar />

            {/* About Section */}
            <section id="about" className="section-padding bg-light">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <img src={`/icons/${icon}`} class="img-fluid rounded shadow" alt="About Hanagakure" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-5 fw-bold mb-4">About Hanagakure</h2>
                            <h3 className='mb-3'>Kami adalah penyedia kosan terbaik didaerah jatiasih / jatisari, Kota Bekasi, Jawa Barat.</h3>
                            <div className="row g-4 mb-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-primary fs-3 me-3"></i>
                                        <div>
                                            <h5>Toilet didalam kamar</h5>
                                            <p>Tidak perlu bolak - balik kamar karena toilet sudah tersedia didalam kamar.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-primary fs-3 me-3"></i>
                                        <div>
                                            <h5>Ada 8 Kamar yang tersedia</h5>
                                            <p>8 Kamar sudah dibangun dan siap ditempati.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-primary fs-3 me-3"></i>
                                        <div>
                                            <h5>Ruang Kamar Luas</h5>
                                            <p>Ruang Kamar luas untuk ditempati berbagai barang.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-primary fs-3 me-3"></i>
                                        <div>
                                            <h5>Mempunyai wastafel</h5>
                                            <p>Terdapat wastafel yang dapat digunakan untuk mencuci piring, gelas, maupun peralatan dapur lainnya.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Team Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">Inilah Tim Hanagakure</h2>
                        <p className="lead mb-0">Tim Hanagakure Siap menghadapi permasalahan yang dialami oleh customer</p>
                    </div>
                    <div className="row g-4">
                        {employees.map((employee, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="card team-card h-100 shadow-lg border-0 overflow-hidden">
                                    <img src={`${employee.picture}`} className="team-img" alt="Ajeng Utami" />
                                    <div className='card-body p-4 text-center'>
                                        <h5 className="card-title fw-bold">{employee.name}</h5>
                                        <p className='text-muted mb-2'>{employee.role}</p>
                                        <div className="d-flex justify-content-center gap-2 mb-3">
                                            <a href="#" className='bi bi-linkedin text-primary fs-5'></a>
                                            <a href="#" className='bi bi-twitter text-primary fs-5'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fax Section */}
            <section id='faq' className='section-padding bg-light'>
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="display-5 fw-bold mb-3">
                            Pertanyaan yang sering ditanyakan 
                        </div>
                        <p className="lead mb-0">
                            Ini dia pertanyaan yang sudah diajukan
                        </p>
                        
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item mb-3 faq-item">
                                    <h2 className="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            Apakah ada deposito awal yang harus diberikan ?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Deposito awal yang diberikan sebesar 200 Ribu dan akan dikembalikan apabila masa sewa kosan habis tetapi kosan terawat dengan baik. kalau ada kerusakan pada kamar kosan maka deposito awal tidak akan diberikan. 
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3 faq-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            Apakah ada servis kosan apabila terdapat masalah ?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Ya, anda bisa bertanya kepada customer service kami dan teknisi kami siap membantu anda dalam waktu 8 Jam Per Hari.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3 faq-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                            Apakah ada tempat parkir kendaraan ?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Untuk saat ini hanya tersedia tempat parkir motor tapi untuk mobil maaf kami belum menyediakan.  
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3 faq-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                            Apakah ada Wastafel nya ?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Ya, setiap kamar dihanagakure ada wastafelnya  
                                        </div>
                                    </div>
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
            <footer className="bg-dark text-white text-center pt-2 fixed-bottom">
                <div className="container">
                <p>&copy; {currentYear} Hanagakure</p>
                </div>
            </footer>
        </div>
    )
}

export default AboutUs