import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import WriteInput from "../all/writeInput"

export default function LeftArea() {
    return(
        <div className="w-full md:w-[30%] h-full flex flex-col gap-10 2xl:gap-14 rounded-xl">
            <h1 className="text-white font-bold text-3xl 2xl:text-5xl">
                Login.
            </h1>
            <div className="w-full flex flex-col gap-16 2xl:gap-20 text-[0.8rem] 2xl:text-[1.2rem]">
                <WriteInput size="full" placeholder="Email *" type="email"/> 
                <WriteInput size="full" placeholder="Password *" type="password"/> 
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-white 2xl:w-[1.5rem] 2xl:h-[1.5rem] rounded-md" />
                <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500 text-[0.8rem] 2xl:text-[1rem]">
                    Remember Me
                </label>
            </div>
            <a href="" 
                className="text-white font-semibold text-[0.8rem] 2xl:text-[1rem]">
                Password Help?
            </a>
            <div className="w-full flex flex-col gap-4">
                <a href="">
                    <Button className="bg-zinc-700 w-full text-white font-semibold text-[0.8rem] 2xl:text-[1.2rem] hover:bg-gray-500">
                        Register
                    </Button>
                </a>
                <a href="/pages/dashboard">
                    <Button className="bg-white w-full text-black font-semibold text-[0.8rem] 2xl:text-[1.2rem] hover:bg-gray-500">
                        Login
                    </Button>
                </a>
            </div>
        </div>
    )
}