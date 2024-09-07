import { useCallback, useEffect, useState } from 'react'
import { getSubscribers } from '@/actions/user.actions'
import { useClerk } from '@clerk/nextjs'

const useSubscriberData = () => {
    const {user} = useClerk()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const GetSubscribers = useCallback(async() => {
        await getSubscribers({newsLetterOwnerId: user?.id!}).then((res: any) => {
            setData(res)
            setLoading(false)
        }).catch(err => setLoading(false)) 
    }, [user])

    useEffect(() => {
        GetSubscribers()
    }, [GetSubscribers])

    return {data, loading}
}

export default useSubscriberData