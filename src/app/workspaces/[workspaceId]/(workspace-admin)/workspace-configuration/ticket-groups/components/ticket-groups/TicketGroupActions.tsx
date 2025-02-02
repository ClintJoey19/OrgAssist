"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";

const TicketGroupActions = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm">
          Create <PlusCircle className="h-5 w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>New ticket group</AlertDialogTitle>
          <AlertDialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
            ullam impedit? Dolores et repudiandae placeat eos harum, odit ad.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input placeholder="New ticket group" defaultValue="New group" />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Create</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TicketGroupActions;
