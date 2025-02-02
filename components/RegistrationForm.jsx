"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const validateForm = () => {
        if (!name || !email || !password) {
            setError("All fields are necessary!");
            return false; 
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email!");
            return false;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters long and include a letter, number, and special character.");
            return false;
        }

        setError("");
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {
            const resUserExist = await fetch('api/userExist', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExist.json();

            if (user) {
                setError("User already exists!");
                setLoading(false);
                return;
            }

            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify ({
                    name, 
                    email, 
                    password,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            } else {
                console.log("User registration failed");
            }
        } catch (error) {
            setError("Error during registration. Please try again", error);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Student Information System</h1>
                <h2>Create an Admin Account</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
                    <input className="w-full p-2 border rounded-md" onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name"/>
                    <input className="w-full p-2 border rounded-md" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                    <input className="w-full p-2 border rounded-md" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    <button type="submit" className={`bg-green-700 text-white font-bold cursor-pointer px-6 py-2 rounded-md 
                        ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={loading}> {loading ? "Creating Account..." : "Create Account"} </button>

                    { error && (
                        <div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <Link className="text-sm mt-3 text-right" href={"/"}>
                        Already have an account? <span className="underline">Login here</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}