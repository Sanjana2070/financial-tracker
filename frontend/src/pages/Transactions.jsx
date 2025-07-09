const Transactions = () => {
  return (
    <div>
      <h1 className="text-gray-500 text-2xl font-bold mb-4">Transaction History</h1>
      <p className="text-gray-500">Track your expenses and income transactions.</p>

      {/* Placeholder Table */}
      <div className="mt-6 overflow-x-auto rounded-md">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm">
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t text-gray-800">
              <td className="py-3 px-4">01 Jul 2025</td>
              <td className="py-3 px-4">Groceries</td>
              <td className="py-3 px-4">₹1,500</td>
              <td className="py-3 px-4 text-red-600">Expense</td>
            </tr>
            {/* Add more rows dynamically later */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
