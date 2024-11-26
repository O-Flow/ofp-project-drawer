import Plugin from './plugin'
import {BasePlugin} from "oflow-interface";

window.ofpConnector.load(new Plugin())

declare global {
  interface Window {
    ofpConnector: {
      load: (plugin: BasePlugin) => void
    }
  }
}
