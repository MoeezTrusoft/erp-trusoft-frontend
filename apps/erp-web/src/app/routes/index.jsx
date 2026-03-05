import ExampleScreen from '../../modules/_example/screens/ExampleScreen.jsx';
import { hrRoutes } from '../pages/hr/routes.jsx';

export const routes = [
  ...hrRoutes,

  {
    path: '/example',
    element: <ExampleScreen />,
  },
];
