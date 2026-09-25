import babysit, {type Config} from '@voldemortas/babysit'

const config: Config = {
  command: ['bun', 'run', 'src/index.ts'],
  workDir: import.meta.dir,
  env: {
    NODE_ENV: 'production',
  },
  web:
    Bun.env.BABYSIT_PORT === undefined
      ? undefined
      : {
          port: +Bun.env.BABYSIT_PORT,
          disableAuth:
            Bun.env.BABYSIT_USERNAME === undefined ||
            Bun.env.BABYSIT_USERPASS === undefined,
          userName: Bun.env.BABYSIT_USERNAME!,
          userPass: Bun.env.BABYSIT_USERPASS!,
        },
}

babysit(config)
