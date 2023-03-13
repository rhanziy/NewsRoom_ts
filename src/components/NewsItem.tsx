import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { NewsType } from './../interface';

type News = {
    [key: string]: NewsType[]
}

export const GlobalStyle = createGlobalStyle`
    *{ margin:0; padding:0; box-sizing:border-box; }
`
const CardBox = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(13rem, auto));
    gap : 20px;
    width:90%;
    margin:50px auto;
`

function NewsItem({ news }: News) {
    const category = [];
    return (
        <>
            <GlobalStyle />
            <CardBox>
            {
                news.map((a, i) => {
                    return (
                        <Cards {...a} key={i} />
                    )
                })
            }
            </CardBox>
        </>
    )
}

function Cards({ ...a }) {
    return (
        <>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>{a.author}</ListGroup.Item>
                    <ListGroup.Item>{a.title}</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}


export default NewsItem;