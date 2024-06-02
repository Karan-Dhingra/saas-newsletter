"use server";

import Email from "@/models/email.model"
import { connectDb } from "@/shared/libs/db"

export const saveEmail = async ({title, content, newsLetterOwnerId}: {title: string, content: string, newsLetterOwnerId: string}) => {
    let a = 0;
    try {
        a++ //1
      await connectDb();
        a++ // 2

      const email = await Email.findOne({
        title,
        newsLetterOwnerId,
      });

      a++ //3
  
      if (email) {
        await Email.findByIdAndUpdate(email._id, {
          content,
        });

        a = 10
    
        return JSON.stringify({ message: "Email updated successfully!" })
      } else {
        await Email.create({
          title,
          content,
          newsLetterOwnerId,
        });

        a = 100

        return JSON.stringify({ message: "Email saved successfully!" });
      }
    } catch (error) {
      console.log(error);
      return JSON.stringify({error: error, a})
    }
  };