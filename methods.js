/**
 * Returns an array of methods defined for an object
 */
function methods(object) {
     return Object.keys(object).filter(key => typeof object[key] === 'function')
 }