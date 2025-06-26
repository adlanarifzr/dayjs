import { PluginFunc } from '@adlanarifzr/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@adlanarifzr/dayjs' {
  interface Dayjs {
    week(): number

    week(value : number): Dayjs
  }
}
