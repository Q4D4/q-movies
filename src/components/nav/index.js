// COMPONENTS
import NavLink from './NavLink';
// STYLESHEETS (AS MODULE)
import styles from './index.module.css';

const Nav = props => {
	return (
		<nav className={`w-100 p-f d-f--cc bg-darker ${styles.container}`}>
			<NavLink title='მთავარი' to='/'>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
					<path d='M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z'></path>
				</svg>
			</NavLink>
			<NavLink title='ფილმები' to='/movies'>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
					<path d='M22 14.236v3.528l-2-1v-1.528l2-1zm2-3.236l-6 3v4l6 3v-10zm-10 2v5.5c0 .276-.224.5-.5.5h-9c-.276 0-.5-.224-.5-.5v-5.5c-.702 0-1.373-.127-2-.35v6.35c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-6.35c-.627.223-1.298.35-2 .35zm0-8c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-10 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm10-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm-10 0c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z'></path>
				</svg>
			</NavLink>
			<NavLink title='სერიალები' to='/series'>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
					<path d='M22 4v12h-20v-12h20zm2-2h-24v16h24v-16zm-7 18h-10v2h10v-2z'></path>
				</svg>
			</NavLink>
		</nav>
	);
}

export default Nav;