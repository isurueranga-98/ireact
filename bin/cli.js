// const {execSync} = require('child_process');

// const runCommand = command => {
//   try {
//     execSync(`${command}`, {stdio: 'inherit'});
//   }catch (e) {
//     console.error(`Failed to execute the ${command}`, e);
//     return false;
    
//   }
//   return true;
// }

// const repoName = process.argv[2];
// const gitCheckoutCommand = `git clone --depth 1 https://github.com/isurueranga-98/ireact ${repoName}`;
// const installDepsCommand = `cd ${repoName} && npm install`;

// console.log(`Cloning the repository ${repoName}...`);
// const checkedkOut = runCommand(gitCheckoutCommand);
// if (!checkedkOut) {
//   process.exit(1);
// }

// console.log(`Installing dependencies for ${repoName}...`);
// const installDeps = runCommand(installDepsCommand);
// if (!installDeps) {
//   process.exit(1);
// }

// console.log("Completed successfully!");
// console.log(`To start the project, run the following commands:\n cd ${repoName} && npm start`);


const { execSync } = require('child_process');

const runCommand = command => {
  try {
    console.log(`Running command: ${command}`);
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
  console.error('Please provide a repository name.');
  process.exit(1);
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/isurueranga-98/ireact ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository ${repoName}...`);
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
console.log(`To start the project, run the following commands:\n cd ${repoName} && npm start`);
