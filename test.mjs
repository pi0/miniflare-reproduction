import { fileURLToPath } from "node:url";

import { Miniflare } from "miniflare";

const mf = new Miniflare({
  modules: true,
  modulesRules: [{ type: "CompiledWasm", include: ["**/*.wasm"] }],
  scriptPath: fileURLToPath(new URL("./src/worker.mjs", import.meta.url)),
});

const res = await mf.dispatchFetch("http://localhost");

console.log(await res.text());

await mf.dispose();
