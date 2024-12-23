import React from "react";
import {AntCheckbox, AntColor, AntNumber, AntSwitch, RsdInput, RsdTitle, useEffect, useState} from "../api";
import styles from './drawer.module.sass'
import {Vector3} from '@babylonjs/core'

export default function Drawer() {

  const [title, setTitle] = useState('')

  useEffect(() => {
    console.log(new Vector3(10, 20, 10))
  })

  return <div className={styles.drawer}>
    <RsdTitle
      title={'Base Information'}
    />
    <AntCheckbox
      value={false}
      onChange={value => console.log(value)}
    />
    <AntNumber
      value={1}
      onChange={value => console.log(value)}
    />
    <AntColor
      value={'#ffffff'}
      onColorChange={value => console.log(value)}
    />
    <AntSwitch
      value={false}
      onChange={value => console.log(value)}
    />
  </div>
}
