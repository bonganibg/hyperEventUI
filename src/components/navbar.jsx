import { NavLink } from "react-router-dom";

function NavBar() {
  const isActive = ({ isActive }) =>
    isActive ? "text-grey-100" : "text-white-400";

  return (
    <header className="w-full">
      <nav className="flex justify-between px-28 py-8">
        <div className="text-2xl">
          <NavLink to="/">HypEvents</NavLink>
        </div>

        <ul className="flex justify-between gap-4 text-2xl">
          <li>
            <NavLink to="/tours"   className={isActive}> tours </NavLink>            
          </li>
          <li>
            <NavLink to="/management" className={isActive}> management </NavLink>
          </li>
          <li>
            <NavLink to="/auth" className="bg-grey-300 py-1 px-6 text-lg rounded-3xl">
              login
            </NavLink>
          </li>
        </ul>        
      </nav>

        <div className="w-full flex flex-row justify-center">
            <hr  className="w-[90%] h-[2px] text-grey-200 border-[1px]"/>
        </div>
    </header>
  );
}

export default NavBar;
