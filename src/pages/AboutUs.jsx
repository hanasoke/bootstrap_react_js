import React from 'react'
import { Link } from 'react-router-dom'  
import Navbar from '../components/Navbar'
import roomData from '../assets/hanagakure.json'

const AboutUs = () => {
    const currentYear = new Date().getFullYear()

    const rooms = roomData.rooms 

    const icon = roomData.icon 

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
            <footer className="bg-dark text-white text-center py-2 fixed-bottom">
                <div className="container">
                <p>&copy; {currentYear} Hanagakure</p>
                </div>
            </footer>
        </div>
    )
}

export default AboutUs