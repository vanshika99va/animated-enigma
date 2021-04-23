import React from "react";
import { useHistory } from "react-router-dom";
import twitch from "./TWITCH.jpg";
import football from "./football.jpg";
import "./homeScreen.css";

const HomeScreen = () => {
	const history = useHistory();
	const handleClick1 = () => history.push("/twitch");
	const handleClick2 = () => history.push("/football");

	return (
		<div className="screen">
			{/* <p>heyy</p> */}
			<div className="screen-half bgcolor">
				<button
					className="screenButton"
					style={{ borderRadius: 10 }}
					onClick={handleClick1}
				>
					<p
						// classname="buttonText"
						style={{ fontSize: 16, fontWeight: 600 }}
					>
						Twitch
					</p>
				</button>
			</div>
			<div className="screen-half bgcolor2">
				<button
					onCLick={handleClick2}
					className="screenButton"
					style={{ borderRadius: 10 }}
				>
					<p
						// classname="buttonText"
						style={{ fontSize: 16, fontWeight: 600 }}
					>
						Football league
					</p>
				</button>
			</div>
		</div>
	);
};

export default HomeScreen;
