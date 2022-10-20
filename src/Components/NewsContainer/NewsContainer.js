import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from '../News/News';

import './NewsContainer.css'
const NewsContainer = () => {

    const [allNews, setAllNews] = useState([]);
    useEffect((() => {
        // fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8679413729d040cf85e3be5c72f1e4eb')
        fetch('./newsData.json')
            .then(res => res.json())
            .then(data => setAllNews(data.articles))
    }), [])
    return (
        <Row xs={1} md={3} className="g-4 mt-5 text-center">
            {
                allNews?.length === 0 ? <div className='spinner'><Spinner animation="border" /></div>
                    : allNews.map(news => <News key={news.url} news={news} />)
            }
        </Row>
    );
};

export default NewsContainer;