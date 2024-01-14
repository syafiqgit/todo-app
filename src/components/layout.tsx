import { ReactNode } from "react";
import Navbar from "./navbar";

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div className="bg-slate-300">
      <div className="md:w-1/2 mx-auto h-screen bg-white flex flex-col">
        <Navbar />
        <div className="overflow-auto flex flex-col grow">{children}</div>
      </div>
    </div>
  );
}
