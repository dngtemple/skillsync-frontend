import React from 'react'
import { UserButton } from '@clerk/clerk-react'
import { Outlet } from 'react-router-dom'
import { useNavigate,Link } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden">
      
      {/* Navbar */}
      <div className="navbar bg-gradient-to-br from-indigo-300 via-blue-200 to-blue-100 min-h-12 shadow-sm px-3">
        <div className="flex-1 flex gap-4 items-center">
          <img src="/logo.png" alt="SkillSync Logo" className="w-9 h-9 rounded-full ml-1"/>
                <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/components">Components</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-sm input-primary w-44 md:w-60"
          />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Content Area with Drawer */}
      {/* changed overflow-hidden -> overflow-visible */}
      <div className="flex flex-1 overflow-visible">
        <div className="drawer drawer-open w-full h-full">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          
          {/* Main content */}
          <div className="drawer-content flex-1 bg-base-100 overflow-auto p-2">
            {/* <div className="skeleton h-32 bg-indigo-200 w-full"></div> */}
             <Outlet/>
          </div>

          {/* Sidebar */}
          {/* added overflow-visible here so tooltips can render outside this box */}
          <div className="drawer-side h-full overflow-visible">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            
            <div className="is-drawer-close:w-14 is-drawer-open:w-64 bg-gradient-to-br from-indigo-300 via-blue-200 to-blue-100 flex flex-col items-start min-h-full">
              
              <ul className="menu w-full grow">
                <li>
                  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="inline-block size-6 my-1.5">
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span className="is-drawer-close:hidden">Home</span>
                  </button>
                </li>
               <li>
                  <button onClick={()=>{
                    navigate('/courses')
                  }} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Courses">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 my-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19.5A2.5 2.5 0 016.5 17H20m0 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2v11m16 0l-3 3m0 0l-3-3m3 3V10" />
                    </svg>
                    <span className="is-drawer-close:hidden">Courses</span>
                  </button>
                </li>
                <li>
                  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Peers">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 my-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-5-4m-5 6H2v-2a4 4 0 014-4m9-4a4 4 0 11-8 0 4 4 0 018 0zm5 4a4 4 0 10-8 0 4 4 0 008 0z" />
                    </svg>
                    <span className="is-drawer-close:hidden">Peers</span>
                  </button>
                </li>
                <li>
                  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Messages">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 my-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.97 9.97 0 01-4.9-1.267L3 20l1.267-4.9A9.97 9.97 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="is-drawer-close:hidden">Messages</span>
                  </button>
                </li>
                <li>
                  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Progress">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 my-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20V10m6 10V4m-12 16v-6" />
                    </svg>
                    <span className="is-drawer-close:hidden">Progress</span>
                  </button>
                </li>
                {/* More list items here... */}
              </ul>

              {/* Toggle button */}
              <div className="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Open">
                <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-y-180">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="inline-block size-6 my-1.5">
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M9 4v16"></path>
                    <path d="M14 10l2 2l-2 2"></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
