import Header from "./Header";

const Layout: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
