const getInteger = (variable) => {
    if(typeof variable != 'number'){
        try {
            if(isNaN(parseInt(variable))) {
                return 0;
            } else {
                return parseInt(variable);
            }
        } catch (e) {
            return 0;
        }
    } else {
        return variable
    }
    return variable;
}