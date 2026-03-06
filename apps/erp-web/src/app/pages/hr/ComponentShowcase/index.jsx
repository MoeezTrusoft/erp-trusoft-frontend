import React, { useEffect, useRef, useState } from 'react';
import {
  Textarea,
  Select,
  URLInput,
  PasswordInput,
  DateInput,
  CopyInput,
  PercentageInput,
  CurrencyInput,
  Input,
  NumberInput,
  KPITile,
  Switch,
  SegmentControl,
  GlobalSearchBar,
  TreeSelect,
  StepperInput,
  RadioButton,
  Checkbox,
  RatingSelector,
  TabButton,
  ProgressBar,
  CircularProgressBar,
  Slider,
  AdvancedSlider,
  MultiSelect,
  SubTab,
  TabsPagination,
  MenuEverything,
  DocumentViewer,
  ImageCrop,
  FoundationGridSystem,
  Drawer,
  Tooltip,
  Accordion,
  Chips,
  UploadButton,
  Breadcrumbs,
} from '@trusoft/ui';
import '../../../styles/scrollbar.css';
import useDashboardLayout from '../../../hooks/useDashboardLayout';
import Breadcrumb from '../Dashboard/components/Breadcrumb';

const ComponentShowcase = () => {
  const { error, clearError } = useDashboardLayout();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const resetScroll = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
      window.scrollTo(0, 0);
    };

    resetScroll();
    requestAnimationFrame(resetScroll);
  }, []);

  const [values, setValues] = useState({
    inactive: '',
    active: '',
    error: '',
    disabled: 'This is disabled',
    readonly: 'This is readonly',
    helper: '',
    variant7: '',
    variant8: '',
    variant9: '',
  });

  const [selectValues, setSelectValues] = useState({
    inactive: '',
    active: '',
    focus: '',
    error: '',
    disabled: '',
    readonly: '',
    variant7: '',
    variant8: '',
    variant9: '',
    variant10: '',
  });

  const [inputValues, setInputValues] = useState({
    inactive: '',
    active: '',
    focus: '',
    error: '',
    disabled: '',
    readonly: '',
    variant7: '',
    variant8: '',
    variant9: '',
  });

  const [passwordValues, setPasswordValues] = useState({
    inactive: '',
    active: '',
    'active-show': '',
    disabled: 'password123',
    readonly: 'readonly123',
    error: '',
    'error-text': '',
    helper: '',
    required: '',
    linear: '',
  });

  const [dateValues, setDateValues] = useState({
    inactive: '',
    active: '',
    error: '',
    disabled: '2024-03-15',
    readonly: '2024-03-10',
    'error-text': '',
    helper: '',
    required: '',
    linear: '',
  });

  const [copyValues, setCopyValues] = useState({
    inactive: 'https://example.com/share',
    active: 'https://example.com/share',
    error: 'https://example.com/share',
    disabled: 'https://example.com/share',
    readonly: 'https://example.com/share',
    copied: 'https://example.com/share',
    'error-text': 'https://example.com/share',
    helper: 'https://example.com/share',
    required: 'https://example.com/share',
    linear: 'https://example.com/share',
  });

  const [percentageValues, setPercentageValues] = useState({
    inactive: '',
    active: '50',
    error: '',
    disabled: '75',
    readonly: '100',
    'error-text': '',
    helper: '',
    required: '',
    linear: '',
  });

  const [currencyValues, setCurrencyValues] = useState({
    inactive: '',
    active: '1250.00',
    error: '',
    disabled: '5000.00',
    readonly: '999.99',
    'error-text': '',
    helper: '',
    required: '',
    linear: '',
  });

  const [basicInputValues, setBasicInputValues] = useState({
    inactive: '',
    active: 'Sample text',
    error: '',
    disabled: 'Disabled text',
    readonly: 'Readonly text',
    'error-text': '',
    helper: '',
    required: '',
    linear: '',
  });

  const [numberValues, setNumberValues] = useState({
    inactive: '',
    active: '42',
    error: '',
    disabled: '100',
    readonly: '50',
    'error-text': '',
    helper: '',
    required: '',
    linear: '',
  });

  const [switchValues, setSwitchValues] = useState({
    standardDefault: true,
    standardHover: true,
    standardFocus: true,
    standardDisabled: true,
    smallDefault: true,
    smallHover: true,
    smallFocus: true,
    smallDisabled: true,
  });

  const [segmentValues, setSegmentValues] = useState({
    active: 'day',
    hover: 'day',
    disabled: 'day',
  });

  const [searchValue, setSearchValue] = useState('');
  const [treeValue, setTreeValue] = useState('');
  const [stepperValue, setStepperValue] = useState(1);
  const [radioSelected, setRadioSelected] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [ratingValue, setRatingValue] = useState(2.5);
  const [progressValue] = useState(64);
  const [circularProgressValue] = useState(70);
  const [sliderValue, setSliderValue] = useState(5);
  const [advancedSliderValues, setAdvancedSliderValues] = useState({ minValue: 2, maxValue: 8 });
  const [multiSelectValues, setMultiSelectValues] = useState([ 'option-1', 'option-2', 'option-3', 'option-4' ]);
  const [multiSelectCompactValues, setMultiSelectCompactValues] = useState([
    'option-1',
    'option-2',
    'option-3',
    'option-4',
    'option-5',
  ]);

  const [errors, setErrors] = useState({
    error: 'This field has an error',
    selectError: 'Selection error',
    passwordError: 'Password error',
    dateError: 'Invalid date',
    copyError: 'Cannot copy',
    percentageError: 'Invalid percentage',
    currencyError: 'Invalid amount',
    numberError: 'Invalid number',
  });

  const handleChange = (key) => (e) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSelectChange = (key) => (e) => {
    setSelectValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleInputChange = (key) => (e) => {
    setInputValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handlePasswordChange = (key) => (e) => {
    setPasswordValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleDateChange = (key) => (e) => {
    setDateValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleCopyChange = (key) => (e) => {
    setCopyValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handlePercentageChange = (key) => (e) => {
    setPercentageValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleCurrencyChange = (key) => (e) => {
    setCurrencyValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleBasicInputChange = (key) => (e) => {
    setBasicInputValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleNumberChange = (key) => (e) => {
    setNumberValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSwitchChange = (key) => (nextValue) => {
    setSwitchValues((prev) => ({ ...prev, [key]: nextValue }));
  };

  const handleSegmentChange = (key) => (nextValue) => {
    setSegmentValues((prev) => ({ ...prev, [key]: nextValue }));
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClear = () => {
    setSearchValue('');
  };

  const handleTreeChange = (nextValue) => {
    setTreeValue(nextValue);
  };

  const handleStepperChange = (nextValue) => {
    setStepperValue(nextValue);
  };

  const handleRadioChange = (nextValue) => {
    setRadioSelected(nextValue);
  };

  const handleCheckboxChange = (nextValue) => {
    setCheckboxChecked(nextValue);
  };

  const handleRatingChange = (nextValue) => {
    setRatingValue(nextValue);
  };

  const handleSliderChange = (nextValue) => {
    setSliderValue(nextValue);
  };

  const handleAdvancedSliderChange = (nextRange) => {
    setAdvancedSliderValues(nextRange);
  };

  const handleMultiSelectChange = (nextValues) => {
    setMultiSelectValues(nextValues);
  };

  const handleMultiSelectCompactChange = (nextValues) => {
    setMultiSelectCompactValues(nextValues);
  };

  const multiSelectOptions = [
    { label: 'Option', value: 'option-1' },
    { label: 'Option', value: 'option-2' },
    { label: 'Option', value: 'option-3' },
    { label: 'Option', value: 'option-4' },
    { label: 'Option', value: 'option-5' },
  ];

  const treeItems = [
    {
      id: 'item-1',
      label: 'Lorem ipsum dolor sit amet',
      children: [
        { id: 'item-1-1', label: 'Lorem ipsum' },
        { id: 'item-1-2', label: 'Lorem ipsum' },
        { id: 'item-1-3', label: 'Lorem ipsum' },
      ],
    },
    { id: 'item-2', label: 'Lorem ipsum dolor sit amet' },
    { id: 'item-3', label: 'Lorem ipsum dolor sit amet' },
  ];

  const mockOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ];

  const textareaVariants = [
    {
      key: 'inactive',
      title: 'Inactive',
      placeholder: 'Enter text...',
      maxLength: 500,
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Start typing...',
      maxLength: 500,
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'This has an error',
      hasError: true,
      maxLength: 500,
    },
    {
      key: 'disabled',
      title: 'Disabled',
      placeholder: 'Cannot edit',
      isDisabled: true,
      maxLength: 500,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
      maxLength: 500,
    },
    {
      key: 'helper',
      title: 'Helper Text',
      placeholder: 'Enter text...',
      helperText: 'This is a helper text',
      maxLength: 500,
    },
    {
      key: 'variant7',
      title: 'Variant 7',
      placeholder: 'Enter text...',
      maxLength: 500,
    },
    {
      key: 'variant8',
      title: 'Variant 8',
      placeholder: 'Enter text...',
      maxLength: 500,
    },
    {
      key: 'variant9',
      title: 'Variant 9',
      placeholder: 'Enter text...',
      maxLength: 500,
    },
  ];

  const selectVariants = [
    {
      key: 'inactive',
      title: 'Inactive',
      placeholder: 'Select an option...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Select an option...',
    },
    {
      key: 'focus',
      title: 'Linear Input',
      placeholder: 'Select an option...',
    },
    {
      key: 'disabled',
      title: 'Disabled',
      placeholder: 'Cannot select',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Readonly option',
      isReadonly: true,
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'Select an option...',
      hasError: true,
    },
    {
      key: 'variant7',
      title: 'Opened',
      placeholder: 'Select an option...',
    },
    {
      key: 'variant8',
      title: 'Error Text',
      placeholder: 'Select an option...',
      hasError: true,
    },
    {
      key: 'variant9',
      title: 'Helper Text',
      placeholder: 'Select an option...',
      helperText: 'Select a value from the list',
    },
    {
      key: 'variant10',
      title: 'Required',
      placeholder: 'Select an option...',
      required: true,
    },
  ];

  const variants = [
    {
      key: 'inactive',
      title: 'Inactive',
      placeholder: 'Enter text...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Start typing...',
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'This has an error',
      hasError: true,
    },
    {
      key: 'disabled',
      title: 'Disabled',
      placeholder: 'Cannot edit',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
    },
    {
      key: 'helper',
      title: 'Helper Text',
      placeholder: 'Enter text...',
      helperText: 'This is a helper text',
    },
    {
      key: 'variant7',
      title: 'Variant 7',
      placeholder: 'Enter text...',
    },
    {
      key: 'variant8',
      title: 'Variant 8',
      placeholder: 'Enter text...',
    },
    {
      key: 'variant9',
      title: 'Variant 9',
      placeholder: 'Enter text...',
    },
  ];

  const inputVariants = [
    {
      key: 'inactive',
      title: 'Inactive',
      placeholder: 'Enter URL...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'https://example.com',
    },
    {
      key: 'focus',
      title: 'Error Text',
      placeholder: 'Enter URL...',
      hasError: true,
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'Enter URL...',
      hasError: true,
    },
    {
      key: 'disabled',
      title: 'Disabled',
      placeholder: 'Cannot edit',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
    },
    {
      key: 'variant7',
      title: 'Helper Text',
      placeholder: 'Enter URL...',
      helperText: 'Enter a valid URL',
    },
    {
      key: 'variant8',
      title: 'Required',
      placeholder: 'Enter URL...',
      required: true,
    },
    {
      key: 'variant9',
      title: 'Linear Input',
      placeholder: 'Enter URL...',
    },
  ];

  const passwordVariants = [
    {
      key: 'inactive',
      title: 'In-Active',
      placeholder: 'Enter password...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Enter password...',
    },
    {
      key: 'active-show',
      title: 'Active Show Password',
      placeholder: 'Enter password...',
    },
    {
      key: 'disabled',
      title: 'Disabled',
      placeholder: 'Cannot edit',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'Enter password...',
      hasError: true,
    },
    {
      key: 'error-text',
      title: 'Error Text',
      placeholder: 'Enter password...',
      hasError: true,
    },
    {
      key: 'helper',
      title: 'Helper Text',
      placeholder: 'Enter password...',
      helperText: 'Password must be at least 8 characters',
    },
    {
      key: 'required',
      title: 'Required',
      placeholder: 'Enter password...',
      required: true,
    },
    {
      key: 'linear',
      title: 'Linear Input',
      placeholder: 'Enter password...',
    },
  ];

  const dateVariants = [
    {
      key: 'inactive',
      title: 'In-Active',
      placeholder: 'Select a date...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Select a date...',
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'Select a date...',
      hasError: true,
    },
    {
      key: 'disabled',
      title: 'Disable',
      placeholder: 'Cannot edit',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
    },
    {
      key: 'error-text',
      title: 'Error Text',
      placeholder: 'Select a date...',
      hasError: true,
    },
    {
      key: 'helper',
      title: 'Helper Text',
      placeholder: 'Select a date...',
      helperText: 'Select today or later',
    },
    {
      key: 'required',
      title: 'Required',
      placeholder: 'Select a date...',
      required: true,
    },
    {
      key: 'linear',
      title: 'Linear Input',
      placeholder: 'Select a date...',
    },
  ];

  const copyVariants = [
    {
      key: 'inactive',
      title: 'In-Active',
      placeholder: 'Enter text to copy...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Enter text to copy...',
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'Enter text to copy...',
      hasError: true,
    },
    {
      key: 'disabled',
      title: 'Disable',
      placeholder: 'Cannot edit',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
    },
    {
      key: 'copied',
      title: 'Copied',
      placeholder: 'Enter text to copy...',
    },
    {
      key: 'error-text',
      title: 'Error Text',
      placeholder: 'Enter text to copy...',
      hasError: true,
    },
    {
      key: 'helper',
      title: 'Helper Text',
      placeholder: 'Enter text to copy...',
      helperText: 'Copy the generated link',
    },
    {
      key: 'required',
      title: 'Required',
      placeholder: 'Enter text to copy...',
      required: true,
    },
    {
      key: 'linear',
      title: 'Linear Input',
      placeholder: 'Enter text to copy...',
    },
  ];

  const percentageVariants = [
    {
      key: 'inactive',
      title: 'In-Active',
      placeholder: 'Enter percentage...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Enter percentage...',
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'Enter percentage...',
      hasError: true,
    },
    {
      key: 'disabled',
      title: 'Disable',
      placeholder: 'Cannot edit',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
    },
    {
      key: 'error-text',
      title: 'Error Text',
      placeholder: 'Enter percentage...',
      hasError: true,
    },
    {
      key: 'helper',
      title: 'Helper Text',
      placeholder: 'Enter percentage...',
      helperText: 'Enter value between 0-100',
    },
    {
      key: 'required',
      title: 'Required',
      placeholder: 'Enter percentage...',
      required: true,
    },
    {
      key: 'linear',
      title: 'Linear Input',
      placeholder: 'Enter percentage...',
    },
  ];

  const currencyVariants = [
    {
      key: 'inactive',
      title: 'In-Active',
      placeholder: 'Enter amount...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Enter amount...',
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'Enter amount...',
      hasError: true,
    },
    {
      key: 'disabled',
      title: 'Disable',
      placeholder: 'Cannot edit',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
    },
    {
      key: 'error-text',
      title: 'Error Text',
      placeholder: 'Enter amount...',
      hasError: true,
    },
    {
      key: 'helper',
      title: 'Helper Text',
      placeholder: 'Enter amount...',
      helperText: 'Enter a valid currency amount',
    },
    {
      key: 'required',
      title: 'Required',
      placeholder: 'Enter amount...',
      required: true,
    },
    {
      key: 'linear',
      title: 'Linear Input',
      placeholder: 'Enter amount...',
    },
  ];

  const basicInputVariants = [
    {
      key: 'inactive',
      title: 'In-Active',
      placeholder: 'Enter text...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Start typing...',
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'This has an error',
      hasError: true,
    },
    {
      key: 'disabled',
      title: 'Disable',
      placeholder: 'Cannot edit',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
    },
    {
      key: 'error-text',
      title: 'Error Text',
      placeholder: 'Enter text...',
      hasError: true,
    },
    {
      key: 'helper',
      title: 'Helper Text',
      placeholder: 'Enter text...',
      helperText: 'This is a helper text',
    },
    {
      key: 'required',
      title: 'Required',
      placeholder: 'Enter text...',
      required: true,
    },
    {
      key: 'linear',
      title: 'Linear Input',
      placeholder: 'Enter text...',
    },
  ];

  const numberVariants = [
    {
      key: 'inactive',
      title: 'In-Active',
      placeholder: 'Enter number...',
    },
    {
      key: 'active',
      title: 'Active',
      placeholder: 'Enter number...',
    },
    {
      key: 'disabled',
      title: 'Disabled',
      placeholder: 'Cannot edit',
      isDisabled: true,
    },
    {
      key: 'readonly',
      title: 'Readonly',
      placeholder: 'Read only',
      isReadonly: true,
    },
    {
      key: 'error',
      title: 'Error',
      placeholder: 'Enter number...',
      hasError: true,
    },
    {
      key: 'error-text',
      title: 'Error Text',
      placeholder: 'Enter number...',
      hasError: true,
    },
    {
      key: 'helper',
      title: 'Helper Text',
      placeholder: 'Enter number...',
      helperText: 'Enter a valid number',
    },
    {
      key: 'required',
      title: 'Variant8',
      placeholder: 'Enter number...',
      required: true,
    },
    {
      key: 'linear',
      title: 'Variant9',
      placeholder: 'Enter number...',
    },
  ];

  return (
    <div
      style={{ backgroundColor: '#ffffff' }}
      className="pl-2 pt-4 relative overflow-hidden h-screen flex flex-col"
    >
      {/* optional breadcrumb for context */}
      <div className="px-6 pt-1.5 -mb-3 border-b border-gray-200">
        <Breadcrumb pageTitle="Component Showcase" breadcrumbItems={[ 'Home', 'Components' ]} />
      </div>

      <div className="flex-1 p-4 pb-5 relative overflow-hidden flex flex-col">
        {/* error banner from layout hook */}
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

        {/* scrollable content area */}
        <div ref={scrollContainerRef} className="h-full overflow-y-auto custom-scrollbar p-8">
          {/* Upload Button Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Button</h2>
            <div className="flex flex-col items-start gap-4">
              <UploadButton variant="default" width={116} height={36} />
              <UploadButton variant="variant2" width={116} height={36} />
            </div>
          </div>

          {/* Breadcrumbs Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Breadcrumbs</h2>
            <div className="flex flex-col items-start gap-8">
              <Breadcrumbs
                items={[ 'Home', 'DAM', 'Audit & Activity Log' ]}
                style={{ width: '276px' }}
              />
              <Breadcrumbs
                items={[ 'Home', 'DAM', 'Audit & Activity Log' ]}
                showEllipsis
                style={{ width: '337px' }}
              />
            </div>
          </div>

          {/* Chips Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Chips</h2>
            <div
              style={{
                padding: '18px 10px',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, max-content)',
                  columnGap: '40px',
                  rowGap: '16px',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <Chips size="standard" dismissible state="default" outline={false} />
                <Chips size="standard" dismissible state="disabled" outline={false} />
                <Chips size="standard" dismissible={false} state="default" outline={false} />
                <Chips size="standard" dismissible={false} state="default" outline />

                <Chips size="small" dismissible state="default" outline={false} />
                <Chips size="small" dismissible state="disabled" outline={false} />
                <Chips size="small" dismissible={false} state="default" outline={false} />
                <Chips size="small" dismissible={false} state="default" outline />

                <Chips size="mini" dismissible state="default" outline={false} />
                <Chips size="mini" dismissible state="disabled" outline={false} />
                <Chips size="mini" dismissible={false} state="default" outline={false} />
                <Chips size="mini" dismissible={false} state="default" outline />
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accordion</h2>
            <div className="space-y-4">
              <Accordion title="Name of user || All" defaultOpen={false} />
              <Accordion title="Name of user || All" defaultOpen />
              <Accordion title="Name of user || All" defaultOpen={false} />
            </div>
          </div>

          {/* Tooltip Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tooltip</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: '40px 32px',
                padding: '10px 0',
              }}
            >
              <Tooltip placement="left" />
              <Tooltip placement="right" />
              <Tooltip placement="bottom" />
              <Tooltip placement="up" />
              <Tooltip placement="bottom-left" />
              <Tooltip placement="bottom-right" />
              <Tooltip placement="top-left" />
              <Tooltip placement="top-right" />
            </div>
          </div>

          {/* Foundation Grid System + Drawer Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Foundation Grid System</h2>
            <div className="overflow-x-auto pb-8">
              <FoundationGridSystem
                width={1440}
                height={1024}
                top={0}
                left={0}
                padding={10}
                gap={10}
                background="var(--color-neutral-3, #EDEDED)"
                style={{
                  minWidth: '1440px',
                  margin: '0 auto',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', width: '100%' }}>
                  <Drawer title="Drawer" width={420} height="100%">
                    <div
                      style={{
                        color: 'var(--color-neutral-8, #333333)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        lineHeight: 1.5,
                      }}
                    >
                      Drawer content area
                    </div>
                  </Drawer>
                </div>
              </FoundationGridSystem>
            </div>
          </div>

          {/* Image Crop Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Image Crop</h2>
            <div className="flex flex-wrap items-start gap-8 pb-8">
              <ImageCrop variant="square" width={403} height={403} />
              <ImageCrop variant="circle" width={403} height={403} />
            </div>
          </div>

          {/* Document Viewer Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Document Viewer</h2>
            <div className="pb-8">
              <DocumentViewer
                fileName="File name"
                currentPage={1}
                totalPages={2}
                zoom="100%"
                width={1440}
                height={1067}
                style={{ maxWidth: '100%', height: '760px' }}
              />
            </div>
          </div>

          {/* Menu Everything Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu / Everything</h2>
            <div className="pb-8">
              <MenuEverything />
            </div>
          </div>

          {/* Sub Tabs and Tabs Pagination Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sub Tabs and Tabs Pagination</h2>
            <div className="flex flex-wrap items-start gap-12 pb-8">
              <div className="flex flex-col gap-10">
                <SubTab label="Sub Tab 01" state="active" />
                <SubTab label="Sub Tab 01" state="inactive" />
                <SubTab label="Sub Tab 01" state="disabled" />
              </div>

              <div className="flex flex-col gap-8 pt-1">
                <TabsPagination prevDisabled nextDisabled={false} />
                <TabsPagination prevDisabled={false} nextDisabled />
                <TabsPagination prevDisabled={false} nextDisabled={false} />
              </div>
            </div>
          </div>

          {/* Multi Select Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Multiple Select</h2>
            <div className="space-y-8 pb-8">
              <MultiSelect
                label="Field Label:"
                options={multiSelectOptions}
                selectedValues={multiSelectValues}
                onChange={handleMultiSelectChange}
              />

              <MultiSelect
                label=""
                options={multiSelectOptions}
                selectedValues={multiSelectCompactValues}
                onChange={handleMultiSelectCompactChange}
                maxVisibleChips={3}
                showChipsContainerArrow
                style={{
                  padding: '10px',
                  border: '1px solid var(--color-teal-10, #045F58)',
                  borderRadius: '12px',
                  background: '#E1F3F2',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          {/* Slider Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Slider and Advanced</h2>
            <div className="space-y-10 pb-8">
              <Slider value={sliderValue} onChange={handleSliderChange} />
              <AdvancedSlider
                minValue={advancedSliderValues.minValue}
                maxValue={advancedSliderValues.maxValue}
                onChange={handleAdvancedSliderChange}
              />
            </div>
          </div>

          {/* Progress Bar Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Progress Bar</h2>
            <div className="space-y-8 pb-8">
              <ProgressBar
                value={progressValue}
                showInfo
                timeLeft="30 seconds left"
              />

              <ProgressBar
                value={progressValue}
                showInfo={false}
              />

              <CircularProgressBar value={circularProgressValue} />
            </div>
          </div>

          {/* Tab Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tab Component</h2>
            <div className="flex flex-col gap-6 pb-8">
              <TabButton label="Course Catalog" selected={false} showIcon={false} />
              <TabButton label="Course Catalog" selected showIcon={false} />
              <TabButton label="Course Catalog" selected={false} showIcon />
              <TabButton label="Course Catalog" selected showIcon />
              <TabButton label="Course Catalog" disabled showIcon={false} />
              <TabButton label="Course Catalog" disabled showIcon />
            </div>
          </div>

          {/* Ratings Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ratings</h2>
            <div className="pb-8">
              <RatingSelector
                value={ratingValue}
                onChange={handleRatingChange}
              />
            </div>
          </div>

          {/* Radio and Checkbox Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Radio and Checkbox</h2>
            <div className="flex flex-wrap items-start gap-16 pb-8">
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-700">Radio Button</h3>
                <div className="flex items-center gap-6">
                  <RadioButton
                    checked={radioSelected}
                    onChange={handleRadioChange}
                    ariaLabel="Radio selected"
                  />
                  <RadioButton checked={false} ariaLabel="Radio unselected" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-700">Checkbox</h3>
                <div className="flex items-center gap-6">
                  <Checkbox
                    checked={checkboxChecked}
                    onChange={handleCheckboxChange}
                    ariaLabel="Checkbox selected"
                  />
                  <Checkbox checked={false} ariaLabel="Checkbox unselected" />
                </div>
              </div>
            </div>
          </div>

          {/* Stepper Input Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stepper Input</h2>
            <div className="flex flex-wrap items-center gap-8 pb-8">
              <div className="space-y-2">
                <h3 className="text-base font-medium text-gray-700">Default</h3>
                <StepperInput
                  value={stepperValue}
                  onChange={handleStepperChange}
                  min={0}
                  max={99}
                  step={1}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-gray-700">Disabled</h3>
                <StepperInput value={1} disabled />
              </div>
            </div>
          </div>

          {/* Tree Select Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tree Select</h2>
            <div className="pb-8">
              <TreeSelect
                value={treeValue}
                onChange={handleTreeChange}
                items={treeItems}
                defaultOpen
                defaultExpandedIds={[ 'item-1' ]}
              />
            </div>
          </div>

          {/* Global Searchbar Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Global Searchbar</h2>
            <div className="pb-8">
              <GlobalSearchBar
                value={searchValue}
                onChange={handleSearchChange}
                onClear={handleSearchClear}
                placeholder="Search here"
              />
            </div>
          </div>

          {/* Segment Control Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Segment Control</h2>
            <div className="space-y-8 pb-8">
              <div className="space-y-3">
                <h3 className="text-base font-medium text-gray-700">Active</h3>
                <SegmentControl
                  value={segmentValues.active}
                  onChange={handleSegmentChange('active')}
                  status="active"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-medium text-gray-700">Hover</h3>
                <SegmentControl
                  value={segmentValues.hover}
                  onChange={handleSegmentChange('hover')}
                  status="hover"
                  hoveredValue="week"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-medium text-gray-700">Disable</h3>
                <SegmentControl
                  value={segmentValues.disabled}
                  status="disabled"
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Switch Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Switch</h2>
            <div className="space-y-8 pb-8">
              <div>
                <h3 className="text-base font-medium text-gray-700 mb-3">Standard</h3>
                <div className="flex flex-wrap items-center gap-8">
                  <Switch
                    checked={switchValues.standardDefault}
                    onChange={handleSwitchChange('standardDefault')}
                    status="default"
                    size="standard"
                    ariaLabel="Standard default selected"
                  />
                  <Switch
                    checked={switchValues.standardHover}
                    onChange={handleSwitchChange('standardHover')}
                    status="hover"
                    size="standard"
                    ariaLabel="Standard hover selected"
                  />
                  <Switch
                    checked={switchValues.standardFocus}
                    onChange={handleSwitchChange('standardFocus')}
                    status="focus"
                    size="standard"
                    ariaLabel="Standard focus selected"
                  />
                  <Switch
                    checked={switchValues.standardDisabled}
                    status="disabled"
                    size="standard"
                    disabled
                    ariaLabel="Standard disabled selected"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-700 mb-3">Small</h3>
                <div className="flex flex-wrap items-center gap-8">
                  <Switch
                    checked={switchValues.smallDefault}
                    onChange={handleSwitchChange('smallDefault')}
                    status="default"
                    size="small"
                    ariaLabel="Small default selected"
                  />
                  <Switch
                    checked={switchValues.smallHover}
                    onChange={handleSwitchChange('smallHover')}
                    status="hover"
                    size="small"
                    ariaLabel="Small hover selected"
                  />
                  <Switch
                    checked={switchValues.smallFocus}
                    onChange={handleSwitchChange('smallFocus')}
                    status="focus"
                    size="small"
                    ariaLabel="Small focus selected"
                  />
                  <Switch
                    checked={switchValues.smallDisabled}
                    status="disabled"
                    size="small"
                    disabled
                    ariaLabel="Small disabled selected"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* KPI Tile Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">KPI Tiles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              <div className="space-y-2">
                <h3 className="text-base font-medium text-gray-700">With Icon</h3>
                <KPITile title="Pending" value="18" showIcon showSmallIcon />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-gray-700">Without Icon</h3>
                <KPITile title="Pending" value="18" showIcon={false} />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-gray-700">Text Value</h3>
                <KPITile title="Pending" value="Lorem" showIcon={false} />
              </div>
            </div>
          </div>

          {/* Textarea Section */}
          <div className="mb-12 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Textarea Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {textareaVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <Textarea
                    name={`textarea-${variant.key}`}
                    value={values[variant.key]}
                    onChange={handleChange(variant.key)}
                    placeholder={variant.placeholder}
                    variant={variant.key}
                    maxLength={variant.maxLength}
                    disabled={variant.isDisabled}
                    readOnly={variant.isReadonly}
                    error={variant.hasError ? errors[variant.key] : ''}
                    helpText={variant.helperText}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Select Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {selectVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <Select
                    name={`select-${variant.key}`}
                    value={selectValues[variant.key]}
                    onChange={handleSelectChange(variant.key)}
                    placeholder={variant.placeholder}
                    options={mockOptions}
                    variant={variant.key}
                    disabled={variant.isDisabled}
                    readOnly={variant.isReadonly}
                    required={variant.required}
                    error={variant.hasError ? errors.selectError : ''}
                    helpText={variant.helperText}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Input Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Input/URL Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {inputVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <div className="relative">
                    <URLInput
                      name={`input-${variant.key}`}
                      value={inputValues[variant.key]}
                      onChange={handleInputChange(variant.key)}
                      placeholder={variant.placeholder}
                      variant={variant.key}
                      disabled={variant.isDisabled}
                      readOnly={variant.isReadonly}
                      required={variant.required}
                      error={variant.hasError ? errors.selectError : ''}
                      helpText={variant.helperText}
                    />
                    {variant.key === 'variant9' && (
                      <a
                        href="#"
                        className="absolute bottom-[-10] right-4 text-xs font-normal underline text-black"
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '12px',
                          lineHeight: '24px',
                          letterSpacing: '0%',
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Action
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Password Input Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Password Input Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {passwordVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <div className="relative">
                    <PasswordInput
                      name={`password-${variant.key}`}
                      value={passwordValues[variant.key]}
                      onChange={handlePasswordChange(variant.key)}
                      placeholder={variant.placeholder}
                      variant={variant.key}
                      disabled={variant.isDisabled}
                      readOnly={variant.isReadonly}
                      required={variant.required}
                      error={variant.hasError ? errors.passwordError : ''}
                      helpText={variant.helperText}
                    />
                    {variant.key === 'linear' && (
                      <a
                        href="#"
                        className="absolute bottom-[-10] right-4 text-xs font-normal underline text-black"
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '12px',
                          lineHeight: '24px',
                          letterSpacing: '0%',
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Action
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date Input Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Date Input Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {dateVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <DateInput
                    name={`date-${variant.key}`}
                    value={dateValues[variant.key]}
                    onChange={handleDateChange(variant.key)}
                    placeholder={variant.placeholder}
                    variant={variant.key}
                    disabled={variant.isDisabled}
                    readOnly={variant.isReadonly}
                    required={variant.required}
                    error={variant.hasError ? errors.dateError : ''}
                    helpText={variant.helperText}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Copy Input Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Copy Input Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {copyVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <CopyInput
                    name={`copy-${variant.key}`}
                    value={copyValues[variant.key]}
                    onChange={handleCopyChange(variant.key)}
                    placeholder={variant.placeholder}
                    variant={variant.key}
                    disabled={variant.isDisabled}
                    readOnly={variant.isReadonly}
                    required={variant.required}
                    error={variant.hasError ? errors.copyError : ''}
                    helpText={variant.helperText}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Percentage Input Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Percentage Input Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {percentageVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <PercentageInput
                    name={`percentage-${variant.key}`}
                    value={percentageValues[variant.key]}
                    onChange={handlePercentageChange(variant.key)}
                    placeholder={variant.placeholder}
                    variant={variant.key}
                    disabled={variant.isDisabled}
                    readOnly={variant.isReadonly}
                    required={variant.required}
                    error={variant.hasError ? errors.percentageError : ''}
                    helpText={variant.helperText}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Currency Input Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Currency Input Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {currencyVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <CurrencyInput
                    name={`currency-${variant.key}`}
                    value={currencyValues[variant.key]}
                    onChange={handleCurrencyChange(variant.key)}
                    placeholder={variant.placeholder}
                    variant={variant.key}
                    disabled={variant.isDisabled}
                    readOnly={variant.isReadonly}
                    required={variant.required}
                    error={variant.hasError ? errors.currencyError : ''}
                    helpText={variant.helperText}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Basic Input Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Input Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {basicInputVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <Input
                    name={`input-${variant.key}`}
                    value={basicInputValues[variant.key]}
                    onChange={handleBasicInputChange(variant.key)}
                    placeholder={variant.placeholder}
                    variant={variant.key}
                    disabled={variant.isDisabled}
                    readOnly={variant.isReadonly}
                    required={variant.required}
                    error={variant.hasError ? errors.error : ''}
                    helpText={variant.helperText}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Number Input Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Number Input Variants</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
              {numberVariants.map((variant) => (
                <div key={variant.key} className="space-y-2">
                  <h3 className="text-base font-medium text-gray-700">{variant.title}</h3>
                  <NumberInput
                    name={`number-${variant.key}`}
                    value={numberValues[variant.key]}
                    onChange={handleNumberChange(variant.key)}
                    placeholder={variant.placeholder}
                    variant={variant.key}
                    disabled={variant.isDisabled}
                    readOnly={variant.isReadonly}
                    required={variant.required}
                    error={variant.hasError ? errors.numberError : ''}
                    helpText={variant.helperText}
                    min="0"
                    max="1000"
                    step="1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
