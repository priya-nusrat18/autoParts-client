import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Header from '../Header/Header';
import './ManageProduct.css';
import ManageProductDetails from './ManageProductDetails/ManageProductDetails';
const ManageProduct = () => {

    const [manageProduct, setManageProduct] = useState([]);

    useEffect(() => {
        fetch('https://immense-dawn-60980.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [manageProduct])

    return (
        <div className="manage-product-area">
            <Header></Header>

            <div className="manage-background">

                <div className='container'>
                <h3 className="about-heading">Manage Product</h3>
                    <div className="product-info">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th className='border-left-design'>Product Name</th>
                                    <th>SKU</th>
                                    <th>Price</th>
                                    <th className='border-right-design'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    manageProduct?.map(product => <ManageProductDetails products={product} key={product._id} />)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ManageProduct;