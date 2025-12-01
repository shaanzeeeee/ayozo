import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
    //Users table
    users:defineTable({
        name:v.string(),
        tokenIdentifier:v.string(), //clerk token identifier
        email:v.string(),
        imageUrl:v.optional(v.string()),


        //Onboarding fields
        hasCompletedOnboarding:v.boolean(),
        location:v.optional(
            v.object({
                city:v.string(),
                state:v.optional(v.string()),
                country:v.string(),
            }
        ),
    ),
    interests:v.optional(v.array(v.string())), //Min 3 interests
    //organizer tracking
    freeEventsCreated:v.number(), //1 free event allowed


    //tracking fields
    createdAt:v.number(), 
    updatedAt:v.number(),
    }).index("by_token",["tokenIdentifier"]),
});
