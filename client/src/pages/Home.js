import React from 'react'
import Navbar from '../features/navbar/Navbar';
import Basicslider from '../features/basicslider/Basicslider';
import Card from '../features/card/Card';
import Blog from '../features/blog/Blog';
import Login from '../features/auth/Login';
import Footer from '../features/footer/Footer';
import UserForm from '../userform/UserForm';
import Like from '../features/imgfeature/Like';

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Basicslider></Basicslider>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-30">
                <Card></Card>
                <Blog></Blog>
                <Footer></Footer>
            </div>
        </div>
    )
}
