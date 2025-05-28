import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const AddFileEntryToDb = mutation({
  args:{
    fileId: v.string(),
    storageId: v.string(),
    fileName: v.string(),
    fileUrl:v.string(),
    createdBy: v.string()
  },
  handler:async(ctx,args)=>{
    const result = ctx.db.insert("pdfFiles",{
      fileId:args.fileId,
      fileName: args.fileName,
      fileUrl:args.fileUrl,
      storageId: args.storageId,
      createdBy: args.createdBy
    })
    return "inserted "
  }
})

export const getFileUrl = mutation({
  args:{
    storageId:v.string()
  },
  handler:async(ctx,args)=>{
    const url = await ctx.storage.getUrl(args.storageId)
    return url
  }
})