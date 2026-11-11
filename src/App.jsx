
import './App.css'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MatchCard from './components/MatchCard'

function App() {

  const matches = [
    {
      team1: 'RCB',
      team2: 'CSK',
      date: '15 April 2026',
      venue: 'Bengaluru',
      price: 1000
    },
    {
      team1: 'MI',
      team2: 'KKR',
      date: '18 April 2026',
      venue: 'Mumbai',
      price: 1200
    },
    {
      team1: 'SRH',
      team2: 'RR',
      date: '20 April 2026',
      venue: 'Hyderabad',
      price: 1500
    },
    {
      team1: 'GT',
      team2: 'DC',
      date: '22 April 2026',
      venue: 'Ahmedabad',
      price: 1000
    }
  ]

  return (
    <div>
      <Navbar />

      <Hero />

      <section id="matches">
        <h2>Upcoming Matches</h2>

        {matches.map((match, index) => (
          <MatchCard
            key={index}
            team1={match.team1}
            team2={match.team2}
            date={match.date}
            venue={match.venue}
            price={match.price}
          />
        ))}
      </section>

      <section id="booking">
        <h2>Book Your Ticket</h2>
        <p>Choose your match and enjoy the IPL!</p>
      </section>

      <footer>
        <p>© 2026 IPL Ticket Booking</p>
      </footer>
    </div>
  )
}

export default App
