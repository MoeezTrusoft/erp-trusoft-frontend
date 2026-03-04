import { useState } from 'react';
import useDashboardLayout from '../../hooks/useDashboardLayout';
import SearchBar from '../Dashboard/components/SearchBar';
import FilterButton from '../Dashboard/components/FilterButton';
import Breadcrumb from '../Dashboard/components/Breadcrumb';
import DataTable from '../../components/DataTable';
import '../../styles/scrollbar.css';

// Sample data matching Figma design
const MOCK_REQUISITIONS = [
  {
    _key: 'row-0',
    id: 'JR-2025-015',
    title: 'Backend engineer',
    department: 'Engineering',
    managerAvatar: 'https://i.pravatar.cc/40?img=47',
    manager: 'Sara Malik',
    open: 1,
    status: 'In Review',
    priority: 'Medium',
  },
  {
    _key: 'row-1',
    id: 'JR-2025-016',
    title: 'HR Executive',
    department: 'HR',
    managerAvatar: 'https://i.pravatar.cc/40?img=12',
    manager: 'Ahmed Noor',
    open: 1,
    status: 'Draft',
    priority: 'Low',
  },
  {
    _key: 'row-2',
    id: 'JR-2025-015',
    title: 'Backend engineer',
    department: 'Engineering',
    managerAvatar: 'https://i.pravatar.cc/40?img=47',
    manager: 'Sara Malik',
    open: 1,
    status: 'In Review',
    priority: 'High',
  },
  {
    _key: 'row-3',
    id: 'JR-2025-016',
    title: 'HR Executive',
    department: 'HR',
    managerAvatar: 'https://i.pravatar.cc/40?img=12',
    manager: 'Ahmed Noor',
    open: 1,
    status: 'Draft',
    priority: 'Low',
  },
  {
    _key: 'row-4',
    id: 'JR-2025-015',
    title: 'Backend engineer',
    department: 'Engineering',
    managerAvatar: 'https://i.pravatar.cc/40?img=47',
    manager: 'Sara Malik',
    open: 1,
    status: 'In Review',
    priority: 'Medium',
  },
  {
    _key: 'row-5',
    id: 'JR-2025-016',
    title: 'HR Executive',
    department: 'HR',
    managerAvatar: 'https://i.pravatar.cc/40?img=12',
    manager: 'Ahmed Noor',
    open: 1,
    status: 'Draft',
    priority: 'Low',
  },
  {
    _key: 'row-6',
    id: 'JR-2025-015',
    title: 'Backend engineer',
    department: 'Engineering',
    managerAvatar: 'https://i.pravatar.cc/40?img=47',
    manager: 'Sara Malik',
    open: 1,
    status: 'In Review',
    priority: 'Medium',
  },
  {
    _key: 'row-7',
    id: 'JR-2025-016',
    title: 'HR Executive',
    department: 'HR',
    managerAvatar: 'https://i.pravatar.cc/40?img=12',
    manager: 'Ahmed Noor',
    open: 1,
    status: 'Draft',
    priority: 'Low',
  },
  {
    _key: 'row-8',
    id: 'JR-2025-017',
    title: 'Frontend Developer',
    department: 'Engineering',
    managerAvatar: 'https://i.pravatar.cc/40?img=47',
    manager: 'Sara Malik',
    open: 2,
    status: 'In Review',
    priority: 'High',
  },
  {
    _key: 'row-9',
    id: 'JR-2025-018',
    title: 'Marketing Manager',
    department: 'Marketing',
    managerAvatar: 'https://i.pravatar.cc/40?img=12',
    manager: 'Ahmed Noor',
    open: 1,
    status: 'Draft',
    priority: 'Medium',
  },
  {
    _key: 'row-10',
    id: 'JR-2025-019',
    title: 'Data Analyst',
    department: 'Analytics',
    managerAvatar: 'https://i.pravatar.cc/40?img=47',
    manager: 'Sara Malik',
    open: 3,
    status: 'In Review',
    priority: 'Low',
  },
  {
    _key: 'row-11',
    id: 'JR-2025-020',
    title: 'UX Designer',
    department: 'Design',
    managerAvatar: 'https://i.pravatar.cc/40?img=12',
    manager: 'Ahmed Noor',
    open: 1,
    status: 'Draft',
    priority: 'High',
  },
  {
    _key: 'row-12',
    id: 'JR-2025-021',
    title: 'QA Engineer',
    department: 'Quality',
    managerAvatar: 'https://i.pravatar.cc/40?img=47',
    manager: 'Sara Malik',
    open: 2,
    status: 'In Review',
    priority: 'Medium',
  },
  {
    _key: 'row-13',
    id: 'JR-2025-022',
    title: 'Operations Lead',
    department: 'Operations',
    managerAvatar: 'https://i.pravatar.cc/40?img=12',
    manager: 'Ahmed Noor',
    open: 1,
    status: 'Draft',
    priority: 'Low',
  },
  {
    _key: 'row-14',
    id: 'JR-2025-023',
    title: 'DevOps Engineer',
    department: 'Engineering',
    managerAvatar: 'https://i.pravatar.cc/40?img=47',
    manager: 'Sara Malik',
    open: 1,
    status: 'In Review',
    priority: 'High',
  },
];

