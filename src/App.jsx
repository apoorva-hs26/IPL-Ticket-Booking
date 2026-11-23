import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";

const matches = [
  { id: 1, team1: "CSK", team2: "MI", date: "25 Nov 2026", venue: "Chennai" },
  { id: 2, team1: "RCB", team2: "KKR", date: "27 Nov 2026", venue: "Bengaluru" },
  { id: 3, team1: "SRH", team2: "DC", date: "29 Nov 2026", venue: "Hyderabad" }
];

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="matches">
        <h2>Upcoming Matches</h2>

        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </section>
    </>
  );
}
const [selectedMatch, setSelectedMatch] = useState("");

export default App;
