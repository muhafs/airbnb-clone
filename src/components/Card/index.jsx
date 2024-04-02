/* eslint-disable react/prop-types */
import './style.css'
import Star from '../../assets/star.png'

export default function Card(props) {
	let badgeText
	if (props.card.openSpots === 0) {
		badgeText = 'SOLD OUT'
	} else if (props.card.location === 'Online') {
		badgeText = 'ONLINE'
	}

	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img className="card--image" src={'/images/' + props.card.coverImg} alt="card image" />

			<div className="card--rating">
				<img className="card--rating_star" src={Star} alt="rating star" />
				<p className="card--rating_number">
					{props.card.stats.rating}{' '}
					<span>
						({props.card.stats.reviewCount}) • {props.card.location}
					</span>
				</p>
			</div>

			<h2 className="card--title">{props.card.title}</h2>
			<p className="card--price">
				From ${props.card.price} <span>/ person</span>
			</p>
		</div>
	)
}
