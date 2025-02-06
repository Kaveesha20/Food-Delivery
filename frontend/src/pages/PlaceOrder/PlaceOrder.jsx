import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street1: "",
    street2: "",
    city: "",
    postalCode: "",
    country: "",
    phone: ""


  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
  // useEffect(()=>{
  //   console.log(data);
  // },[data])
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);

      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 500,

    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);

    }
    else {
      alert("Error");
    }
    // console.log(orderItems);


  }
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }
    else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token])
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email address' />
        <input required name='street1' onChange={onChangeHandler} value={data.street1} type="text" placeholder='Street 1' />
        <div className="multi-fields">
          <input required name='street2' onChange={onChangeHandler} value={data.street2} type="text" placeholder='Street 2' />
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
        </div>
        <div className="multi-fields">
          <input required name='postalCode' onChange={onChangeHandler} value={data.postalCode} type="text" placeholder='Postal code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />

        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />


      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs:{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs:{getTotalCartAmount() === 0 ? 0 : 500}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs:{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 500}</b>

            </div>

          </div>
          <button type='submit' >PROCEED TO PAYMENT</button>

        </div>

      </div>

    </form>
  )
}

export default PlaceOrder
