export interface UserData {
    username: string;
  }
  
  export interface LocalContextType {
    login: (dato: any) => void;
    logout: () => void;
    isUserLogueado: boolean;
  }
  
  export interface DatosUser {
    username: string;
    pwd: string;
  }
  
  export interface DatosWrapperHeader {
    titulo: string;
    subtitulo?: string;
    seccion?: string;
    icono?: string;
  }
  