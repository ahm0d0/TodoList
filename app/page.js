import Image from "next/image";
import Colors from "./components/Colors";
import InputFeild from "./components/InputFeild";
import AddTasks from "./components/AddTasks";

export default function Home() {
  return (
    <>
    <div>
      <Colors/>
      <InputFeild/>   
      <AddTasks/>
    </div>
    </>
  );
}
