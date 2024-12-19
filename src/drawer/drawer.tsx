import React, { FunctionComponent } from 'react';
import { RsdButton, RsdSelectableButton, RsdCheckbox, RsdColor, RsdNone, RsdTextarea, RsdTitle, Anchor } from "oflow-interface"

export default function Drawer() {

  return <div>
    <RsdButton
      text={'button'}
      onClick={()=>{}}
    />
    <RsdSelectableButton
      value={true}
      onChange={()=>{}}
      label='RsdSelectableButton'
    />
    {/*<RsdCheckbox*/}
    {/*  value={true}*/}
    {/*  onChange={()=>{}}*/}
    {/*  label='RsdCheckbox'*/}
    {/*/>*/}
    {/*<RsdColor*/}
    {/*  value={'#ffffff'}*/}
    {/*  onChange={()=>{}}*/}
    {/*  label={'RsdColor'}*/}
    {/*/>*/}
    <RsdNone
      label={'RsdNone'}
    />
    <RsdTextarea
      value={''}
      onChange={()=>{}}
    />
    {/*<RsdTitle*/}
    {/*  title={'RsdTitle'}*/}
    {/*/>*/}
    {/*<Anchor*/}
    {/*  list = {['All', 'Texture', 'Model', 'Image', 'Audio', 'Video', 'Materials', 'Others']}*/}
    {/*  value={1}*/}
    {/*  onSelectChange={(value: number) => {*/}
    {/*    console.log(value)*/}
    {/*  }}*/}
    {/*/>*/}
  </div>
}
