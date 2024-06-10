import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavLinks({ closeMenu }) {
	return (
		<>
			<li>
				<NavLink exact to="/" activeClassName="active" onClick={closeMenu}>
					Welcome
				</NavLink>
			</li>
			<li>
				<NavLink to="/expertise" activeClassName="active" onClick={closeMenu}>
					Our Expertise
				</NavLink>
			</li>
			<li>
				<NavLink to="/our-doctors" activeClassName="active" onClick={closeMenu}>
					Our Doctors
				</NavLink>
			</li>
			<li>
				<NavLink to="/insights" activeClassName="active" onClick={closeMenu}>
					Insights
				</NavLink>
			</li>
			<li>
				<NavLink to="/gallery" activeClassName="active" onClick={closeMenu}>
					Gallery
				</NavLink>
			</li>
			<li>
				<NavLink to="/about-us" activeClassName="active" onClick={closeMenu}>
					Our Story
				</NavLink>
			</li>
		</>
	);
}

NavLinks.propTypes = {
	closeMenu: PropTypes.func.isRequired,  // closeMenu is a required func
};