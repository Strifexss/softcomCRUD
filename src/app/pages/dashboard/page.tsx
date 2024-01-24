import Filters from "@/app/componentsPage/dashboard/filters";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function dashBoardPage() {
    return(
        <div className="w-full h-full flex flex-col gap-6 p-4">
            <header className="text-white text-[1.5rem] font-bold">
                Jogos
            </header>
            <Filters/>
            <Table>
            <TableHeader className="bg-zinc-800">
                <TableRow>
                <TableHead className="w-[300px] text-gray-400">Jogo</TableHead>
                <TableHead className="text-gray-400 w-[200px] md:text-[0.7rem] 2xl:text-[1rem]">Gênero</TableHead>
                <TableHead className="text-gray-400 w-[150px] md:text-[0.7rem] 2xl:text-[1rem]">Duração</TableHead>
                <TableHead className="text-gray-400 w-[150px] md:text-[0.7rem] 2xl:text-[1rem]">Zerado</TableHead>
                <TableHead className="text-gray-400 w-[150px] md:text-[0.7rem] 2xl:text-[1rem]"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className="text-white hover:bg-zinc-800 cursor-pointer">
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Grand Theft Auto V</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Ação e Aventura</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">30hrs</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Sim</TableCell>
                    <TableCell className="flex justify-center items-center gap-4">
                        <Button size={"sm"} variant="secondary" className="font-semibold md:text-[0.7rem] 2xl:text-[1rem]">
                            Editar
                        </Button>
                        <Button size={"sm"}  variant="outline" className="bg-inherit hover:bg-inherit md:text-[0.7 2xl:text-[1rem]rem] hover:text-gray-500 text-white font-semibold">
                            Excluir
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow className="text-white hover:bg-zinc-800 cursor-pointer">
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Grand Theft Auto V</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Ação e Aventura</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">30hrs</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Sim</TableCell>
                    <TableCell className="flex justify-center items-center gap-4">
                        <Button size={"sm"} variant="secondary" className="font-semibold md:text-[0.7rem] 2xl:text-[1rem]">
                            Editar
                        </Button>
                        <Button size={"sm"}  variant="outline" className="bg-inherit hover:bg-inherit md:text-[0.7 2xl:text-[1rem]rem] hover:text-gray-500 text-white font-semibold">
                            Excluir
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow className="text-white hover:bg-zinc-800 cursor-pointer">
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Grand Theft Auto V</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Ação e Aventura</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">30hrs</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Sim</TableCell>
                    <TableCell className="flex justify-center items-center gap-4">
                        <Button size={"sm"} variant="secondary" className="font-semibold md:text-[0.7rem] 2xl:text-[1rem]">
                            Editar
                        </Button>
                        <Button size={"sm"}  variant="outline" className="bg-inherit hover:bg-inherit md:text-[0.7 2xl:text-[1rem]rem] hover:text-gray-500 text-white font-semibold">
                            Excluir
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow className="text-white hover:bg-zinc-800 cursor-pointer">
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Grand Theft Auto V</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Ação e Aventura</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">30hrs</TableCell>
                    <TableCell className="font-medium md:text-[0.7rem] 2xl:text-[1rem]">Sim</TableCell>
                    <TableCell className="flex justify-center items-center gap-4">
                        <Button size={"sm"} variant="secondary" className="font-semibold md:text-[0.7rem] 2xl:text-[1rem]">
                            Editar
                        </Button>
                        <Button size={"sm"}  variant="outline" className="bg-inherit hover:bg-inherit md:text-[0.7 2xl:text-[1rem]rem] hover:text-gray-500 text-white font-semibold">
                            Excluir
                        </Button>
                    </TableCell>
                </TableRow>
              
            </TableBody>
            </Table>
        </div>
    )
}