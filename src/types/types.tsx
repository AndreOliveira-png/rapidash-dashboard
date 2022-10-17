export type Delivery = {
    fullName:string,
    address:string
    products: Product[] | undefined
}
export type Product = {
    name:string | undefined
    qtd:string | undefined
}