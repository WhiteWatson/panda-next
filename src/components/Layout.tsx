import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      <Header />
      {children}
      {["/", "/about", "/home"].includes(pathname) && <Footer />}
    </div>
  );
};

export default Layout;
