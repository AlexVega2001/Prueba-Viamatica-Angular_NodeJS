export interface Login {
    success:    boolean;
    message:    string;
    session_id: number;
    user_id:    number;
    start_time: Date;
}