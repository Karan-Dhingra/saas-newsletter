"use server"

import Membership from "@/models/membership.model"
import { connectDb } from "@/shared/libs/db"
import { currentUser } from "@clerk/nextjs"

export const getMemberShip = async() => {
    try {
        await connectDb()

        const user = await currentUser()
        const memberships = await Membership.findOne({
            userId: user?.id
        })
    } catch (error) {
        console.log(error);
        
    }
}