import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Accounts", path: "/dashboard/accounts" },
    { name: "Transactions", path: "/dashboard/transactions" },
    { name: "Investments", path: "/dashboard/investments" },
  ];



  return (
    <div className="w-50 min-h-screen bg-gray-400 text-gray-800 p-4">
      <h2 className="text-xl font-bold mb-6">Finance Tracker</h2>
      <nav className="flex flex-col gap-4">
        {links.map(link => (
          <Link
            key={link.name}
            to={link.path}
            className={`px-2 py-1 rounded ${
              location.pathname === link.path
                ? "bg-gray-700 font-semibold"
                : "hover:bg-gray-700"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
