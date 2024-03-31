import './style.css'
import Logo from '../../assets/airbnb-logo.png'

export default function Navbar() {
	return (
		<nav className="nav">
			<img className="nav--logo" src={Logo} alt="airbnb logo" />
		</nav>
	)
}
