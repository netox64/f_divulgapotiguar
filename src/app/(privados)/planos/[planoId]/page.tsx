export default function PlanoDetails() {
    return (

        <div className="w-full flex flex-col gap-2 items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <h3 className="text-2xl font-semibold text-center text-slate-600">Nesse plano você tem os seguintes beneficios</h3>
            <div className="max-w-md p-10 mt-5 bg-white rounded-2xl shadow-lg text-center">
                <h1 className="text-3xl font-extrabold text-blue-700">Plano Premium</h1>
                <p className="mt-4 text-gray-600">
                    Aproveite todos os benefícios exclusivos com o nosso plano premium.
                    Acesso ilimitado, suporte prioritário e muito mais!
                </p>
                <div className="mt-6 flex justify-center items-center space-x-4">
                    <div>
                        <p className="text-5xl font-bold text-blue-700">R$49,90</p>
                        <span className="text-sm text-gray-500">/mês</span>
                    </div>
                </div>
                <ul className="mt-6 space-y-3 text-left">
                    <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-green-500 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Acesso ilimitado a recursos exclusivos
                    </li>
                    <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-green-500 mr-2" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Suporte prioritário 24/7
                    </li>
                    <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-green-500 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Atualizações constantes
                    </li>
                </ul>
                <button className="mt-8 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
                    Assinar agora
                </button>
            </div>
        </div>

    );
}