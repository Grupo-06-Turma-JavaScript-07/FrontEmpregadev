import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { Link } from "react-scroll";

function Principal() {
    return (

        <>
            {/* // PÁGINA DO HOME */}

            {/* 'relative' para ancorar a onda e 'pb-20' (padding-bottom) para criar espaço para ela */}
            <div id="home" className="w-full bg-[#B1C4AE]  text-slate-800 relative pb-20">
                <div className="container mx-auto flex flex-col md:flex-row justify-around items-center pt-10">

                    {/* Coluna do texto */}
                    <div className="flex flex-col justify-center items-center text-center gap-y-6">
                        <h2 className="text-4xl font-bold font-serif">Emprega<span className="text-[#5e8d5e]">Dev</span></h2>
                        <p className="text-xl font-roboto">
                            Plataforma de monitoramento e informações dos colaboradores.
                        </p>
                        <div className="flex justify-center">


                            <Link
                                to='produtos'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-pointer bg-transparent border-2 border-[#5e8d5e] hover:bg-[#5e8d5e] hover:border-[#5e8d5e] hover:text-white text-[#5e8d5e] font-bold py-2 px-4 rounded"
                            >
                                Conheça nossos produtos!
                            </Link>
                        </div>
                    </div>

                    {/* Coluna da imagem */}
                    <div>
                        <img
                            src="https://images-ext-1.discordapp.net/external/geDBRq-A3PJ8N4FP11UehRDLJ0A_CGnRSUAYV7tzmeo/https/i.imgur.com/2DdaC93.png?format=webp&quality=lossless&width=586&height=586"
                            alt="Imagem da Página Home"
                            className="w-96"
                        />
                    </div>
                </div>

                {/* código da onda no final do container pai */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg
                        className="relative block w-full h-[75px] rotate-180" // Controle a altura da onda aqui
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-[#eef0ee]"
                        ></path>
                    </svg>
                </div>
            </div>




            {/* // PÁGINA DE PRODUTOS
        // Container Principal: organiza os dois blocos de produto verticalmente */}
            <div id="produtos" className="flex flex-col items-center gap-16 bg-[#eef0ee] py-20 relative pb-20">

                {/* Bloco 1: Gestão de recrutamento e seleção */}
                <section className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl px-8">

                    {/* Coluna da imagem */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="https://media.discordapp.net/attachments/1374009340561981542/1403027511251566750/Untitled_design_-_4.png?ex=68960eb1&is=6894bd31&hm=6cdd6b4aee3aff0a041679d7fd09685312f2e1d43a4d7f7f7dd2b6f258fb6f7c&=&format=webp&quality=lossless&width=586&height=586"
                            alt="Maleta com símbolo de código"
                            className="max-w-xs h-auto" // max-w-xs para controlar o tamanho
                        />
                    </div>

                    {/* Coluna do texto */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold  text-slate-800 mb-4">Gestão de recrutamento e seleção</h2>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                            <li>Triagem de currículos com filtros inteligentes</li>
                            <li>Agendamento de entrevistas</li>
                            <li>Controle de pipeline de candidatos</li>
                        </ul>
                    </div>
                </section>

                {/* Bloco 2: Avaliação de Desempenho */}
                <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 w-full max-w-5xl px-8">

                    {/* Coluna da imagem */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="https://media.discordapp.net/attachments/1374009340561981542/1403027621926797362/Untitled_design_-_2.png?ex=68960ecc&is=6894bd4c&hm=712019c2de43d063c1e3d9f41e8b5a3a220abb283e749ba633434c1809b52da9&=&format=webp&quality=lossless&width=586&height=586"
                            alt="Maleta com símbolo de código"
                            className="max-w-xs h-auto" // max-w-xs para controlar o tamanho
                        />
                    </div>

                    {/* Coluna do texto */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold  text-slate-800 mb-4">Avaliação de Desempenho</h2>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                            <li>KPIs por equipe</li>
                            <li>Feedbacks contínuos (360º, one-on-one)</li>
                            <li>Plano de desenvolvimento individual (PDI)</li>
                        </ul>
                    </div>
                </section>

                {/* Bloco 3: Documentação e Compliance */}
                <section className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl px-8">

                    {/* Coluna da imagem */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="https://media.discordapp.net/attachments/1374009340561981542/1403028940167053464/Untitled_design.png?ex=68961006&is=6894be86&hm=207747bce16abf544bd21455a52fda50cc7bd280be807801e11b312db56e2d4d&=&format=webp&quality=lossless&width=586&height=586"
                            alt="Maleta com símbolo de código"
                            className="max-w-xs h-auto" // max-w-xs para controlar o tamanho

                        />
                    </div>

                    {/* Coluna do texto */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold  text-slate-800 mb-4">Documentação e Compliance</h2>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                            <li>Central de documentos dos colaboradores</li>
                            <li>Controle de vencimento de documentos</li>
                            <li>Gestão de contratos, políticas e termos</li>
                        </ul>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                        <svg
                            className="relative block w-full h-[75px] rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-[#B1C4AE]"
                            ></path>
                        </svg>
                    </div>


                </section>

            </div>

            {/* // PÁGINA DE SOBRE NÓS  */}

            <section className="w-full bg-[#B1C4AE] py-20 px-8 relative pb-20">
                <div id="sobrenos" className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">Sobre nós</h2>

                    {/* Container para as fotos dos DEVs */}
                    <div className="flex flex-col items-center gap-y-10 mb-16">
                        {/* Fileira de cima (3 DEVs) */}
                        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full">
                                    <img src="https://media.discordapp.net/attachments/1374009340561981542/1402995925390983288/Juliana_Freddi_2_1.jpg?ex=6895f147&is=68949fc7&hm=4527740e3f5adca5e2f364ff6c1b131e46a3a1b4ac65dc5729eb346dc31a7aad&=&format=webp&width=390&height=586"
                                        alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <p className="font-bold text-slate-800">Juliana Freddi</p>
                                <p className=" text-slate-800">Dev Fullstack que ama debugar</p>
                                <div className="flex gap-2">
                                    <a href="https://www.linkedin.com/in/juliana-freddi/" target="_blank" className="relative group">
                                        <LinkedinLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 right-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">linkedin</span>
                                    </a>

                                    <a href="https://github.com/ddifreju" target="_blank" className="relative group">
                                        <GithubLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 left-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">github</span>
                                    </a>
                                </div>

                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full">
                                    <img src="https://media.discordapp.net/attachments/1374009340561981542/1402692906099281971/Larissa.jpeg?ex=68957fd1&is=68942e51&hm=c8ace4e91ce86a97181cc81a02f3f90cd5ffecd5fcfe9f5e3a85cd3692e7af6a&=&format=webp&width=423&height=371"
                                        alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <p className="font-bold text-slate-800">Larissa Santana</p>
                                <p className=" text-slate-800">Dev Fullstack que ama viajar</p>
                                <div className="flex gap-2">
                                    <a href="https://www.linkedin.com/in/larissa-santana-a0b9a02b7/" target="_blank" className="relative group">
                                        <LinkedinLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 right-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">linkedin</span>
                                    </a>

                                    <a href="https://github.com/Santana-larissa" target="_blank" className="relative group">
                                        <GithubLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 left-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">github</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full">
                                    <img src="https://images-ext-1.discordapp.net/external/CnP_7Jkdy58CWySEDqaF0ZNtYx1zeOM8U-JYFA5BGEc/%3FupdatedAt%3D1754498159606/https/ik.imagekit.io/ludmily/perfil%2520quadrado.jpeg?format=webp&width=456&height=456"
                                        alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <p className="font-bold text-slate-800">Ludmily Oliveira</p>
                                <p className=" text-slate-800">Dev Fullstack e fitness girl</p>
                                <div className="flex gap-2">
                                    <a href="https://www.linkedin.com/in/ludmily-oliveira/" target="_blank" className="relative group">
                                        <LinkedinLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 right-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">linkedin</span>
                                    </a>

                                    <a href="https://github.com/LudmilyS" target="_blank" className="relative group">
                                        <GithubLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 left-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">github</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Fileira de baixo (2 DEVs) */}
                        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full">
                                    <img src="https://images-ext-1.discordapp.net/external/1fEs-dT_Cg-odskJD08JBCwdTO8irLkmspDORvivBRY/%3FupdatedAt%3D1754571230256/https/ik.imagekit.io/pedrolazzz/Untitled-1.png?format=webp&quality=lossless&width=280&height=280"
                                        alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <p className="font-bold text-slate-800">Matheus Schneider</p>
                                <p className=" text-slate-800">Dev Fullstack que ama girar cubos</p>
                                <div className="flex gap-2">
                                    <a href="https://linkedin.com/in/matheusschneider" target="_blank" className="relative group">
                                        <LinkedinLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 right-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">linkedin</span>
                                    </a>

                                    <a href="https://github.com/matheusschneider1" target="_blank" className="relative group">
                                        <GithubLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 left-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">github</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full">
                                    <img src="https://images-ext-1.discordapp.net/external/3Ii76tOfTVgbgXFTkDziVs1odQuvEBQJXJNXp40rFik/%3FupdatedAt%3D1754566149442/https/ik.imagekit.io/pedrolazzz/Pedro%2520Elias%2520%2520%283%29.jpg?format=webp&width=390&height=586"
                                        alt="Foto do Dev" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <p className="font-bold text-slate-800">Pedro Elias</p>
                                <p className=" text-slate-800">Dev Fullstack que ama pokémon</p>
                                <div className="flex gap-2">
                                    <a href="https://www.linkedin.com/in/pedro-elias-4b5ab4181" target="_blank" className="relative group">
                                        <LinkedinLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 right-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">linkedin</span>
                                    </a>

                                    <a href="https://github.com/pedro-eliasd" target="_blank" className="relative group">
                                        <GithubLogoIcon size={30} weight="regular" />
                                        <span className="text-xs absolute -top-3 left-7 bg-[#7a9775]/60 p-1 rounded hidden group-hover:block">github</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Container para o texto */}

                    {/* Bloco 1: Gestão de recrutamento e seleção */}
                    <section className="flex flex-col md:flex-row max-w-7xl items-center justify-center gap-8 w-full px-8">

                        {/* Coluna da imagem */}
                        <div className="w-full md:w-1/2 mx-auto flex justify-center">
                            <img
                                src="https://media.discordapp.net/attachments/1374009340561981542/1403014163176886412/Untitled_design.png?ex=68960243&is=6894b0c3&hm=2b3c919ef4d8595d18e4092a81febe07cf756ea29cee97251a85315cb89e1f2a&=&format=webp&quality=lossless&width=586&height=586"
                                alt="Maleta com símbolo de código"
                                className="max-w-xs h-auto" // max-w-xs para controlar o tamanho
                            />

                        </div>

                        {/* Coluna do texto */}

                        {/* Container interno para controlar o espaçamento e a fonte */}
                        <div className="flex flex-col my-10 gap-y-6 text-lg text-gray-700">

                            {/* 1. Primeira frase continua em negrito */}
                            <p className="text-xl font-bold text-slate-800">
                                A Empregadev nasceu da colaboração de um time multidisciplinar do Bootcamp da Generation.
                            </p>

                            {/* Este parágrafo agora tem a fonte normal */}
                            <p className="text-base">
                                Somos movidos pela paixão por tecnologia e pelo compromisso com a metodologia ágil Scrum para desenvolver soluções eficientes e de alto valor para o setor de Recursos Humanos. Nossa equipe combina talentos complementares para criar uma plataforma completa:
                            </p>


                            {/* Seção "Nosso Propósito" com título em negrito */}
                            <div>
                                {/* 2. Título continua em negrito */}
                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                    Nosso Propósito:
                                </h3>
                                {/* fonte normal */}
                                <p className="text-base">
                                    Compreendemos profundamente os desafios e as "dores" do processo de recrutamento. Por isso, criamos o Empregadev para facilitar a conexão entre empresas e talentos de forma mais humana, empática e assertiva. Nosso compromisso é ir além de um sistema eficiente. Queremos ser o seu parceiro estratégico na construção de equipes de sucesso, simplificando processos e fortalecendo as conexões que impulsionam o crescimento do seu negócio.
                                </p>
                            </div>

                        </div>
                    </section>




                    {/* ONDA DECORATIVA PARA O RODAPÉ */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                        <svg
                            className="relative block w-full h-[75px] rotate-180" // altura da onda
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            {/*cor da onda*/}
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-[#eef0ee]"
                            ></path>
                        </svg>
                    </div>
                </div>
            </section>





        </>
    )
}

export default Principal;