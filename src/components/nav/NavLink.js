import { NavLink as Link } from 'react-router-dom';
// STYLESHEETS (AS MODULE)
import styles from './navlink.module.css';

const NavLink = props => {
	return (
		<Link
			className={`w-100 op-h d-f--cc td-n ta-c f-light c-light t-s ${styles.wrapper}`}
			activeClassName={`f-primary op-f ${styles.active}`}
			exact
			to={props.to}
		>
			{props.children}
			<span className='ff-mc'>
				{props.title}
			</span>
		</Link>
	);
}

export default NavLink;
