import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  title: string;
}

const NewHeaderLink = ({ title, href }: HeaderLinkProps) => {
  return (
    <div>
      <Link href={href}>
        <a
          className="font-sans text-xs font-medium capitalize tracking-wide opacity-90 transition-colors duration-200 hover:text-blue-600
        dark:hover:text-blue-400 sm:text-base "
        >
          {title}
        </a>
      </Link>
    </div>
  );
};

export { NewHeaderLink };
