import {IconPluginPosition, PluginType, ThemeColor} from 'oflow-interface'
import {DrawerPlugin} from "oflow-interface";
import {loadApi} from "./api";
import React from 'react';
import Drawer from "./drawer/drawer";


export default class Plugin implements DrawerPlugin {

  id: string = 'project-drawer'
  name: string = 'project-drawer'
  version: string = '0.0.1'
  description = 'Basic information will primarily be used to present details on list pages.'

  type: PluginType = PluginType.DRAWER
  theme: ThemeColor = ThemeColor.BLUE

  async onLoad() {
    loadApi()
  }
  async onActivate() {

  }
  async onDeactivate() {

  }
  async onDispose() {

  }

  weight = 50
  title = 'Project Information'
  tip = 'Manage project information.'
  position = IconPluginPosition.TOP_LEFT
  group = 'base'
  label = 'Project'
  color = ThemeColor.GREEN
  enabled = false

  icon = () => {
    return <span className='material-symbols-rounded'>topic</span>
  }

  drawer = Drawer
}
