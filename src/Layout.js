import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import Collection from './components/Collection/Collection';
import ShopDetail from './components/ShopDetail/ShopDetail';
import Cart from './components/Cart/Cart';

const Layout = () => {
  return (
    <>
        <Routes>
                    {/* <Route element={<PrivateRoutes />}> */}
                        <Route path='/' element={<App />}>
                            <Route index element={<Home />} />
                            <Route path='shop' element={<Shop />} />
                            <Route path='blogs' element={<Blog />} />
                            <Route path='collection' element={<Collection />} />
                            <Route path='shop-detail' element={<ShopDetail />} />
                            <Route path='my-order' element={<Cart />} />
                            {/* <Route path='shop-detail/:id' element={<ShopDetail />} /> */}
                            {/* <Route path='thanksfororder' element={<ThankForOrder />} /> */}
                        </Route>
                    {/* </Route> */}
                    {/* <Route element={<PublicRoutes />}>
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                    </Route> */}
                </Routes>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}

                />
    </>
  )
}

export default Layout