import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
    args:{
        userName: v.string(),
        userEmail: v.string(),
        imageUrl: v.string()
    },
    handler:async (ctx,args)=>{
        //if user exists already
        const user = await ctx.db.query("users")
        .filter((q)=>q.eq(q.field("userEmail"),args.userEmail))
        .collect()

        //if NOT, then create new user
        if(user?.length==0){
            await ctx.db.insert("users",{
                userEmail: args.userEmail,
                userName:args.userName,
                imageUrl:args.imageUrl
            })

            return("New User interted")
        }

        return "User already exists"
    }
})