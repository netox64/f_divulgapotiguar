import styles from "./filter.module.css";
import Image from 'next/image';

interface IFilterProps {
    texto: string;
}

export const Filter = ({ texto }:IFilterProps) => {
    return (
        <div className={`container ${styles.filterbody}`}>
            <h3 className="mr-5 text-xl font-semibold text-gray-700">{texto}:</h3>
            <input className={`mr-5 my-5 rounded-lg w-full border border-gray-300 bg-slate-100`} type="text" name="" id="" />
            <button className="hover:bg-gray-200 active:bg-blue-400 rounded-full"><Image src="/imgs/search_filter.svg" alt="search" width={40} height={40} /></button>
        </div>
    );
}