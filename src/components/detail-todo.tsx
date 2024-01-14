import { TodoType } from "@/App";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface Props {
  data: TodoType;
}

export default function DetailTodo(props: Props) {
  const { data } = props;
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <p
            className={`font-semibold text-lg ${
              data.completed && "line-through text-muted-foreground"
            }`}
          >
            {data.title}
          </p>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div>
            <Label className="text-lg">Title</Label>
            <Input type="text" value={data.description} readOnly />
          </div>
          <div>
            <Label className="text-lg">Description</Label>
            <Textarea className="h-96" value={data.description} readOnly />
          </div>
          <AlertDialogCancel>Back</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
