import type { ReactNode } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    let navbarComponent: ReactNode

    return (
        <>
            {navbarComponent}

            <div
                className="w-full flex justify-center font-bold py-4 bg-[#B1C4AE] text-black"
            >
                <div className="container flex justify-between text-lg">
                    {/* <img src="https://ik.imagekit.io/ludmily/Imagem_do_WhatsApp_de_2025-08-06_as_11.22.17_9f6feaf4.webp?updatedAt=1754500019216" 
                    alt="Logo Empregadev"
                    sizes="25%" /> */}
                    <Link to='/home' className="font-bold font-mono text-2xl">Empregadev</Link>
                    <div className="flex gap-4 font-bold">
                        <Link to='/home' className="hover:underline" >Home</Link>
                        <Link to='/produtos' className="hover:underline" >Produtos</Link>
                        <Link to='/sobrenos' className="hover:underline" >Sobre Nós</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;

