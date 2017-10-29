export default dummyMiddleware = store => next => action => {
    setTimeout(() => next(action), 5000)
    // next(action)
}