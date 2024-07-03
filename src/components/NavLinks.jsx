import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function NavLinks({ closeMenu }) {
	return (
		<>
			<li>
				<NavLink
					exact="true"
					to="/"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={closeMenu}
				>
					Welcome
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/expertise"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={closeMenu}
				>
					Our Expertise
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/our-doctors"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={closeMenu}
				>
					Our Doctors
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/insights"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={closeMenu}
				>
					Insights
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/gallery"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={closeMenu}
				>
					Gallery
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about-us"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={closeMenu}
				>
					Our Story
				</NavLink>
			</li>
		</>
	);
}

NavLinks.propTypes = {
	closeMenu: PropTypes.func.isRequired,
};
