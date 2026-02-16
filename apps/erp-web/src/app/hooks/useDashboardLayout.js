import { useState, useCallback, useEffect } from 'react';
import {
  getSavedLayout,
  saveLayout,
  getDefaultLayout,
  validateLayout,
  addItemToLayout as addItem,
  removeItemFromLayout as removeItem,
  updateLayoutItem as updateItem,
} from '../utils/layoutManager';

export const useDashboardLayout = (defaultLayout = null) => {
  const [layout, setLayout] = useState(() => {
    const savedLayout = getSavedLayout();
    if (savedLayout && validateLayout(savedLayout)) {
      return savedLayout;
    }
    return defaultLayout ? validateLayout(defaultLayout) ? defaultLayout : getDefaultLayout() : getDefaultLayout();
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Save layout when it changes
  const handleLayoutChange = useCallback((newLayout) => {
    if (!validateLayout(newLayout)) {
      setError('Invalid layout structure');
      return;
    }
    setLayout(newLayout);
    const success = saveLayout(newLayout);
    if (!success) {
      setError('Failed to save layout to localStorage');
    } else {
      setError(null);
    }
  }, []);

  // Reset to default
  const resetLayout = useCallback(() => {
    const defaultLayout = getDefaultLayout();
    handleLayoutChange(defaultLayout);
  }, [handleLayoutChange]);

  // Add item to layout
  const addItemToLayout = useCallback((newItem) => {
    const updated = addItem(layout, newItem);
    handleLayoutChange(updated);
  }, [layout, handleLayoutChange]);

  // Remove item from layout
  const removeItemFromLayout = useCallback((itemId) => {
    const updated = removeItem(layout, itemId);
    handleLayoutChange(updated);
  }, [layout, handleLayoutChange]);

  // Update specific item
  const updateLayoutItem = useCallback((itemId, updates) => {
    const updated = updateItem(layout, itemId, updates);
    handleLayoutChange(updated);
  }, [layout, handleLayoutChange]);

  // Toggle item visibility (doesn't remove, just minimizes)
  const toggleItemVisibility = useCallback((itemId) => {
    const item = layout.find(i => i.i === itemId);
    if (!item) return;

    const newH = item.h < 2 ? item.minH || 8 : 1;
    updateLayoutItem(itemId, { h: newH });
  }, [layout, updateLayoutItem]);

  // Export layout as JSON
  const exportLayout = useCallback(() => {
    return JSON.stringify(layout, null, 2);
  }, [layout]);

  // Import layout from JSON
  const importLayout = useCallback((jsonString) => {
    try {
      const imported = JSON.parse(jsonString);
      if (validateLayout(imported)) {
        handleLayoutChange(imported);
        return true;
      }
      setError('Invalid layout JSON structure');
      return false;
    } catch (e) {
      setError(`Failed to parse layout JSON: ${e.message}`);
      return false;
    }
  }, [handleLayoutChange]);

  return {
    layout,
    handleLayoutChange,
    resetLayout,
    addItemToLayout,
    removeItemFromLayout,
    updateLayoutItem,
    toggleItemVisibility,
    exportLayout,
    importLayout,
    isLoading,
    error,
    clearError: () => setError(null),
  };
};

export default useDashboardLayout;
