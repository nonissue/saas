import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  title: string;
}

const HeaderLink = ({ title, href }: HeaderLinkProps) => {
  return (
    <div>
      <Link
        href={href}
        className="font-sans text-xs font-medium capitalize tracking-wide opacity-90 transition-colors duration-200 hover:text-blue-600
      dark:hover:text-blue-400 sm:text-base "
      >
        {title}
      </Link>
    </div>
  );
};

export { HeaderLink };
