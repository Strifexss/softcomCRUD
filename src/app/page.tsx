import LeftArea from "./componentsPage/LoginScreen/LeftArea";
import RightArea from "./componentsPage/LoginScreen/RIghtArea";

export default function home() {
  return(
    <div className="w-screen h-screen bg-zinc-900 flex justify-around items-center p-16 py-20 2xl:py-24">
      <LeftArea/>
      <RightArea/>
    </div>
  )
}