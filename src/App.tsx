import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import { GlobalStyle } from './globalStyle'
import { Route } from 'react-router-dom';
import { NewsType } from './interface';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner,} from "@fortawesome/free-solid-svg-icons";
import NewsItem from './components/NewsItem'
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';


const LoadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:50px;
  h1 {
    width:200px;
    font-family: Poppins;
    font-size: 1.3em;
    color:rgba(129, 129, 129, 0.5);
    text-align: center;
  }
`

const MainBg = styled(Carousel.Item)`
  width:100%;
  height: 400px;
  background-color: rgb(0, 0, 0);
  img {
    height:100%;
    object-fit: cover;
    opacity:0.7
  }
`

function App() {
  let [loading, setLoading] = useState(true);
  let [news, setNews] = useState<NewsType[]>([]);
  
  const getNews = async() => {

    try{
      const res = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=f7bfbc4e867141f5b7b899ee5f13742e'
      );
      setNews(res.data.articles);
      setLoading(false);
    } catch(e) {
      console.log(e);
    }
  }
  
  useEffect(()=>{
    getNews();
  }, []);
  

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
        <MainBg interval={1000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + `/2248525.jpg`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </MainBg>
        <MainBg interval={1000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + `/2248560.jpg`}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </MainBg>
        <MainBg>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + `/2248664.jpg`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </MainBg>
      </Carousel>
      {
        loading ?
          <LoadBox>
            <h1>Loading  <FontAwesomeIcon icon={faSpinner} pulse/></h1>
          </LoadBox> 
        : <NewsItem news={news}/>
      }

    </div>
  );
}


export default App;
