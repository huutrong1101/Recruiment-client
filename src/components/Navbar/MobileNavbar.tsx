import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import classNames from "classnames";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { setNavbarDrawerVisible } from "./slices/NavbarSlice";

export default function MobileNavbar() {
  const { drawerVisible, items } = useAppSelector((app) => app.Navbar);
  const dispatch = useAppDispatch();

  const handleExpandDrawer = () => {
    dispatch(setNavbarDrawerVisible(true));
  };
  const handleCloseDrawer = () => {
    dispatch(setNavbarDrawerVisible(false));
  };

  return (
    <div className={classNames(`block sm:hidden mb-6 px-6 py-6`)}>
      <div className={classNames(`flex flex-row gap-4`)}>
        <button className="w-[28px] text-zinc-800" onClick={handleExpandDrawer}>
          <span className={classNames(`w-[16px]`)}>
            <Bars4Icon />
          </span>
        </button>

        {/*  */}
        <Link to={`/`}>
          <h1 className={classNames(`text-2xl font-bold`)}>JobPort</h1>
        </Link>
      </div>

      {/* Drawer */}
      <div>
        <Transition
          appear={true}
          show={drawerVisible}
          className={classNames(
            `fixed`,
            `bg-black/70 w-full h-full top-0 left-0 z-50`,
          )}
        >
          <Transition.Child
            className={classNames(
              `w-[300px] bg-white h-full fixed`,
              `flex flex-col transition-all duration-75 ease-in-out`,
            )}
            // enter="transition-all "
            enterFrom={"transform-gpu -translate-x-[300px] opacity-30"}
            enterTo={"transform-gpu translate-x-0 opacity-100"}
            leaveFrom={"transform-gpu opacity-100"}
            leaveTo={"transform-gpu -translate-x-[300px] opacity-0"}
          >
            {/* Close button */}
            <button
              className={classNames(`px-6 py-4`)}
              onClick={handleCloseDrawer}
            >
              <XMarkIcon className={classNames(`w-[32px]`)} />
            </button>

            {/* Items */}
            {items.map((item) => {
              return (
                <Link
                  to={item.url}
                  onClick={handleCloseDrawer}
                  className={classNames(`px-6 py-4 text-lg`)}
                >
                  {item.name}
                </Link>
              );
            })}
          </Transition.Child>
        </Transition>
      </div>
      <div />
    </div>
  );
}
