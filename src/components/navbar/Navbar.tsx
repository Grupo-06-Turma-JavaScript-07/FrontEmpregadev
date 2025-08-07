// import type { ReactNode } from "react";
import { Link } from "react-scroll";


function Navbar() {

    // let navbarComponent: ReactNode

    // return (
    //     <>
    //         {navbarComponent}

    //         <div
    //             // className="w-full flex py-4 bg-[#B1C4AE] text-black"
    //             className="w-full bg-[#B1C4AE] p-4 text-black sticky top-0 z-50"
    //         >
    //             <div className="container mx-auto flex justify-between items-center ">

    //                 {/* <Link to="home" smooth={true} duration={500} className="cursor-pointer"> */}

    //                     <img src="https://images-ext-1.discordapp.net/external/n0hs6O6SaCkQZFIfd8ouY9rF80-4Kb0BW_k3F_v1r40/%3FupdatedAt%3D1754567312216/https/ik.imagekit.io/pedrolazzz/logo-empregadev.png?format=webp&quality=lossless&width=280&height=280"
    //                         alt="Logo Empregadev"
    //                         className="w-10 h-10"
    //                     />

    //                     <div className="flex gap-4 font-bold">
    //                         <Link to='/home' className="hover:underline" >Home</Link>
    //                         <Link to='/produtos' className="hover:underline" >Produtos</Link>
    //                         <Link to='/sobrenos' className="hover:underline" >Sobre Nós</Link>
    //                     </div>
    //             </div>
    //         </div>
    //     </>
    // );


    return (
        <div className="w-full bg-[#B1C4AE] p-4 text-black sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo clicável*/}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer"
                >
                    <img src="https://images-ext-1.discordapp.net/external/n0hs6O6SaCkQZFIfd8ouY9rF80-4Kb0BW_k3F_v1r40/%3FupdatedAt%3D1754567312216/https/ik.imagekit.io/pedrolazzz/logo-empregadev.png?format=webp&quality=lossless&width=280&height=280"
                        alt="Logo Empregadev"
                        className="w-10 h-10"
                    />
                </Link>

                {/* Links que rolam a página*/}
                <ul className="flex gap-4 font-bold">
                    <li>
                        <Link
                            to='home'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="hover:underline cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='produtos'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="hover:underline cursor-pointer"
                        >
                            Produtos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='sobrenos'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="hover:underline cursor-pointer"
                        >
                            Sobre Nós
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

