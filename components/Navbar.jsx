import Link from "next/link";
import UserInfo from "./UserInfo";
import { HiPlusCircle } from "react-icons/hi";

export default function Navbar() {
  return (
    <div>
      <UserInfo />
      <nav className="flex justify-between items-center bg-green-600 px-8 py-3">
        <Link className="text-white font-bold" href={"/"}>
          Student Information System
        </Link>
        <Link className="bg-white p-2 flex items-center gap-2 rounded-md" href={"/addTopic"}>
          <HiPlusCircle size={20} className="text-green-600" />
          Add Student
        </Link>
      </nav>
    </div>
  );
}
