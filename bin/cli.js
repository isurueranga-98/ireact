#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

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
  console.error('Please provide a project name.');
  console.log('Usage: npx ireactts <project-name>');
  process.exit(1);
}

console.log('🚀 Creating your new React TypeScript app...\n');

const gitCheckoutCommand = `git clone --depth 1 https://github.com/isurueranga-98/ireact ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
const cleanupCommand = `cd ${repoName} && rm -rf .git`;

console.log(`📦 Cloning iReactTS template into '${repoName}'...`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(1);
}

console.log(`🧹 Cleaning up template files...`);
const cleaned = runCommand(cleanupCommand);
if (!cleaned) {
  console.log('Warning: Could not clean up git history, but continuing...');
}

console.log(`📚 Installing dependencies...`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
  process.exit(1);
}

// Initialize new git repository
console.log(`🔧 Initializing new git repository...`);
const initGit = runCommand(`cd ${repoName} && git init`);
if (initGit) {
  runCommand(`cd ${repoName} && git add .`);
  runCommand(`cd ${repoName} && git commit -m "Initial commit - iReactTS v2.0"`);
}

console.log('\n✅ Project created successfully!\n');
console.log('🎉 Your new React TypeScript app is ready!\n');
console.log('📋 Next steps:');
console.log(`   cd ${repoName}`);
console.log('   npm start');
console.log('\n🔗 Learn more:');
console.log('   📖 Documentation: https://github.com/isurueranga-98/ireact');
console.log('   ⚛️ React 19: https://react.dev/');
console.log('   📘 TypeScript: https://www.typescriptlang.org/');
console.log('   🎨 Tailwind CSS: https://tailwindcss.com/');
console.log('\n🚀 Happy coding!');

