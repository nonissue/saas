import { type NextPage } from "next";
import { useState } from "react";
import { CenterVertically } from "~/components/CenterVertically";

import _people from "~/demo-data.json";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

const people = _people.sort((a, b) =>
  a.firstName > b.firstName ? 1 : -1
) as Person[];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200">{children}</div>
  );
};

const AddMatch: NextPage = () => {
  const [winner, setWinner] = useState<Person>();
  const [loser, setLoser] = useState<Person>();

  const toggleWinner = (person: Person) => {
    if (winner?.id === person.id) {
      setWinner(undefined);
    } else {
      setWinner(person);
    }
  };

  const toggleLoser = (person: Person) => {
    if (loser?.id === person.id) {
      setLoser(undefined);
    } else {
      setLoser(person);
    }
  };

  return (
    <Layout>
      <CenterVertically
        AboveCentered={
          <div className="flex items-center justify-between bg-slate-50 px-4 py-4 shadow-md">
            <div className="text-md font-bold leading-tight">IS</div>
            <div className="">Nav</div>
          </div>
        }
        BelowCentered={<div>footer</div>}
      >
        <article className=" mx-auto flex w-full max-w-4xl flex-row flex-wrap">
          <div className="w-1/2 ">
            <h3 className="my-4 text-xl font-bold">Winner</h3>
            <div className="grid grid-cols-2 gap-1 p-2 sm:grid-cols-2">
              {people.map((person: Person) => (
                <button
                  key={person.id}
                  onClick={() => toggleWinner(person)}
                  className="flex h-[3em] items-center justify-center rounded border-[1.5px] border-slate-300 bg-white text-center font-sans text-sm font-normal uppercase  text-gray-600 disabled:opacity-30"
                  disabled={loser?.id === person.id ? true : false}
                >
                  {person.firstName}
                </button>
              ))}
            </div>
          </div>
          <div className="w-1/2 ">
            <h3 className="my-4 text-xl font-bold">Loser</h3>
            <div className="grid grid-cols-2 gap-1 p-2 sm:grid-cols-2">
              {people.map((person: Person) => (
                <button
                  key={person.id}
                  onClick={() => toggleLoser(person)}
                  className="flex h-[3em] items-center justify-center rounded border-[1.5px] border-slate-300 bg-white text-center font-sans text-sm font-normal uppercase text-gray-600  disabled:opacity-30"
                  disabled={winner?.id === person.id ? true : false}
                >
                  {person.firstName}
                </button>
              ))}
            </div>
          </div>
          <div className="my-4 flex flex-col text-left text-lg">
            <p className="">Winner: {winner?.firstName}</p>
            <p className="">Loser: {loser?.firstName}</p>
          </div>
        </article>
      </CenterVertically>
    </Layout>
  );
};

export default AddMatch;
