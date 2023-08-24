"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { AccountForm } from "./auth/account-form";
import { useState } from "react";

interface ModalProps {
  children?: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="flex justify-center items-center">
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader onClick={() => setOpen(false)}></DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
