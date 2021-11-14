import React from "react";
import Forms from "../components/Forms";
import Card from "../components/Card";


const Home = (props) => {
	return (
		<React.Fragment>
			<Forms 
			searchHandler={props.searchHandler} 
			regionSearchHandler={props.regionSearchHandler}
			/>
			<div className="container">
				{props.error && <h4>No results...</h4>}
				{!props.error && <div className="row">
					{props.countries.map((country, index)=>{
						return <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
                        <Card
						countries={{
							id:index,
							name: country.name,
							flag:country.flag,
							population:country.population,
							region:country.region,
							capital:country.capital
						}}
						/>
                    </div>
					})}
					

				</div>}
			</div>
		</React.Fragment>
	);
};

export default Home;
