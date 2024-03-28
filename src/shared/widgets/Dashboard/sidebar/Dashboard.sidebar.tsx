import { ICONS } from "@/shared/utils/icons"
import { useUser } from "@clerk/nextjs"
import DashboardItems from "./DashboardItems"

const DashboardSidebar = () => {
    const {user} = useUser()

    return (
        <div className="p-2">
            <div className="p-2 flex items-center bg-[#f5f5f5f5] rounded">
                <span className="text-2xl">{ICONS.home}</span>
                <h5 className="pl-2 pt-1 capitalize font-medium">{user?.username} Newsletter</h5>
            </div>

            <div>
                <DashboardItems />
            </div>
        </div>
    )
}

export default DashboardSidebar