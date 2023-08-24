import { Metadata } from "next";

import { AccountForm } from "@/components/auth/account-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication page.",
};

export default function AuthenticationPage() {
  return (
    <div className="container min-h-screen flex flex-col justify-center items-center w-[800px]">
      <AccountForm />
    </div>
  );
}
