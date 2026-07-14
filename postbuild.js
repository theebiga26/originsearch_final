import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');
const clientPath = path.join(distPath, 'client');
const serverPath = path.join(distPath, 'server');

if (fs.existsSync(clientPath)) {
  // Recursively copy files from dist/client to dist
  function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  copyDir(clientPath, distPath);
  console.log('Copied client assets to dist root');

  // Copy/rename _shell.html to index.html
  const shellFile = path.join(distPath, '_shell.html');
  const indexFile = path.join(distPath, 'index.html');
  if (fs.existsSync(shellFile)) {
    fs.copyFileSync(shellFile, indexFile);
    console.log('Copied _shell.html to index.html');
  }

  // Remove the temporary client and server subfolders, and the old _shell.html
  try {
    fs.rmSync(clientPath, { recursive: true, force: true });
    fs.rmSync(serverPath, { recursive: true, force: true });
    const rootShellFile = path.join(distPath, '_shell.html');
    if (fs.existsSync(rootShellFile)) {
      fs.unlinkSync(rootShellFile);
    }
    console.log('Cleaned up client and server folders, and _shell.html');
  } catch (err) {
    console.error('Error during cleanup:', err);
  }
} else {
  console.warn('dist/client directory not found!');
}
