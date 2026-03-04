import { useState, useCallback } from 'react';

/**
 * Custom hook for managing DataTable state
 * Provides easy methods to add, delete, and update rows/columns
 * 
 * Usage:
 * const { rows, columns, addRow, deleteRow, updateRow, addColumn, deleteColumn } = useDataTable(initialRows, initialColumns);
 */
export const useDataTable = (initialRows = [], initialColumns = []) => {
  const [rows, setRows] = useState(initialRows);
  const [columns, setColumns] = useState(initialColumns);

  // Row Management
  const addRow = useCallback((newRow) => {
    setRows((prevRows) => [...prevRows, newRow]);
  }, []);

  const addRows = useCallback((newRows) => {
    setRows((prevRows) => [...prevRows, ...newRows]);
  }, []);

  const deleteRow = useCallback((rowId) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== rowId));
  }, []);

  const deleteRows = useCallback((rowIds) => {
    setRows((prevRows) => prevRows.filter((row) => !rowIds.includes(row.id)));
  }, []);

  const updateRow = useCallback((rowId, updatedData) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === rowId ? { ...row, ...updatedData } : row))
    );
  }, []);

  const clearRows = useCallback(() => {
    setRows([]);
  }, []);

  // Column Management
  const addColumn = useCallback((newColumn) => {
    setColumns((prevColumns) => [...prevColumns, newColumn]);
  }, []);

  const addColumns = useCallback((newColumns) => {
    setColumns((prevColumns) => [...prevColumns, ...newColumns]);
  }, []);

  const deleteColumn = useCallback((fieldName) => {
    setColumns((prevColumns) => prevColumns.filter((col) => col.field !== fieldName));
  }, []);

  const deleteColumns = useCallback((fieldNames) => {
    setColumns((prevColumns) => prevColumns.filter((col) => !fieldNames.includes(col.field)));
  }, []);

  const updateColumn = useCallback((fieldName, updatedConfig) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.field === fieldName ? { ...col, ...updatedConfig } : col
      )
    );
  }, []);

  const reorderColumns = useCallback((newColumnOrder) => {
    setColumns(newColumnOrder);
  }, []);

  const clearColumns = useCallback(() => {
    setColumns([]);
  }, []);

  return {
    rows,
    columns,
    setRows,
    setColumns,
    // Row operations
    addRow,
    addRows,
    deleteRow,
    deleteRows,
    updateRow,
    clearRows,
    // Column operations
    addColumn,
    addColumns,
    deleteColumn,
    deleteColumns,
    updateColumn,
    reorderColumns,
    clearColumns,
  };
};

export default useDataTable;
