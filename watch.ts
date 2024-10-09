import {$, type Subprocess} from 'bun'
import { watch } from "node:fs";
import build from './build'

let server: Subprocess | undefined = undefined;


const watcher = watch(
  `${import.meta.dir}/src/`,
  { recursive: true },
  async (event, filename) => {
    await $`clear`
    console.log(filename)
    if(server) {
      server.kill()
      server = await runServer()
    }
  },
);

server = await runServer()


process.on("SIGINT", () => {
    // close watcher when Ctrl-C is pressed
    console.log("Closing watcher...");
    watcher.close();
  
    process.exit(0);
  });

  async function runServer() {
    await build()
    return Bun.spawn(['bun', 'run', 'out/back/server.js'])
  }