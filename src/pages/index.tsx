import { type NextPage } from "next";
import { CenterVertically } from "~/components/CenterVertically";
import { MatchScoreboard } from "~/components/MatchScoreboard";

// import _people from "~/demo-data.json";
import Layout from "~/layouts/base";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

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
        <article className=" mx-auto flex w-full max-w-4xl flex-row flex-wrap">
          <h1>SaaS</h1>
          <section>
            <MatchScoreboard />
            <MatchScoreboard />
          </section>
        </article>
      </CenterVertically>
    </Layout>
  );
};

export default AddMatch;
