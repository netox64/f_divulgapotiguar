import React from "react";

export interface ICardCreditProps {};

export const CardCredit: React.FC<ICardCreditProps> = () => {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                    Número do Cartão
                </label>
                <input type="text" id="card-number" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700" >
                        Validade
                    </label>
                    <input type="text" id="expiry-date" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MM/AA" />
                </div>
                <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                        CVV
                    </label>
                    <input type="text" id="cvv" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123" />
                </div>
            </div>
        </div>
    );
}