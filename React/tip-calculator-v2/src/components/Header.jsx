import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const headerItems = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Contact",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white flex flex-col gap-4 max-w-[1300px] w-[90%] mx-auto py-6">
      <div className="flex items-center justify-between w-full">
        <p className="text-2xl">Tip Calculator V2</p>
        <ul className="gap-4 items-center justify-between hidden sm:flex">
          {headerItems.map((headerItem) => (
            <li
              className="cursor-pointer text-lg hover:text-blue-700"
              key={headerItem.id}
            >
              <a href={headerItem.name}>{headerItem.name}</a>
            </li>
          ))}
        </ul>
        <div className="text-2xl sm:hidden cursor-pointer">
          <RxHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen ? (
        <div className="bg-[#1F2937] w-[95%] absolute top-20 left-2 rounded-md">
          <ul className=" flex flex-col  sm:hidden py-4 px-2">
            {headerItems.map((headerItem) => (
              <li
                className="cursor-pointer text-lg py-2 w-full hover:bg-gray-600 rounded pl-4"
                key={headerItem.id}
              >
                <a href="" className="">
                  {headerItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
