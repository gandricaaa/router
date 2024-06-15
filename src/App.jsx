import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com';
function App() {
	return (
		<>
			<div className='bg-slate-600 p-[20px]'>
				<NavBar />
			</div>
			<Outlet />
		</>
	);
}

export default App;
