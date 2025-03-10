// import Link from "next/link";
// import RemoveBtn from "./RemoveBtn";
// import { HiPencilAlt } from "react-icons/hi";

// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/topics", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

// export default async function TopicsList() {
//   const { topics } = await getTopics();

//   return (
//     <>
//       {topics.map((t) => (
//         <div
//           key={t._id}
//           className="p-4 border my-3 flex justify-between gap-5 items-start shadow-lg rounded-lg border-t-4 border-green-400"
//         >
//           <div>
//             <h2 className="font-bold text-2xl">{t.title}</h2>
//             <div>Department: {t.description}</div>
//             <div>Year level: {t.year}</div>
//             <div>Email: {t.email}</div>
//             <div>Contact Number: {t.contact}</div>
//           </div>

//           <div className="flex gap-2">
//             <RemoveBtn id={t._id} />
//             <Link href={`/editTopic/${t._id}`}>
//               <HiPencilAlt size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("/api/topics", { cache: "no-store" });

        if (!res.ok) {
          throw new Error("Failed to fetch student information");
        }

        const data = await res.json();
        setTopics(data.topics || []);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTopics();
  }, []);

  if (error) return <p className="text-red-500">Error loading student information: {error}</p>;

  return (
    <>
      {topics.length > 0 ? (
        topics.map((t) => (
          <div
            key={t._id}
            className="p-4 border my-3 flex justify-between gap-5 items-start shadow-lg rounded-lg border-t-4 border-green-400 mt-8"
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>Department: {t.description}</div>
              <div>Year level: {t.year}</div>
              <div>Email: {t.email}</div>
              <div>Contact Number: {t.contact}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-8">No student information available.</p>
      )}
    </>
  );
}