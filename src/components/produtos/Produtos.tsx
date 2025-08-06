import { Link } from "react-router-dom";

function Produtos() {
    return (

        <>
            {/* // PÁGINA DO HOME */}

            {/* 'relative' para ancorar a onda e 'pb-20' (padding-bottom) para criar espaço para ela */}
            <div className="w-full bg-[#B1C4AE] text-black relative pb-20">
                <div className="container mx-auto flex flex-col md:flex-row justify-around items-center pt-10">

                    {/* Coluna do texto */}
                    <div className="flex flex-col justify-center items-center text-center gap-y-6">
                        <h2 className="text-4xl font-bold font-serif">EmpregaDev</h2>
                        <p className="text-xl font-semibold font-serif">
                            Plataforma de monitoramento e informações dos colaboradores.
                        </p>
                        <div className="flex justify-center">
                            <Link
                                to="/produtos"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
                            className="fill-white"
                        ></path>
                    </svg>
                </div>
            </div>




            {/* // PÁGINA DE PRODUTOS
        // Container Principal: organiza os dois blocos de produto verticalmente */}
            <div className="flex flex-col items-center gap-16 bg-white py-20 relative pb-20">

                {/* Bloco 1: Gestão de recrutamento e seleção */}
                <section className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl px-8">

                    {/* Coluna da imagem */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="https://images-ext-1.discordapp.net/external/SOuTcl-gZrBuO6f3SfyaI7sDXpCij5P5WTtME3Ce7_E/https/i.imgur.com/8mGofiH.jpg?format=webp&width=586&height=586"
                            alt="Maleta com símbolo de código"
                            className="max-w-xs h-auto" // max-w-xs para controlar o tamanho
                        />
                    </div>

                    {/* Coluna do texto */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Gestão de recrutamento e seleção</h2>
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
                            src="https://images-ext-1.discordapp.net/external/Ktt1Nzc638alxfyv876YMDWnPiTRYt6150inAPiMQRQ/https/i.imgur.com/3hONRJI.jpg?format=webp&width=586&height=586"
                            alt="Maleta com símbolo de código"
                            className="max-w-xs h-auto" // max-w-xs para controlar o tamanho
                        />
                    </div>

                    {/* Coluna do texto */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Avaliação de Desempenho</h2>
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
                            src="https://images-ext-1.discordapp.net/external/HoHv70IsDVyJb7cp_25IADJ2pgbcXg9BcVm0PSeIBLg/https/i.imgur.com/jrcbIq9.jpg?format=webp&width=586&height=586"
                            alt="Maleta com símbolo de código"
                            className="max-w-xs h-auto" // max-w-xs para controlar o tamanho

                        />
                    </div>

                    {/* Coluna do texto */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Documentação e Compliance</h2>
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
            <section className="w-full bg-[#B1C4AE] py-20 px-8">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-black mb-16">Sobre nós</h2>

                    {/* Container para as fotos dos DEVs */}
                    <div className="flex flex-col items-center gap-y-10 mb-16">
                        {/* Fileira de cima (3 DEVs) */}
                        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full">
                                    {/* <img src="..." alt="Foto do Dev" className="w-full h-full object-cover rounded-full" /> */}
                                </div>
                                <p className="font-bold text-black">Juliana Freddi</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full"></div>
                                <p className="font-bold text-black">Larissa Santana</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full"></div>
                                <p className="font-bold text-black">Ludmily Oliveira</p>
                            </div>
                        </div>

                        {/* Fileira de baixo (2 DEVs) */}
                        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full"></div>
                                <p className="font-bold text-black">Matheus Schneider</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-500 rounded-full"></div>
                                <p className="font-bold text-black">Pedro Elias</p>
                            </div>
                        </div>
                    </div>

                    {/* Container para o texto */}
                    <div className="max-w-3xl mx-auto text-left">

                        {/* Container interno para controlar o espaçamento e a fonte */}
                        <div className="flex flex-col gap-y-6 text-lg text-gray-700"> {/* Removido font-bold daqui */}

                            {/* 1. Primeira frase continua em negrito */}
                            <p className="text-xl font-bold text-black">
                                A Empregadev nasceu da colaboração de um time multidisciplinar do Bootcamp da Generation.
                            </p>

                            {/* Este parágrafo agora tem a fonte normal */}
                            <p>
                                Somos movidos pela paixão por tecnologia e pelo compromisso com a metodologia ágil Scrum para desenvolver soluções eficientes e de alto valor para o setor de Recursos Humanos. Nossa equipe combina talentos complementares para criar uma plataforma completa:
                            </p>

                            {/* Descrição dos DEVs com nomes em negrito */}
                            <div className="flex flex-col gap-y-4">
                                <p>
                                    <span className="font-bold text-black">Juliana:</span> Desenvolvedora Fullstack com uma rica bagagem em gestão e educação. Sua visão estratégica e habilidade em resolução de problemas garantem a robustez e a funcionalidade completa da nossa plataforma.
                                </p>
                                <p>
                                    <span className="font-bold text-black">Larissa:</span> Desenvolvedora focada em Frontend e Qualidade de Software. Apaixonada por criar soluções intuitivas e de alta qualidade, ela é a força por trás de uma experiência de usuário impecável e transformadora.
                                </p>
                                <p>
                                    <span className="font-bold text-black">Ludmily:</span> Graduada em Engenharia Civil e atuou por 4 anos no agronegócio com foco em projetos e inovação. Durante essa jornada, descobriu a paixão pela área de tecnologia e desde então tem se dedicado aos estudos nesse universo. Comunicativa e curiosa, está sempre em busca de novos aprendizados e desafios que a impulsionem a evoluir.
                                </p>
                                <p>
                                    <span className="font-bold text-black">Matheus:</span> Desenvolvedor Fullstack com um perfil criativo e curioso. Vê a programação como uma forma de expressar inovação e busca colaborar em projetos desafiadores que gerem um impacto real no mercado de trabalho.
                                </p>
                                <p>
                                    <span className="font-bold text-black">Pedro:</span> Desenvolvedor Fullstack com background em Design. Ele une o poder do código à estética visual para enriquecer a experiência do usuário com interfaces atraentes, ricas e fáceis de usar.
                                </p>
                            </div>

                            {/* Seção "Nosso Propósito" com título em negrito */}
                            <div>
                                {/* 2. Título continua em negrito */}
                                <h3 className="text-xl font-bold text-black mb-2">
                                    Nosso Propósito:
                                </h3>
                                {/* Este parágrafo agora tem a fonte normal */}
                                <p>
                                    Compreendemos profundamente os desafios e as "dores" do processo de recrutamento. Por isso, criamos o Empregadev para facilitar a conexão entre empresas e talentos de forma mais humana, empática e assertiva. Nosso compromisso é ir além de um sistema eficiente. Queremos ser o seu parceiro estratégico na construção de equipes de sucesso, simplificando processos e fortalecendo as conexões que impulsionam o crescimento do seu negócio.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Produtos;