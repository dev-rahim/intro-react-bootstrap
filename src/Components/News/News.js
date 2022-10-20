import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import './News.css';

const News = (props) => {
    const { title, author, url, urlToImage, content, } = props.news;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <small>{author}</small>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Button href={url} variant="dark" size="sm">Read More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;