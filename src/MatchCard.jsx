
function MatchCard({ match, onBook }) {
  return (
    <div className="match-card">
      <h3>{match.team1} VS {match.team2}</h3>
      <p>Date: {match.date}</p>
      <p>Venue: {match.venue}</p>
      <p>Selected Match: {selectedMatch || "No match selected"}</p>

      <button onClick={() => onBook(match.team1 + " VS " + match.team2)}>
        Book Ticket
      </button>
    </div>
  );
}

export default MatchCard;
