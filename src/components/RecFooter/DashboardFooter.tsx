import React from 'react'
import home from '../../pages/Home/Home'

export default function DashboardFooter(props : any) {
  const style = {
    width: props.check? `calc(100vw - 60px - 4rem)`:`calc(100vw - 220px - 4rem)`,
  };
  return (
    <>
      <footer className="bg-white pb-1 fixed bottom-0 flex justify-between ml-[2rem]" style={style} >
        <div className="">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline ml-1" >Group 2</a>
          </span>
        </div>
        <div className=''>
          <ul className="flex items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Support</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
