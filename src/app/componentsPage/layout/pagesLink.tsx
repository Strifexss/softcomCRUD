"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"


  interface ILinks {
    titleLinks: string;
    description: string;
  }
  
  interface IPages {
    title: string;
    links: ILinks[];
  }
  
  export default function PagesLink() {
    const pages: IPages[] = [
      {
        title: "Produtos",
        links: [
          {
            titleLinks: "Fornecedor",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Produtos",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Nuvem Fiscal",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Grupos",
            description: " Amodal dialog for products test"
        },

        ],
      },
      {
        title: "Vendas",
        links: [
          {
            titleLinks: "Fornecedor",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Produtos",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Nuvem Fiscal",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Grupos",
            description: " Amodal dialog for products test"
        },

        ],
      },
      {
        title: "Estoque",
        links: [
          {
            titleLinks: "Fornecedor",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Produtos",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Nuvem Fiscal",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Grupos",
            description: " Amodal dialog for products test"
        },

        ],
      },
      {
        title: "Financeiro",
        links: [
          {
            titleLinks: "Fornecedor",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Produtos",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Nuvem Fiscal",
            description: " Amodal dialog for products test"
        },
          {
            titleLinks: "Grupos",
            description: " Amodal dialog for products test"
        },

        ],
      },
    ];

    return(
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem > 
                <NavigationMenuTrigger className="text-[0.8rem]">DashBoard</NavigationMenuTrigger>
            </NavigationMenuItem>
            {pages.map(x => {
                return(
                    <NavigationMenuItem key={x.title}>
                        <NavigationMenuTrigger className="text-[0.8rem]">{x.title}</NavigationMenuTrigger>
                        <NavigationMenuContent className="p-4 flex flex-col ">
                            <div  className="w-full grid grid-cols-2 md:text-[0.6rem] 2xl:text-[0.8rem]">
                            {x.links.map(x => {
                                return(
                                    <NavigationMenuLink key={x.titleLinks} className="flex flex-col hover:bg-zinc-800 cursor-pointer p-2 rounded-md">
                                        <h1 className="text-white font-semibold ">{x.titleLinks}</h1>
                                        <div className="text-gray-500">
                                            {x.description}
                                        </div>                    
                                    </NavigationMenuLink>
                                )
                            })}
                            </div>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                )
            })}
          
        </NavigationMenuList>
      </NavigationMenu>
    )
}