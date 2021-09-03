import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import Header from '../Header/Header';
import {Spinner } from "react-bootstrap";

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [spinner, setSpinner] = useState(true);


    const [orderedProducts, setOrderedProducts] = useState([]);


    useEffect(() => {
        const email = loggedInUser?.email;
        
        fetch(`http://localhost:5000/showOrderProduct/${email}`)
            .then(res => res.json())
            .then(data => setOrderedProducts(data))
            setSpinner(false);
    }, [])
    
    const { photoURL, name, email } = loggedInUser;
    console.log(loggedInUser);
    
    return (
        <div className='order-wrapper'>
            <Header></Header>
            <div className="order-details">
                <div className='container'>
                    <div className="login-user-details">
                        <img src={photoURL} alt="" />
                        <h3>{name}</h3>
                        <h4>{email}</h4>
                        <h5>Total Order: {orderedProducts.length}</h5>
                    </div>

                    {
                        orderedProducts.length ? <h3 className='order-details-title'>Orders Items Information: </h3>
                            : ''
                    }
                    {spinner ? <Spinner  className="mt-3 mb-3 d-flex justify-content-center"  variant="success"> <span >Loading...</span></Spinner> 
                
                :
                    <div className="row">

                        {
                            orderedProducts?.map(orderProduct => <OrderDetails orderProduct={orderProduct} key={orderProduct._id} />)
                        }
                    </div>
}
                </div>
            </div>
        </div>
    );
};

export default Orders;