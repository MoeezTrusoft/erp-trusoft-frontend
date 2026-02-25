import ExampleScreen from "../../modules/_example/screens/ExampleScreen.jsx";
import Dashboard from "../pages/Dashboard";
import Recruitment from "../pages/Recruitment/index.jsx";

export const routes = [
  {
    path: "hr/dashboard",
    element: <Dashboard />,
  },
  {
    path: "hr/recruitment",
    element: <Recruitment />,
  },
  {
    path: "example",
    element: <ExampleScreen />,
  },
];