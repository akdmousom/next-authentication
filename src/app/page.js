import { redirect } from "next/navigation";
import { auth } from "./api/auth";
import Link from "next/link";

export default async function Home() {

  const session = await auth();

  if (!session) redirect('/api/auth/signin')

  return (
    <>
      <div className="min-h-screen max-w-screen grid justify-center items-center bg-gray-600">

        <div className="text-center">
          <h1 className="text-3xl text-white font-extrabold text-center">Welcome To The <span className="text-red-600">Next Auth</span> System</h1>
          <p className="py-4 text-2xl text-white font-semibold">With this project you can learn how to implement the next authentication system in next js 14</p>
          <Link href={'/api/auth/signout'}><button className="bg-gray-900 text-white px-4 py-4 rounded-lg hover:bg-red-400 transform duration-300">Sign Out</button></Link>
        </div>




      </div>
    </>
  );
}
