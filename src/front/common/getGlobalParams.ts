import type {ALTERNATES_TYPE} from 'build/config.ts'

type globalParamsType<T> = {
  locale: ALTERNATES_TYPE
} & T

export default function getGlobalParams<T>() {
  //@ts-ignore globalParams are from the html file
  return globalParams as globalParamsType<T>
}
