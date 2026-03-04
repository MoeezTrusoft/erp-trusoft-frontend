import { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './DataTable.css';


const DataTable = ({
  columns = [],
  rows = [],
  onRowClick,
  onActionClick,
  pagination = { pageSize: 20, totalRows: 0 },
  onPaginationChange,
  loading = false,
}) => {
  const [sortConfig, setSortConfig] = useState({ field: null, direction: 'asc' });
  const [columnWidths, setColumnWidths] = useState(() => {
    const widths = {};
    columns.forEach((col) => {
      widths[col.field] = col.width || 150;
    });
    return widths;
  });
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const [resizingCol, setResizingCol] = useState(null);
  const [resizeStart, setResizeStart] = useState(0);
  const [openMenuCol, setOpenMenuCol] = useState(null);
  const tableRef = useRef(null);

  // Handle sorting
  const handleSort = (field) => {
    let direction = 'asc';
    if (sortConfig.field === field && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ field, direction });
  };

  // Handle column resize
  const handleResizeStart = (e, field) => {
    setResizingCol(field);
    setResizeStart(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!resizingCol) return;

      const delta = e.clientX - resizeStart;
      const MIN_WIDTH = 80;
      const MAX_WIDTH = 400;
      
      setColumnWidths((prev) => ({
        ...prev,
        [resizingCol]: Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, prev[resizingCol] + delta)),
      }));
      setResizeStart(e.clientX);
    };

    const handleMouseUp = () => {
      setResizingCol(null);
    };

    if (resizingCol) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [resizingCol, resizeStart]);

  // Handle row selection
  const handleSelectRow = (rowKey) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(rowKey)) {
      newSelected.delete(rowKey);
    } else {
      newSelected.add(rowKey);
    }
    setSelectedRows(newSelected);
  };

  const getRowKey = (row, index) => {
    return row._key || row.id || `row-${index}`;
  };

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedRows.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedRows.map((row, index) => getRowKey(row, index))));
    }
  };

  // Sort rows with different strategies based on column sortType
  const sortedRows = [...rows].sort((a, b) => {
    if (!sortConfig.field) return 0;

    const column = columns.find(col => col.field === sortConfig.field);
    const sortField = column?.sortField || sortConfig.field;
    
    const aVal = a[sortField];
    const bVal = b[sortField];

    // Handle custom sort (by defined options)
    if (column?.sortType === 'custom' && column?.sortOptions) {
      const aIndex = column.sortOptions.indexOf(aVal);
      const bIndex = column.sortOptions.indexOf(bVal);
      const result = aIndex - bIndex;
      return sortConfig.direction === 'asc' ? result : -result;
    }

    // Handle numeric sort
    if (column?.sortType === 'numeric') {
      const aNum = parseFloat(aVal) || 0;
      const bNum = parseFloat(bVal) || 0;
      return sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum;
    }

    // Default alphabetic sort
    const aStr = String(aVal || '').toLowerCase();
    const bStr = String(bVal || '').toLowerCase();

    if (aStr < bStr) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aStr > bStr) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  // Render cell based on type
  const renderCell = (row, column) => {
    const value = row[column.field];

    if (column.render) {
      return column.render(value, row);
    }

    switch (column.type) {
      case 'chip':
        return (
          <span
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: column.chipColor?.[value] || '#e0e0e0',
              color: column.chipTextColor?.[value] || '#333',
            }}
          >
            {value}
          </span>
        );

      case 'avatar':
        return (
          <div className="flex items-center gap-2">
            <img
              src={value}
              alt={row[column.nameField] || 'avatar'}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{row[column.nameField]}</span>
          </div>
        );

      case 'link':
        return (
          <button
            onClick={() => column.onClick?.(row)}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            {value}
          </button>
        );

      case 'actions':
        return (
          <div className="relative group">
            <button
              className="px-3 py-1 text-xs font-medium rounded bg-teal-600 text-white hover:bg-teal-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                column.onActionsClick?.(row);
              }}
            >
              Actions ▼
            </button>
            {column.menu && (
              <div className="hidden group-hover:block absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                {column.menu.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      action.onClick?.(row);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {action.icon && <span className="mr-2">{action.icon}</span>}
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return value;
    }
  };

  const startIndex = currentPage * pagination.pageSize;
  const endIndex = startIndex + pagination.pageSize;
  const paginatedRows = sortedRows.slice(startIndex, endIndex);

  return (
    <div className="data-table-container">
      {loading && <div className="loading-overlay">Loading...</div>}

      <div className="data-table-wrapper">
        <table className="data-table" ref={tableRef}>
          <thead>
            <tr>
              {/* Checkbox Column */}
              <th className="checkbox-col" style={{ width: '40px' }}>
                <input
                  type="checkbox"
                  checked={
                    paginatedRows.length > 0 &&
                    selectedRows.size === paginatedRows.length
                  }
                  onChange={handleSelectAll}
                  className="w-4 h-4"
                />
              </th>

              {/* Data Columns */}
              {columns.filter(col => col.type !== 'actions').map((column) => (
                <th
                  key={column.field}
                  style={{ width: `${columnWidths[column.field]}px` }}
                  className="table-header-cell"
                >
                  <div className="header-content">
                    <div className="header-title">
                      {column.sortable ? (
                        <button
                          onClick={() => handleSort(column.field)}
                          className="sort-button"
                        >
                          {column.headerName}
                          {sortConfig.field === column.field && (
                            <span className="sort-icon">
                              {sortConfig.direction === 'asc' ? (
                                <ChevronUp size={16} />
                              ) : (
                                <ChevronDown size={16} />
                              )}
                            </span>
                          )}
                        </button>
                      ) : (
                        <span>{column.headerName}</span>
                      )}
                    </div>
                    <div className="header-menu-container">
                      <button
                        className="column-menu-button"
                        onClick={() => setOpenMenuCol(openMenuCol === column.field ? null : column.field)}
                        title="Column options"
                      >
                        ⋮
                      </button>
                      {openMenuCol === column.field && (
                        <div className="column-menu-dropdown">
                          {column.sortType === 'custom' && column.sortOptions ? (
                            <>
                              {column.sortOptions.map((option) => (
                                <button
                                  key={option}
                                  className="menu-option"
                                  onClick={() => {
                                    setSortConfig({ field: column.field, direction: 'asc', customValue: option });
                                    setOpenMenuCol(null);
                                  }}
                                >
                                  Sort by {option}
                                </button>
                              ))}
                            </>
                          ) : (
                            <>
                              <button
                                className="menu-option"
                                onClick={() => {
                                  handleSort(column.field);
                                  setSortConfig({ field: column.field, direction: 'asc' });
                                  setOpenMenuCol(null);
                                }}
                              >
                                Sort Ascending
                              </button>
                              <button
                                className="menu-option"
                                onClick={() => {
                                  handleSort(column.field);
                                  setSortConfig({ field: column.field, direction: 'desc' });
                                  setOpenMenuCol(null);
                                }}
                              >
                                Sort Descending
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    {column.resizable !== false && (
                      <div
                        className="resize-handle"
                        onMouseDown={(e) => handleResizeStart(e, column.field)}
                      />
                    )}
                  </div>
                </th>
              ))}

              {/* Actions Column Header (No Heading) */}
              {columns.some(col => col.type === 'actions') && (
                <th
                  style={{ width: '140px' }}
                  className="table-header-cell actions-header"
                >
                  <div className="header-content">
                    <div className="header-title"></div>
                  </div>
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {paginatedRows.length > 0 ? (
              paginatedRows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`table-row ${selectedRows.has(getRowKey(row, index)) ? 'selected' : ''} ${index % 2 === 0 ? 'row-odd' : 'row-even'}`}
                  onClick={() => onRowClick?.(row)}
                >
                  {/* Checkbox Column */}
                  <td className="checkbox-col">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(getRowKey(row, index))}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleSelectRow(getRowKey(row, index));
                      }}
                      className="w-4 h-4"
                    />
                  </td>

                  {/* Data Columns */}
                  {columns.filter(col => col.type !== 'actions').map((column) => (
                    <td
                      key={`${row.id}-${column.field}`}
                      style={{ width: `${columnWidths[column.field]}px` }}
                      className="table-cell"
                    >
                      {renderCell(row, column)}
                    </td>
                  ))}

                  {/* Actions Column */}
                  {columns.map((column) => {
                    if (column.type !== 'actions') return null;
                    return (
                      <td
                        key={`${row.id}-${column.field}`}
                        style={{ width: '140px' }}
                        className="table-cell actions-cell"
                      >
                        {renderCell(row, column)}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="empty-state">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="pagination-footer">
        <span className="pagination-info">
          Show {Math.min(pagination.pageSize, paginatedRows.length)} of{' '}
          {pagination.totalRows || rows.length}
        </span>
        <div className="pagination-controls">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            className="pagination-btn"
          >
            ← Previous
          </button>
          <span className="pagination-page">
            {currentPage + 1} / {Math.ceil((pagination.totalRows || rows.length) / pagination.pageSize)}
          </span>
          <button
            disabled={
              (currentPage + 1) * pagination.pageSize >=
              (pagination.totalRows || rows.length)
            }
            onClick={() => setCurrentPage(currentPage + 1)}
            className="pagination-btn"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
