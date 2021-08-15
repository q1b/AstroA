import { Menu, Transition } from '@headlessui/react'
import { Fragment,} from 'react'
import { PaperClipIcon as PaperClipSolidIcon, UserCircleIcon as SolidUserCircleIcon, PencilAltIcon as PencilAltSolidIcon, PaperAirplaneIcon as PaperAirplaneSolidIcon } from '@heroicons/react/solid';
import {PaperClipIcon as PaperClipOutlineIcon , UserCircleIcon as OutlineUserCircleIcon, PencilAltIcon as OutlinePencilAltIcon, PaperAirplaneIcon as PaperAirplaneOutlineIcon } from '@heroicons/react/outline';

export default function Example() {
  let items = [
     {
        name: 'Portfolio',
        activeIcon:SolidUserCircleIcon,
        inactiveIcon:OutlineUserCircleIcon,
     },
     {
        name:'Blog',
        activeIcon:PaperClipSolidIcon,
        inactiveIcon:PaperClipOutlineIcon,
     },
     {
        name: 'My Art',
        activeIcon:PencilAltSolidIcon,
        inactiveIcon:OutlinePencilAltIcon
     },
     {
        name: 'Get in touch',
        activeIcon:PaperAirplaneSolidIcon,
        inactiveIcon:PaperAirplaneOutlineIcon,
     },
  ];
  return (
    <div className="relative z-50">
      <Menu as="div" className="relative inline-block text-left" >
      {({ open }) => (
        <Fragment>
        <Menu.Button className={`
              ${open ? 'shadow-btn-blueGray text-blueGray-900 ring-opacity-50':' hover:ring-opacity-80 ring-opacity-100'}
              btn
              block
              ring-indigo-500
              !p-1
              hover:shadow-btn-blueGray
						  focus:text-blueGray-900
              group
      `}>
          <svg
						xmlns="http://www.w3.org/2000/svg"
                        className={`
                            ${open ? 'text-indigo-600' :'text-white'}
                            h-6
                            w-6
                            group-hover:text-indigo-900
                            transition-colors
                            duration-300
                        `}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
          </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition duration-200 ease-out"
          enterFrom="translate-y-1 opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="translate-y-1 opacity-0"
        >
          <Menu.Items as="div" className="absolute right-0">
            <article className="backdrop-blur-sm flex items-center justify-center">
            <div
                                className="
                                    flex flex-col
                                    gap-y-4
                                    items-center
                                    w-48
                                    p-4
                                    rounded-2xl
                                    ring-1 ring-blueGray-800
                                "
                            >
              {items.map((item,index)=>{
                return (
                <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-white'
                    } z-50 tab-hightlight-none group flex rounded-md transition-colors items-center w-full px-2 py-2 text-sm`}
                    >
                    {active ? (
                      <item.activeIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                      />
                      ) : (
                        <item.inactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                        />
                    )}
                    {item.name}
                  </button>
                )}
              </Menu.Item>
              )})}
              </div>
            </article>
          </Menu.Items>
        </Transition>
        </Fragment>
      )}
      </Menu>
    </div>
  )
}
