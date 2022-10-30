export type Delivery = {
    destiny:string,
    address:Address
    producties: Product[] | undefined
}
export type Address = {
    street:string,
    number:string,
    district:string,
    cep:string
}
export type Product = {
    name:string | undefined
    quantity:string | undefined
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
