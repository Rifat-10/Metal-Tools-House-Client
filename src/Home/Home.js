import React from 'react';
import ReviewsInHome from '../Review/ReviewsInHome/ReviewsInHome';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import OurCapabilities from './Capabilities/OurCapabilities';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br /> <br /> <br /> <br />
            <Tools></Tools>
            <br /> <br /> <br /> <br />
            <BusinessSummery></BusinessSummery>
            <br /> <br /> <br /> <br />
            <br /> <br /> <br /> <br />
            <OurCapabilities></OurCapabilities>
             <br /> <br /> <br /> <br />
            <ReviewsInHome></ReviewsInHome>
             <br /> <br /> <br /> <br />
        </div>
    );
};

export default Home;