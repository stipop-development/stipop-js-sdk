import { Pagingation, PageMap, Body } from "../base";

interface Sticker {
    stickerId:number,
    stickerImg:string,
    favoriteYN:string,
    keyword:string,
    keywordIt:string,
    keywordPt:string,
    keywordRu:string,
    keywordEs:string,
    keywordFr:string,
    keywordKr:string
}

interface Keyword {
    keyword:string
}

export type StickerList = Body & {
    Sticker: Sticker[];
}

export type KeywordList = {
    keywordList : Keyword[];
}

export type StickerSearchParams = Pagingation & {
    userId: string,
    q: string,
    lang?: string,
    countryCode?: string,
    animated?: string
}

export type StickerSearchKeywordParams = {
    userId: string,
    lang: string,
    countryCode?: string,
    keyword?: string
}

