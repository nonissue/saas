const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-[2000px] flex-col">{children}</div>
  );
};

export default Layout;
