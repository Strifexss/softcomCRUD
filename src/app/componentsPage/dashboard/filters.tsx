import WriteInput from "../all/writeInput";
import { Button } from "@/components/ui/button"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Filters() {
    return(
        <div className="w-full h-[2rem] flex justify-start gap-4 items-center">
            <h1 className="font-semibold text-white text-[0.8rem]">
                Filtros:
            </h1>
            <WriteInput size={"15rem"} type="text" placeholder="Nome do jogo"/>
            <Select>
            <SelectTrigger className="w-[15rem] h-[2rem] text-[0.8rem] bg-inherit text-white font-semibold">
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
                <SelectContent className="bg-zinc-800 text-white font-semibold ">
                    <SelectItem className="text-[0.8rem]" value="light">RPG</SelectItem>
                    <SelectItem className="text-[0.8rem]" value="dark">AÇÃO</SelectItem>
                    <SelectItem className="text-[0.8rem]" value="system">AVENTURA</SelectItem>
                </SelectContent>
            </Select>
            <Select>
            <SelectTrigger className="w-[15rem] h-[2rem] text-[0.8rem] bg-inherit text-white font-semibold">
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
                <SelectContent className="bg-zinc-800 text-white font-semibold ">
                    <SelectItem className="text-[0.8rem]" value="light">RPG</SelectItem>
                    <SelectItem className="text-[0.8rem]" value="dark">AÇÃO</SelectItem>
                    <SelectItem className="text-[0.8rem]" value="system">AVENTURA</SelectItem>
                </SelectContent>
            </Select>
            <Button  variant="secondary" className="font-semibold h-[2rem] text-[0.8rem]">
                Aplicar Filtros
            </Button>
            <Button  variant="outline" className="bg-inherit hover:bg-inherit hover:text-gray-500 text-white font-semibold h-[2rem] text-[0.8rem]">
                Limpar Filtros
            </Button>
            <div className="w-full flex justify-end items-center">
            <Button  variant="secondary" className="font-semibold h-[2rem] text-[0.8rem]">
                Adicionar Jogo
            </Button>
            </div>
        </div>
    )
}