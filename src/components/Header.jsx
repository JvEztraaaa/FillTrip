import { useDarkMode } from '../context/DarkModeContext';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const getBackgroundColor = () => isDarkMode ? '#102030' : '#F5F5EB';
  const getTextColor = () => isDarkMode ? '#F5F5EB' : '#102030';
  const getBrandColor = () => isDarkMode ? '#80E0D2' : '#208080';
  const getBorderColor = () => isDarkMode ? '#80E0D2' : '#102030';
  const getButtonBgColor = () => isDarkMode ? '#80E0D2' : '#208080';
  const getButtonTextColor = () => isDarkMode ? '#102030' : '#F5F5EB';
  const getHoverColor = () => isDarkMode ? '#208080' : '#80E0D2';

  return (
    <nav className="transition-colors duration-300" style={{backgroundColor: getBackgroundColor()}}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap transition-colors duration-300" style={{color: getBrandColor()}}>FillTrip</span>
        </a>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg transition-colors duration-200 mr-2"
            style={{color: getTextColor()}}
            onMouseEnter={(e) => e.target.style.backgroundColor = getHoverColor()}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              // Sun icon for dark mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for light mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button type="button" className="font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-200" style={{backgroundColor: getButtonBgColor(), color: getButtonTextColor()}} onMouseEnter={(e) => e.target.style.backgroundColor = getHoverColor()} onMouseLeave={(e) => e.target.style.backgroundColor = getButtonBgColor()}>
            Log In
          </button>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden transition-colors duration-200" style={{color: getTextColor()}} onMouseEnter={(e) => e.target.style.backgroundColor = getHoverColor()} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 transition-colors duration-300" style={{backgroundColor: getBackgroundColor()}}>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 rounded-sm transition-colors duration-200" style={{color: getTextColor()}} onMouseEnter={(e) => e.target.style.color = getBrandColor()} onMouseLeave={(e) => e.target.style.color = getTextColor()}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 rounded-sm transition-colors duration-200" style={{color: getTextColor()}} onMouseEnter={(e) => e.target.style.color = getBrandColor()} onMouseLeave={(e) => e.target.style.color = getTextColor()}>
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 rounded-sm transition-colors duration-200" style={{color: getTextColor()}} onMouseEnter={(e) => e.target.style.color = getBrandColor()} onMouseLeave={(e) => e.target.style.color = getTextColor()}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
