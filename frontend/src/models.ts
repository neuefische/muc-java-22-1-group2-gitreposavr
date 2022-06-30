
export interface GitRepo {
    id: number
    name: string
    description: string
    html_url: string
}

export interface LoginResponse {
    token: string
}