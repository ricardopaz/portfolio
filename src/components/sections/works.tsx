'use client';

import SectionContainer from '../section-container'

import { works } from '../../utils/works'
import { KEY_CODES } from '../../utils/constants'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const cursorPosition = { 
  0: 'translate-y-[0]', 
  1: 'translate-y-[42px]', 
  2: 'translate-y-[84px]', 
  3: 'translate-y-[126px]'
}

const Works = () => {
  const tabs = useRef([]);
  const [tabFocus, setTabFocus] = useState(null);
  const [activeTabId, setActiveTabId] = useState(0);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };
  
  return (
    <SectionContainer number="02" title="Onde trabalhei">
      <div className="grid grid-cols-[1fr,4fr] w-full mt-12">
        <div className="grid col-span-1 relative auto-rows-max" onKeyDown={e => onKeyDown(e)}>
          {works.map((work, index) => {
            const active = activeTabId === index

            return (
              <button 
                role="tab"
                key={`work-btn-${index}`}
                tabIndex={active ? 0 : -1}
                aria-controls={`work-btn-${index}`}
                aria-selected={active ? true : false}
                onClick={() => setActiveTabId(index)}
                ref={el => (tabs.current[index] = el)}
                className={`flex w-[140px] h-[42px] px-4 items-center text-xs font-mono border-l-[2px] border-lightestNavy duration-200 hover:bg-lightNavy hover:text-green ${active ? 'text-green' : 'text-lightSlate'} focus-visible:bg-lightNavy focus-visible:text-green focus-visible:ring-0 focus-visible:outline-none`}
              >
                {work.title}
              </button>
            )
          })}
          <div className={`absolute w-[2px] h-[42px] bg-green z-10 rounded-lg duration-200 ${cursorPosition[activeTabId]}`} />
        </div>

        <div>
          {works.map((work, index) => {
            const active = activeTabId !== index

            return (
              <CSSTransition key={`work-content-${index}`} in={activeTabId === index} timeout={250} classNames="fade">
                <div 
                  role="tabpanel"
                  aria-hidden={active}
                  tabIndex={active ? 0 : -1}
                  hidden={activeTabId !== index}
                  aria-labelledby={`work-content-${index}`}
                >
                  <div className="flex flex-col gap-2 mb-8">
                    <h2 className="flex items-center text-xl text-lightestSlate">
                      {work.role} 
                      <a 
                        href={work.href} 
                        rel="noreferrer" 
                        target="_blank"
                        className="link ml-2"
                      >
                        @ {work.title}
                      </a>
                    </h2>
                    <p className="text-lightSlate text-sm">{work.startAt} - {work.endAt}</p>
                  </div>

                  <ul className="text-lightSlate text-[18px]">
                    {work.attributes.map((attr, index) => (
                      <li 
                        key={`attr-${work.title.toLowerCase()}-${index}`}
                        className="relative pl-[30px] mb-[10px] text-sm before:content-['▹'] before:absolute before:left-0 before:text-green"
                      >
                        {attr}
                      </li>
                    ))}
                  </ul>
                </div>
              </CSSTransition>
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}

export default Works
