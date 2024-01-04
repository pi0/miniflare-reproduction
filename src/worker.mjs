let [a, b] = ["-", "-"];

// Only works if one await happens!
a = await import("./mod-a.mjs").then((r) => r.sum(1, 2));
b = await import("./mod-b.mjs").then((r) => r.sum(3, 4));

export default {
  async fetch(request, env, ctx) {
    // This works (also in parallel)
    // a = await import("./mod-a.mjs").then((r) => r.sum(1, 2));
    // b = await import("./mod-b.mjs").then((r) => r.sum(3, 4));

    return new Response(JSON.stringify([a, b], null, 2), {
      headers: { "content-type": "application/json" },
    });
  },
};
