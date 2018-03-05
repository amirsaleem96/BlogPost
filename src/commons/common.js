/**
 * @description converts a variable to pure integer;
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

/**
 * @description remove repetition of elements in an array;
 * @param {Array} arr 
 */
export const getUnique = (arr = []) => {
    // check if array is not of type object
    if(typeof arr != 'object'){
        return [];
    }
    // check if an array contains another array or object, return empty array
    if(arr.length != 0 && typeof arr[0] == 'object'){
        return [];
    }
    let helper = [];
    arr.map((elem, index) => {
        if(helper.indexOf(elem) === -1){
            helper.push(elem);
        }
    });
    // return array with unique elements
    return helper;
}