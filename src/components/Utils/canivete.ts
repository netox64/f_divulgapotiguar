export default class Canivete {

    public static captalizeFirstLetter(word: string) {
        if (word.length != 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
    }

    public static captalizeLimitText(text: string) {
        return text.length > 150 ? (text.substring(0, 150) + "...") : text;
    }

    public static isString(value: unknown): value is string {
        return typeof value === 'string';
    }

    public static isNumber(value: unknown): value is number {
        return typeof value === 'number';
    }

    public static removeMaskFromCpf = (cpf: string): string => {
        return cpf.replace(/\D/g, "");
    };

    public static formatDecimal = (value: string): string => {
        const [integer, decimal] = value.split(".");
        if (decimal) {
            return `${integer}.${decimal.length === 1 ? `${decimal}0` : decimal}`;
        } else {
            return `${value}.00`;
        }
    };

    public static validateCpf = (cpf: string): boolean => {
        const cpfClean = cpf.replace(/[^\d]+/g, '');
        if (cpfClean.length !== 11) return false;

        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpfClean.charAt(i - 1)) * (11 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpfClean.charAt(9))) return false;

        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpfClean.charAt(i - 1)) * (12 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpfClean.charAt(10))) return false;

        return true;
    }

    public static formataDataBr(data: any) {
        if (!(data instanceof Date) || isNaN(data.getTime())) {
            return "Data inválida";
        }
        return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(data);

    }
}