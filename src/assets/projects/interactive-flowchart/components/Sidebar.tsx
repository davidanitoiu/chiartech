import { Drawer, List, ListItem, ListItemText } from "@material-ui/core"
import { IChart, INode } from "@mrblenny/react-flow-chart"
import { difference, isEmpty, map } from "lodash"
import React, { useMemo } from "react"
import { SidebarItem } from "./SidebarItem"

type Sidebar = {
  chart: IChart
}

function Sidebar({ chart }: Sidebar) {
  const environments = ["Dev", "Acc", "Test", "Prod"]
  const { nodes, selected } = chart

  const diff = useMemo(() => {
    const nodeTitles = map(nodes, (node: INode) => node.properties.title)
    return difference(environments, nodeTitles)
  }, [nodes])

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
      {isEmpty(selected) ? (
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
      ) : (
        <div>
          <List>
            <ListItem>
              <ListItemText primary={"Title"} secondary={nodes[selected.id!].properties.title}/>
            </ListItem>
          </List>
        </div>
      )}
    </Drawer>
  )
}

export default Sidebar
