import { Pagingation, PageMap, Body } from "../base";


export interface myStickerParams extends Pagingation {
    userId: string,
    packageId?: string
}

export interface myStickerOrderParams {
    userId: string,
    currentOrder: number,
    newOrder: number
}

export interface myStickerFavoriteParams {
    userId: string,
    stickerId: string
}