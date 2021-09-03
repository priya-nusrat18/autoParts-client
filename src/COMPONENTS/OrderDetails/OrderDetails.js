import React from 'react';
import { Col , Card } from 'react-bootstrap';
import './OrderDetails.css';
import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useState } from 'react';


const OrderDetails = ({ orderProduct }) => {
    const [rateValue, setValue] = useState(4);
    // console.log("object", orderProduct);
    const { productImg, productName, price, orderTime,modelNumber } = orderProduct;
    return (
        <Col md={4}>
        <Card className='my-3' >
             <Card.Img variant="top" src={productImg} />
             
             <Card.Body>
                     <div className="card-text">
                     <span className="text-muted ">SKU :{modelNumber}</span>
                   <p className='card-p'>{productName}</p>
                   <span >price : <strong>
                       ${price}
                     </strong>
                     </span> 
                     <br />
                   <span >Order Time :{orderTime}
                     </span> 
                     </div>
                     <div className="rating">
                     <Typography component="legend">Our Review</Typography>
                     <Rating className="text-center" name="read-only" value={rateValue} readOnly />
                     </div>

                 
             </Card.Body>
         </Card>
         </Col>
    );
};

export default OrderDetails;