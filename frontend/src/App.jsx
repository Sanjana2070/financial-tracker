import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";


import Hero from "./pages/Hero";
import DashboardLayout from "./components/DashboardLayout";
import Accounts from "./pages/Accounts";
import Investments from "./pages/Investments";
import Transactions from "./pages/Transactions";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";


const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard layout with nested routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="investments" element={<Investments />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>

    </Routes>
  );
};

export default App;
