import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        userName: v.string(),
        userEmail: v.string(),
        imageUrl: v.string()
    }),
    pdfFiles: defineTable({
        fileId: v.string(),
        storageId: v.string(),
        fileName: v.string(),
        fileUrl:v.string(),
        createdBy: v.string()
    })
})