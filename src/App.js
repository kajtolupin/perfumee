import './App.css';
import GlobalStyle from './components/GlobalStyle'
import Heading from './components/heading/Heading';
import Intro from './components/intro/Intro';
import Feature from './components/feature/Feature';
import Review1 from './components/review1/Review1';
import Review2 from './components/review2/Review2';
import Background from './components/background/Background';
import AboutUs from './components/aboutUs/AboutUs';
import Buy from './components/buy/Buy';
import Order from './components/order/Order';
import Options from './components/options/Options';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <Heading />
        <Intro />
        <Feature />
        <Review1 />
        <Review2 />
        <Background />
        <AboutUs />
        <Buy />
        <Order />
        <Options />
        <Contact />
        <Footer />

    </div>
    </GlobalStyle>
  );
}

export default App;


