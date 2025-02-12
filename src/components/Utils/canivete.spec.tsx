import Canivete from './canivete';

describe('Test for class Canivete', () => {

    // Teste para o método captalizeFirstLetter
    test('should capitalize the first letter of a word', () => {
        expect(Canivete.captalizeFirstLetter('hello')).toBe('Hello');
    });

    test('should not modify the word if it is already capitalized', () => {
        expect(Canivete.captalizeFirstLetter('Hello')).toBe('Hello');
    });

    test('should return the empty string if input is empty', () => {
        expect(Canivete.captalizeFirstLetter('')).toBe('');
    });

    // Teste para o método captalizeLimitText
    test('should truncate text longer than 150 characters and append ellipsis', () => {
        const longText = 'A'.repeat(160); // 160 characters long
        expect(Canivete.captalizeLimitText(longText)).toBe('A'.repeat(150) + '...');
    });

    test('should return text as is if it is shorter than or equal to 150 characters', () => {
        const shortText = 'A'.repeat(140); // 140 characters long
        expect(Canivete.captalizeLimitText(shortText)).toBe(shortText);
    });

    // Teste para o método isString
    test('should return true for a string', () => {
        expect(Canivete.isString('hello')).toBe(true);
    });

    test('should return false for a number', () => {
        expect(Canivete.isString(123)).toBe(false);
    });

    test('should return false for a boolean', () => {
        expect(Canivete.isString(true)).toBe(false);
    });

    // Teste para o método isNumber
    test('should return true for a number', () => {
        expect(Canivete.isNumber(123)).toBe(true);
    });

    test('should return false for a string', () => {
        expect(Canivete.isNumber('hello')).toBe(false);
    });

    test('should return false for a boolean', () => {
        expect(Canivete.isNumber(true)).toBe(false);
    });

    // Teste para o método removeMaskFromCpf
    test('should remove non-numeric characters from CPF', () => {
        const cpf = '123.456.789-00';
        expect(Canivete.removeMaskFromCpf(cpf)).toBe('12345678900');
    });

    // Teste para o método formatDecimal
    test('should format a decimal number with two decimal places', () => {
        expect(Canivete.formatDecimal('123.4')).toBe('123.40');
        expect(Canivete.formatDecimal('123.45')).toBe('123.45');
        expect(Canivete.formatDecimal('123')).toBe('123.00');
    });

    // Teste para o método validateCpf
    test('should return true for a valid CPF', () => {
        const validCpf = '123.456.789-09'; // Exemplo de CPF válido
        expect(Canivete.validateCpf(validCpf)).toBe(true);
    });

    test('should return false for an invalid CPF', () => {
        const invalidCpf = '123.456.789-00'; // Exemplo de CPF inválido
        expect(Canivete.validateCpf(invalidCpf)).toBe(false);
    });

    test('should return "Data inválida" for an invalid date', () => {
        const invalidDate = new Date('invalid-date');
        expect(Canivete.formataDataBr(invalidDate)).toBe('Data inválida');
    });

});
