import {IconPluginPosition, PluginType, ThemeColor} from 'oflow-interface'
import {DrawerPlugin} from "oflow-interface";
import {loadApi} from "./api";
import ProjectDrawerView from "./drawer/drawer";
import React from 'react';


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
    return <span className='material-symbols-rounded'>browse_activity</span>
  }

  drawer = ProjectDrawerView
}


(window as any).ofpConnector.load(new Plugin())
