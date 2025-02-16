import Navbar from "@/components/Navbar";

export default function AddStudent() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <Navbar/>
            
            <form className="flex flex-col gap-3 mt-8">
                <input className="border border-slate-500 px-8 py-2 w-auto" type="text" placeholder="Student name"/>
                <input className="border border-slate-500 px-8 py-2 w-auto" type="text" placeholder="Student Info"/>
                <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Student</button>
            </form>
        </div>
    );
}