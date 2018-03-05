/**
 * @param {integer or string} variable
 * @return returns the variable as passed as an integer value, defaults to 0 
 */
export const getInteger = (variable = 0) => {
    // check if argument is not of type number
    if(typeof variable != 'number'){
        try {
            // check if argument after converting to an integer is not a number 
            if(isNaN(parseInt(variable))) {
                return 0;
            }
            return parseInt(variable);
        } catch (e) {
            return 0;
        }
    } else {
        return variable;
    }
    return variable;
}