import { Header } from "../../components/header";
import { TaskInput } from "../../components/taskinput";
import { Task } from "../../components/task";
import { Footer } from "../../components/footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="sleep" />
      </div>

      {/* //footer section */}
      <Footer year="2023" fullname="Panithan Boonmapi" studentId="650610782" />
    </div>
  );
}
