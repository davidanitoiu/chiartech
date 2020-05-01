import { actions, IChart, IFlowChartProps, IFlowChartCallbacks } from "@mrblenny/react-flow-chart";
import { createAction, createReducer, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { mapValues } from "lodash";
import { useReducer, Reducer } from "react";
import { chartBase } from "./pipelineChart";

export const useChart = (chart = chartBase):[IChart, IFlowChartCallbacks] => {
  const initialState = chart;

  const executeChartAction = createAction('executeChartAction', );
  const reducer = createReducer(initialState, {
    [executeChartAction.type]: (state, { payload }) => payload.action(state),
  })

  const [state, dispatch] = useReducer<Reducer<IChart,AnyAction>>(reducer, initialState);

  const callbacks:IFlowChartCallbacks = mapValues(actions, (action: any) => (...args: any) =>
    dispatch(executeChartAction({ action: action(...args) }))
  ) as typeof actions

  return [state, callbacks];
}