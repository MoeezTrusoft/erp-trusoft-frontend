import { useState } from 'react';
import { getAvailableWidgetsInfo } from '../constants/widgets';
import { getWidgetComponent } from '../utils/widgetComponentMap';

export default function WidgetsPanel({ open, onClose, currentLayout = [], onAddWidget = null }) {
  const [expanded, setExpanded] = useState({
    availableWidgets: true,
  });

  const [expandedWidgets, setExpandedWidgets] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleWidget = (widgetId) => {
    setExpandedWidgets((prev) => ({ ...prev, [widgetId]: !prev[widgetId] }));
  };

  // Get available widgets
  const availableWidgets = getAvailableWidgetsInfo(currentLayout);
  
  // Filter widgets based on search query
  const filteredWidgets = availableWidgets.filter(widget =>
    widget.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    widget.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddWidget = (widgetId) => {
    if (onAddWidget) {
      onAddWidget(widgetId);
    }
  };

  return (
    <>
      
      <div
        className="fixed right-0 z-50 transition-all duration-300 ease-out flex flex-col  "
        style={{
          top: '146px', 
          bottom: '0',
          width: '500px',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: '18px',
          borderBottomLeftRadius: '18px',
          boxShadow: '-6px 6px 11px 0px #33333326',
          transform: open ? 'translateX(0)' : 'translateX(calc(100% + 24px))',
          pointerEvents: open ? 'auto' : 'none',
          overflow: 'hidden',
        }}

      >

        {/* Fixed Header */}
        <div className="flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center justify-between px-6 py-5">
            <h2
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '100%',
                color: '#035F5B',
              }}
            >
              Widgets Center
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none transition-colors"
            >
              ×
            </button>
          </div>

          {/* Fixed Search Bar */}
          <div className="px-6 pb-4">
            <div
              className="flex items-center gap-3"
              style={{
                width: '100%',
                height: 42,
                backgroundColor: '#FFFFFF',
                borderRadius: 97,
                border: '1px solid #E5E7EB',
                padding: '10px 18px',
              }}
            >
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search widgets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white outline-none flex-1 text-sm border-none"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pb-6 pt-2 dashboard-scroll flex justify-center items-start">
          <div
            className="rounded-3xl space-y-4"
            style={{
              backgroundColor: '#B3E2DE',
              width: '508px',
              margin: '0 12px',
              padding: '24px 16px',
            }}
          >
            {/* Available Widgets Section */}
            {filteredWidgets.length > 0 && (
              <>
                <button
                  onClick={() => toggleSection('availableWidgets')}
                  className="w-full flex items-center justify-between mb-2"
                >
                  <h2
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      fontSize: '28px',
                      lineHeight: '100%',
                      color: '#035F5B',
                    }}
                  >
                    Quick Actions
                  </h2>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${expanded.availableWidgets ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: '#035F5B' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expanded.availableWidgets && (
                  <div className="space-y-4">
                    {filteredWidgets.map((widget) => {
                      const WidgetComponent = getWidgetComponent(widget.id);
                      const isExpanded = expandedWidgets[widget.id];
                      return (
                        <div
                          key={widget.id}
                          className="rounded-2xl overflow-hidden bg-white"
                          style={{
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                            borderRadius: '17px',
                          }}
                        >
                          {/* Widget Header */}
                          <div
                            className="flex items-center justify-between px-5"
                            style={{ paddingTop: '20px', paddingBottom: '14px' }}
                          >
                            <button
                              onClick={() => toggleWidget(widget.id)}
                              className="flex items-center gap-2 flex-1 text-left hover:opacity-80 transition-opacity"
                            >
                              <span className="text-xl flex-shrink-0">{widget.icon}</span>
                              <h3
                                style={{
                                  fontFamily: 'Poppins',
                                  fontWeight: 500,
                                  fontSize: '18px',
                                  color: 'var(--color-primary-darkest)',
                                  lineHeight: '100%',
                                }}
                              >
                                {widget.title}
                              </h3>
                            </button>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <button
                                onClick={() => toggleWidget(widget.id)}
                                className="p-1 hover:opacity-70 transition-opacity"
                              >
                                <svg
                                  className="w-5 h-5 transition-transform duration-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  style={{
                                    color: 'var(--color-primary-darkest)',
                                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                  }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleAddWidget(widget.id)}
                                className="px-3 py-1.5 bg-[var(--color-primary-medium)] text-white text-xs font-medium rounded-full hover:opacity-90 transition-opacity"
                              >
                                Add
                              </button>
                            </div>
                          </div>

                          {/* Divider */}
                          <div style={{ height: '1px', backgroundColor: '#E5E7EB', margin: '0 20px' }} />

                          {/* Full Widget Content */}
                          {isExpanded && WidgetComponent && (
                            <div className="pt-2 pb-2" style={{ maxHeight: '496px', overflowY: 'auto' }}>
                              <WidgetComponent />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {filteredWidgets.length === 0 && searchQuery && (
              <div className="text-center py-4">
                <p
                  style={{
                    fontFamily: 'Poppins',
                    color: '#666666',
                    fontSize: '14px',
                  }}
                >
                  No widgets found matching "{searchQuery}"
                </p>
              </div>
            )}

            {filteredWidgets.length === 0 && !searchQuery && (
              <div className="text-center py-4">
                <p
                  style={{
                    fontFamily: 'Poppins',
                    color: '#666666',
                    fontSize: '14px',
                  }}
                >
                  All available widgets are already added to your dashboard!
                </p>
              </div>
            )}

            {/* Extra padding at bottom to allow scrolling past the floating button */}
            <div style={{ height: '10px' }}></div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          className="absolute bottom-10 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
          style={{
            backgroundColor: '#035F5B',
            color: '#FFFFFF',
          }}
        >
          <span className="text-2xl font-light">+</span>
        </button>
      </div>


    </>
  );
}