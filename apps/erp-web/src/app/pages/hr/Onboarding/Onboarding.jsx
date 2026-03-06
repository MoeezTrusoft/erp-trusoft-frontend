import { useState } from 'react';
import useDashboardLayout from '../../../hooks/useDashboardLayout';
import SearchBar from '../Dashboard/components/SearchBar';
import FilterButton from '../Dashboard/components/FilterButton';
import Breadcrumb from '../Dashboard/components/Breadcrumb';
import { useContainerWidth } from 'react-grid-layout';
import OnboardingCard from './component/OnboardindCard';
import OnboardEmployeeDetailModal from './component/OnboardEmployeeDetailModal';

export default function Onboarding() {
  const [searchQuery, setSearchQuery] = useState('');

  const { error, clearError, layout } = useDashboardLayout();
  const { width, containerRef, mounted } = useContainerWidth();

  const gridReady = mounted && width > 0 && layout.length > 0;

  /* ✅ ADDED */
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetail = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const data = [
    {
      id: 1,
      name: 'Ayesha Khan',
      role: 'UI Designer',
      department: 'Engineering',
      startDate: '15 Apr 2025',
      employment: 'Full-Time',
    },
    {
      id: 2,
      name: 'Ayesha Khan',
      role: 'UI Designer',
      department: 'Engineering',
      startDate: '15 Apr 2025',
      employment: 'Full-Time',
    },
    {
      id: 3,
      name: 'Ayesha Khan',
      role: 'UI Designer',
      department: 'Engineering',
      startDate: '15 Apr 2025',
      employment: 'Full-Time',
    },
    {
      id: 4,
      name: 'Ayesha Khan',
      role: 'UI Designer',
      department: 'Engineering',
      startDate: '15 Apr 2025',
      employment: 'Full-Time',
    },
  ];

  return (
    <div
      style={{ backgroundColor: '#efefef' }}
      className="px-6 pt-4 pb-8 h-[calc(100vh-4rem)] flex flex-col w-full relative overflow-hidden"
    >
      <div className="px-2 pt-1.5 -mb-3  border-gray-200">
        <Breadcrumb
          pageTitle="Onboarding Integration"
          breadcrumbItems={['Home', 'HR', 'Onboarding']}
        />
      </div>

      <div className="py-4">
        <div className="h-[calc(100vh-10.5rem)] flex flex-col w-full ">
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

          <div
            className="overflow-scroll dashboard-scrollbar"
            style={{ backgroundColor: 'var(--color-primary-lightest)' }}
          >
            <div className="h-fit grid grid-cols-3 gap-6 p-6 ">
              {data.map((item) => (
                <OnboardingCard
                  key={item.id}
                  candidate={item}
                  onViewDetail={handleViewDetail} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ MODAL */}
      <OnboardEmployeeDetailModal
        isOpen={isModalOpen}
        employee={selectedEmployee}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}