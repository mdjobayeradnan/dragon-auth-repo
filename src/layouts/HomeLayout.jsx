import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNabvar from '../components/layout-components/RightNabvar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <header>
<Header></Header>
<section className='w-11/12  mx-auto'>
<LatestNews></LatestNews>
</section>


            </header>
            <nav  className='w-11/12 mx-auto py-3'>
            <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12'>
                <aside className='left col-span-3'><LeftNavbar></LeftNavbar></aside>
                <section className='col-span-6'> 
                    <Outlet></Outlet>
                </section>
                <aside className=''>
                    <RightNabvar></RightNabvar>
                     </aside>
            </main>
        </div>
    );
};

export default HomeLayout;