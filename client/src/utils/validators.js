import {isValidUsername} from "6pp"
export const usernameValidator = (value) => {
    if(!isValidUsername(value)){
        return {
            isValid:false,
            errorMessage:"Username is Invalid"
        }
    }
}