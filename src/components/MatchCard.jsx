
function MatchCard({ team1, team2, date, venue, price }) {
  return (
    <div className="match-card">
      <h2>{team1} VS {team2}</h2>
      <p>Date: {date}</p>
      <p>Venue: {venue}</p>
      <p>Ticket Price: ₹{price}</p>
      <button>Book Ticket</button>
    </div>
  )
}

export default MatchCard
