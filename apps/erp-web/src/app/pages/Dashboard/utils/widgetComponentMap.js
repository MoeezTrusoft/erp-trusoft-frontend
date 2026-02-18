import WorkforceOverview from '../components/cards/WorkforceOverview';
import RecruitmentMetrics from '../components/cards/RecruitmentMetrics';
import AttendanceAndLeave from '../components/cards/AttendanceAndLeave';
import TrainingProgress from '../components/cards/TrainingProgress';
import TurnoverRetention from '../components/cards/TurnoverRetention';
import PerformanceSummary from '../components/cards/PerformanceSummary';
import PayrollSummary from '../components/cards/PayrollSummary';
import MyPendingApprovalsWidget from '../components/cards/MyPendingApprovalsWidget';
import QuickActionsWidget from '../components/cards/QuickActionsWidget';
import QuickCreateWidget from '../components/cards/QuickCreateWidget';
import WhosOnLeaveWidget from '../components/cards/WhosOnLeaveWidget';
import DepartmentHeadcountWidget from '../components/cards/DepartmentHeadcountWidget';
import WorkforceDemographicsWidget from '../components/cards/WorkforceDemographicsWidget';
import LeaveTrendWidget from '../components/cards/LeaveTrendWidget';
import OpenPositionsWidget from '../components/cards/OpenPositionsWidget';
import UpcomingInterviewsWidget from '../components/cards/UpcomingInterviewsWidget';
import PayslipsDeliveredStatusWidget from '../components/cards/PayslipsDeliveredStatusWidget';
import ReviewsStatusWidget from '../components/cards/ReviewsStatusWidget';


const WIDGET_COMPONENTS = {
  workforce: WorkforceOverview,
  recruitment: RecruitmentMetrics,
  attendance: AttendanceAndLeave,
  training: TrainingProgress,
  turnover: TurnoverRetention,
  performance: PerformanceSummary,
  payroll: PayrollSummary,
  myApprovals: MyPendingApprovalsWidget,
  quickActions: QuickActionsWidget,
  quickCreate: QuickCreateWidget,
  whosOnLeave: WhosOnLeaveWidget,
  departmentHeadcount: DepartmentHeadcountWidget,
  workforceDemographics: WorkforceDemographicsWidget,
  leaveTrend: LeaveTrendWidget,
  openPositions: OpenPositionsWidget,
  upcomingInterviews: UpcomingInterviewsWidget,
  payslipsDeliveredStatus: PayslipsDeliveredStatusWidget,
  reviewsStatus: ReviewsStatusWidget,
};

export const getWidgetComponent = (widgetId) => {
  return WIDGET_COMPONENTS[widgetId];
};

export const hasWidgetComponent = (widgetId) => {
  return !!WIDGET_COMPONENTS[widgetId];
};
