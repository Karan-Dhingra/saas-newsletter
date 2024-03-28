"use client"

import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants"
import useRouteChange from "@/shared/hooks/useRouteChange"
import { ICONS } from "@/shared/utils/icons"
import { useClerk } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from "next/navigation"

const DashboardItems = ({bottomContent}:{bottomContent?:boolean}) => {
    const {activeRoute, setActiveRoute} = useRouteChange()
    const {signOut, user} = useClerk()
    const pathname = usePathname()

    return <>
        {!bottomContent ?(
            <>
                {sideBarItems.map((item: DashboardSideBarTypes, index: number) => {
                    <Link key={index} href={item.url} className="p-2 py-5 flex items-center">
                        <span className={`text-3xl mr-2 ${item.url === activeRoute} && text-[#463bbd]`}>
                            {item.icon}
                        </span>

                        <span className={`text-xl mr-2 ${item.url === activeRoute} && text-[#463bbd]`}>
                            {item.title}
                        </span>
                    </Link>
                })}
            </>
        ) : (
            <>
                {sideBarBottomItems?.map((item: DashboardSideBarTypes, index: number) => {
                    <Link key={index} className="p-2 py-5 flex items-center" href={item?.url == "/" ? `/subscribe?username=${user?.username}` : item.url
                }>
                    <span className={`text-3xl mr-2 ${item.url === activeRoute} && text-[#463bbd]`}>
                        {item.icon}
                    </span>

                    <span className={`text-xl mr-2 ${item.url === activeRoute} && text-[#463bbd]`}>
                        {item.title}
                    </span>
                </Link>
                })}
            </>
        )}

        {/* sign out */}
        <div className="p-2 py-5 flex items-center cursor-pointer border-b">
            <span className={`text-3xl mr-2`}>
                {ICONS.logOut}
            </span>
            <span className={`text-xl`}>
                Sign Out
            </span>
        </div>
    </>
}

export default DashboardItems