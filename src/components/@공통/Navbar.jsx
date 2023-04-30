import Icon from "@atoms/Icon";
import NavItem from "@atoms/NavItem";
import { navmenu } from "./data";

export default function Navbar({ keyword }) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Icon keyword={keyword} />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navmenu.map((item, idx) => (
            <NavItem item={item} key={idx} />
          ))}
        </nav>
      </div>
    </header>
  );
}
