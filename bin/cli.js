#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute command: ${command}`);
    console.error(`Error: ${e.message}`);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
if (!repoName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/isurueranga-98/ireact ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the ${repoName}...`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(1);
}

console.log(`Installing dependencies for ${repoName}...`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
  process.exit(1);
}

console.log("Completed successfully!");
console.log(`To start the project, run the following commands:\n cd ${repoName} \n npm start`);