export default function JobRequisitions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRows, setFilteredRows] = useState(MOCK_REQUISITIONS);
  const [rows, setRows] = useState(MOCK_REQUISITIONS);

  const { error, clearError } = useDashboardLayout();

  // Handle status change
  const handleStatusChange = (rowKey, newStatus) => {
    const updatedRows = rows.map((row) =>
      row._key === rowKey ? { ...row, status: newStatus } : row
    );
    setRows(updatedRows);
    
    // Apply current search query to updated rows
    if (!searchQuery.trim()) {
      setFilteredRows(updatedRows);
    } else {
      const filtered = updatedRows.filter(
        (row) =>
          row.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.manager.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRows(filtered);
    }
  };

  // Handle priority change
  const handlePriorityChange = (rowKey, newPriority) => {
    const updatedRows = rows.map((row) =>
      row._key === rowKey ? { ...row, priority: newPriority } : row
    );
    setRows(updatedRows);
    
    // Apply current search query to updated rows
    if (!searchQuery.trim()) {
      setFilteredRows(updatedRows);
    } else {
      const filtered = updatedRows.filter(
        (row) =>
          row.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.manager.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRows(filtered);
    }
  };

  // Filter data based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredRows(rows);
      return;
    }

    const filtered = rows.filter(
      (row) =>
        row.id.toLowerCase().includes(query.toLowerCase()) ||
        row.title.toLowerCase().includes(query.toLowerCase()) ||
        row.department.toLowerCase().includes(query.toLowerCase()) ||
        row.manager.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRows(filtered);
  };

  // Column definitions
  const columns = [
    {
      field: 'id',
      headerName: 'Req ID',
      width: 100,
      resizable: true,
      sortType: 'numeric',
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 140,
      resizable: true,
      sortType: 'alphabetic',
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 100,
      resizable: true,
      sortType: 'alphabetic',
    },
    {
      field: 'managerAvatar',
      headerName: 'Manager',
      width: 100,
      resizable: true,
      type: 'avatar',
      nameField: 'manager',
      sortType: 'alphabetic',
      sortField: 'manager',
    },
    {
      field: 'open',
      headerName: 'Open',
      width: 80,
      resizable: true,
      sortType: 'numeric',
      render: (value) => <div className="font-semibold flex justify-center w-full">{value}</div>,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 80,
      resizable: true,
      sortType: 'custom',
      sortOptions: ['Draft', 'In Review'],
      render: (value, row) => (
        <select
          value={value}
          onChange={(e) => handleStatusChange(row._key, e.target.value)}
          className="px-0.5 py-0.5 rounded-full text-xs font-medium border-none cursor-pointer focus:outline-none w-full text-center"
          style={{
            backgroundColor: { 'In Review': '#fff3cd', Draft: '#f8d7da' }[value] || '#f0f0f0',
            color: { 'In Review': '#856404', Draft: '#721c24' }[value] || '#333',
          }}
        >
          <option value="In Review" style={{ backgroundColor: '#fff3cd', color: '#856404' }}>In Review</option>
          <option value="Draft" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>Draft</option>
        </select>
      ),
    },
    {
      field: 'priority',
      headerName: 'Priority',
      width: 80,
      resizable: true,
      sortType: 'custom',
      sortOptions: ['Low', 'Medium', 'High'],
      render: (value, row) => (
        <select
          value={value}
          onChange={(e) => handlePriorityChange(row._key, e.target.value)}
          className="px-0.5 py-0.5 rounded-full text-xs font-medium border-none cursor-pointer focus:outline-none w-full text-center"
          style={{
            backgroundColor: {
              High: '#f8d7da',
              Medium: '#ffc107',
              Low: '#d4edda',
            }[value] || '#f0f0f0',
            color: {
              High: '#721c24',
              Medium: '#000',
              Low: '#155724',
            }[value] || '#333',
          }}
        >
          <option value="Low" style={{ backgroundColor: '#d4edda', color: '#155724' }}>Low</option>
          <option value="Medium" style={{ backgroundColor: '#ffc107', color: '#000' }}>Medium</option>
          <option value="High" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>High</option>
        </select>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 140,
      sortable: false,
      resizable: false,
      type: 'actions',
      menu: [
        { label: '👁️ View', onClick: (row) => console.log('View:', row) },
        { label: '✏️ Edit', onClick: (row) => console.log('Edit:', row) },
        { label: '✓ Submit for Approval', onClick: (row) => console.log('Submit:', row) },
        { label: '✕ Close Requisition', onClick: (row) => console.log('Close:', row) },
      ],
    },
  ];

  return (
    <>
      <div
        style={{ backgroundColor: '#efefef' }}
        className="pl-2 pt-4 relative overflow-hidden h-screen flex flex-col"
      >
        {/* Breadcrumb Section */}
        <div className="px-6 pt-1.5 -mb-3 border-b border-gray-200">
          <Breadcrumb pageTitle="Job Requisitions" breadcrumbItems={['Home', 'HR', 'Recruitment']} />
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
              <div className="flex items-center gap-4 justify-between pr-10">
                <SearchBar value={searchQuery} onChange={handleSearch} />
                <div className="flex gap-3 items-center">
                  <FilterButton label="Filter & Sort" />
                </div>
              </div>
            </div>

            {/* DataTable */}
            <div
              className="flex-1 overflow-hidden rounded-b-xl flex flex-col"
              style={{ backgroundColor: 'var(--color-primary-lightest)' }}
            >
              <DataTable
                columns={columns}
                rows={filteredRows}
                pagination={{
                  pageSize: 20,
                  totalRows: filteredRows.length,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
