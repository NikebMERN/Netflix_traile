import React from "react";
import { Link } from 'react-router-dom';
// import "../css/Footer.css";

function Footer() {
	return (
		<div className="footer text-white">
			<div className="footer__links lg:flex lg:ml-52 md:flex md:ml-36 sm:block sm:ml-24">
				<ul className="p-6 justify-space">
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">FAQ</Link>{" "}
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Investor Relations</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Ways to Watch</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Corporate Information</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Only on Netflix</Link>
					</li>
				</ul>
				<ul className="p-6 justify-space">
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Help Center</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Jobs</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Terms of Use</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Contact us</Link>
					</li>
				</ul>

				<ul className="p-6 justify-space">
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Account</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Redeem Gift Cards</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Privacy</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Speed Test</Link>
					</li>
				</ul>
				<ul className="p-6 justify-space">
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Media Center</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Buy Gift Cards</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Cookie Preferences</Link>
					</li>
					 <li className="list-none opacity-25 hover:opacity-10">
						<Link to="/">Legal Notices</Link>
					</li>
				</ul>
			</div>
			
		</div>
	);
}

export default Footer;