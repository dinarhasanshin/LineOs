import React from 'react';
import { useSpring, animated } from '@react-spring/web'
import {useDrag, usePinch} from '@use-gesture/react'
import s from './App.module.css';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/lib/css/marvel-devices.min.css'
import {
    BatteryIndicator,
    CommunicationIndicator,
    TimeIndicator
} from "./components/Environment_Indicators/EnvironmentsIndicators";

export const App = () => {

  // const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
  //
  //
  //   const bind_ = usePinch(state => {
  //       const {
  //           da,            // [d,a] absolute distance and angle of the two pointers
  //           origin,        // coordinates of the center between the two touch event
  //           offset,        // [scale, angle] offsets (starts withs scale=1)
  //       } = state
  //   });
  // // Set the drag hook and define component movement based on gesture data
  // const bind = useDrag(({ active, swipe: [mx, my], cancel, intentional, velocity }) => {
  //   api.start({ x: active ? mx : 0, y: active ? my : 0, immediate: active })
  //     if (velocity[1] >= 1 && velocity[0] >= 1){
  //         console.log(intentional)
  //         console.log(velocity)
  //     }
  //
  // })

  return (
      <DeviceFrameset device={"iPhone X"} style={{margin: '0 auto'}} >

          <div className={s.app_container}>
              <header>
                  <div className={s.left_header}>
                      <TimeIndicator time={'10:06'} color={'white'}/>
                  </div>
                  <div className={s.right_header}>
                      <CommunicationIndicator communication_level={25} color={'white'}/>
                      <BatteryIndicator battery_level={95} color={'white'}/>
                  </div>
              </header>


          {/*    <animated.div {...bind()} style={{ x, y }} className={s.app_block} />*/}
          </div>
      </DeviceFrameset>

  );
}
