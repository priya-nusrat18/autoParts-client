import './DealProductCard.css'
import React from 'react';
import { Card  } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const DealProductCard = (props) => {
    const {productName , productImg, price, modelNumber, _id} = props.product;
    let history = useHistory()
    const handleBuy =(id) => {
        
        history.push(`/checkout/${id}`)
    }
    const [rateValue, setValue] = useState(4);
    return (
           <Card className='mx-3 ' >
               <div className="discount">
                   <span>sale 30%</span>
               </div>
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
    );
};

export default DealProductCard;