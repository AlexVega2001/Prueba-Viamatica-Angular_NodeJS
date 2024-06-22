export interface MessageResp {
    success:    boolean;
    message:    string;
    session_id: number;
    end_time:   Date;
}

export interface User {
    idUsuario: number;
    username:  string;
    email:     string;
    status:    string;
    persona:   Persona;
}

export interface Persona {
    idPersona:       number;
    nombres:         string;
    apellidos:       string;
    identificacion:  string;
    fechanacimiento: Date;
}