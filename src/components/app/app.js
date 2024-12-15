import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const data = [
    { name: "Alex S.", salary: 900, increase: false },
    { name: "Ruslan R.", salary: 3000, increase: true },
    { name: "Andrei K.", salary: 1700, increase: false },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
