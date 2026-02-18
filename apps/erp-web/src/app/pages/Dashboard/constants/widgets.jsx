import React from 'react';
import {
  Users,
  Briefcase,
  CalendarCheck,
  GraduationCap,
  TrendingUp,
  Award,
  Banknote,
  UserCheck,
  Zap,
  PlusSquare,
  BarChart3,
} from 'lucide-react';

const ICON_SIZE = 20;
const ICON_COLOR = '#035F5B';

export const AVAILABLE_WIDGETS = {
  workforce: {
    id: 'workforce',
    title: 'Workforce Overview',
    description: 'Overview of workforce metrics and statistics',
    icon: <Users size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 8, h: 3.65, minW: 7, maxW: 8, minH: 3.65, maxH: 3.65 },
    removable: true,
  },
  recruitment: {
    id: 'recruitment',
    title: 'Recruitment Metrics',
    description: 'Track recruitment progress and metrics',
    icon: <Briefcase size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 3.65, minW: 3, maxW: 6, minH: 3.65, maxH: 3.65 },
    removable: true,
  },
  attendance: {
    id: 'attendance',
    title: 'Attendance & Leave',
    description: 'Monitor attendance and leave requests',
    icon: <CalendarCheck size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 3, minW: 3, maxW: 5, minH: 3, maxH: 3 },
    removable: true,
  },
  training: {
    id: 'training',
    title: 'Training Progress',
    description: 'Track employee training progress',
    icon: <GraduationCap size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 3, minW: 3, maxW: 5, minH: 3, maxH: 3 },
    removable: true,
  },
  turnover: {
    id: 'turnover',
    title: 'Turnover & Retention',
    description: 'Monitor turnover and retention metrics',
    icon: <TrendingUp size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 3, minW: 3, maxW: 5, minH: 3, maxH: 3 },
    removable: true,
  },
  performance: {
    id: 'performance',
    title: 'Performance Summary',
    description: 'View performance metrics and summaries',
    icon: <Award size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 2.4, minW: 3, maxW: 5, minH: 2.4, maxH: 2.4 },
    removable: true,
  },
  payroll: {
    id: 'payroll',
    title: 'Payroll Summary',
    description: 'Overview of payroll information',
    icon: <Banknote size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 2, minW: 3, maxW: 4, minH: 2, maxH: 2 },
    removable: true,
  },
  myApprovals: {
    id: 'myApprovals',
    title: 'My Pending Approvals',
    description: 'Review and manage pending approvals',
    icon: <UserCheck size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 3.1, minW: 3, maxW: 4, minH: 3.1, maxH: 3.1 },
    removable: true,
  },
  quickActions: {
    id: 'quickActions',
    title: 'Quick Actions',
    description: 'Quick access to common actions',
    icon: <Zap size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 3, minW: 3, maxW: 5, minH: 3, maxH: 3 },
    removable: true,
  },
  quickCreate: {
    id: 'quickCreate',
    title: 'Quick Create',
    description: 'Create new items quickly',
    icon: <PlusSquare size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 2.2, minW: 3, maxW: 4, minH: 2.2, maxH: 2.2 },
    removable: true,
  },
  whosOnLeave: {
    id: 'whosOnLeave',
    title: "Who's On Leave This Week",
    description: 'View employees on leave this week',
    icon: <Users size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 3, minW: 4, maxW: 4, minH: 3, maxH: 3 },
    removable: true,
  },
  departmentHeadcount: {
    id: 'departmentHeadcount',
    title: 'Department Headcount',
    description: 'View department headcount distribution',
    icon: <BarChart3 size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 1.6, minW: 3, maxW: 5, minH: 1.6, maxH: 1.6 },
    removable: true,
  },
  workforceDemographics: {
    id: 'workforceDemographics',
    title: 'Workforce Demographics',
    description: 'View workforce demographics by age groups and tenure',
    icon: <Users size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 6, h: 3.3, minW: 4, maxW: 6, minH: 3.3, maxH: 3.3 },
    removable: true,
  },
  leaveTrend: {
    id: 'leaveTrend',
    title: 'Leave Trend (30 Days)',
    description: 'View leave trends over the last 30 days',
    icon: <TrendingUp size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 6, h: 3, minW: 4, maxW: 6, minH: 3, maxH: 3 },
    removable: true,
  },
  openPositions: {
    id: 'openPositions',
    title: 'Open Positions',
    description: 'Track open job positions and average time to fill',
    icon: <Briefcase size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 6, h: 3, minW: 4, maxW: 6, minH: 3, maxH: 3 },
    removable: true,
  },
  upcomingInterviews: {
    id: 'upcomingInterviews',
    title: 'Upcoming Interviews',
    description: 'View upcoming interview schedule',
    icon: <CalendarCheck size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 6, h: 3, minW: 4, maxW: 6, minH: 3, maxH: 3 },
    removable: true,
  },
  payslipsDeliveredStatus: {
    id: 'payslipsDeliveredStatus',
    title: 'Payslips Delivered Status',
    description: 'Track payslip delivery status and statistics',
    icon: <Banknote size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 6, h: 2.3, minW: 4, maxW: 6, minH: 2.3, maxH: 2.3 },
    removable: true,
  },
  reviewsStatus: {
    id: 'reviewsStatus',
    title: 'Reviews Status',
    description: 'View performance reviews status overview',
    icon: <Award size={ICON_SIZE} color={ICON_COLOR} />,
    defaultLayout: { w: 4, h: 2.2, minW: 4, maxW: 4, minH: 2.2, maxH: 2.2 },
    removable: true,
  },
};


export const getAllWidgetIds = () => Object.keys(AVAILABLE_WIDGETS);

export const getWidgetMetadata = (widgetId) => AVAILABLE_WIDGETS[widgetId];

export const getAvailableWidgetsForAdding = (currentLayout) => {
  const currentWidgetIds = new Set(currentLayout.map(item => item.i));
  return getAllWidgetIds().filter(widgetId => !currentWidgetIds.has(widgetId));
};

export const getAvailableWidgetsInfo = (currentLayout) => {
  return getAvailableWidgetsForAdding(currentLayout).map(widgetId => ({
    ...AVAILABLE_WIDGETS[widgetId],
  }));
};
