import ExampleScreen from '../../modules/_example/screens/ExampleScreen.jsx';
import Dashboard from '../pages/Dashboard';
import JobRequisitions from '../pages/Recruitment/JobRequisitions.jsx';
import ComponentShowcase from '../pages/ComponentShowcase';
import RecruitmentPage from '../pages/CandidatePipeline/index.jsx';
import TalentPoolPage from '../pages/TalentPool/index.jsx';

export const routes = [
  {
    path: '/hr/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/hr/job-requisitions',
    element: <JobRequisitions />,
  },
  {
    path: '/components',
    element: <ComponentShowcase />,
  },
  {
    path: '/hr/candidate-pipeline',
    element: <RecruitmentPage />,
  },
  {
    path: 'hr/talentpool',
    element: <TalentPoolPage />,
  },
  {
    path: '/example',
    element: <ExampleScreen />,
  },
];
