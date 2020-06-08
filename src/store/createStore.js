import { createStore, applyMiddleware } from "redux";
export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === "development"
      ? applyMiddleware(...middlewares)
      : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
