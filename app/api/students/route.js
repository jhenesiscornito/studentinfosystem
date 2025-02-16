import { connectMongoDB } from "@/lib/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { studentname, department, userId } = await request.json(); // Include userId
        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        await connectMongoDB();
        const student = await Student.create({ studentname, department, userId });

        return NextResponse.json({ message: "Student created", student }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Error creating student" }, { status: 500 });
    }
}

export async function GET() {
    await connectMongoDB();
    const students = await Student.find();
    return NextResponse.json({ students });
}