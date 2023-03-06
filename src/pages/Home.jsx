import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
    return (
        <>
            <Main />
            <Row rowId="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
            <Row rowId="2" title="Trending" fetchURL={requests.requestTrending} />
            <Row rowId="3" title="Top Rate" fetchURL={requests.requestTopRate} />
        </>
    );
};

export default Home;
