import {IconPluginPosition, PluginType, ThemeColor, ViewPlugin} from 'oflow-interface'
import {FunctionComponent} from 'react';
import {OfpApi, DrawerPlugin} from "oflow-interface";
import {loadApi} from "./api";
import Drawer from "./drawer";
import React from 'react';


export default class Plugin implements DrawerPlugin {

  name: string = 'project-drawer'
  version: string = '0.0.1'
  description = 'A cube for easy camera angle control'
  
  type: PluginType = PluginType.DRAWER
  theme: ThemeColor = ThemeColor.BLUE
  
  onLoad(api: OfpApi) {
    loadApi(api)
  }
  onActivate() {
  
  }
  onDeactivate() {
  
  }
  onDispose() {
  
  }

  weight = 50
  title = 'Project'
  tip = 'Manage project information.'
  position = IconPluginPosition.TOP_LEFT
  group = 'base'
  label = 'Project'
  color = ThemeColor.GREEN

  icon = () => {
    return <span></span>
  }

  drawer = Drawer

  onRender() {

  }
  onEffect() {

  }

  onIconClickRouter(e: MouseEvent) {
    return ''
  }
  onIconContextMenu(e: MouseEvent) {

  }

  onTitleClick() {

  }
  onTitleContextMenu() {

  }
}