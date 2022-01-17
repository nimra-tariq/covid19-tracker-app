
import './App.css';
import Header from './components/header/header';
import BasicCard from './components/cards/dummy';
import CardContainer from './components/cards/cardsContainer';
import ProductCard from './components/cards/productCard';
import DropDown from './components/countryListDropDown/dropDown';
import Footer from './components/footer/footer';
import CovidChart from './components/covidRatioChart/covidRatioChart';


function App() {
  return (
    <div>
      <Header></Header>
      <CardContainer></CardContainer>
      <DropDown></DropDown>
      <CovidChart></CovidChart>
      <Footer></Footer>
    </div>

  );
}

export default App;
