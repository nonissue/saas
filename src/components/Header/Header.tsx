import Link from "next/link";
import { HeaderLink, ThemeChanger } from "~/components";

const Header = () => {
  return (
    <div className="relative z-10  shadow-sm dark:border-b dark:border-gray-900">
      <div className="relative inset-0 z-20">
        <div className="inset-0 mx-auto flex max-w-3xl px-6 py-2 sm:px-6 lg:px-8 lg:py-2 ">
          <div className="space-between relative flex w-full items-center">
            <div className="font-display flex-grow ">
              <Link href="/" className=" flex items-center">
                <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-gray-50 sm:text-xl md:text-2xl">
                  GoodService
                </div>
                <div className="font-mono text-xs font-bold  text-slate-400 first-letter:text-opacity-100 sm:text-xs">
                  TM
                </div>
              </Link>
            </div>
            <HeaderLink href="/projects" title="Projects" />
            <span className="text-sm font-light opacity-30 sm:text-lg">
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <HeaderLink href="/contact" title="Contact" />
            &nbsp;&nbsp;
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
