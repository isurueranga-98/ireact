# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-09-02

### 🚀 Major Updates

#### Added
- **React 19 Support**: Upgraded from React 18 to React 19
  - New JSX transform for improved performance
  - Enhanced concurrent features
  - Better TypeScript integration
  
- **TypeScript 5.9**: Latest TypeScript with enhanced features
  - Improved type inference
  - Better module resolution
  - Enhanced error messages

- **Tailwind CSS 3.4**: Latest stable utility framework
  - Enhanced performance and reliability
  - Complete compatibility with React 19
  - Smaller bundle sizes with improved optimization

- **Enhanced CLI Experience**: Improved `npx ireactts` command
  - Better error handling
  - Progress indicators
  - Automatic git initialization
  - Helpful next steps guidance

- **Modern Configuration**: Updated all config files
  - Optimized TypeScript configuration
  - Modern module resolution
  - Enhanced Parcel configuration

#### Changed
- **Package Structure**: Reorganized for better maintainability
- **Documentation**: Comprehensive README with examples
- **Build Performance**: Faster builds with optimized configurations
- **Developer Experience**: Enhanced error messages and debugging

#### Removed
- **Legacy Dependencies**: Removed outdated packages
- **Deprecated APIs**: Updated to use latest React patterns

### 📦 Dependencies

#### Updated
- `react`: `^18.3.1` → `^19.1.1`
- `react-dom`: `^18.3.1` → `^19.1.1`
- `@types/react`: `^18.3.5` → `^19.1.12`
- `@types/react-dom`: `^18.3.0` → `^19.1.9`
- `typescript`: `^5.6.2` → `^5.9.2`
- `tailwindcss`: `^3.4.11` → `^3.4.17`
- `parcel`: `^2.12.0` → `^2.15.4`
- `@babel/core`: `^7.25.2` → `^7.26.0`
- `@types/node`: `^22.5.4` → `^22.10.5`
- `postcss`: `^8.4.45` → `^8.5.2`

#### Added
- Browser compatibility configuration
- Enhanced package metadata
- Node.js and npm version requirements

## [1.0.3] - 2024-XX-XX

### Initial Release
- React 18 with TypeScript support
- Tailwind CSS 3 integration
- Parcel bundler configuration
- Basic CLI tool for project scaffolding

---

**Note**: This project follows semantic versioning. Version 2.0.0 represents a major update with breaking changes due to React 19 and other major dependency updates.
