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
			<div className="heading"> Twitch Stats</div>
			{/* <div > */}
			<table>
				<tr>
					<th>Sno.</th>
					<th>Streamer</th>
					<th>Avg Viewers</th>
					<th>All time peak in hrs</th>
					<th>Hours watched</th>
				</tr>
				<tr>
					<td>1</td>
					<td>Ninja</td>
					<td>9.586</td>
					<td>114.7</td>
					<td>616,693</td>
				</tr>
				<tr>
					<td>2</td>
					<td>TFUE</td>
					<td>11,170</td>
					<td>30,281</td>
					<td>220,748</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Shroud</td>
					<td>30,281</td>
					<td>220,478</td>
					<td>516,289</td>
				</tr>
				<tr>
					<td>4</td>
					<td>Rubius</td>
					<td>54,207</td>
					<td>96.8</td>
					<td>344,666</td>
				</tr>
				<tr>
					<td>5</td>
					<td>xQcOW</td>
					<td>90,688</td>
					<td>379.2</td>
					<td>222,454</td>
				</tr>
			</table>
			{/* </div> */}
		</div>
	);
};

export default TwitchScreen;
