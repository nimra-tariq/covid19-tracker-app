
import './App.css';
import Header from './components/header/header';
import CardContainer from './components/cards/cardsContainer';
import Footer from './components/footer/footer';
import CovidChart from './components/covidRatioChart/covidRatioChart';
import { MyContext } from './context/context';
import { useReducer } from 'react';
import { myReducer } from './components/reducer/reducer';
import { Suspense } from 'react';


function App() {

  const [state, dispatch] = useReducer(myReducer, {});

  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <MyContext.Provider value={{ countryName: state, dispatchFun: dispatch }}>
          <Header></Header>
          <CardContainer></CardContainer>
          <CovidChart></CovidChart>
          <Footer></Footer>
        </MyContext.Provider>
      </Suspense>

    </div>

  );
}

export default App;
