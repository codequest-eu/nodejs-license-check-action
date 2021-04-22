import * as core from "@actions/core";

// eslint-disable-next-line @typescript-eslint/require-await
async function run(): Promise<void> {
  try {
    // TODO: action logic
  } catch (error) {
    core.setFailed((error as Error).message);
  }
}

void run();
