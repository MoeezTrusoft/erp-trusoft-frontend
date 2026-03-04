
export const createRow = (id, data = {}) => ({
  id,
  ...data,
});

/**
 * Create multiple rows at once
 */
export const createRows = (rowsData) => {
  return rowsData.map((item) => ({
    id: item.id || `row-${Date.now()}-${Math.random()}`,
    ...item,
  }));
};

/**
 * Create a new column definition
 */
export const createColumn = ({
  field,
  headerName,
  width = 150,
  sortable = true,
  resizable = true,
  type = 'text',
  render = null,
  ...rest
}) => ({
  field,
  headerName,
  width,
  sortable,
  resizable,
  type,
  render,
  ...rest,
});

/**
 * Create a multiple columns at once
 */
export const createColumns = (columnsData) => {
  return columnsData.map((col) => createColumn(col));
};

/**
 * Create a chip column
 */
export const createChipColumn = ({
  field,
  headerName,
  chipColor = {},
  chipTextColor = {},
  ...rest
}) => 
  createColumn({
    field,
    headerName,
    type: 'chip',
    chipColor,
    chipTextColor,
    ...rest,
  });

/**
 * Create an actions column
 */
export const createActionsColumn = ({
  menu = [],
  ...rest
}) => 
  createColumn({
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    menu,
    sortable: false,
    resizable: false,
    width: 140,
    ...rest,
  });

/**
 * Merge batch of rows with existing rows
 */
export const mergeRows = (existingRows, newRows) => {
  const rowMap = new Map(existingRows.map((row) => [row.id, row]));
  newRows.forEach((row) => rowMap.set(row.id, row));
  return Array.from(rowMap.values());
};

/**
 * Sort rows by a specific field
 */
export const sortRowsByField = (rows, field, direction = 'asc') => {
  return [...rows].sort((a, b) => {
    if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
    if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

/**
 * Filter rows by a search query
 */
export const filterRows = (rows, query, searchFields = []) => {
  if (!query.trim()) return rows;

  const lowerQuery = query.toLowerCase();
  return rows.filter((row) =>
    searchFields.some((field) =>
      String(row[field]).toLowerCase().includes(lowerQuery)
    )
  );
};

/**
 * Export rows as CSV
 */
export const exportRowsAsCSV = (rows, columns, filename = 'export.csv') => {
  if (rows.length === 0) return;

  const headers = columns.map((col) => col.headerName);
  const fields = columns.map((col) => col.field);

  let csv = headers.join(',') + '\n';
  rows.forEach((row) => {
    const values = fields.map((field) => {
      const value = row[field];
      // Escape commas and quotes in CSV
      return typeof value === 'string' && value.includes(',')
        ? `"${value.replace(/"/g, '""')}"`
        : value;
    });
    csv += values.join(',') + '\n';
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default {
  createRow,
  createRows,
  createColumn,
  createColumns,
  createChipColumn,
  createActionsColumn,
  mergeRows,
  sortRowsByField,
  filterRows,
  exportRowsAsCSV,
};
