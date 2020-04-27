import { FlowChart } from "@mrblenny/react-flow-chart"
import * as actions from "@mrblenny/react-flow-chart/src/container/actions"
import { cloneDeep, mapValues } from "lodash"
import React, { Component } from "react"
import PipelineNodeInner from "./pipeline-components/PipelineNodeInner"
import chartSimple from "./pipelineChart"
import { validateLink } from "./utils/validateLink"

class Pipeline extends Component {
  state = cloneDeep(chartSimple)

  render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func) =>
      (...args) => this.setState(func(...args)))

  return (
    <>
      <FlowChart
        chart={chart}
        callbacks={stateActions}
        Components={{
          NodeInner: PipelineNodeInner,
        }}
        config={{
          validateLink,
        }}
      />
    </>
  )
      }
}

export default Pipeline
