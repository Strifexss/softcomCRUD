import Header from "../componentsPage/layout/header";

interface Props {
    children: React.ReactNode;
}

export default function layout({children}:Props) {
    return(
        <div className="w-screen h-screen bg-zinc-900 flex flex-col justify-center items-center">
            <Header/>
            {children}
        </div>
    )
}