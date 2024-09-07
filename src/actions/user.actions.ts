import axios from "@/axios";


export const subscribe = async ({ email, username }: { email: string; username: string }) => {
    try {
        const { status, data } = await axios.post('/user/subscribe', { email, username });
        if(status === 200)
            return data?.subscriber;
        throw new Error(data.msg);
    } catch (error) {
        return { error }
    }
};

export const subscribersAnalytics = async () => {
    try {
        const { status, data } = await axios.get('/user/analytics');
        if(status === 200) {
            return data.subscribers
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
};

export const getSubscribers = async ({ newsLetterOwnerId }: { newsLetterOwnerId: string }) => {
    try {
        const { status, data } = await axios.get('/user/subscribers/' + newsLetterOwnerId);
        if(status === 200) {
            return data.subscribers
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
}

export const getMemberShip = async () => {
    try {
        const { status, data } = await axios.get('/user/membership');
        if(status === 200) {
            return data.memberships
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
}

export const manageSubscription = async ({ customerId }: { customerId: string }) => {
    try {
        const { status, data } = await axios.post('/user/manageSubscription', { customerId });
        if(status === 200) {
            return data.url
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
};