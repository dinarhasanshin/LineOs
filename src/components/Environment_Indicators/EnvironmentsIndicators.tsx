import React, {FC, useEffect, useState} from 'react';
import s from './EnvironmentsIndicators.module.css';
import {BatteryIndicatorsType, CommunicationIndicatorsType, CommunicationLevelType, TimeIndicatorsType} from "../../types/types";



export const BatteryIndicator: FC<BatteryIndicatorsType> = ({battery_level, color}) => {

    useEffect(() => {
        setState({style: {'--color-battery': color}})
    }, [color])

    const [state, setState] = useState<any>({
        style: {'--color-battery': 'white'}
    })


    return (
        <div className={s.batteryIndicator} style={state.style}>
            <div className={s.level} style={{width: battery_level.toString() + '%'}}/>
        </div>
    );
};

export const CommunicationIndicator: FC<CommunicationIndicatorsType> = ({communication_level,color }) => {

    const [communicationLevel, setCommunicationLevel] = useState<CommunicationLevelType>({

        levels: [25, 50, 75, 100],
        height: [3, 5, 7, 9]

        })


    return (
        <div className={s.communication}>

            <div className={s.communicationIndicator}>
                {
                    communicationLevel.height.map((value, index) => (

                        <div key={index} className={s.communicationLevel} style={{height: value.toString() + 'px', backgroundColor: color} }>

                        </div>
                    ))
                }

            </div>

            <div className={s.communicationLevelName}>
                <span>5G</span>
            </div>
        </div>

    );
};

export const TimeIndicator: FC<TimeIndicatorsType> = ({color, time}) => {
    return (
        <div className={s.timeIndicator}>
            <span style={{color: color}}>{time}</span>
        </div>
    );
};