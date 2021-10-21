import React, {useEffect, useState} from "react";
import { Route,Switch,Redirect } from 'react-router';
import axios from 'axios';

import Head from './components/Head';
import CountryDetails from './pages/CountryDetails';
import Home from './pages/Home';
import NotFoundPage from "./pages/NotFoundPage";

import './App.css';
//import { faHome } from "@fortawesome/free-solid-svg-icons";



function App() {
  const [urlParam, setUrlParam ] = useState('all')
	const [countries ,setCountries] = useState([]);
  const [themeChanged, setThemeChanged] = useState(true);
  const [error, setError] = useState(false)
  
	
	useEffect(()=> {
		
		axios.get(`https://restcountries.com/v2/${urlParam}`).then((res)=>{
			console.log(res.data);
			setCountries(res.data);
      if(res.data){
        setError(false);
      }else{
        setError(true)
      }
      
		}).catch((err)=>{
			console.log(err);
      if(err){
        setError(true);
      }
		})

	},[urlParam]);

  const searchHandler = countryName =>{
		setUrlParam(`name/${countryName}`);
	}

	const regionSearchHandler = region => {
		setUrlParam(`region/${region}`);
	}

  const changeTheme = darkTheme => {
    setThemeChanged(darkTheme);
  }

  let appClass = themeChanged ? "light-mode light-theme" :"dark-mode dark-theme";
  
  return (
    <div className={`${appClass} main`}>
      <Head changeTheme={changeTheme}/>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"/>
        </Route>
        <Route path="/home" exact>
            <Home 
            searchHandler={searchHandler} 
            regionSearchHandler={regionSearchHandler}
            countries={countries}
            error={error}
            />
        </Route>
        <Route path="/home/:countryId">
            <CountryDetails countries={countries}/>
        </Route>

        <Route path="*">
            <NotFoundPage />
        </Route>
          
      </Switch>
      
    </div>
  );
}

export default App;
