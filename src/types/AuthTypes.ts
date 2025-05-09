export interface User{
    name: string;
}

export default interface AuthTypes{
    user: User | undefined;
}