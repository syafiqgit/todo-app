import { TodoType } from "@/App";
import { Trash2Icon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import EditTodo from "./edit-todo";
import DetailTodo from "./detail-todo";

interface Props {
  data: TodoType;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, title: string, description: string) => void;
}

export default function TodoList(props: Props) {
  const { data, toggleComplete, deleteTodo, editTodo } = props;
  return (
    <div className="flex justify-between items-center p-3 border shadow hover:bg-blue-100">
      <div className="flex items-center gap-2">
        <Checkbox
          onClick={() => toggleComplete(data.id)}
          className="size-6 bg-blue-600 hover:bg-blue-700 border-none"
        />
        <DetailTodo data={data} />
      </div>
      <div className="flex items-center gap-3">
        <EditTodo editTodo={editTodo} data={data} />
        <Trash2Icon
          className={`rounded-full p-2 bg-blue-600 hover:bg-blue-700 ${
            data.completed ? "hidden" : ""
          }`}
          size={45}
          onClick={() => deleteTodo(data.id)}
          color="white"
        />
      </div>
    </div>
  );
}
