const logginMiddleware = (store) => (next) => (action) => {
    next(action);
};

export default logginMiddleware;