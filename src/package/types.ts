import { Pagingation, PageMap, Body } from "../base";

interface packageList {
    packageId: number,
    packageName: string,
    packageImg: string,
    packageCategory: string,
    packageKeywords: string,
    packageAnimated: string,
    price: string,
    isNew: string,
    artistName: string,
    language: string,
    isDownload: string,
    isWish: string
}

export type StickerPack = Body & {
    packageList: packageList[];
}

export type Sticker = {
    stickerId:number,
    packageId:number,
    stickerImg:string,
    favoriteYN:string
}

export type StickerPackListParams = Pagingation & {
    userId: string,
    lang: string,
    countryCode?: string,
    preminum?: string,
    animated?: string
}

export type StickerPackInfoParams = {
    packId:number,
    userId:string
}