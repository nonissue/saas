import { type NextPage } from "next";

import _people from "~/demo-data.json";

type Person = {
  id: number;
  firstName: string;
  lastName: string;
};

const people = _people as Person[];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-slate-200">{children}</div>;
};

const AddMatch: NextPage = () => {
  return (
    <Layout>
      <div className="sm:mx-auto sm:max-w-4xl">
        <div className="flex h-24 items-center justify-between px-4 py-4 shadow-md">
          <div className="text-md font-bold italic leading-tight">
            Intermittent
            <br />
            Service
          </div>
          <div className="">Nav Goes Here</div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-4 bg-slate-50/50 px-4 py-4 sm:grid-cols-4">
            {people.map((person: Person) => (
              <div
                key={person.id}
                className="flex h-[2.5em]  items-center justify-center rounded-md border-[1.5px] border-slate-300 bg-white text-center font-sans text-lg tracking-widest text-gray-600"
              >
                {person.firstName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddMatch;
