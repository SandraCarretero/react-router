import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
	const navigate = useNavigate();
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/product/computer'>Product computer</Link>
				</li>
				<li>
					<Link to='/product/keyboard'>Product keyboard</Link>
				</li>
			</ul>
			<button onClick={() => navigate('/')}>Ir al home</button>
		</nav>
	);
};

export default Menu;
