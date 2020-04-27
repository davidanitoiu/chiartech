import { actions, FlowChart } from "@mrblenny/react-flow-chart"
import { cloneDeep, mapValues } from "lodash"
import React, { Component } from "react"
import PipelineNodeInner from "@components/pipeline/PipelineNodeInner"
import chartSimple from "@utils/pipelineChart"
import { validateLink } from "@utils/validateLink"

class Pipeline extends Component {
  state = cloneDeep(chartSimple)

  render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func) =>
      (...args:any) => this.setState(func(...args))) as typeof actions

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
