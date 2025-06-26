import { PluginFunc } from '@adlanarifzr/dayjs'

declare module '@adlanarifzr/dayjs' {
  interface ConfigTypeMap {
    arraySupport: [number?, number?, number?, number?, number?, number?, number?]
  }
}

declare const plugin: PluginFunc
export = plugin
