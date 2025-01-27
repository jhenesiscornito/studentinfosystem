"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const validateForm = () => {
        if (!email || !password) {
            setError("All fields are required!");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email!");
            return false;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return false;
        }

        setError("");
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect:false,
            });

            if (res.error) {
                setError("Invalid Credentials!");
                setLoading(false);
                return;
            }

            router.replace("/dashboard");
        } catch (error) {
            console.log(error);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Student Information System</h1>
                <h2>Log in to your account</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
                    <input className="w-full p-2 border rounded-md" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" value={email} required/>
                    <input className="w-full p-2 border rounded-md" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} required/>
                    <button type="submit" className={`bg-green-700 text-white font-bold cursor-pointer px-6 py-2 rounded-md 
                        ${ loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={loading}> {loading ? "Logging in..." : "Login"} </button>
                   
                    {error && (
                        <div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <Link className="text-sm mt-3 text-right" href={"/register"}>
                        Don't have an account? <span className="underline">Sign up here</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}