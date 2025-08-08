export const formatTitleMiddleware = (store) => (next) => (action) => {
  const timestampMap = {
    ADD_TODO: "Added at 2025-08-07",
    EDIT_TODO: "Edited at 2025-08-07"
  };

  if (timestampMap[action.type]) {
    console.log(`2:- In the Middleware of ${action.type}`);
    const newAction = {
      ...action,
      value: `${timestampMap[action.type]}: ${action.value}`
    };
    return next(newAction);
  }

  if (action.type === "DELETE_TODO" || action.type === "TOGGLE_TODO") {
    console.log(`2:- In the Middleware of ${action.type}`);
  }

  return next(action);
};
