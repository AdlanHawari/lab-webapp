export default function ObjectReducer(thisIsObject, clearKey){
    return (
        thisIsObject = Object.keys(thisIsObject).filter(key =>
        key !== clearKey).reduce((obj, key) =>
        {
            obj[key] = thisIsObject[key];
            return obj;
        }, {}
        )
    )
}