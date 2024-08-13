import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function DropdownFilter({
  align
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn bg-white dark:bg-slate-800 border-slate-500 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 transition-colors duration-150 ease-in-out rounded-full shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Filter</span>
        <wbr />
        <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={`origin-top-right z-10 absolute top-full left-0 right-auto min-w-64 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg overflow-hidden mt-2 ${
          align === 'right' ? 'md:left-auto md:right-0' : 'md:left-0 md:right-auto'
        }`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown} className="p-4">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase mb-3">Filters</div>
          <ul className="space-y-2">
            {['Direct VS Indirect', 'Real Time Value', 'Top Channels', 'Sales VS Refunds', 'Last Order', 'Total Spent'].map((item, index) => (
              <li key={index}>
                <label className="flex items-center hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-xl transition-colors duration-150 ease-in-out cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-indigo-600 rounded-lg border-slate-300 focus:ring-indigo-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 ml-3">{item}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <button className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-150 ease-in-out">
                Clear
              </button>
              <button
                className="btn-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-150 ease-in-out rounded-full px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setDropdownOpen(false)}
                onBlur={() => setDropdownOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownFilter;
