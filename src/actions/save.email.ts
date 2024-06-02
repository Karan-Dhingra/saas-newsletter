"use server";

import Email from "@/models/email.model"
import { connectDb } from "@/shared/libs/db"

export const saveEmail = async ({title, content, newsLetterOwnerId}: {title: string, content: string, newsLetterOwnerId: string}) => {
    try {
      await connectDb();

      const email = await Email.findOne({
        title,
        newsLetterOwnerId,
      });

      console.log('email', email);
      
  
      if (email) {
        await Email.findByIdAndUpdate(email._id, {
          content,
        });
    
        return JSON.stringify({ message: "Email updated successfully!" })
      } else {
        await Email.create({
          title,
          content,
          newsLetterOwnerId,
        });
        return JSON.stringify({ message: "Email saved successfully!" });
      }
    } catch (error) {
      console.log(error);
      return JSON.stringify({error: error, a})
    }
  };