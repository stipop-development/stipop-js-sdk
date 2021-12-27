import { Pagingation, PageMap, Body } from "../base";

export interface downloadParams {
    packageId: string,
    userId: string,
    isPurchase: string,
    lang?: string,
    countryCode?: string,
    price?: string,
    entrance_point?: string,
    event_point?: string
}

export interface downloadListParams extends Pagingation {
    userId: string
}