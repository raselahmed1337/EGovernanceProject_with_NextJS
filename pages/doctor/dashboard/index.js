import MyLayout from "../component/layout";
import DoctorDrawer from "../component/doctordrawer";
import SessionCheck from "../component/sessioncheck";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const DoctorDashboard = () => {
  const upcomingAppointments = [
    { id: 1, patientName: "John Doe", date: "2023-05-15", time: "10:00 AM" },
    { id: 2, patientName: "Jane Smith", date: "2023-05-16", time: "2:30 PM" },
  ];

  const patientsList = [
    { id: 1, name: "John Doe", age: 35 },
    { id: 2, name: "Jane Smith", age: 42 },
  ];

  return (
    <>
      <SessionCheck />
      <MyLayout title="Doctor Dashboard" />

      <DoctorDrawer />
      <div className="flex justify-center py-8">
        <div className="w-full max-w-4xl p-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
              <BarChart width={400} height={300} data={upcomingAppointments}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="patientName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="date" fill="#8884d8" />
                <Bar dataKey="time" fill="#82ca9d" />
              </BarChart>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">Patients List</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-2 py-2">Name</th>
                    <th className="px-2 py-2">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {patientsList.map((patient) => (
                    <tr key={patient.id}>
                      <td className="px-4 py-2">{patient.name}</td>
                      <td className="px-4 py-2">{patient.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
