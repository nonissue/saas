/* eslint-disable @typescript-eslint/no-non-null-assertion */
// ^ allows this: player={players[0]!} which im using during dev with mock data as
// typescript always sees the items in an array of objects as possibly undefined.

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

/*

Rough sketch of scoreboard:

┌─────────────────┬─────────┬─────────┬─────────┐
│ Player 1 (name) │ Game 1  │ Game 2  │ Game 3  │
├─────────────────┼─────────┼─────────┼─────────┤
│ Player 2 (name) │ Game 1  │ Game 2  │ Game 3  │
└─────────────────┴─────────┴─────────┴─────────┘



*/

const MatchScoreBoardRow = ({ player, games }: MatchScoreboardRowProps) => {
  return (
    <div
      aria-label="Player"
      className="flex max-w-xl flex-row items-center justify-between"
    >
      {/* Name */}
      <div className=" font-sans text-3xl font-semibold tracking-tight">
        {player.firstName}
      </div>
      {/* Loop over all game scores and display them */}
      <div
        aria-label="Player Game Scores"
        className="flex flex-row gap-x-2 align-middle font-mono font-semibold"
      >
        {games.map((game) =>
          game.winner.id === player.id ? (
            <div
              key={game.id}
              className="w-[4ch] border-2 border-sky-500/20 bg-sky-300 p-2"
            >
              {game.winnerScore}
            </div>
          ) : (
            <div
              key={game.id}
              className="w-[4ch] border-2 border-slate-300/20 bg-slate-100 p-2"
            >
              {game.loserScore}
            </div>
          )
        )}
      </div>
    </div>
  );
};

const MatchScoreboard = ({ players, games }: MatchScoreboardProps) => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col gap-y-2">
        <MatchScoreBoardRow player={players[0]!} games={games} />
        <MatchScoreBoardRow player={players[1]!} games={games} />
      </div>
    </div>
  );
};

export { MatchScoreboard };
