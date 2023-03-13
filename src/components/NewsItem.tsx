import React from "react";
import { GlobalStyle } from "../globalStyle";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { NewsType } from './../interface';
import { Navigate, useNavigate } from "react-router-dom";

type News = {
    [key: string]: NewsType[]
}

const CardBox = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(13rem, auto));
    gap : 20px;
    width:90%;
    margin:50px auto;
`

const StyledList = styled(ListGroup.Item)`
    font-size: 14px;
    cursor: pointer;
`

const StyledList1 = styled(StyledList)<{author :String}>`
    background-color: ${ props => 
        props.author === '한겨레' ? 'rgb(154, 201, 183)' :
        props.author === ('YTN') || props.author.includes('연합') ? 'rgb(154, 180, 201)' : 'rgb(221, 221, 221)'
    };
    font-weight: bold;
    cursor: default;
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
    const url = a.url;
    return (
        <>
            <Card>
                <ListGroup variant="flush">
                    <StyledList1 author={a.author}>{a.author}</StyledList1>
                    <StyledList
                        onClick={()=> (document.location.href=`${url}`)}
                    >{a.title}</StyledList>
                </ListGroup>
            </Card>
        </>
    )
}


export default NewsItem;