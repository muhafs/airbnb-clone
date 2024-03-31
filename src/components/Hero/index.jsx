import './style.css'
import HeroImage from '../../assets/hero.png'

export default function Hero() {
	return (
		<div className="hero">
			<img className="hero--image" src={HeroImage} alt="hero image" />

			<div className="hero--text">
				<h1 className="hero--text_title">Online Experiences</h1>
				<p className="hero--text_subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
			</div>
		</div>
	)
}
