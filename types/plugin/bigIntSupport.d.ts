import { PluginFunc } from '@adlanarifzr/dayjs'

declare module '@adlanarifzr/dayjs' {
  interface ConfigTypeMap {
    bigIntSupport: BigInt
  }
  export function unix(t: BigInt): Dayjs
}

declare const plugin: PluginFunc
export = plugin
