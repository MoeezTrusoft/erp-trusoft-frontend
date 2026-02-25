import { useState } from 'react';
import useDashboardLayout from '../../hooks/useDashboardLayout';
import SearchBar from '../Dashboard/components/SearchBar';
import FilterButton from '../Dashboard/components/FilterButton';
import Breadcrumb from '../Dashboard/components/Breadcrumb';
import PipelineBoard from './PipelineBoard';
import '../../styles/scrollbar.css';

export default function Recruitment() {
  const [searchQuery, setSearchQuery] = useState('');

  const { error, clearError } = useDashboardLayout();

  return (
    <>
      <div
        style={{ backgroundColor: '#efefef' }}
        className="pl-2 pt-4 relative h-screen flex flex-col overflow-hidden"
      >
        {/* Breadcrumb Section */}
        <div className="px-6 pt-1.5 -mb-3 border-b border-gray-200 flex-shrink-0">
          <Breadcrumb />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-h-0 p-4 pb-5 relative overflow-hidden flex flex-col">
          
          {/* Error Banner */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between flex-shrink-0">
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
          <div className="w-full flex-shrink-0 h-16 px-6 bg-[var(--color-primary-medium)] rounded-t-xl flex items-center overflow-hidden">
            <div className="flex items-center gap-4 w-full min-w-0">
              <div className="flex-1 min-w-0">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              <div className="flex gap-3 items-center flex-shrink-0">
                <FilterButton label="Filter & Sort" />
              </div>
            </div>
          </div>

          {/* Pipeline Board */}
          <div
            className="flex-1 min-h-0 overflow-hidden rounded-b-xl flex flex-col pb-16"
            style={{ backgroundColor: 'var(--color-primary-lightest)' }}
          >
            <PipelineBoard />
          </div>

        </div>
      </div>
    </>
  );
}