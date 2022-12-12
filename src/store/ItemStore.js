import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._items = []

        this._basketItems = []

        this._page = 1
        this._totalCount = 0
        this._limit = 12

        makeAutoObservable(this)
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setBasketItems(basketItems) {
        this._basketItems = basketItems
    }

    get items() {
        return this._items
    }

    get basketItems() {
        return this._basketItems
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}