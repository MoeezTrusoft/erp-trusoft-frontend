import { memo } from 'react';


const ExampleWidget = memo(function ExampleWidget() {
  return (
    <div className="w-full h-full rounded-lg bg-white border border-gray-100 shadow-sm p-4 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 pb-3 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">Widget Title</h3>
        <p className="text-xs text-gray-500 mt-1">Subtitle or description</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden mt-4 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-gray-600 text-sm">Widget content goes here</p>
        </div>
      </div>

      {/* Footer (Optional) */}
      <div className="flex-shrink-0 pt-3 border-t border-gray-100 mt-auto">
        <p className="text-xs text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
});

ExampleWidget.displayName = 'ExampleWidget';

export default ExampleWidget;