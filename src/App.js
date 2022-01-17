
import './App.css';
import Header from './components/header/header';
import CardContainer from './components/cards/cardsContainer';
import DropDown from './components/countryListDropDown/dropDown';
import Footer from './components/footer/footer';
import CovidChart from './components/covidRatioChart/covidRatioChart';
import { MyContext } from './context/context';
import { useReducer } from 'react';
import { myReducer } from './components/reducer/reducer';


function App() {

  const [state,dispatch]=useReducer(myReducer,{});

  return (
    <div>
      <MyContext.Provider value={{countryName:state,dispatchFun:dispatch}}>
      <Header></Header>
      <CardContainer></CardContainer>
      <DropDown></DropDown>
      <CovidChart></CovidChart>
      <Footer></Footer>
      </MyContext.Provider>
    </div>

  );
}

export default App;
