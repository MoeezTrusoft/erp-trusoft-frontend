import Dashboard from './Dashboard';
import JobRequisitions from './Recruitment/JobRequisitions.jsx';
import ComponentShowcase from './ComponentShowcase';
import RecruitmentPage from './CandidatePipeline/index.jsx';
import TalentPoolPage from './TalentPool/index.jsx';

export const hrRoutes = [
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
    path: '/hr/recruitment',
    element: <JobRequisitions />,
  },
  {
    path: '/hr/candidate-pipeline',
    element: <RecruitmentPage />,
  },
  {
    path: '/hr/talentpool',
    element: <TalentPoolPage />,
  },
];
