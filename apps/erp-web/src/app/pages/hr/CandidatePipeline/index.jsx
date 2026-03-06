import { useState, useCallback } from 'react';
import useDashboardLayout from '../../../hooks/useDashboardLayout';
import SearchBar from '../Dashboard/components/SearchBar';
import FilterButton from '../Dashboard/components/FilterButton';
import Breadcrumb from '../Dashboard/components/Breadcrumb';
import { useContainerWidth } from 'react-grid-layout';
import PipelineBoard from './component/Pipelineboard';

export default function Recruitment() {
  const [searchQuery, setSearchQuery] = useState('');

  // Use custom hook for layout management
  const { error, clearError, layout } = useDashboardLayout();
  const { width, containerRef, mounted } = useContainerWidth();
  const gridReady = mounted && width > 0 && layout.length > 0;

  return (
    <>
      <div
        style={{ backgroundColor: '#efefef' }}
        className="px-6 py-4 h-[calc(100vh-3rem)] flex flex-col w-full relative"
      >
        <div className="px-2 pt-1.5 -mb-3 border-b border-gray-200">
          <Breadcrumb
            pageTitle="Candidate Pipeline"
            breadcrumbItems={['Home', 'HR', 'Candidate Pipeline']}
          />
        </div>
        <div className="py-4">
          <div className="h-full flex flex-col w-full">
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
            <div className="w-full px-6 py-4 bg-[var(--color-primary-medium)] rounded-t-xl mb-0 ">
              <div className="flex items-center gap-4">
                <div className="w-full">
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
