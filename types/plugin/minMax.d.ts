import { PluginFunc } from '@adlanarifzr/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@adlanarifzr/dayjs' {
  export function max(dayjs: [Dayjs, ...Dayjs[]]): Dayjs
  export function max(noDates: never[]): null
  export function max(maybeDates: Dayjs[]): Dayjs | null

  export function max(...dayjs: [Dayjs, ...Dayjs[]]): Dayjs
  export function max(...noDates: never[]): null
  export function max(...maybeDates: Dayjs[]): Dayjs | null

  export function min(dayjs: [Dayjs, ...Dayjs[]]): Dayjs
  export function min(noDates: never[]): null
  export function min(maybeDates: Dayjs[]): Dayjs | null

  export function min(...dayjs: [Dayjs, ...Dayjs[]]): Dayjs
  export function min(...noDates: never[]): null
  export function min(...maybeDates: Dayjs[]): Dayjs | null
}
