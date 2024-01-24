import { Button } from "@/components/ui/button"

export default function RightArea() {
    return(
    <div className="hidden w-[30%] h-full bg-white  md:flex flex-col p-16 gap-4 rounded-xl">
        <h1 className="text-zinc-900 md:text-2xl 2xl:text-4xl font-bold">
            Looking for your order?
        </h1>
        <h1 className="md:text-[0.8rem] 2xl:text-xl text-gray-500 font-semibold">
            See your order even if you are not a registered user. Enter the order number and you last name.
        </h1>
        <div className="w-full h-full flex justify-center items-center">
            <Button className="w-full md:h-[3rem] 2xl:h-[4rem] border-zinc-900 border-[3px] rounded-xl font-bold" 
                variant="outline">
                Found your order
            </Button>
        </div>
    </div>
    )
}