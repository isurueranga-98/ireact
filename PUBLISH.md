# Publishing Guide for iReactTS

This guide covers how to publish iReactTS v2.0 to npm.

## Prerequisites

1. **npm Account**: Make sure you have an npm account and are logged in
   ```bash
   npm login
   ```

2. **Git Repository**: Ensure your changes are committed and pushed to GitHub
   ```bash
   git add .
   git commit -m "Release v2.0.0 - React 19 and TypeScript 5 upgrade"
   git push origin main
   ```

## Pre-Publication Checklist

- [ ] All dependencies are updated to latest stable versions
- [ ] TypeScript compilation passes (`npm test`)
- [ ] Build process works correctly (`npm run build`)
- [ ] Development server runs without errors (`npm start`)
- [ ] README.md is updated with correct information
- [ ] CHANGELOG.md documents all changes
- [ ] Version number is updated in package.json (2.0.0)
- [ ] CLI script works correctly

## Publishing Steps

### 1. Verify Package Contents
```bash
npm pack --dry-run
```

This shows what files will be included in the published package.

### 2. Run Pre-Publish Checks
```bash
npm run prepublishOnly
```

This will run tests and build the project to ensure everything works.

### 3. Publish to npm
```bash
npm publish
```

For beta releases, you can use:
```bash
npm publish --tag beta
```

### 4. Create GitHub Release
After successful npm publication:

1. Go to your GitHub repository
2. Click "Releases" > "Create a new release"
3. Tag version: `v2.0.0`
4. Release title: `iReactTS v2.0.0 - React 19 & TypeScript 5`
5. Copy content from CHANGELOG.md for the description
6. Publish the release

## Post-Publication

### 1. Test Installation
Test that users can install your package:
```bash
npx ireactts@latest test-app
cd test-app
npm start
```

### 2. Update Documentation
Ensure all documentation references the correct version:
- GitHub README
- npm page
- Any external documentation

### 3. Announce the Release
- Social media
- Dev communities
- GitHub Discussions

## Troubleshooting

### Common Issues

1. **"Package already exists"**
   - Check if version number was incremented
   - Use `npm version patch/minor/major` to increment

2. **"You do not have permission"**
   - Ensure you're logged into the correct npm account
   - Check if you have publish permissions for the package

3. **"Files not included"**
   - Check `.npmignore` or `files` field in package.json
   - Use `npm pack --dry-run` to preview

### Version Management

For future updates:
```bash
# Patch version (2.0.1) - Bug fixes
npm version patch

# Minor version (2.1.0) - New features
npm version minor

# Major version (3.0.0) - Breaking changes
npm version major
```

## Support

If you encounter issues during publishing:
1. Check npm status: https://status.npmjs.org/
2. Review npm documentation: https://docs.npmjs.com/
3. Contact npm support if needed
