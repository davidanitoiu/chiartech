import { Checkbox, Drawer, List, ListItem, ListItemText } from "@material-ui/core"
import { IChart, INode } from "@mrblenny/react-flow-chart"
import { difference, isEmpty, map } from "lodash"
import React, { useMemo } from "react"
import { environments } from "../utils"
import { SidebarItem } from "./SidebarItem"

type Sidebar = {
  chart: IChart
}

function Sidebar({ chart }: Sidebar) {
  const { nodes, selected } = chart
  const diff = useMemo(() => {
    const nodeTitles = map(nodes, (node: INode) => node.properties.name)
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

  const [state, setState] = React.useState({
    autoDeploy: false,
    underChangeControl: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <Drawer variant="permanent" anchor="right">
      {isEmpty(selected) ? (
        <List>
          {diff.map((environment, i) => (
            <SidebarItem
              key={i}
              properties={{
                ...environment,
              }}
              {...sidebarItemProps}
            />
          ))}
        </List>
      ) : (
        <div>
          <List>
            <ListItem>
              <ListItemText
                primary={"Name"}
                secondary={nodes[selected.id!].properties.name}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={"OS"}
                secondary={nodes[selected.id!].properties.os}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={"Kernel"}
                secondary={nodes[selected.id!].properties.kernel}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={"Host"}
                secondary={nodes[selected.id!].properties.host}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={"Auto Deploy"}
                secondary={
                  <Checkbox
                    checked={state.autoDeploy}
                    onChange={handleChange}
                    name="autoDeploy"
                    color="primary"
                  />
                }
              />
            </ListItem>
          </List>
        </div>
      )}
    </Drawer>
  )
}

export default Sidebar
