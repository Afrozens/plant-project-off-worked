export const getValidationError = (errorCode) => {
    const codeMatcher = {
        required: "This field is required",
        email: "This is not a valid email",
        
    }

    return codeMatcher(errorCode)
}