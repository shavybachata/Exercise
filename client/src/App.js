import { Route, Routes, Navigate } from "react-router-dom";
import { Box } from '@mui/material';
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import './App.css';
import ExerciseDetail from './components/pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ForgotPassword from "./components/ForgotPassword";

function App() {
	const user = localStorage.getItem("token");

	return (
		<div>
		<Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
		<Navbar/>
		<Routes>
			{user && <Route path="/main" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/exercise/:id" element={<ExerciseDetail />} />
			<Route path="/count" exact element={<Login />} />
			<Route path="/forgot-password" exact element={<ForgotPassword />} />
			<Route path="/" element={<Navigate replace to="/forgot-password" />} />
		</Routes>
		<Footer/>
		</Box>
		</div>
		
	);
}

export default App;



