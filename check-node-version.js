const requiredMajor = 20;
const requiredMinor = 9;
const requiredPatch = 0;

const currentVersion = process.version;
const [major, minor, patch] = currentVersion.slice(1).split('.').map(Number);

const currentMajor = major || 0;
const currentMinor = minor || 0;
const currentPatch = patch || 0;

const isVersionValid = (
  currentMajor > requiredMajor ||
  (currentMajor === requiredMajor && currentMinor > requiredMinor) ||
  (currentMajor === requiredMajor && currentMinor === requiredMinor && currentPatch >= requiredPatch)
);

if (!isVersionValid) {
  console.error('\x1b[31m%s\x1b[0m', '❌ ERROR: Node.js version mismatch!');
  console.error('\x1b[33m%s\x1b[0m', `Required: Node.js >= ${requiredMajor}.${requiredMinor}.${requiredPatch}`);
  console.error('\x1b[33m%s\x1b[0m', `Current:  Node.js ${currentVersion}`);
  console.error('\x1b[36m%s\x1b[0m', '\nTo fix this issue:');
  console.error('\x1b[36m%s\x1b[0m', '1. Install Node.js v20.9.0 or higher (recommended: v24.13.0)');
  console.error('\x1b[36m%s\x1b[0m', '2. Using nvm: nvm install 24.13.0 && nvm use 24.13.0');
  console.error('\x1b[36m%s\x1b[0m', '3. Using nvm-windows: nvm install 24.13.0 && nvm use 24.13.0');
  console.error('\x1b[36m%s\x1b[0m', '4. Download from: https://nodejs.org/\n');
  process.exit(1);
}

console.log('\x1b[32m%s\x1b[0m', `✅ Node.js version check passed: ${currentVersion}`);
