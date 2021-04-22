import * as cp from "child_process";
import * as path from "path";
import * as process from "process";

// shows how the runner will run a javascript action with env / stdout protocol
test("test runs", () => {
  const np = process.execPath;
  const ip = path.join(__dirname, "..", "lib", "main.js");
  const options: cp.ExecFileSyncOptions = {
    env: {},
  };

  // eslint-disable-next-line no-console
  console.log(cp.execFileSync(np, [ip], options).toString());
});
