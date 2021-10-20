import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Container , Table } from "react-bootstrap";
import { useParams , useHistory} from "react-router-dom";
import Footer from "../Footer/Footer";
import "./CheckOut.css";
import Rating from "@material-ui/lab/Rating";
import Header from "../Header/Header";
import { useContext } from "react";
import { UserContext } from "../../App";



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CheckOut = () => {
  const [product, setProduct] = useState();
const [loggedInUser , setLoggedInUser] =useContext(UserContext) 
  const [rateValue, setValue] = useState(4);

//  for dialog trial
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOredrs = () => {
    history.push('/order')
  }


 let history = useHistory()
  let productName = product?.productName;
  let productImg = product?.productImg;
  let price = product?.price;
  let modelNumber = product?.modelNumber;


  const { id } = useParams();
  useEffect(() => {
    fetch(`https://immense-dawn-60980.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const handleCheckOut =()=>{
    const date = new Date();
        const orderTime = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        const orderDetails = {...product , ...loggedInUser , orderTime}
        // console.log(orderDetails);
        delete orderDetails._id;
        fetch('https://immense-dawn-60980.herokuapp.com/addOrder' , {
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          } ,
          body:JSON.stringify(orderDetails)
        })
        .then(res => {
          console.log( 'send order database',res);
        })
        
        handleClickOpen()

  }
  return (
    
    <section className="">
        <Header></Header>
      <Container>
        <Row className="">
          <Col md={6} sm={12} xs={12}>
            <div className="checkOutImg p-5 mt-5">
              <img src={productImg} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div className="checkout-text p-5 mt-5">
            <div className="checkout-text-desc py-3">
              <span className="text-muted text-sku mb-3">SKU :{modelNumber}</span>
              <br />
              <h6 className="text-muted mb-3 mt-3">
                Availablility : 32 in Stock
              </h6>
              <h1 className=" mb-1">{productName}</h1>
              <span className="text-price">
                price : <strong>${price}</strong>
              </span>
            </div>
            <div className="rating">
              <Rating
                className="text-center"
                name="read-only"
                value={rateValue}
                readOnly
              />
            </div>
            <p className="text-desc text-muted mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              molestias facere iste, excepturi mollitia obcaecati minus vitae,
              accusantium facilis debitis ab itaque ipsam veniam necessitatibus
              sint, dolore unde?
            </p>
            <button onClick={handleCheckOut} className="button mt-2" >
					<span>CheckOut</span>
				</button>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">  <h3> &#10004; Your Order is Confirmed</h3></DialogTitle>
        <DialogContent>
          <DialogContentText >
          <Table>
          <img src={productImg} alt="" className="dialog-img" />
                                        <tbody>
                                          
                                            <tr>
                                                <td colSpan="2">Product Name :</td>
                                                <td colSpan="2"> {productName} </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Product Price :</td>
                                                <td colSpan="2">$ {price} </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Product Quantity :</td>
                                                <td colSpan="2"> 1 </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">SKU :</td>
                                                <td colSpan="2"> {modelNumber} </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Order Time :</td>
                                                <td colSpan="2">  {
                                                    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
                                                    
                                                } </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Total Price :</td>
                                                <td colSpan="2">$ {price} </td>
                                            </tr>

                                        </tbody>
                                    </Table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <button onClick={handleOredrs} className="button mt-2 see-order" >
					<span> All Orders</span>
				</button>
          
          <button onClick={handleClose} className="button mt-2" >
					<span>Close</span>
				</button>
        </DialogActions>
      </Dialog>

            </div>

           
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </section>
  );
};

export default CheckOut;
