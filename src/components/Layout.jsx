// NOTE: The nav below uses <a href="…"> which triggers full page reloads.
// Lab 07 asks you to install react-router and replace these with <Link>.
import { NavLink, Outlet } from "react-router";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-14 flex items-center justify-between border-2 px-5 border-blue-600">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          <span className="font-bold">Countries of the World</span>
        </div>

        <div className="flex gap-5">
          <NavLink to ={'/'} end>
            <p className='text-[12px] ${isActive ? "font-bold text-blue-600" : ""}'>Home</p>
          </NavLink>
          <NavLink to={"/countries"}>
            <p className='text-[12px] #{isActive ? "font-bold text-blue-600" : ""}'>Countries</p>
          </NavLink>
          <NavLink to={"/bucket-list"}>
            <p className='text-[12px] ${isActive ? "font-bold text-blue=-600" : ""}'>Bucket List</p>
          </NavLink>
          <NavLink to={"/about"}>
            <p className='text-[12px] ${isActive ? "font-bold text-blue-600" : ""}'>About</p>
          </NavLink>
        </div>
      </nav>
      <main className="flex-1 border-2 border-amber-400 p-3">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
