export abstract class AbstractLog{
    abstract log(message: any, ...optionalParams: any[]): void
    abstract warn(message: any, ...optionalParams: any[]): void
    abstract error(message: any, ...optionalParams: any[]): void
    abstract info(message: any, ...optionalParams: any[]): void
}