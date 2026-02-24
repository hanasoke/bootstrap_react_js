import React from 'react'
import { Link } from 'react-router-dom'  
import Navbar from '../components/Navbar'
import roomData from '../assets/hanagakure.json'

const AboutUs = () => {
    const currentYear = new Date().getFullYear()

    const rooms = roomData.rooms 

    return (
        <div>
            <Navbar />

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