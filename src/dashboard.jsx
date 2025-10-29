import React from "react";
import { UserButton } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IconNotification, IconProgress } from "@tabler/icons-react";
import { CornerDownLeft, Group, HomeIcon, MessageCircle, PersonStanding } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden">
      {/* Navbar */}
      <div className="navbar bg-gradient-to-br from-indigo-300 via-blue-200 to-blue-100 min-h-12 shadow-sm px-3">
        <div className="flex-1 flex gap-4 items-center">
          <img
            src="/logo.png"
            alt="SkillSync Logo"
            className="w-9 h-9 rounded-full ml-1"
          />
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
            <Outlet />
          </div>

          {/* Sidebar */}
          {/* added overflow-visible here so tooltips can render outside this box */}
          <div className="drawer-side h-full overflow-visible">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <div className="is-drawer-close:w-14 is-drawer-open:w-64 bg-gradient-to-br from-indigo-300 via-blue-200 to-blue-100 flex flex-col items-start min-h-full">
              <ul className="menu w-full grow">
                <li>
                  <button onClick={()=>{
                    navigate("/home")
                  }}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Home"
                  >
                    <HomeIcon></HomeIcon>
                    <span className="is-drawer-close:hidden">Home</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/courses");
                    }}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Courses"
                  >
                    <CornerDownLeft></CornerDownLeft>
                    <span className="is-drawer-close:hidden">Courses</span>
                  </button>
                </li>
                <li>
                  <button onClick={()=>{
                    navigate("/peers")
                  }}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Peers"
                  >
                    <PersonStanding></PersonStanding>
                    <span className="is-drawer-close:hidden">Peers</span>
                  </button>
                </li>
                <li>
                  <button onClick={()=>{
                    navigate("/groups")
                  }}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Groups"
                  >
                    <Group></Group>
                    <span className="is-drawer-close:hidden">Groups</span>
                  </button>

                </li>
                <li>
                  <button onClick={()=>{
                    navigate("/messages")
                  }}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Messages"
                  >
                    <MessageCircle></MessageCircle>
                    <span className="is-drawer-close:hidden">Messages</span>
                  </button>
                </li>
                <li>
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Progress"
                  >
                    <IconProgress></IconProgress>
                    <span className="is-drawer-close:hidden">Progress</span>
                  </button>
                </li>
                <li>
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="notifications"
                  >
                    <IconNotification></IconNotification>
                    <span className="is-drawer-close:hidden">Notifications</span>
                  </button>
                </li>
                {/* More list items here... */}
              </ul>

              {/* Toggle button */}
              <div
                className="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Open"
              >
                <label
                  htmlFor="my-drawer-4"
                  className="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-y-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="inline-block size-6 my-1.5"
                  >
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
  );
}
