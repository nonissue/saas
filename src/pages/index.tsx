import { type NextPage } from "next";
import { Header } from "~/components";
import { CenterVertically } from "~/components/CenterVertically";
import { MatchScoreboard } from "~/components/MatchScoreboard";

// import _people from "~/demo-data.json";
import Layout from "~/layouts/base";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

const fakePlayerAndy = {
  firstName: "Andy",
  lastName: "Murray",
  nickName: "Muzza",
  id: 1,
};

const fakePlayerKellan = {
  firstName: "Kellan",
  lastName: "Easterday",
  nickName: "KEYLIME",
  id: 2,
};

const fakeGame1 = {
  id: 1,
  winner: fakePlayerAndy,
  loser: fakePlayerKellan,
  winnerScore: 11,
  loserScore: 9,
};

const fakeGame2 = {
  id: 2,
  winner: fakePlayerKellan,
  loser: fakePlayerAndy,
  winnerScore: 13,
  loserScore: 11,
};

const fakeGame3 = {
  id: 3,
  winner: fakePlayerKellan,
  loser: fakePlayerAndy,
  winnerScore: 11,
  loserScore: 1,
};

const AddMatch: NextPage = () => {
  return (
    <Layout>
      <CenterVertically
        AboveCentered={<Header />}
        BelowCentered={<div>footer</div>}
      >
        <article className="mx-auto flex w-full max-w-4xl flex-row flex-wrap ">
          <section className="w-full border-2 ">
            <MatchScoreboard
              players={[fakePlayerAndy, fakePlayerKellan]}
              games={[fakeGame1, fakeGame2, fakeGame3]}
            />
            {/* <MatchScoreboard /> */}
          </section>
        </article>
      </CenterVertically>
    </Layout>
  );
};

export default AddMatch;
