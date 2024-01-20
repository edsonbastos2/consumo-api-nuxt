import type { $Fetch } from "ofetch";
import type { IUserProducts, IUserProfile } from "./types";

export default class UserService {
    private fetch: $Fetch

    constructor(fetch: any) {
        this.fetch = fetch
    }

    async getUserProfile() {
        const result = await this.fetch<IUserProfile>('/user-profile',{
            method:'GET'
        })

        return result
    }

    async getUserProducts() {
        const result = await this.fetch<IUserProducts[]>('/user-products', {
            method:'GET'
        })

        return result
    }
}