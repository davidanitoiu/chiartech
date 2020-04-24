import React, { useState } from "react"
import {
  actions,
  FlowChart,
  LinkDefault,
  ILinkDefaultProps,
  ILinkBaseInput,
  INodeInnerDefaultProps,
} from "@mrblenny/react-flow-chart"

function Pipeline() {
  const chartSimple = {
    offset: {
      x: 0,
      y: 0,
    },
    nodes: {
      node1: {
        id: "node1",
        position: {
          x: 200,
          y: 100,
        },
        ports: {
          port1: {
            id: "port1",
            type: "left",
          },
          port2: {
            id: "port2",
            type: "right",
          },
        },
        properties: {
          title: "DEV",
        },
      },
      node2: {
        id: "node2",
        position: {
          x: 500,
          y: 100,
        },
        ports: {
          port1: {
            id: "port1",
            type: "left",
          },
          port2: {
            id: "port2",
            type: "right",
          },
        },
        properties: {
          title: "TUD",
        },
      },
    },
    links: {
      link1: {
        id: "link1",
        from: {
          nodeId: "node1",
          portId: "port2",
        },
        to: {
          nodeId: "node2",
          portId: "port1",
        },
      },
    },
    selected: {},
    hovered: {},
  }

  console.log({ actions })

  const NodeInnerCustom = ({ node }: INodeInnerDefaultProps) => {
    const {title} = node.properties

    return (
      <div className={"environmentCard"}>
        <p>{title}</p>
      </div>
    )
  }

  const handleLinkClick = (e: ILinkBaseInput) => console.log({ e })
  const LinkCustom = ({ ...props }: ILinkDefaultProps) => (
    <div className={"environmentCard-link"}>
      <LinkDefault {...props} onLinkClick={handleLinkClick} />
    </div>
  )

  return (
    <FlowChart
      chart={chartSimple}
      callbacks={actions}
      Components={{
        NodeInner: NodeInnerCustom,
        Link: LinkCustom,
      }}
    />
  )
}

export default Pipeline
