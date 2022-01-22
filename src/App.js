
import './App.css';
import Header from './components/header/header';
import CardContainer from './components/cards/cardsContainer';
import Footer from './components/footer/footer';
import CovidChart from './components/covidRatioChart/covidRatioChart';
import { MyContext } from './context/context';
import { useReducer } from 'react';
import { myReducer } from './components/reducer/reducer';
import { Suspense } from 'react';
import { fetchCountries, fetchData } from './components/covidRatioChart/fetchApi';
import CountryPicker from './components/countryPicker/countryPicker';



function App() {

  const [state, dispatch] = useReducer(myReducer, {});
fetchData();
fetchCountries();

  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <MyContext.Provider value={{ countryName: state, dispatchFun: dispatch }}>
          <Header></Header>
          <CardContainer></CardContainer>
          <CovidChart></CovidChart>
          <Footer></Footer>
        </MyContext.Provider>
        {/* <CountryPicker></CountryPicker> */}
      </Suspense>
    </div>

  );
}

export default App;
