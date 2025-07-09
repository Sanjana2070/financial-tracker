const Investments = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Investments Overview</h1>
      <p className="text-gray-700">Track your mutual funds, stocks, and SIPs.</p>

      {/* Placeholder Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-gray-800 text-sm">
              <th className="py-3 px-4 text-left">Investment</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Returns</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-3 px-4 text-gray-800">SBI Bluechip Fund</td>
              <td className="py-3 px-4 text-gray-800">Mutual Fund</td>
              <td className="py-3 px-4 text-gray-800">₹10,000</td>
              <td className="py-3 px-4 text-green-800">+₹1,200</td>
            </tr>
            {/* Add more rows dynamically later */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Investments;
