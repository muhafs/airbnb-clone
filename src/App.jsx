import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

import Data from './data'

function App() {
	const cards = Data.map((card) => {
		return <Card key={card.id} card={card} />
	})

	return (
		<>
			<Navbar />
			<Hero />
			<div className="cards-list">{cards}</div>
		</>
	)
}

export default App
