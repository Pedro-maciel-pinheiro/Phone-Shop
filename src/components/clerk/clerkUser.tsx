import { auth, currentUser } from "@clerk/nextjs/server";

export default async function ClerkUser() {
  const { userId } = auth();

  if (!userId) {
    return (
      <div className="flex items-center justify-center font-semibold text-3xl">
        Unauthorized.. Please login in
      </div>
    );
  }

  const user = await currentUser();

  return (
    <div className="h-16 w-full bg-slate-100">
      <div className="w-96 h-36  flex items-center">
        <p className="ml-4">
          Hello: {user?.firstName} {user?.lastName}
        </p>
      </div>
    </div>
  );
}
