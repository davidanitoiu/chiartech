import { IOnLinkCompleteInput, IChart, ILink, INode } from "@mrblenny/react-flow-chart";

export interface ValidateLink extends IOnLinkCompleteInput {
    chart: IChart
}

export interface ChartLinks {
    [key: string]: ILink
}

export interface PipelineChart extends IChart {
    nodes: {
        [key: string]: INode
    }
}