import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const handleFormOpen = () => {
    window.open("https://forms.gle/Wu3doj779kC6rk3p6", "_blank");
  };
  const navigate = useNavigate();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-600"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-sm md:text-2xl font-semibold whitespace-nowrap text-white">
            TEDxMDIGurgaon
          </span>
        </a>
       <div className="flex gap-x-4">
       <div className="flex">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/team')}
            className="text-red-600 bg-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
           Team
          </motion.button>
        </div>
        <div className="flex md:order-2 space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleFormOpen()}
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Book Ticket
          </motion.button>
          {/* <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
       </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:hover:text-gray-400"
                aria-current="page"
              >
                Home
              </a>
            </li>
          
            <li>
              <a
                href="/#services"
                className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Past Speakers
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarComponent;
