import { Pagingation, PageMap, Body } from "../base";

export type AnalyticsSendParams = {
    userId: string,
    stickerId: number,
    countryCode?: string,
    lang?: string,
    q?: string
}