import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import pipeline from "./reducers/pipeline";
import { useDispatch } from "react-redux";

const reducer = {
    pipeline,
};

export const store = configureStore(
    {
        reducer,
        middleware: getDefaultMiddleware({
            serializableCheck: false //required. pipeline actions are non-serializable
        }),
        devTools: window.location.hostname === 'localhost'
    });

export type PipelineState = ReturnType<typeof store.getState>
export type PipelineDispatch = typeof store.dispatch
export const usePipelineDispatch = () => useDispatch<PipelineDispatch>()