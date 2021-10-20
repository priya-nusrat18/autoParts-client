import React from 'react';
import './Admin.css'
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [imgURL , setIMageURL]=useState(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data , e) => {
        const productData={
          productName: data.productName,
          modelNumber :data.modelNumber,
          price: data.price,
          productImg: imgURL,

        }
        fetch('https://immense-dawn-60980.herokuapp.com/addProduct' , {
          method:"POST",
          headers:{ 
            "Content-Type": "application/json",
          },
          body:JSON.stringify(productData)
        })
        .then(res => console.log('server side response' , res ))
        console.log(productData)
        e.target.reset();
      }

      
        const handleImgUpload = event => {
          const imgData = new FormData()
          imgData.set('key', '879a758c310c8e7c6b03f634e3cafb92')
          imgData.append('image', event.target.files[0] )
          axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
              console.log(response.data.data.display_url);
              setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
              console.log(error);
            });
          
      
      }
    return (
             <div className="Container-fluid overflow-hidden" >
            <div className="row">
                <div className="col-md-2 col-sm-2 ">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 col-sm-10 col-10 d-flex justify-content-center   " >
                
                <form className=" form  shadow" style={{backgroundColor:'#fafafa'}} onSubmit={handleSubmit(onSubmit)}>
                <h1 className=" text-center mt-3 mb-3">
              Add Product
            </h1>
                    <Row>
                    <Col md={6} col={6}>
                        <label htmlFor="name">Product name</label>
                         <input
              name='productName'
              className='form-control'
              placeholder="Product Name"
                {...register("productName", { required: true})}
              />
              {errors.productName && <span className='text-danger'>Name is required</span>}</Col>
                    <Col md={6} col={6}>
                    <label htmlFor="modelNumber">Product Model Number</label>
                    <input
              name='modelNumber'
              className='form-control'
              placeholder="SKU"
                {...register("modelNumber", { required: true})}
              />
              {errors.modelNumber && <span className='text-danger'>brand is required</span>}
                    </Col>
                    </Row>
                    <Row>
                    <Col md={6} col={6}>
                    <label htmlFor="price">Product Price</label>
                    <input
              name='price'
              className='form-control'
              placeholder="Price"
                {...register("price", { required: true})}
              />
              {errors.price && <span className='text-danger'>price is required</span>}
                    </Col>
                    <Col md={6} col={6}>
                    <label htmlFor="img">Add Photo</label>
                        <input onChange={handleImgUpload} type="file" name="img" id="" />
                    </Col>
                    </Row>
            
              {/* <input name='email' className='form-control'  placeholder="Your Email" {...register("email", { required: true,  pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
              
              {errors.email && errors.email.type === "required" && <span  className='text-danger'>Email is required</span>}
      {errors.email && errors.email.type === "pattern" && <span  className='text-danger'>Please , type correct email address !</span> } */}
              
              <input className='login-btn' type="submit" value="send"  />
            </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;