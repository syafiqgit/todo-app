import { EditIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Label } from "./ui/label";
import { useState } from "react";
import { TodoType } from "@/App";

interface Props {
  editTodo: (id: string, title: string, description: string) => void;
  data: TodoType;
}

export default function EditTodo(props: Props) {
  const { editTodo, data } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    editTodo(data.id, title, description);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <EditIcon
          className={`rounded-full bg-blue-600 hover:bg-blue-700 p-2 ${
            data.completed ? "hidden" : ""
          }`}
          size={45}
          color="white"
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex justify-center items-center bg-blue-600 p-3 rounded-lg">
          <p className="font-semibold text-xl text-white">Edit task</p>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <Label className="text-lg">Title</Label>
            <Input
              type="text"
              defaultValue={data.title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Type description"
              className="text-lg font-semibold placeholder:text-base placeholder:font-normal shadow"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-lg">Description</Label>
            <Textarea
              defaultValue={data.description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Type description"
              className="h-96 shadow-md"
            />
          </div>
          <div className="flex items-center gap-3">
            <AlertDialogCancel className="bg-red-600 hover:bg-red-700 text-white hover:text-white transition-all">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-all"
            >
              Save
            </AlertDialogAction>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
