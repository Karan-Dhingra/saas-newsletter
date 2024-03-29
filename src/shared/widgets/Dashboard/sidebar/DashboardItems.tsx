"use client"

import { useEffect } from "react"
import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants"
import useRouteChange from "@/shared/hooks/useRouteChange"
import { ICONS } from "@/shared/utils/icons"
import { useClerk } from "@clerk/nextjs"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import SidebarFotterLogo from "./Sidebar.footer.logo"

const DashboardItems = ({bottomContent}:{bottomContent?:boolean}) => {
    const {activeRoute, setActiveRoute} = useRouteChange()
    const {signOut, user} = useClerk()
    const pathname = usePathname()

    const logoutHandler = () => {
        signOut();
        redirect('/sign-in')
    }

    useEffect(() => {
        setActiveRoute(pathname)
    }, [pathname, setActiveRoute])

    console.log(activeRoute)

    return <>
        {!bottomContent ?(
            <>
                {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
                    <Link key={index} href={item.url} className="p-2 py-5 flex items-center">
                        <span className={`text-2xl mr-2 ${item.url === activeRoute && `text-[#463bbd]`}`}>
                            {item.icon}
                        </span>

                        <span className={`text-lg mr-2 ${item.url === activeRoute && `text-[#463bbd]`}`}>
                            {item.title}
                        </span>
                    </Link>
                ))}
            </>
        ) : (
            <>
                {sideBarBottomItems?.map((item: DashboardSideBarTypes, index: number) => {
                    return <Link key={index} className="p-2 py-5 flex items-center" href={item?.url == "/" ? `/subscribe?username=${user?.username}` : item.url
                }>
                    <span className={`text-2xl mr-2 ${item.url === activeRoute && `text-[#463bbd]`}`}>
                        {item.icon}
                    </span>

                    <span className={`text-lg mr-2 ${item.url === activeRoute && `text-[#463bbd]`}`}>
                        {item.title}
                    </span>
                </Link>
                })}

                {/* sign out */}
        <div className="p-2 py-5 flex items-center cursor-pointer border-b" onClick={logoutHandler}>
            <span className={`text-2xl mr-2`}>
                {ICONS.logOut}
            </span>
            <span className={`text-lg`}>
                Sign Out
            </span>
        </div>

        {/* Footer */}
        <br />
        <br />
        <div className="w-full flex justify-center cursor-pointer">
            <SidebarFotterLogo />
        </div>
        <p className="tex-sm text-center pt-5 pb-10">
        © 2024 Becodemy, Inc. All rights reserved.
        </p>
            </>
        )}
    </>
}

export default DashboardItems