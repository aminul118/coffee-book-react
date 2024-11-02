import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const Dashboard = () => {
  return (
    <div>
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={
          "Manage coffees that you have previously added as favorite. You can view or remove them from here."
        }
      ></Heading>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
