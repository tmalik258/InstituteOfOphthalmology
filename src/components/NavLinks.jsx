import { NavLink } from 'react-router-dom';

export default function NavLinks() {
	return (
		<>
			<li>
				<NavLink exact to="/" activeClassName="active">
					Welcome
				</NavLink>
			</li>
			<li>
				<NavLink to="/expertise" activeClassName="active">
					Our Expertise
				</NavLink>
			</li>
			<li>
				<NavLink to="/our-doctors" activeClassName="active">
					Our Doctors
				</NavLink>
			</li>
			<li>
				<NavLink to="/insights" activeClassName="active">
					Insights
				</NavLink>
			</li>
			<li>
				<NavLink to="/gallery" activeClassName="active">
					Gallery
				</NavLink>
			</li>
			<li>
				<NavLink to="/about-us" activeClassName="active">
					Our Story
				</NavLink>
			</li>
		</>
	);
}
