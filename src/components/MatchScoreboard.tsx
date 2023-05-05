// see Figma -> Squashed -> MatchScoreboard_1

interface Player {
  firstName: string;
  lastName: string;
  nickName: string;
  id: number;
}

interface Game {
  id: number;

  winner: Player;
  loser: Player;
  winnerScore: number;
  loserScore: number;
}

interface Match {
  id: number;
}

interface MatchScoreboardProps {
  players: Player[];
  games: Game[];
}

interface MatchScoreboardRowProps {
  player: Player;
  games: Game[];
}

const MatchScoreBoardRow = ({ player, games }: MatchScoreboardRowProps) => {
  return (
    <div>
      <div>
        {player.firstName.slice(1)} {player.lastName}
      </div>
      <div>
        {games.map((game) => (
          <div key={game.id}>{game.id}</div>
        ))}
      </div>
    </div>
  );
};

const MatchScoreboard = ({ players, games }: MatchScoreboardProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div>
          <h1>Scores</h1>
          <div>Score</div>
        </div>

        <div>Player Name</div>
      </div>
    </div>
  );
};

export { MatchScoreboard };
