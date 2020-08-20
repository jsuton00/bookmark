import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
	const navLinks = ["Features", "Pricing", "Contact"];
	return (
		<>
			{navLinks.map((link, index) => {
				return (
					<div key={index} className='navlink-item'>
						<NavLink
							to={`/${link.toLowerCase()}`}
							className='navlink'
							aria-label={link}
						>
							{link}
						</NavLink>
					</div>
				);
			})}
		</>
	);
}
