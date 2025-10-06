export interface AuthState{
    user:null|{},
    accessToken:string | null
    loading:boolean,
    isAuthenticated:boolean,
    error:null | {
        message:string
    }
}
