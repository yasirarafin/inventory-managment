import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function SignInPage() {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
           <div><SignIn />
           <Link href="/" className="text-blue-500 hover:underline mt-4 block text-center">Back to Home</Link>
           </div>
        </div>


    )
    

}