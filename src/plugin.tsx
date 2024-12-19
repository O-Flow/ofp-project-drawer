import { IconPluginPosition, PluginType, ThemeColor } from 'oflow-interface'
import { OfpApi, DrawerPlugin } from "oflow-interface";
import { loadApi } from "./api";
import Drawer from "./drawer/drawer";
import React from 'react';
import {MouseEvent} from "react";


export default class Plugin implements DrawerPlugin {

  id: string = 'project-drawer'
  name: string = 'project-drawer'
  version: string = '0.0.1'
  description = 'Manage your project information.'
  enabled = false
  
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

  icon = () => {
    return <span className="material-symbols-rounded">
      browse_activity
    </span>
  }

  onEnabledChange(value: boolean, e: MouseEvent) {

  }

  drawer = Drawer

  onRender() {

  }

  onEffect() {

  }

  onIconClickRouter() {
    return ''
  }
  onIconContextMenu() {

  }

  onTitleClick() {

  }
  onTitleContextMenu() {

  }
}