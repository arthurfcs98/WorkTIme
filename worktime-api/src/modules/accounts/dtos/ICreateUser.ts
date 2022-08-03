interface ICreateUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    hourly_rate: number;
}

export { ICreateUser };
