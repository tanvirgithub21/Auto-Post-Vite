import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { Menus } from "./utils";

export default function Navbar() {
  return (
    <div>
      <header className="h-16 text-[15px] relative inset-0 flex-center dark:bg-[#0E1628] border-b border-[#2b4175] ">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <h3 className="text-lg font-semibold">Framer</h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Sign In
            </button>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
