import mongoose from "mongoose";
import { connect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect("mongodb+srv://21051167:sashreek12321@cluster0.qrmwr45.mongodb.net/");
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

export type User = mongoose.InferSchemaType<typeof userSchema>
export const User = mongoose.model('User', userSchema)

connectToDatabase();
