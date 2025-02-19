"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UserInfo from "@/components/UserInfo";

export default function EditTopicForm({ id, title, description, year, email, contact }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newYear, setNewYear] = useState(year);
  const [newEmail, setNewEmail] = useState(email);
  const [newContact, setNewContact] = useState(contact);

  const router = useRouter();

  const validateTitle = (value) => /^[a-zA-Z0-9 ]+$/.test(value);
  const validateContact = (value) => /^[0-9]+$/.test(value);
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTitle || !newDescription || !newYear || !newEmail || !newContact) {
      alert("All fields are required.");
      return;
    }

    if (!validateTitle(newTitle)) {
      alert("Name can only contain letters and numbers.");
      return;
    }
    if (!validateContact(newContact)) {
      alert("Contact number can only contain numbers.");
      return;
    }
    if (!validateEmail(newEmail)) {
      alert("Invalid email format.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription, newYear, newEmail, newContact }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
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
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border border-slate-500 px-8 py-2 w-auto"
          type="text"
          placeholder="Student Name"
        />

        <select
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
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
          onChange={(e) => setNewYear(e.target.value)}
          value={newYear}
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
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
          className="border border-slate-500 px-8 py-2 w-auto"
          type="text"
          placeholder="Student Email Address"
        />

        <input
          onChange={(e) => setNewContact(e.target.value)}
          value={newContact}
          className="border border-slate-500 px-8 py-2 w-auto"
          type="text"
          placeholder="Contact"
        />

        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Student Information
        </button>
      </form>
    </div>
  );
}
