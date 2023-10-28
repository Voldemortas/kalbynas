export default function argumentsParser(
  args: string[],
  key: string
): string | undefined {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === key) {
      return args[i + 1]
    }
  }
  return undefined
}

