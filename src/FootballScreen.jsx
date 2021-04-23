import React from "react";
import "./twitchScreen.css";

const TwitchScreen = () => {
	return (
		<div
			className="screen"
			style={{
				display: "flex",
				flexDirection: "column",
				alignContent: "center",
				justifyItems: "center",
			}}
		>
			<div className="heading"> Football league Stats</div>
			{/* <div > */}
			<table>
				<tr>
					<th>Sno.</th>
					<th>Club</th>
					<th>Matches</th>
					<th>Win</th>
					<th>Lost</th>
				</tr>
				<tr>
					<td>1</td>
					<td>Man City</td>
					<td>33</td>
					<td>24</td>
					<td>4</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Man UTD</td>
					<td>32</td>
					<td>19</td>
					<td>4</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Leicester City</td>
					<td>31</td>
					<td>17</td>
					<td>9</td>
				</tr>
				<tr>
					<td>4</td>
					<td>Chelsea</td>
					<td>32</td>
					<td>15</td>
					<td>7</td>
				</tr>
				<tr>
					<td>5</td>
					<td>West Ham </td>
					<td>32</td>
					<td>16</td>
					<td>9</td>
				</tr>
			</table>
			{/* </div> */}
		</div>
	);
};

export default TwitchScreen;
