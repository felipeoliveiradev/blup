export interface ILetterCases{
    constructor(value: string): { value: string };
    Plural(): string
    CamelToSnake(): string
    UpperCase(): string
    Capitalizer(): string
}