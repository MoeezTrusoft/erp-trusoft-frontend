import { useState, useCallback } from 'react';
import ReactGridLayout, { useContainerWidth } from 'react-grid-layout';
import useDashboardLayout from '../../hooks/useDashboardLayout';
import SearchBar from './components/SearchBar';
import FilterButton from './components/FilterButton';
import Breadcrumb from './components/Breadcrumb';
import WorkforceOverview from './components/cards/WorkforceOverview';
import RecruitmentMetrics from './components/cards/RecruitmentMetrics';
import AttendanceAndLeave from './components/cards/AttendanceAndLeave';
import TrainingProgress from './components/cards/TrainingProgress';
import TurnoverRetention from './components/cards/TurnoverRetention';
import PerformanceSummary from './components/cards/PerformanceSummary';
import PayrollSummary from './components/cards/PayrollSummary';
import WidgetsPanel from './components/WidgetsPanel';

const GRID_COLS = 12;
const ROW_HEIGHT = 30;
const GRID_MARGIN = [16, 16];

// Widget component wrapper
const GridItem = ({ children, label }) => (
  <div className="rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full bg-white">
    <div className="h-full flex flex-col">
      {children}
    </div>
  </div>
);

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [widgetsOpen, setWidgetsOpen] = useState(false);

  // Use custom hook for layout management
  const {
    layout,
    handleLayoutChange,
    resetLayout,
    error,
    clearError,
  } = useDashboardLayout();

  // Use the container width hook for responsive grid
  const { width, containerRef, mounted } = useContainerWidth();

  const gridReady = mounted && width > 0 && layout.length > 0;

  return (
    <>
      <div
        style={{ backgroundColor: '#efefef' }}
        className="pl-2 pt-4 relative overflow-hidden h-screen flex flex-col"
      >
        {/* Breadcrumb Section */}
        <div className="px-6 pt-1.5 -mb-3 border-b border-gray-200">
          <Breadcrumb />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 pb-5 relative overflow-hidden flex flex-col">
          <div className="h-full flex flex-col">
            {/* Error Banner */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
                <span className="text-red-800 text-sm">{error}</span>
                <button
                  onClick={clearError}
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Search and Controls Row */}
            <div className="px-6 py-4 bg-[var(--color-primary-medium)] rounded-t-xl mb-0 flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                </div>
                <div className="flex gap-3 items-center">
                  <FilterButton label="Filter & Sort" />
                  <button
                    type="button"
                    onClick={() => setWidgetsOpen(true)}
                    className="flex items-center gap-[6px] h-[42px] px-[20px] py-[10px] text-sm font-medium text-gray-900 bg-[var(--color-primary-lighter)] rounded-[58px] hover:opacity-90 transition-opacity"
                    title="Add new widgets to dashboard"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add Widgets
                  </button>
                  <button
                    type="button"
                    onClick={resetLayout}
                    className="flex items-center gap-[6px] h-[42px] px-[20px] py-[10px] text-sm font-medium text-gray-900 bg-[var(--color-primary-lighter)] rounded-[58px] hover:opacity-90 transition-opacity"
                    title="Reset dashboard to default layout"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7 7 0 015.02 11.783l1.42-1.42a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l1.42 1.42A5 5 0 105 4.1V3a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Grid Container */}
            <div
              ref={containerRef}
              className="flex-1 overflow-y-auto dashboard-scroll rounded-b-xl"
              style={{ backgroundColor: 'var(--color-primary-lightest)', paddingBottom: '60px' }}
            >
              {gridReady ? (
                <ReactGridLayout
                  layout={layout}
                  onLayoutChange={handleLayoutChange}
                  width={width}
                  cols={GRID_COLS}
                  rowHeight={ROW_HEIGHT}
                  containerPadding={GRID_MARGIN}
                  margin={GRID_MARGIN}
                  compactType="vertical"
                  preventCollision={false}
                  isDraggable={true}
                  isResizable={true}
                  useCSSTransforms={true}
                  className="react-grid-layout-container"
                  style={{ padding: '16px' }}
                >
                  <div key="workforce">
                    <GridItem label="Workforce Overview">
                      <WorkforceOverview />
                    </GridItem>
                  </div>

                  <div key="recruitment">
                    <GridItem label="Recruitment Metrics">
                      <RecruitmentMetrics />
                    </GridItem>
                  </div>

                  <div key="attendance">
                    <GridItem label="Attendance & Leave">
                      <AttendanceAndLeave />
                    </GridItem>
                  </div>

                  <div key="training">
                    <GridItem label="Training Progress">
                      <TrainingProgress />
                    </GridItem>
                  </div>

                  <div key="turnover">
                    <GridItem label="Turnover & Retention">
                      <TurnoverRetention />
                    </GridItem>
                  </div>

                  <div key="performance">
                    <GridItem label="Performance Summary">
                      <PerformanceSummary />
                    </GridItem>
                  </div>

                  <div key="payroll">
                    <GridItem label="Payroll Summary">
                      <PayrollSummary />
                    </GridItem>
                  </div>
                </ReactGridLayout>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-400">Loading dashboard...</div>
                </div>
              )}
            </div>
          </div>

          {/* Slide-in Widgets Panel */}
          <WidgetsPanel open={widgetsOpen} onClose={() => setWidgetsOpen(false)} />
        </div>
      </div>
    </>
  );
}