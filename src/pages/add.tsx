import { type NextPage } from "next";

import _people from "~/demo-data.json";

type Person = {
  id: number;
  name: string;
};

const people = _people as Person[];

const AddMatch: NextPage = () => {
  return (
    <div>
      <div className="flex h-24 items-center justify-between p-2">
        <div className="text-lg font-bold italic leading-tight">
          Intermittent
          <br />
          Service
        </div>
        <div className="">Nav Goes Here</div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-4 bg-slate-100">
          {people.map((person: Person) => (
            <div
              key={person.id}
              className="flex aspect-square  items-center justify-center rounded-full border-2 border-slate-200 bg-slate-50 text-center font-mono text-xl"
            >
              {person.name.split(" ", 1)[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddMatch;
