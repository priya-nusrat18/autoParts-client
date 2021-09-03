import './ProductCard.css'
import React from 'react';
import { Card ,Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import { useState  } from 'react';
import { useHistory } from 'react-router';
import { Typography } from '@material-ui/core';

const ProductCard = (props) => {
    const {productName , productImg, price, modelNumber, _id} = props.product;
    const history = useHistory()
    const handleBuy =(id) => {
       history.push(`/checkout/${id}`)
    }
    const [rateValue, setValue] = useState(4);
    return (
            <Col md={3} sm={6}>
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
                        </div>
                        <div className="rating">
                        <Typography component="legend">Our Review</Typography>
                        <Rating className="text-center" name="read-only" value={rateValue} readOnly />
                        </div>

                    <button className="button mt-2" onClick={() => handleBuy(_id)}>
					<span>Buy Now</span>
				</button>
                </Card.Body>
            </Card>
            </Col>
    );
};

export default ProductCard;