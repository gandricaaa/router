import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<div className='container mx-auto flex items-center justify-between'>
			<h1>LOGO</h1>
			<ul className='flex items-center gap-[20px]'>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/Features'>Features</NavLink>
				</li>
				<li>
					<NavLink to='/About'>About</NavLink>
				</li>
				<li>
					<NavLink to='/products'>Products</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
