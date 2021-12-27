import { Pagingation, PageMap, Body } from "../base";

interface packageList {
    packageId: number,
    packageName: string,
    artistName: string,
    packageImg: string,
    stickerImg: string,
    cardImgUrl: string,
    lightBackgroundCode: string,
    packageAnimated: string,
    darkBackgroundCode: string,
    isDownload: string,
    stickers: stickers[]
}

interface stickers {

}

export type Card = Body & {
    cardId: number,
    title: string,
    type: string,
    imgUrl: string,
    language: string,
    country: string,
    packageList: packageList[]
}

export type CardParams = Pagingation & {
    userId: string,
    type: string,
    lang: string,
    countryCode?: string
}
