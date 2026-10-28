import { spawnSync } from "node:child_process";

const token = process.env.CLAUDE_CODE_OAUTH_TOKEN;
if (!token) throw new Error("OAuth secret unavailable");
const result = spawnSync(
  "claude",
  ["-p", "Reply with exactly READY. Do not use tools.", "--tools", "", "--permission-prompts", "none", "--output-format", "json", "--no-session-persistence", "--max-budget-usd", "0.05"],
  { encoding: "utf8", env: { ...process.env, CLAUDE_CODE_OAUTH_TOKEN: token }, stdio: ["ignore", "pipe", "pipe"] },
);
let parsed;
try {
  parsed = JSON.parse(result.stdout);
} catch {
  console.log(JSON.stringify({ probe: "unreadable_result", exit_status: result.status }));
  process.exit(1);
}
const summary = {
  probe: parsed.is_error ? "rejected" : "accepted",
  api_error_status: parsed.api_error_status ?? null,
  api_error_origin: parsed.api_error_origin ?? null,
  terminal_reason: parsed.terminal_reason ?? null,
};
console.log(JSON.stringify(summary));
if (parsed.is_error || result.status !== 0) process.exit(1);