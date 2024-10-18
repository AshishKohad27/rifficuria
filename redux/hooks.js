import { useDispatch, useSelector } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

// Example usage
// const { value, data, loading, error } = useAppSelector((state) => state.auth);

/*
Define Custom Hooks
While it's possible to use useDispatch and useSelector directly in each component,
it's better to create custom versions for usage in your application. This avoids
the need to import types repeatedly and simplifies the code.

By defining these hooks in a separate file such as app/hooks.js, you can easily
import them into any component that needs to use the hooks without risking circular
import dependency issues.
*/
