import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import classes from './Card.module.css'

const Forms = (props) => {
	const {name, flag, population,region,capital} = props.countries;
	return (
		<Link to={`/home/${name}`} className="text">
			<Card className="border-0 main-card">
				<div className={classes.parent}>
					<div className={classes.child} style={{backgroundImage: `url(${flag})`}}>
					</div>
				</div>
				<Card.Body className="cardBody">
					<Card.Title className={classes.title}>{name}</Card.Title>
					<Card.Text className="mb-1">
						<span className={classes.subTitle}>Population:</span> {population}
					</Card.Text>
					<Card.Text className="mb-1">
						<span className={classes.subTitle}>Region:</span> {region}
					</Card.Text>
					<Card.Text>
						<span className={classes.subTitle}>Capital:</span> {capital}
					</Card.Text>
					
				</Card.Body>
			</Card>
		</Link>
	);
};

export default Forms;
