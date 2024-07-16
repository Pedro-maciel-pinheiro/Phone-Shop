// "use client"
// import { UserButton } from "@clerk/nextjs";
// import { useAuth } from "@clerk/nextjs";
// import Link from "next/link";
// import React from "react";

// function Clerk() {
//   const {  userId } = useAuth();

 

//   return (
//     <div className="flex gap-3 ">
//       {userId ? (
//         <div>
//           <UserButton afterSignOutUrl="/"/>
//         </div>
//       ) : (
//         <div className="flex gap-4">
//           <Link href={"/sign-up"}>Sign up</Link>
//           <Link href={"/sign-in"}>Sign in</Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Clerk;
