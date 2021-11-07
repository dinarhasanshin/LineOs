export type BatteryIndicatorsType = {
    battery_level: number,
    color: string
}
export type CommunicationIndicatorsType = {
    communication_level: number,
    color: string
}

export type CommunicationLevelType ={
    levels: Array<number>
    height: Array<number>
}

export type TimeIndicatorsType = {
    time: string,
    color: string
}
