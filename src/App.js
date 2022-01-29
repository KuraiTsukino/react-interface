import { BiCalendar } from "react-icons/bi"
import Search from "./components/Search";
import AddApointment from "./components/AddApointment";
import appointmentList from "./data.json"
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top"/> Your Appointments</h1>
      <AddApointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList
          .map(appointment => (
            <AppointmentInfo key={appointment.id} 
              appointment={appointment}
            />
        ))
        }
      </ul>
    </div>
  );
}

export default App;
