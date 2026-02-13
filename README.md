# Forever – Full Stack E-Commerce Website (MERN Stack)

## Live Demo

- **Frontend:**  
  https://forever-frontened-git-main-lobos-projects-b87fa2c7.vercel.app/

- **Admin Panel:**  
  https://forever-admin-tawny-eta.vercel.app/

- **Backend API:**  
  https://forever-backend-git-main-lobos-projects-b87fa2c7.vercel.app/

---

## Project Overview

**Forever** is a full stack eCommerce web application built using the **MERN Stack**:

- MongoDB  
- Express.js  
- React.js  
- Node.js  

This project demonstrates how to build, integrate, and deploy a complete online shopping platform with authentication, product management, cart functionality, order processing, and payment integration.

The application is fully deployed on **Vercel**.

---

## Features

### User Features

- Browse latest and featured product collections  
- View detailed product information  
- Filter and sort products  
- Select product variants (such as size)  
- Add products to cart  
- Update cart quantity  
- Secure checkout process  
- Add delivery address  
- Place orders using:
  - Cash on Delivery
  - Online Payment (Stripe)
  - Online Payment (Razorpay)
- Order confirmation system  

---

### Home Page

The home page includes:

- Latest collection section  
- Recently added products  
- Product image  
- Product title  
- Product price  
- Easy navigation to product details  

Users can scroll through products and explore the store smoothly.

---

### Authentication

- User registration  
- User login  
- JWT-based authentication  
- Protected routes  

---

### Payment Integration

This project integrates two online payment gateways:

- Stripe  
- Razorpay  

Customers can securely complete transactions online or choose Cash on Delivery.

---

### Admin Dashboard

The admin panel allows store management with the following features:

- Add new products  
- Upload product images  
- Delete products  
- View all products  
- Manage orders  
- Monitor store activity  

---

## Tech Stack

### Frontend
- React.js  
- React Router  
- Context API  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  

### Payment Gateways
- Stripe API  
- Razorpay API  

### Deployment
- Vercel  

---

## 📂 Project Structure

```
Forever
│
├── admin          
├── backend        
├── frontend       
├── .gitignore     
└── README.md
```

---

## Installation & Setup (Local Development)

### 1 Clone the Repository

```bash
git clone https://github.com/kundangupta04/Forever
cd Forever
```

---

### 2 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file and add:

```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
```

Run backend:

```bash
npm run start
```

---

### 3 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

### 4 Admin Panel Setup

```bash
cd admin
npm install
npm run dev
```

---

## Database

All data is stored in **MongoDB**, including:

- Users  
- Products  
- Orders  
- Cart information  

Mongoose is used to define schemas and manage database operations.

---

##  APIs Included

- User Authentication APIs  
- Product APIs (Add, Delete, Fetch)  
- Cart APIs  
- Order APIs  
- Payment APIs (Stripe + Razorpay)  

---

## What Learn From This Project

- Building a complete MERN stack application  
- REST API development with Express  
- MongoDB schema design  
- Payment gateway integration  
- State management in React  
- Authentication using JWT  
- Full stack deployment on Vercel  

---

## Future Improvements

- Wishlist feature  
- Product reviews and ratings  
- Coupon system  
- Email notifications  
- Inventory tracking  
- Advanced analytics dashboard  

---

##  Author

Full Stack MERN eCommerce Project built for learning, development, and deployment practice.
