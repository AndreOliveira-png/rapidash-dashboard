export type Delivery = {
    fullName:string,
    address:string
    products: Product[] | undefined
}
export type Product = {
    name:string | undefined
    qtd:string | undefined
}
export type Deliver = {
    id:string
    destiny:string
    delivered:boolean
    photo:string | undefined
    userId:string | undefined
    user: User | undefined
}
export type User = {
    id: string
    email:string
    password: string
    fullName: string
    cpf: string
}
