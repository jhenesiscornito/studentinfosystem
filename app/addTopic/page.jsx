"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UserInfo from "@/components/UserInfo";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const router = useRouter();

  const validateTitle = (value) => /^[a-zA-Z0-9 ]+$/.test(value);
  const validateContact = (value) => /^[0-9]+$/.test(value);
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !year || !email || !contact) {
      alert("All fields are required.");
      return;
    }

    if (!validateTitle(title)) {
      alert("Name can only contain letters and numbers.");
      return;
    }
    if (!validateContact(contact)) {
      alert("Contact number can only contain numbers.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email format.");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, year, email, contact }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <UserInfo/>
      <nav className="flex justify-between items-center bg-green-600 px-8 py-3">
          <Link className="text-white font-bold" href={"/"}>
            Student Information System
          </Link>
      </nav>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-500 px-8 py-2 w-auto"
          type="text"
          placeholder="Student Name"
        />

        <select
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-500 px-8 py-2 w-auto"
        >
          <option value="" disabled>
            Select Department
          </option>
          <option value="BSIT">BSIT</option>
          <option value="BSED English">BSED English</option>
          <option value="BSED Math">BSED Math</option>
        </select>

        <select
          onChange={(e) => setYear(e.target.value)}
          value={year}
          className="border border-slate-500 px-8 py-2 w-auto"
        >
          <option value="" disabled>
            Select Year Level
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border border-slate-500 px-8 py-2 w-auto"
          type="text"
          placeholder="Student Email Address"
        />

        <input
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          className="border border-slate-500 px-8 py-2 w-auto"
          type="text"
          placeholder="Contact"
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fill"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
