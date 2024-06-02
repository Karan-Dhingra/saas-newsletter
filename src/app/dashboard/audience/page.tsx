import SubscribersData from "@/shared/components/dashboard/subscribers.data"

const Page = () => {
    return(
        <div className="w-full p-5 h-screen overflow-hidden">
            <h1 className="text-2xl font-medium">
                Subscribers
            </h1>

            <p className="pt-1 text-lg">View and manage your Subscriptions.</p>

            <SubscribersData />
        </div>
    )
}

export default Page