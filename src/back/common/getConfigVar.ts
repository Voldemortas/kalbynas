import parseArgs from './parseArgs.ts'

export default function getConfigVar(
  name: string,
  defaultValue: string | undefined = undefined
) {
  return parseArgs(`--${name}`) ?? Bun.env[name] ?? defaultValue
}

export function getConfigVars() {
  const pattern = /^--/
  const argvs = Bun.argv
    .filter((arg) => pattern.test(arg))
    .map((arg) => arg.split('=')[0].slice(2))
  const envs = Object.keys(Bun.env).concat(argvs)
  return envs.reduce((acc: {[key: string]: string | undefined}, cur) => {
    acc[cur] = getConfigVar(cur)
    return acc
  }, {})
}
