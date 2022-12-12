import {makeAutoObservable} from "mobx";

export default class OrderStore {
    constructor() {
        this._token = ''
        this._number = ''
        this._firstName = ''
        this._lastName = ''
        this._secondName = ''
        this._phoneNumber = ''
        this._email = ''
        this._index = ''
        this._street = ''
        this._house = ''
        this._flat = ''
        this._price = ''
        this._typePay = ''
        this._typeDelivery = ''

        makeAutoObservable(this)

    }

    get token() {
        return this._token;
    }

    setToken(value) {
        this._token = value;
    }

    get number() {
        return this._number
    }

    setNumber(value) {
        this._number = value
    }

    get firstName() {
        return this._firstName;
    }

    setFirstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    setLastName(value) {
        this._lastName = value;
    }

    get secondName() {
        return this._secondName;
    }

    setSecondName(value) {
        this._secondName = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    setPhoneNumber(value) {
        this._phoneNumber = value;
    }

    get email() {
        return this._email;
    }

    setEmail(value) {
        this._email = value;
    }

    get index() {
        return this._index;
    }

    setIndex(value) {
        this._index = value;
    }

    get street() {
        return this._street;
    }

    setStreet(value) {
        this._street = value;
    }

    get house() {
        return this._house;
    }

    setHouse(value) {
        this._house = value;
    }

    get flat() {
        return this._flat;
    }

    setFlat(value) {
        this._flat = value;
    }

    get price() {
        return this._price
    }

    setPrice(value) {
        this._price = value;
    }

    get typePay() {
        return this._typePay;
    }

    setTypePay(value) {
        this._typePay = value;
    }

    get typeDelivery() {
        return this._typeDelivery;
    }

    setTypeDelivery(value) {
        this._typeDelivery = value;
    }
}