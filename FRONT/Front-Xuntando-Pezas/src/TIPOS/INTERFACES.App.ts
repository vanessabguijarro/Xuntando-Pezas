interface UserData {
    username: string;
}
interface LocalContextType {
    login: (dato: any) => void;
    logout: () => void;
    isUserLogueado: boolean;
}
interface DatosUser {
    username:string,
    pwd:string
  }
export type {
    UserData,
    LocalContextType,
    DatosUser
}