import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { Tags } from "lucide-react";
import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";
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

    events:defineTable({
        title:v.string(),
        description:v.string(),
        slug:v.string(),

        //organizer
        organizerId:v.id("users"), //userId of organizer
        organizerName:v.string(),
        //event details
        category:v.string(),
        tags:v.array(v.string()),

        //date and time
        startDate:v.number(),
        endDate:v.number(),
        timezone:v.string(),
        //locations
        locationType:v.union(v.literal("physical"),v.literal("online")), //online or in-person
        venue:v.optional(v.string()),
        address:v.optional(v.string()),
        city:v.string(),
        state: v.optional(v.string()),
        //capacity
        capacity:v.numbers(),
        ticketType: v.union(v.literal("free"),v.literal("paid")),
        ticketPrice:v.optional(v.number()),
        registrationCount:v.number(),

        //customization
        coverImage:v.optional(v.string()),
        themeColor:v.optional(v.string()),
        //timetamps
        createdAt:v.number(),
        updatedAt:v.number(),


    })
    .index("by_organizer",["organizerId"])
    .index("by_category",["category"])
    .index("by_start_date",["startDate"])
    .index("by_slug",["slug"])
    .searchIndex("search_title",{searchField: "title"}),
    registrations:defineTable({
        eventId:v.id("events"),
        userId:v.id("users"),
        //attendee details
        attendeeName:v.string(),
        attendeeEmail:v.string(),

        //QR code for ticket
        qrCode:v.string(),
        //CheckIn status
        checkedIn:v.boolean(),
        checkInAt:v.optional(v.number()),
        //Status

        status: v.union(v.literal("confirmed"),v.literal("cancelled")),
        registeredAt:v.number(),
    })
    .index("by_event",["eventId"])
    .index("by_user",["userId"])
    .index("by_event_user",["eventId","userId"])
    .index("by_qr_code",["qrCode"]),
    

});
