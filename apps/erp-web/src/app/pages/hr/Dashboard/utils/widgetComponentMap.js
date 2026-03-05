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
import PayrollExceptionsWidget from '../components/cards/PayrollExceptionsWidget';
import HiringOverviewWidget from '../components/cards/HiringOverviewWidget';
import DiversityMixWidget from '../components/cards/DiversityMixWidget';
import LeaveRequestsSnapshotWidget from '../components/cards/LeaveRequestsSnapshotWidget';
import HeadcountSummaryWidget from '../components/cards/HeadcountSummaryWidget';
import TodaysAbsenteesWidget from '../components/cards/TodaysAbsenteesWidget';
import TimeToHireTrendWidget from '../components/cards/TimeToHireTrendWidget';
import FeedbackPulseWidget from '../components/cards/FeedbackPulseWidget';
import ActiveEnrollmentsWidget from '../components/cards/ActiveEnrollmentsWidget';
import CompletionRateTrendWidget from '../components/cards/CompletionRateTrendWidget';
import RecommendedCoursesWidget from '../components/cards/RecommendedCoursesWidget';
import CertificationsExpiringSoonWidget from '../components/cards/CertificationsExpiringSoonWidget';
import DocumentExpiryAlertsWidget from '../components/cards/DocumentExpiryAlertsWidget';
import AuditActivityWidget from '../components/cards/AuditActivityWidget';
import ComplianceChecklistProgressWidget from '../components/cards/ComplianceChecklistProgressWidget';
import IntegrationHealthStatusWidget from '../components/cards/IntegrationHealthStatusWidget';
import AlertsEscalationsSummaryWidget from '../components/cards/AlertsEscalationsSummaryWidget';
import NextPayrollCountdownWidget from '../components/cards/NextPayrollCountdownWidget';
import GoalCompletionSnapshotWidget from '../components/cards/GoalCompletionSnapshotWidget';


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
  payrollExceptions: PayrollExceptionsWidget,
  hiringOverview: HiringOverviewWidget,
  diversityMix: DiversityMixWidget,
  leaveRequestsSnapshot: LeaveRequestsSnapshotWidget,
  headcountSummary: HeadcountSummaryWidget,
  todaysAbsentees: TodaysAbsenteesWidget,
  timeToHireTrend: TimeToHireTrendWidget,
  feedbackPulse: FeedbackPulseWidget,
  activeEnrollments: ActiveEnrollmentsWidget,
  completionRateTrend: CompletionRateTrendWidget,
  recommendedCourses: RecommendedCoursesWidget,
  certificationsExpiringSoon: CertificationsExpiringSoonWidget,
  documentExpiryAlerts: DocumentExpiryAlertsWidget,
  auditActivity: AuditActivityWidget,
  complianceChecklistProgress: ComplianceChecklistProgressWidget,
  integrationHealthStatus: IntegrationHealthStatusWidget,
  alertsEscalationsSummary: AlertsEscalationsSummaryWidget,
  nextPayrollCountdown: NextPayrollCountdownWidget,
  goalCompletionSnapshot: GoalCompletionSnapshotWidget,
};

export const getWidgetComponent = (widgetId) => {
  return WIDGET_COMPONENTS[widgetId];
};

export const hasWidgetComponent = (widgetId) => {
  return !!WIDGET_COMPONENTS[widgetId];
};
