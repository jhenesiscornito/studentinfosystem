import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        studentname: { 
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }  
);

const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;