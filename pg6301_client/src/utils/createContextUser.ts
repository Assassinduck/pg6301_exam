import { Context, useContext } from "react";

export const createContextUser = <TValue>(context: Context<TValue>) => () => {
    const ctx = useContext(context);
    if (!ctx) throw new Error(`context ${context.displayName} must be provided before use`);
    return ctx as NonNullable<TValue>;
}