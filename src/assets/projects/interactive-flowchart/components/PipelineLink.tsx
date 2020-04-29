import React from "react"
import {
  ILinkBaseInput,
  ILinkDefaultProps,
  LinkDefault,
} from "@mrblenny/react-flow-chart"

const handleLinkClick = (e: ILinkBaseInput) => console.log({ e })
const PipelineLink = ({ ...props }: ILinkDefaultProps) => <LinkDefault {...props} onLinkClick={handleLinkClick} />

export default PipelineLink