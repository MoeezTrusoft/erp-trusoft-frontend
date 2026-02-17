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
    defaultLayout: { w: 4, h: 1.85, minW: 3, maxW: 4, minH: 1.85, maxH: 1.85 },
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
    defaultLayout: { w: 4, h: 2.1, minW: 3, maxW: 4, minH: 2.1, maxH: 2.1 },
    removable: true,
  },
};


// Get all available widget IDs
export const getAllWidgetIds = () => Object.keys(AVAILABLE_WIDGETS);

// Get widget metadata by ID
export const getWidgetMetadata = (widgetId) => AVAILABLE_WIDGETS[widgetId];

// Get list of widgets that are currently available to add (not in current layout)
export const getAvailableWidgetsForAdding = (currentLayout) => {
  const currentWidgetIds = new Set(currentLayout.map(item => item.i));
  return getAllWidgetIds().filter(widgetId => !currentWidgetIds.has(widgetId));
};

//  Get display info for available widgets
export const getAvailableWidgetsInfo = (currentLayout) => {
  return getAvailableWidgetsForAdding(currentLayout).map(widgetId => ({
    ...AVAILABLE_WIDGETS[widgetId],
  }));
};
