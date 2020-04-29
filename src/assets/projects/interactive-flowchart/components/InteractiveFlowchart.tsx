import React, { Component } from "react"
import { actions, FlowChart } from "@mrblenny/react-flow-chart"
import PipelineNodeInner from "@components/pipeline/PipelineNodeInner"
import { chartSimple, validateLink } from "@assets/projects/interactive-flowchart/utils"
import { cloneDeep, mapValues } from "lodash"

class InteractiveFlowchart extends Component {
  state = cloneDeep(chartSimple)

  render() {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) => (...args: any) =>
      this.setState(func(...args))
    ) as typeof actions

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

export default InteractiveFlowchart
