"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { STRING_LITERAL_DROP_BUNDLE } from "next/dist/shared/lib/constants";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      {session ? (
        <Button
          className="flex flex-row justify-center items-center gap-2 py-8 px-10 text-xl bg-red-600 rounded-md cursor-pointer hover:bg-red-600/60 transition duration-200"
          onClick={() => signOut()}
        >
          Sair
        </Button>
      ) : (
        <>
          <Link
            href={"/login"}
            className="flex flex-row justify-center items-center gap-2 py-4 px-10 text-xl bg-slate-600 rounded-md cursor-pointer hover:bg-white/10 transition duration-200"
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
}
