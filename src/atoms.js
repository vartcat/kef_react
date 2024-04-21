import { atom } from 'recoil'

export const nameState = atom({
    key : "username",
    default : "John"
})

export const ageState = atom({
    key : "userAge",
    default : "38"
})