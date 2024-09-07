"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import {NextUIProvider} from "@nextui-org/react"
import { usePathname } from "next/navigation";
import DashboardSidebar from './../widgets/Dashboard/sidebar/Dashboard.sidebar';
import { Toaster } from "react-hot-toast";
import { addStripe } from "@/actions/stripe.actions";

interface ProviderProps {
    children: React.ReactNode
}

export default function Providers({children}: ProviderProps){
    const pathname = usePathname()
    const {isLoaded, user} = useUser()
    const { getToken } = useAuth();

    const isStripeCustomerIdHas = async() => {
        await addStripe()
    }

    const setToken = async () => {
        getToken().then((token: any) => {
            localStorage.setItem('TOKEN', JSON.stringify(token))
        })
    };


    if(!isLoaded){
        return null
    }else{
        if(user){
            isStripeCustomerIdHas()
            setToken()
        }
    }

    return(
        <NextUIProvider>
            {
                pathname !== '/dashboard/new-email'&&
                pathname !== '/' &&
                pathname !== '/sign-up' &&
                pathname !== '/success' &&
                pathname !== '/subscribe' &&
                pathname !== '/sign-in' ?
                    <div className="w-full flex">
                        <div className="w-[290px] h-screen overflow-y-scroll">
                            <DashboardSidebar />
                        </div>
                        {children}
                    </div>
                :
                    <>{children}</>
            }

            <Toaster position="top-center" reverseOrder={false} />
        </NextUIProvider>
    )
}