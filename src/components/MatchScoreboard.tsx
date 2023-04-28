// see Figma -> Squashed -> MatchScoreboard_1

type Player = {
  firstName: string;
  lastName: string;
  nickName: string;
  id: number;
};

type MatchScoreboardProps = {
  games: number[];
  player: Player;
};

const MatchScoreBoardRow = ({ games, player }: MatchScoreboardProps) => {
  return <div></div>;
};

const MatchScoreboard = () => {
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
