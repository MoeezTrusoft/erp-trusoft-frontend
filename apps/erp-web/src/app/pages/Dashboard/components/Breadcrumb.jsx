import { useNavigate } from 'react-router-dom';

export default function Breadcrumb({ pageTitle = 'Dashboard', breadcrumbItems = ['Home', 'HR', 'Dashboard'] }) {
  const navigate = useNavigate();

  // Map breadcrumb labels to paths
  const pathMap = {
    'Home': '/',
    'HR': '/hr',
    'Dashboard': '/hr/dashboard',
    'Recruitment': '/hr/recruitment',
  };

  const breadcrumbs = breadcrumbItems.map((label, index) => ({
    label,
    path: pathMap[label] || '/',
  }));

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1">
        {breadcrumbs.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <button
              onClick={() => navigate(item.path)}
              className={`transition-colors ${index === breadcrumbs.length - 1
                  ? 'text-[var(--color-primary-darkest)] bg-[var(--color-primary-lightest)] px-1.5 py-[1px] rounded-[2px] text-[14px] leading-none'
                  : 'text-[var(--color-neutral-8)] hover:text-[var(--color-neutral-7)] text-[14px] leading-none'
                }`}
              style={{ fontFamily: 'Poppins' }}
            >
              {item.label}
            </button>
            {index < breadcrumbs.length - 1 && (
              <span className="text-gray-400 text-[10px]">•</span>
            )}
          </div>
        ))}
      </nav>

      {/* Dashboard Title */}
      <h1
        className="text-[24px] font-medium text-[var(--color-primary-darkest)] mt-1.5 leading-none"
        style={{ fontFamily: 'Poppins' }}
      >
        {pageTitle}
      </h1>

      {/* Bottom Border Line */}
      <div className="mt-1 mb-1 border-b border-[var(--color-neutral-6)]"></div>
    </div>
  );
}