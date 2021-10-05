import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

import './Products.css'

const Products = () => {
    const [products , setProducts] = useState([])
    const [spinner, setSpinner] = useState(true);

    useEffect(()=>{
        fetch('https://gentle-headland-08338.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            const getData = data.slice(0,12)
            console.log(getData);
            setProducts(getData)
            setSpinner(false)
        })
    }, [])
   
    return (
        <section style={{backgroundColor:"#fafafa"}}>
            <Container>
                <Row>
                    <Col md={12}>
                    <div className="section-heading mt-5 mb-5">
                        <h1 className="section-heading">
                            MOST POPULAR PRODUCTS
                        </h1>
                        </div>
                        <hr></hr>
                    </Col>
                </Row>
                {spinner ? <Spinner  className="mt-3 d-flex justify-content-center"  variant="success"> <span >Loading...</span></Spinner> 
                
                        :
                    
                <Row>
                    {
                        products.map(product => <ProductCard product={product} key={product.id}></ProductCard>)
                    }
                    </Row>
                }
                
            </Container>
        </section>
    );
};

export default Products;