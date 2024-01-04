const mod = (await import("./sum.wasm")).default;
const instance = await WebAssembly.instantiate(mod);

export const sum = instance.exports.sum;
