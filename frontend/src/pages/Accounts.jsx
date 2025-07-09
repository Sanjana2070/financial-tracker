const Accounts = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Your Accounts</h1>
      <p className="text-gray-700">View and manage your linked bank accounts here.</p>

      {/* Placeholder Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm">
              <th className="py-3 px-4 text-left">Account Name</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t text-gray-600">
              <td className="py-3 px-4">SBI</td>
              <td className="py-3 px-4">Savings</td>
              <td className="py-3 px-4">₹45,000</td>
            </tr>
            {/* Add more rows dynamically later */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts;
