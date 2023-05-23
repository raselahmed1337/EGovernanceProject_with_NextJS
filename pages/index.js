import { useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleVisitClick = () => {
    // Redirect user to the selected role page
    if (selectedRole) {
      window.location.href = `/${selectedRole.toLowerCase()}`;
    }
  };

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="max-w-md p-8 px-9 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">E-governance Application</h1>
        <div className="flex flex-col items-center">
          <label htmlFor="role" className="text-xl mb-2">
           Visit services
          </label>
          <select
            id="role"
            className="border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
            <option value="Doctor">Doctor</option>
            <option value="Citizen">Citizen</option>
          </select>
          <button
            onClick={handleVisitClick}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
            disabled={!selectedRole}
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;