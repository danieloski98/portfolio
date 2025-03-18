import { IPagination } from "./pagination";

export interface IStrapiApiResponse<T> {
    data: T;
    meta: {
        pagination: IPagination;
    }
}