import React from "react";
import { Link } from "react-router-dom";
2
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div className="nav-logo">
				<img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" style={{width: "100px", height: "35px", margin:"15px"}}/>
				</div>
			</Link>
			

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
</div>

			
		
		</nav>
	);
};
export default Navbar();