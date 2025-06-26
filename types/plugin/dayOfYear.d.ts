import { PluginFunc } from '@adlanarifzr/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@adlanarifzr/dayjs' {
  interface Dayjs {
    dayOfYear(): number
    dayOfYear(value: number): Dayjs
  }
}
