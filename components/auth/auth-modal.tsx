"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { AccountForm } from "./account-form";
import { useState } from "react";

interface ModalProps {
  children?: React.ReactNode;
}

export const AuthModal = ({ children }: ModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="flex justify-center items-center">
        <Button variant="outline">Open Modal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader onClick={() => setOpen(false)}></DialogHeader>
        <AccountForm />
      </DialogContent>
    </Dialog>
  );
};
