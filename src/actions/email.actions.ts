import axios from "@/axios";

export const getEmails = async ({ newsLetterOwnerId }: { newsLetterOwnerId: string }) => {
    try {
        const { status, data } = await axios.get('/email/' + newsLetterOwnerId);
        
        if(status === 200) {
            return data.emails;
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
};

export const GetEmailDetails = async ({ title, newsLetterOwnerId }: { title: string; newsLetterOwnerId: string }) => {
    try {
        const { status, data } = await axios.post('/email/details/' + newsLetterOwnerId, { title });
        
        if(status === 200) {
            return data.email;
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
};

export const saveEmail = async ({ title, content, newsLetterOwnerId }: { title: string, content: string, newsLetterOwnerId: string }) => {
    try {
        const { status, data } = await axios.post('/email/save', { title, newsLetterOwnerId, content });
        
        if(status === 200) {
            return data;
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
};

export const deleteEmail = async ({ emailId }: { emailId: string }) => {
    try {
        const { status, data } = await axios.post('/email/delete', { emailId });
        
        if(status === 200) {
            return data;
        }else{
            throw new Error(data.msg);
        }
    } catch (error) {
        console.log(error);
        return { error }
    }
};