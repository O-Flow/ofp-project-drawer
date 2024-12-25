import React from "react";
import {
  AntCheckbox,
  AntColor,
  AntNumber,
  AntSwitch,
  Anchor,
  DrawerLoading,
  FileProgressBar,
  ProgressBar,
  UploadButtonAndList,
  RsdInput,
  RsdTitle,
  useEffect,
  useState,
  FlexGrow,
  RsdSelectableButton,
  RsdButton,
  RsdCheckbox,
  RsdColor,
  RsdDropdown,
  RsdFileSelect,
  RsdFileSelectButton,
  RsdMentions,
  RsdNone, RsdNumber, RsdNumberList, RsdSwitch
} from "../api";
import styles from './drawer.module.sass'
import {Vector3} from '@babylonjs/core'

export default function Drawer() {

  const [title, setTitle] = useState('')

  useEffect(() => {
    console.log(new Vector3(10, 20, 10))
  })

  return <div className={styles.drawer}>
    <RsdTitle
      title='Base Information'
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
    <Anchor
      list={['Anchor']}
      value={1}
      onSelectChange={value => console.log(value)}
    />
    <DrawerLoading/>
    <FileProgressBar
      size={''}
      value={0.5}
    />
    <FlexGrow/>
    <ProgressBar/>
    <UploadButtonAndList
      uploadText='Upload Files'
    />
    <RsdSelectableButton
      value={true}
      onChange={value => console.log(value)}
      label={'RsdSelectableButton'}
    />
    <RsdButton
      onClick={(e) => console.log(e)}
      text='RsdButton'
    />
    <RsdCheckbox
      value={true}
      onChange={value => console.log(value)}
      label='RsdCheckbox'
    />
    <RsdColor
      value='#ffffff'
      onChange={value => console.log(value)}
      label='RsdColor'
    />
    {/*<RsdDropdown*/}
    {/*  value='RsdDropdown'*/}
    {/*  onChange={value => console.log(value)}*/}
    {/*  label='RsdDropdown'*/}
    {/*/>*/}
    <RsdFileSelect
      label='RsdFileSelect'
      value='RsdFileSelect'
      onChange={value => console.log(value)}
      accept={['']}
    />
    <RsdFileSelectButton
      label='RsdFileSelectButton'
      value='RsdFileSelectButton'
      onChange={value => console.log(value)}
      accept={['']}
    />
    <RsdInput
      value='RsdInput'
      onChange={value => console.log(value)}
    />
    <RsdMentions
      value='RsdMentions'
      onChange={value => console.log(value)}
    />
    <RsdNone
      label='RsdNone'
    />
    <RsdNumber
      label='RsdFileSelectButton'
      value={1}
      onChange={value => console.log(value)}
    />
    <RsdNumberList
      keys={['']}
      value={[1]}
      onChangeIndex={value => console.log(value)}
    />
    <RsdSwitch
      label='RsdSwitch'
      value={true}
      onChange={value => console.log(value)}
    />
  </div>
}
