import ExampleScreen from "../../modules/_example/screens/ExampleScreen.jsx";
import Dashboard from "../pages/Dashboard";
import JobRequisitions from "../pages/Recruitment/JobRequisitions.jsx";
import ComponentShowcase from "../pages/ComponentShowcase";

export const routes = [
  {
    path: "/hr/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/hr/recruitment",
    element: <JobRequisitions />,
  },
  {
    path: "/components",
    element: <ComponentShowcase />,
  },
  {
    path: "/example",
    element: <ExampleScreen />,
  },
];