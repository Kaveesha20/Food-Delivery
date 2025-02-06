# 🍔 Food Ordering App (MERN + Stripe)

This is a full-stack food ordering web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** with **Stripe** for payment processing. The app provides a seamless experience for users to browse food items, add them to the cart, place orders, and make secure payments.

## 🚀 Features

### 🌟 User Features
- 🛒 **Responsive Frontend** – Mobile-friendly design for smooth navigation.
- 🔐 **Authentication System** – Sign up, log in, and log out securely.
- 🍕 **Food Menu** – Fetches food data from the database and displays it dynamically.
- 🛍️ **Cart Functionality** – Users can add/remove food items and view the cart.
- ✅ **Order Placement** – Checkout process with order summary and confirmation.
- 💳 **Stripe Payment Integration** – Secure and seamless online payments.
- 📜 **User Order History** – View past orders.

### 🔧 Admin Features
- 📊 **Admin Panel** – Manage food items, orders, and users.
- 📦 **Order Management** – View and update order statuses.
- 🍽️ **Food Management** – Add, edit, or delete food items.

## 🛠️ Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JSON Web Tokens (JWT)
- **Payment Gateway:** Stripe

## 🏗️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kaveesha20/Food_Delivery.git
   cd food-ordering-app
   # Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
# Start backend server
cd backend
node server.js

# Start frontend server
cd ../frontend
npm run dev
# Demo Video
