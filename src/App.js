
import './App.css';
import Header from './components/header/header';
import CardContainer from './components/cards/cardsContainer';
import Footer from './components/footer/footer';
import { MyContext } from './context/context';
import { useReducer, useState } from 'react';
import { myReducer } from './components/reducer/reducer';
import { fetchStats } from './components/covidRatioChart/fetchApi';
import CountryPicker from './components/countryPicker/countryPicker';
import CovidChart from './components/covidRatioChart/chart';
import { totalStats } from './components/covidRatioChart/fetchApi';
import { useEffect } from 'react';



function App() {

  const [state, dispatch] = useReducer(myReducer, {});
  const [stats, setStats] = useState({});
  const [countryStats, setCountryStats] = useState({});


  function fetchData() {
    totalStats().then((resp) => {
      setStats(
        {
          confirmed: resp.confirmed.value,
          deaths: resp.deaths.value,
          recovered: resp.recovered.value
        });
    })
  }

  useEffect(() => { fetchData() }, [setStats])

  function onCountrySelection(cname) {
    if (cname === 'global') {
      fetchData();
    }
    else {
      fetchStats(cname).then((resp) => {
        setStats(
          {
            confirmed: resp.confirmed.value,
            deaths: resp.deaths.value,
            recovered: resp.recovered.value
          });
        setCountryStats({
          confirmed: resp.confirmed.value,
          deaths: resp.deaths.value,
          recovered: resp.recovered.value
        });
      });
    }

  }

  return (
    <div>
      <MyContext.Provider value={{ countryName: state, dispatchFun: dispatch }}>
        <Header></Header>
        <CardContainer deaths={stats.deaths} recovered={stats.recovered} confirmed={stats.confirmed} ></CardContainer>
        <CountryPicker onCountrySelection={onCountrySelection} confirmed={stats.confirmed}></CountryPicker>
        <CovidChart deaths={countryStats.deaths} recovered={countryStats.recovered} confirmed={countryStats.confirmed}></CovidChart>
        <Footer confirmed={stats.confirmed}></Footer>
      </MyContext.Provider>
    </div>

  )

}

export default App;


