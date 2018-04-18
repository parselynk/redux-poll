const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ' + action)
    const returnValue = next(action)
    console.log('The new state: ' + store.getState())
    return returnValue
    console.groupEnd()
}

export default logger