import { type NextPage } from "next";
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
        <article className="m-10 flex flex-col px-4">
          <div className="grid grid-cols-2 gap-16 bg-slate-50/0 px-8 py-0 sm:grid-cols-4">
            {people.map((person: Person) => (
              <div
                key={person.id}
                className="flex aspect-square items-center justify-center rounded-full border-[1.5px]   border-slate-300/20 bg-white text-center font-sans text-2xl font-bold  text-gray-600"
              >
                {person.firstName}
              </div>
            ))}
          </div>
        </article>
      </CenterVertically>
    </Layout>
  );
};

export default AddMatch;
