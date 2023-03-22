export const getValidationError = (errorCode) => {
    const codeMatcher = {
        "required": "This field is required",
        "email": "This is not a valid email",
        "min-length": "Did not meet the minimum length",
        "max-length": "Exceeded maximum length",
        "confirm-password": "Your password does not match your confirmation or vice versa",
        "wrong-username": "Your username does not meet the required parameters",
        //firebase errors
        "auth/wrong-password": "Typed the password incorrectly",
        "auth/too-many-requests": "You have tried several times try again later",
        "auth/user-not-found": "The user trying to log in is not found",
        "auth/email-already-exists": "The email address you entered is already registered",
        "auth/id-token-expired": "Your 'ID Token' has expired, log in again",
        "auth/internal-error": "The Authentication server encountered an unexpected error while trying to process the request",
        "auth/invalid-argument": "An invalid argument was provided to an Authentication method",
        "auth/invalid-credential": "The credential used to authenticate the Admin SDKs cannot be used to perform the desired action",
        "auth/invalid-display-name": "The provided value for the displayName user property is invalid. It must be a non-empty string",
        "auth/invalid-email": "The provided value for the email user property is invalid. It must be a string email address",
        "auth/invalid-id-token": "The provided ID token is not a valid Firebase ID token",
        "auth/invalid-password": "The provided value for the password user property is invalid",
    }

    return codeMatcher[errorCode]
}