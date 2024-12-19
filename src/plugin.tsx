import {IconPluginPosition, PluginType, ThemeColor} from 'oflow-interface'
import {OfpApi, DrawerPlugin} from "oflow-interface";
import {loadApi} from "./api";
import Drawer from "./drawer";
import React, {MouseEvent} from 'react';


export default class Plugin implements DrawerPlugin {

  id: string = 'project-drawer'
  name: string = 'project-drawer'
  version: string = '0.0.1'
  description = 'A cube for easy camera angle control'
  
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
  title = 'Project'
  tip = 'Manage project information.'
  position = IconPluginPosition.TOP_LEFT
  group = 'base'
  label = 'Project'
  color = ThemeColor.GREEN
  enabled = false

  icon = () => {
    return <span></span>
  }

  drawer = Drawer
}