# iReactTS v2.0

`iReactTS` is a modern React TypeScript starter template featuring **React 19**, **TypeScript 5**, and **Tailwind CSS 3**. Built with zero-configuration bundling using **Parcel**.

## ✨ Features

- **⚛️ React 19:** Latest React with new features and performance improvements
- **📘 TypeScript 5:** Advanced type safety and modern JavaScript features
- **🎨 Tailwind CSS 3:** Utility-first CSS framework with latest updates
- **📦 Parcel 2:** Fast, zero-configuration web application bundler
- **🔧 Modern Tooling:** ESLint-ready configuration and optimized build setup
- **🚀 Performance:** Optimized for modern browsers with tree-shaking

## 🔧 Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js:** v18.0.0 or higher [Download and install](https://nodejs.org/)
- **npm:** v8.0.0 or higher (comes with Node.js)

Optional:
- **Yarn:** [Install Yarn](https://yarnpkg.com/getting-started/install) if you prefer it over npm

## 🚀 Quick Start

### Using npx (Recommended)

Create a new React TypeScript app instantly:

```bash
npx ireactts <app-name>
```

This will:
- Clone the latest template
- Install all dependencies
- Set up your new React app in the `<app-name>` folder

Example:
```bash
npx ireactts my-awesome-app
cd my-awesome-app
npm start
```

### Manual Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/isurueranga-98/ireact.git
   cd ireact
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🎯 Available Scripts

- **`npm start`** - Start development server at `http://localhost:1234`
- **`npm run build`** - Build for production (outputs to `dist/`)
- **`npm run clean`** - Clean build artifacts and cache

## 📁 Project Structure

```
ireact/
├── 📁 bin/                     # CLI tools
│   └── cli.js                  # NPX installation script
├── 📁 public/                  # Static assets
│   ├── favicon.ico            # App favicon
│   └── index.html             # HTML template
├── 📁 src/                     # Source code
│   ├── App.tsx                # Main React component
│   ├── index.tsx              # Application entry point
│   ├── index.css              # Global styles with Tailwind
│   └── ireact.svg             # App logo
├── 📄 package.json            # Dependencies and scripts
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 tailwind.config.js      # Tailwind CSS configuration
└── 📄 README.md               # This file
```

## 🎨 What's Included

### React 19 Features
- **New JSX Transform:** Automatic runtime for cleaner imports
- **Concurrent Features:** Improved performance and user experience
- **Server Components Ready:** Prepared for future SSR implementations

### TypeScript 5 Configuration
- **Strict Mode:** Enhanced type checking for better code quality
- **Modern Module Resolution:** Bundler-compatible configuration
- **Path Mapping:** Clean import paths with `@/` alias

### Tailwind CSS 3
- **Latest Utilities:** Access to newest design tokens and utilities
- **Optimized Output:** Smaller bundle sizes with improved purging
- **Modern Color Palette:** Updated color system and design tokens

### Development Experience
- **Hot Module Replacement:** Instant updates during development
- **TypeScript Strict Mode:** Catch errors early with comprehensive type checking
- **Modern Browser Support:** ES2022 target for optimal performance

## 🌐 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📦 Deployment

Build your app for production:

```bash
npm run build
```

The optimized build will be available in the `dist/` directory, ready for deployment to any static hosting service.

### Popular Deployment Options
- **Vercel:** `vercel --prod`
- **Netlify:** Drag and drop `dist/` folder
- **GitHub Pages:** Upload `dist/` contents
- **AWS S3:** Sync `dist/` folder

## 🔄 Version 2.0 Updates

- ⬆️ **React 18 → 19:** Latest React with improved performance
- ⬆️ **TypeScript 5.6 → 5.9:** Enhanced type system
- ⬆️ **Tailwind CSS 3 → 4:** Modern utility classes and optimizations
- ⬆️ **Parcel 2.12 → 2.15:** Improved build performance
- 🔧 **Enhanced Configuration:** Optimized TypeScript and bundler settings
- 📝 **Better Documentation:** Comprehensive setup and usage guide

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Team for the amazing framework
- TypeScript Team for excellent tooling
- Tailwind CSS for the utility-first approach
- Parcel Team for zero-config bundling

---

**Happy coding! 🚀**
