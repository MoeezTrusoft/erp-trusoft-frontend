export const GRID_CONFIG = {
  COLS: 6,
  ROW_HEIGHT: 30,
  MARGIN: [16, 16],
  STORAGE_KEY: 'dashboard-grid-layout',
};

/**
 * Get saved layout from localStorage, or return null if not found
 */
export const getSavedLayout = () => {
  try {
    const saved = localStorage.getItem(GRID_CONFIG.STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to retrieve saved layout:', error);
    return null;
  }
};

/**
 * Save layout to localStorage
 */
export const saveLayout = (layout) => {
  try {
    localStorage.setItem(GRID_CONFIG.STORAGE_KEY, JSON.stringify(layout));
    return true;
  } catch (error) {
    console.error('Failed to save layout:', error);
    return false;
  }
};

/**
 * Create a layout item with default constraints
 */
export const createLayoutItem = (id, x = 0, y = 0, w = 4, h = 10) => ({
  i: id,
  x,
  y,
  w,
  h,
  minW: 3,
  minH: 8,
  maxW: undefined,
  maxH: undefined,
});

/**
 * Add a new item to layout, automatically positioning it
 */
export const addItemToLayout = (layout, newItem, cols = GRID_CONFIG.COLS) => {
  // Find the lowest y position
  const maxY = layout.length === 0 ? 0 : Math.max(...layout.map(item => item.y + item.h));
  
  // Position new item at the bottom
  const positionedItem = {
    ...newItem,
    x: 0,
    y: maxY,
  };

  return [...layout, positionedItem];
};

/**
 * Remove item from layout by id
 */
export const removeItemFromLayout = (layout, itemId) => {
  return layout.filter(item => item.i !== itemId);
};

/**
 * Update a specific item in layout
 */
export const updateLayoutItem = (layout, itemId, updates) => {
  return layout.map(item =>
    item.i === itemId ? { ...item, ...updates } : item
  );
};

/**
 * Reset to default layout
 */
export const getDefaultLayout = () => [
  { i: 'workforce', x: 0, y: 0, w: 8, h: 3.65, minW: 4, minH: 4 },
  { i: 'recruitment', x: 8, y: 0, w: 4, h: 3.65, minW: 3, minH: 4 },
  { i: 'attendance', x: 0, y: 5, w: 4, h: 3, minW: 3, minH: 3 },
  { i: 'training', x: 4, y: 5, w: 4, h: 3, minW: 3, minH: 3 },
  { i: 'turnover', x: 8, y: 5, w: 4, h: 3, minW: 3, minH: 3 },
  { i: 'performance', x: 0, y: 9, w: 4, h: 2.7, minW: 3, minH: 3 },
  { i: 'payroll', x: 4, y: 9, w: 4, h: 1.9, minW: 3, minH: 3 },
];

/**
 * Calculate grid item height in pixels
 */
export const calculateItemHeight = (gridRows, rowHeight, margin) => {
  return (gridRows * rowHeight) + ((gridRows - 1) * margin[1]);
};

/**
 * Calculate grid item width in pixels
 */
export const calculateItemWidth = (gridCols, containerWidth, cols, margin, padding) => {
  const availableWidth = containerWidth - (padding[0] * 2) - ((cols - 1) * margin[0]);
  return availableWidth / cols;
};

/**
 * Validate layout items
 */
export const validateLayout = (layout) => {
  return Array.isArray(layout) && layout.every(item => {
    return (
      typeof item.i === 'string' &&
      typeof item.x === 'number' &&
      typeof item.y === 'number' &&
      typeof item.w === 'number' &&
      typeof item.h === 'number' &&
      item.x >= 0 &&
      item.y >= 0 &&
      item.w > 0 &&
      item.h > 0
    );
  });
};

/**
 * Generate a responsive layout for different breakpoints
 */
export const generateResponsiveLayout = (baseLayout, breakpoint) => {
  const breakpoints = {
    lg: { cols: 12, scale: 1 },
    md: { cols: 10, scale: 0.85 },
    sm: { cols: 6, scale: 0.7 },
    xs: { cols: 4, scale: 0.5 },
  };

  const config = breakpoints[breakpoint] || breakpoints.lg;

  return baseLayout.map(item => ({
    ...item,
    w: Math.max(1, Math.floor(item.w * config.scale)),
    h: Math.max(1, Math.floor(item.h * config.scale)),
  }));
};
