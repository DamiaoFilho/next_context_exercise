export interface User{
    name: String;
}

export default interface AuthTypes{
    user: User | undefined;
    login: (name: String) => void;
    logout: () => void;
}