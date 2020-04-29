import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { SidebarItem } from "./SidebarItem"
import { useSelector } from "react-redux"
import { map, difference } from "lodash"
import { Drawer, List } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

function Sidebar() {
  const environments = useSelector(state => state.pipeline.environments)
  const chartNodes = useSelector(state => state.pipeline.chart.nodes)

  const [diff, setDiff] = useState<Array<string>>([])

  useEffect(() => {
    const nodeTitles = map(chartNodes, node => {
      return node.properties.title
    })

    setDiff(difference(environments, nodeTitles))
  }, [chartNodes])

  const sidebarItemProps = {
    type: "input-output",
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
  }

  return (
    <Drawer variant="permanent" anchor="right">
      <List>
        {diff.map((environment, i) => (
          <SidebarItem
            key={i}
            properties={{
              title: environment,
            }}
            {...sidebarItemProps}
          />
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
