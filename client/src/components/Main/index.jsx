import styles from "./styles.module.css";
import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../Exercises';
import SearchExercises from '../SearchExercises';
import HeroBanner from '../HeroBanner';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	const [exercises, setExercises] = useState([]);
  	const [bodyPart, setBodyPart] = useState('all');
	return (
		<div className={styles.main_container}>
			{/* <nav className={styles.navbar}>
				<h1>Fitness with sheen</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav> */}
			<Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
		</div>
	);
};

export default Main;






