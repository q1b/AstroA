import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
      setIsOpen(true);
  }
  
  return (
    <>
      <div className="">
        <button
         type="submit"
          onClick={openModal}
          className="tab-highlight-none flex group px-2 py-1 text-lg text-left text-white border-2 border-transparent rounded-lg hover:text-blueGray-100 font-jetMono hover:font-semibold  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span className="w-6 h-6 inline-flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-6 opacity-100 group-hover:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                        </svg>
                      </span>
                      CV
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-blueGray-1000 opacity-80" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="
                inline-block w-full max-w-xs xs:max-w-sm mds:max-w-md 
                p-6 my-8 overflow-hidden text-left align-middle
                 bg-blueGray-1000/20 shadow-xl rounded-2xl
                items-center justify-center backdrop-blur-sm border-2 border-blueGray-400
              ">
                <Dialog.Title
                  as="h3"
                  className=" text-xl xs:text-3xl text-white mb-10 font-medium leading-6"
                >
                  Which do you prefer ?
                </Dialog.Title>
                <a href="" className="tab-highlight-none cursor-pointer w-full mb-4 p-3 xs:p-4 text-lg xs:text-2xl bg-blueGray-800 hover:bg-blueGray-700 group rounded-xl focus:outline-none  focus:ring-2  focus:ring-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ring-offset-blueGray-900 focus-visible:ring-opacity-75 inline-block shadow-xl">
                  <span className=" text-blueGray-500 group-hover:text-blueGray-300">
                    Online resume .
                  </span>
                </a>
                <a href="" className="tab-highlight-none cursor-pointer w-full mb-10 p-3 xs:p-4 text-lg xs:text-2xl bg-blueGray-800 hover:bg-blueGray-700 group rounded-xl focus:outline-none  focus:ring-2  focus:ring-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ring-offset-blueGray-900 focus-visible:ring-opacity-75 inline-block shadow-xl">
                  <span className=" text-blueGray-500 group-hover:text-blueGray-300">
                    PDF Formatted Resume .
                  </span>
                </a>
                <div className="">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blueGray-900 bg-blueGray-100 border border-transparent rounded-md hover:bg-blueGray-200 focus:outline-none focus-visible:ring-2 ring-offset-blueGray-1000 focus-visible:ring-offset-2 focus-visible:ring-blueGray-700"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
