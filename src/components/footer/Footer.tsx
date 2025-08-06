function Footer() {
    const data = new Date().getFullYear();


    return (
        <>
            <div className="flex justify-center bg-[#B1C4AE] text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        EmpregaDev Plataforma de RH | Copyright: {data}
                    </p>
                    <p className="text-lg">Solicite seu orçamento!</p>
                
                </div>
            </div>


            
        </>
    );
}

export default Footer;