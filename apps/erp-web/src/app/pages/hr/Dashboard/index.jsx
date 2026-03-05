import { useState, useCallback } from 'react';
import ReactGridLayout, { useContainerWidth } from 'react-grid-layout';
import useDashboardLayout from '../../../hooks/useDashboardLayout';
import SearchBar from './components/SearchBar';
import FilterButton from './components/FilterButton';
import Breadcrumb from './components/Breadcrumb';
import WidgetsPanel from './components/WidgetsPanel';
import { getWidgetComponent, hasWidgetComponent } from './utils/widgetComponentMap';
import { AVAILABLE_WIDGETS } from './constants/widgets';
import { getDefaultLayout } from "../../../utils/layoutManager";

const GRID_COLS = 12;
const ROW_HEIGHT = 30;
const GRID_MARGIN = [16, 16];

// Widget component wrapper
const GridItem = ({ children, label, widgetId, onRemove }) => {
  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Removing widget:', widgetId);
    if (onRemove) {
      onRemove(widgetId);
    }
  };

  return (
    <div className="rounded-xl shadow-sm border border-gray-100 overflow-visible h-full bg-white flex flex-col relative group">
      {/* Close Button - on all widgets */}
      {onRemove && (
        <button
          onClick={handleRemove}
          className="absolute top-2 right-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity bg-white hover:bg-red-50 rounded-lg shadow-sm hover:shadow-md border border-gray-200 cursor-pointer"
          style={{ width: '32px', height: '32px', padding: '6px', pointerEvents: 'auto' }}
          title="Remove widget"
          type="button"
        >
          <svg className="w-full h-full text-gray-500 hover:text-red-600 pointer-events-none" fill="currentColor" viewBox="0 0 20 20" style={{ pointerEvents: 'none' }}>
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [widgetsOpen, setWidgetsOpen] = useState(false);

  // Use custom hook for layout management
  const {
    layout,
    handleLayoutChange,
    addItemToLayout,
    removeItemFromLayout,
    error,
    clearError,
  } = useDashboardLayout();

  // Use the container width hook for responsive grid
  const { width, containerRef, mounted } = useContainerWidth();

  const gridReady = mounted && width > 0 && layout.length > 0;

  // Handle add widget from panel
  const handleAddWidget = useCallback((widgetId) => {
    if (!hasWidgetComponent(widgetId)) {
      console.error(`No component found for widget: ${widgetId}`);
      return;
    }

    const widgetConfig = AVAILABLE_WIDGETS[widgetId];
    if (!widgetConfig) {
      console.error(`No configuration found for widget: ${widgetId}`);
      return;
    }

    // Create new layout item
    const newItem = {
      i: widgetId,
      ...widgetConfig.defaultLayout,
    };

    addItemToLayout(newItem);
    setWidgetsOpen(false);
  }, [addItemToLayout]);

  // Reset to default layout (restores only the 7 main dashboard widgets)
  const handleResetLayout = useCallback(() => {
    const defaultLayout = getDefaultLayout();
    handleLayoutChange(defaultLayout);
  }, [handleLayoutChange]);

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
        <div className="flex-1 p-4 pb-5 relative overflow-hidden flex flex-col">
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
                    onClick={handleResetLayout}
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
              className="flex-1 pr-4 overflow-y-auto dashboard-scroll rounded-b-xl"
              style={{ backgroundColor: 'var(--color-primary-lightest)', paddingBottom: '80px' }}
            >
              {gridReady ? (
                <ReactGridLayout
                  layout={layout}
                  onLayoutChange={handleLayoutChange}
                  width={width}
                  cols={width < 768 ? 1 : GRID_COLS}
                  rowHeight={ROW_HEIGHT}
                  containerPadding={GRID_MARGIN}
                  margin={GRID_MARGIN}
                  compactType="vertical"
                  preventCollision={false}
                  isDraggable={true}
                  isResizable={true}
                  useCSSTransforms={width >= 768}
                  className="react-grid-layout-container"
                  style={{ padding: '16px' }}
                >
                  {layout.map((item) => {
                    const WidgetComponent = getWidgetComponent(item.i);
                    const widgetConfig = AVAILABLE_WIDGETS[item.i];

                    if (!WidgetComponent || !widgetConfig) {
                      return null;
                    }

                    return (
                      <div key={item.i}>
                        <GridItem 
                          label={widgetConfig.title}
                          widgetId={item.i}
                          onRemove={removeItemFromLayout}
                        >
                          <WidgetComponent />
                        </GridItem>
                      </div>
                    );
                  })}
                </ReactGridLayout>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-400">Loading dashboard...</div>
                </div>
              )}
            </div>
          </div>

          {/* Slide-in Widgets Panel */}
          <WidgetsPanel
            open={widgetsOpen}
            onClose={() => setWidgetsOpen(false)}
            currentLayout={layout}
            onAddWidget={handleAddWidget}
          />
        </div>
      </div>
    </>
  );
}