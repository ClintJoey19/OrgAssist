import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import WorkspaceItemCard from "./WorkspaceItemCard";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

const CreateWorkspace = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <WorkspaceItemCard>
          <div className="h-full w-full flex flex-col items-center justify-center gap-4">
            <Plus className="text-primary h-16 w-16" />
            <p className="text-xl text-primary font-medium">Create workspace</p>
          </div>
        </WorkspaceItemCard>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create workspace</AlertDialogTitle>
          <Input placeholder="New workspace" defaultValue="New workspace" />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateWorkspace;
