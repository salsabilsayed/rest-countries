import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import classes from './Forms.module.css';


const Forms = props => {
	const [name,setName] = useState('');
	const [region,setRegion] = useState('Filter by Region');
	const regionInputRef = useRef();


	const search = e =>{
		setName(e.target.value);
		props.searchHandler(name);
	}

	const regionHandler = e =>{
		console.log(e.target.value);
		setRegion(e.target.value);

		props.regionSearchHandler(regionInputRef.current.value);
	}
	
	return (
		<div className="container">
			<Form.Group controlId="exampleForm.ControlInput1" className="d-flex my-5 justify-content-md-between flex-wrap">
				<div className={`d-flex align-items-center mb-4 mb-md-0 input-box ${classes.searchInput}`}>
					<FontAwesomeIcon icon={faSearch} />
					<input type="text"
					placeholder="Search for a country..."
					onChange={search}
					value={name}
					className="ml-2 w-100"
					/>
				</div>

				<select 
				className={classes.select}
				value={region} 
				ref={regionInputRef}
				onChange={regionHandler} 
				>
					<option disabled>Filter by Region</option>
					<option value="Africa">Africa</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Americas">Americas</option>
					<option value="Oceania">Oceania</option>
				</select>
			</Form.Group>
		</div>
		
	);
};

export default Forms;
