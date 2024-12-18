import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png"

export default function Header() {
  return (
    <header className="w-full sticky top-0 bg-orange-400 p-5 ">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center justify-between">
          <Image src={logo} alt="Logo Clutch Stats" className="w-1/4" />
        </Link>
        <nav>
          <ul className="hidden lg:flex gap-4 font-medium">
            <li className="hover:text-orange-900 transition delay-150 duration-300 ease-in-out">
              <Link href="/">Sobre</Link>
            </li>
            <li className="hover:text-orange-900 transition delay-150 duration-300 ease-in-out">
              <Link href="/#sobre">Como Usar</Link>
            </li>
            <li className="hover:text-orange-900 transition delay-150 duration-300 ease-in-out">
              <Link href="/">Contato</Link>
            </li>
          </ul>
        </nav>
        <Button className="bg-orange-800 hover:bg-orange-600 transition delay-150 duration-300 ease-in-out hidden lg:block cursor-pointer">
          <Link href="/login">Login</Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden bg-purple-800">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Menu</SheetTitle>
            <nav className="h-full">
              <ul className="flex flex-col items-center justify-center gap-4 h-full">
                <li className="text-black text-2xl">
                  <Link href="/">Sobre</Link>
                </li>
                <li className="text-black text-2xl">
                  <Link href="/">Como Usar</Link>
                </li>
                <li className="text-black text-2xl">
                  <Link href="/">Contato</Link>
                </li>
                <Button className="bg-orange-600 transition delay-150 duration-300 ease-in-out mt-6 text-2xl p-6">
                  <Link href="/login">Login</Link>
                </Button>
              </ul>
            </nav>

            <SheetFooter>
              <SheetClose asChild>
                <Button className="mt-4">Fechar</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}