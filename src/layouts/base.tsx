const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200">{children}</div>
  );
};

export default Layout;
