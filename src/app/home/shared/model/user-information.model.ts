export interface UserInformation {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string;
    address: IAddress,
    company: ICompany
}

export interface ICompany {
    bs: string
    catchPhrase: string
    name: string
}

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

export interface Geo {
    lat: string,
    lng: string
}