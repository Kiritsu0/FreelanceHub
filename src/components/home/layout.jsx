import Header from "/components/vol_org_header"

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <header className="flex justify-between items-center w-screen min-h-14">
        <Header />
      </header>
      {children}
    </div>
  );
};

export default Layout;
