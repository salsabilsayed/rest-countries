import { useParams, useHistory } from 'react-router'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import classes from './CountryDetails.module.css';

const CountryDetails = (props) => {
    const {countryId} = useParams();
    const history = useHistory();
    let allBorders;

    const country = props.countries.filter(country => country.name === countryId);

    const {name, nativeName, population, region, subregion,capital,topLevelDomain} = country[0]

    if(country[0].borders){
        allBorders = country[0].borders.map((border,index)=> <button key={index} className={`mr-2 my-2 btn-color ${classes.button}`}>
        {border}
        </button>)
    }else{
        allBorders = <p className="mb-1">No border countries!</p>
    }
    
    
    const backHandler = () => {
        history.push('/home');
    }

    return (
        <div className="container">
            
            <button type="button" onClick={backHandler} className={`${classes.button} btn-color`}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
                <span className="d-inline-block ml-2">Back</span>
            </button>
            
            <section className="d-flex flex-column flex-md-row justify-content-md-between">
                    <div className={classes.imgContainer}>
                        <img src={country[0].flag} className={classes.image} />
                    </div>
                    <div className={`${classes.content} align-self-md-center`}>
                        <h2 className="font-weight-bold mt-4 mt-md-0">{name}</h2>
                        <div className="d-flex flex-column flex-md-row">
                            <div className={classes.details}>
                                <p><span>Native name:</span> {nativeName}</p>
                                <p><span>Population:</span> {population}</p>
                                <p><span>Region:</span> {region}</p>
                                <p><span>Sub Region:</span> {subregion}</p>
                                <p><span>Capital:</span> {capital}</p>
                            </div>
                            <div className={classes.details}>
                                <p><span>Top Level Domain:</span> {topLevelDomain}</p>
                                <p><span>Currencies:</span> {country[0].currencies[0].name}</p>
                                <p><span>Languages:</span> {country[0].languages[0].name}</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-wrap align-items-center">
                            <h5 className="font-weight-bold mr-3">Border Countries:</h5>
                            <div>
                                {allBorders}
                            </div>
                        </div>
                    </div>
                
            </section>
        </div>
    )
}

export default CountryDetails
