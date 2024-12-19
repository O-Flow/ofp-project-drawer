import Plugin from './plugin'
import {BasePlugin, OfpApi} from "oflow-interface";

window.ofpConnector.load(new Plugin())

declare global {
  interface Window {
    ofpConnector: {
      load: (plugin: BasePlugin) => void
      ofpApi: OfpApi
    }
  }
}
