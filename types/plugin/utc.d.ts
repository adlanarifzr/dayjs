import { PluginFunc, ConfigType, OptionType } from '@adlanarifzr/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@adlanarifzr/dayjs' {
  interface Dayjs {

    utc(keepLocalTime?: boolean): Dayjs

    local(): Dayjs

    isUTC(): boolean

    utcOffset(offset: number | string, keepLocalTime?: boolean): Dayjs
  }

  export function utc(config?: ConfigType, format?: OptionType, strict?: boolean): Dayjs
}
