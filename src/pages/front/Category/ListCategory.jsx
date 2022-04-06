import React, { Component } from 'react'
import './ListCategory.css';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteButton from '../../../components/DeleteButton/DeleteButton';
import NavigationAdmin from '../NavigationAdmin/NavigationAdmin';



const ListCategory = () => {
    return (
        <div>
            <NavigationAdmin />

            <div className='container'>
                <div>
                    <h3 className='list-category'>List Category</h3>
                </div>

                <Table striped hover variant="dark">
                    <thead>
                        <tr>
                            <th style={{ width: "30%" }}>No</th>
                            <th style={{ width: "30%" }}>Category Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mouse</td>
                            <td>
                                <span className='button'>
                                    <button className='btn btn-sm btn-success'>
                                        <Link to='/edit-category' style={{ textDecoration: "none", color: "white" }}>
                                            Edit
                                        </Link>
                                    </button>
                                    <DeleteButton />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Keyboard</td>
                            <td>
                                <span className='button'>
                                    <button className='btn btn-sm btn-success'>Edit</button>
                                    <button className='btn btn-sm  btn-success'
                                        style={{
                                            backgroundColor: "red",
                                            textDecoration: "none",
                                            border: "none",
                                            padding: "6px 43px"
                                        }}>Delete
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bag</td>
                            <td>
                                <span className='button'>
                                    <button className='btn btn-sm btn-success'>Edit</button>
                                    <button className='btn btn-sm  btn-success'
                                        style={{
                                            backgroundColor: "red",
                                            textDecoration: "none",
                                            border: "none",
                                            padding: "6px 43px"
                                        }}>Delete
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Stationary</td>
                            <td>
                                <span className='button'>
                                    <button className='btn btn-sm btn-success'>Edit</button>
                                    <button className='btn btn-sm  btn-success'
                                        style={{
                                            backgroundColor: "red",
                                            textDecoration: "none",
                                            border: "none",
                                            padding: "6px 43px"
                                        }}>Delete
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Doll</td>
                            <td>
                                <span className='button'>
                                    <button className='btn btn-sm btn-success'>Edit</button>
                                    <button className='btn btn-sm  btn-success'
                                        style={{
                                            backgroundColor: "red",
                                            textDecoration: "none",
                                            border: "none",
                                            padding: "6px 43px"
                                        }}>Delete
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Pillow</td>
                            <td>
                                <span className='button'>
                                    <button className='btn btn-sm btn-success'>Edit</button>
                                    <button className='btn btn-sm  btn-success'
                                        style={{
                                            backgroundColor: "red",
                                            textDecoration: "none",
                                            border: "none",
                                            padding: "6px 43px"
                                        }}>Delete
                                    </button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

// class ListCategory extends Component {
//     render() {

//         const { productListCategory } = this.props
//         const ListProduct = productListCategory.map(product => {

//             return (
//                 <div>
//                     <NavigationAdmin />

//                     <div className='container'>
//                         <div>
//                             <h3 className='list-category'>List Category</h3>
//                         </div>

//                         <Table striped hover variant="dark">
//                             <thead>
//                                 <tr>
//                                     <th style={{ width: "30%" }}>No</th>
//                                     <th style={{ width: "30%" }}>Category Name</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>{product.no}</td>
//                                     <td>{product.categoryName}</td>
//                                     <td>
//                                         <span className='button'>
//                                             <button className='btn btn-sm btn-success'>
//                                                 <Link to='/edit-category' style={{ textDecoration: "none", color: "white" }}>
//                                                     Edit
//                                                 </Link>
//                                             </button>
//                                             <DeleteButton />
//                                         </span>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </Table>
//                     </div>
//                 </div>
//             )
//         })

//         return (
//             <div>
//                 {ListProduct}
//             </div>
//         )
//     }
// }

export default ListCategory