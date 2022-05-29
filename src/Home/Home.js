import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br /> <br /> <br /> <br />
            <Tools></Tools>
            <br /> <br /> <br /> <br />
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;