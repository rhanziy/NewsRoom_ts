import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { GlobalStyle } from './components/NewsItem'
import { Route } from 'react-router-dom';
import { NewsType } from './interface';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner,} from "@fortawesome/free-solid-svg-icons";
import NewsItem from './components/NewsItem'
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';



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
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {
        loading ?
          <div className={'loadBox'}>
            <h1>Loading  <FontAwesomeIcon icon={faSpinner} pulse/></h1>
          </div> 
        : <NewsItem news={news}/>
      }

      

    </div>
  );
}


export default App;
