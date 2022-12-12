import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._user = {}
        this._basketId = {}
        this._searchValue = ''
        makeAutoObservable(this)
    }

    setUser(user) {
        this._user = user
    }

    setBasket(basketId) {
        this._basketId = basketId
    }

    setSearchValue(searchValue) {
        this._searchValue = searchValue
    }

    get user() {
        return this._user
    }

    get basket() {
        return this._basketId
    }

    get searchValue() {
        return this._searchValue
    }
}