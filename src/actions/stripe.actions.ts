import axios from "@/axios";

export const addStripe = async () => {
    try {
        const { status, data } = await axios.post('/stripe/add', {});

        if(status === 200) {
            return data;
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
}

export const stripeSubscribe = async ({ price, userId }: { price: string, userId: string }) => {
    try {
        const { status, data } = await axios.post('/stripe/subscribe', { price, userId });

        if(status === 200) {
            return data.url;
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
}