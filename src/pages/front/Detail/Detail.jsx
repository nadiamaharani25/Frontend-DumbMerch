import React from 'react'
import './Detail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Mouse from './assets/mouse.png';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

// export default function Detail(props) {

class Detail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            image: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
            name: 'Mouse',
            stock: 600,
            spec1: 'Wireless Mouse',
            spec2: 'Konektivitas wireless 2.4 GHz',
            spec3: 'Jarak wireless hingga 10 m',
            spec4: 'Plug and Play',
            spec5: 'Baterai tahan hingga 12 bulan',
            desc: 'Mouse Wireless Alytech AL-Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz(bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil.Mouse ini didukung oleh 1x baterai AA(hingga 12 bulan hidup baterai).mendukung sistem operasi Windows 7, 8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.',
            price: 'Rp.300.900',
        }
    }

    // const params = useParams()
    // console.log(params);

    render() {

        return (
            <div>
                <Navigation />

                {/* CARD */}
                <div style={{ marginTop: "120px" }}>
                    <div className='card mb-3' style={{ backgroundColor: "black" }}>
                        <div className='row g-0'>
                            <div className='col-md-6'>
                                <img src={this.state.image} className='img-fluid rounded-start' alt="" style={{ height: '470px' }} />
                            </div>

                            <div className='col-md-6' style={{ margin: "auto" }}>
                                <div className='card-body-product'>
                                    <h5 className='card-title fw-bold' style={{ fontSize: "30px", color: "red" }}>{this.state.name}</h5>
                                    <p className='card-text'><small className='text-muted'>{this.state.stock}</small></p>
                                    <p className='card-text'>
                                        - {this.state.spec1} <br />
                                        - {this.state.spec2} <br />
                                        - {this.state.spec3} <br />
                                        - {this.state.spec4} <br />
                                        - {this.state.spec5} <br />
                                    </p>

                                    <p className='card-text' style={{ textAlign: "justify" }}>
                                        {this.state.desc}
                                    </p>

                                    <p className='card-text fw-bold' style={{ textAlign: "right", fontSize: "17px", color: "red" }}>
                                        {this.state.price}
                                    </p>

                                    <button type='button' className='btn btn-danger'>
                                        <Link to='/profile' style={{ textDecoration: "none", color: "white" }}>
                                            Buy
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD */}
            </div>
        )
    }
}

export default Detail