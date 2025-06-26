import { PluginFunc } from '@adlanarifzr/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@adlanarifzr/dayjs' {
  export function updateLocale(localeName: string, customConfig: Record<string, unknown>): Record<string, unknown>
}
