import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import StayConnected from './StayConnected';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <StayConnected></StayConnected>
            <Footer></Footer>

        </div>
    );
};

export default Home;