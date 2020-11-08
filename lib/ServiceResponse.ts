export default class ServiceResponse<T> {
    data: T;
    error: string;
    constructor(data?: T, error?: string) {
        this.data = data;
        this.error = error;
    }

    public toString(): string {
        return JSON.stringify(this);
    }
}
