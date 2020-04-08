const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('The Action is: ', action);
    const ret = next(action);
    console.log('The New State is: ', ret);
    console.groupEnd();
    return ret;
};

export default logger