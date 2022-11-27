import { FaRobot } from "react-icons/fa";
import { GrManual } from "react-icons/gr";
import { TfiTimer } from "react-icons/tfi";
import { SiAboutdotme } from "react-icons/si";
import ContentMenu from "./components/ContentMenu";

function App() {
  return (
    <div>
      <div className="container h-screen w-96 bg-slate-100 mx-auto mt-5 rounded-xl relative overflow-hidden">
        <div className="h-52 w-full bg-indigo-600 flex items-center justify-center">
          <h2 className="">Apliksi Hitung Target</h2>
        </div>
        <div className="h-screen w-full bg-slate-100 rounded-t-3xl absolute top-[175px]">
        <ContentMenu/>
        </div>
      </div>
    </div>
  );
}

export default App;
