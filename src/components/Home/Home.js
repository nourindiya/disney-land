import React from 'react';
import Activities from '../Activites/Activities';
import Banner from '../Banner/Banner';
import Disneyland from '../Disneyland/Disneyland';
import Featured from '../Featured/Featured';
// import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <Activities></Activities>
            </div>

            <div>
                <Featured></Featured>
            </div>

            <div>
                <Disneyland></Disneyland>
            </div>
        </div>

    );
};

export default Home;