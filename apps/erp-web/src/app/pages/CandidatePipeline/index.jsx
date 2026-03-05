import { useState, useCallback } from 'react';
import useDashboardLayout from '../../hooks/useDashboardLayout';
import SearchBar from './component/SearchBar';
import FilterButton from './component/FilterButton';
import Breadcrumb from './component/Breadcrumb';
import PipelineBoard from './component/PipelineBoard';
import { useContainerWidth } from 'react-grid-layout';


export default function Recruitment() {
  const [searchQuery, setSearchQuery] = useState('');

  // Use custom hook for layout management
  const { error, clearError, layout } = useDashboardLayout();
  const { width, containerRef, mounted } = useContainerWidth();
  const gridReady = mounted && width > 0 && layout.length > 0;

  return (
    <>
        <div
          className="relative h-screen flex flex-col"
        >
          {/* Breadcrumb Section */}
          <div className="-mb-3 border-b border-gray-200">
            <Breadcrumb />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 pt-6 pb-5 overflow-x-auto overflow-y-hidden">
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
                  </div>
                </div>
              </div>
              <PipelineBoard />
            </div>
          </div>
        </div>
    </>
  );
}
