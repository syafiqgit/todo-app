import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { PlusIcon } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface Props {
  addTodo: (todo: string, description: string) => void;
}

export default function AddTodo(props: Props) {
  const { addTodo } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    addTodo(title, description);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <PlusIcon
          className="mx-auto rounded-full bg-blue-600 hover:bg-blue-700 p-2"
          size={70}
          color="white"
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex justify-center items-center bg-blue-600 p-3 rounded-lg">
          <p className="font-semibold text-xl text-white">Create new task</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label className="text-lg">Title</Label>
            <Input
              type="text"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Title task"
              className="text-lg font-semibold placeholder:text-base placeholder:font-normal shadow"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-lg">Description</Label>
            <Textarea
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description task"
              className="h-96 shadow-md"
            />
          </div>
          <div className="flex items-center gap-3">
            <AlertDialogCancel className="bg-red-600 hover:bg-red-700 text-white hover:text-white transition-all">Cancel</AlertDialogCancel>
            <AlertDialogAction
              type="submit"
              disabled={title.length < 1 && description.length < 1}
              className="bg-blue-600 hover:bg-blue-700 transition-all"
            >
              Add task
            </AlertDialogAction>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
