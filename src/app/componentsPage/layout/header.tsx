import PagesLink from "./pagesLink";


export default function Header() {
    return (
        <div className="w-full h-[3.5rem] p-2 px-4 border-b-2 border-zinc-700 flex items-center justify-between">
           <h1 className="text-white font-bold text-[2rem]">
                Softcom
           </h1>
          <PagesLink/>
          <a href=""></a>
        </div>
    )
}