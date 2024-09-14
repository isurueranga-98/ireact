# iReactApp

`iReactApp` is a React application developed using TypeScript and styled with Tailwind CSS. The project is bundled using Parcel.

## Features

- **React:** A popular JavaScript library for building user interfaces.
- **TypeScript:** Provides static type checking for JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **Parcel:** A fast, zero-configuration web application bundler.

## Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js:** [Download and install](https://nodejs.org/)
- **npm:** Comes with Node.js, but you can verify it by running `npm -v` in your terminal.

Optional:

- **Yarn:** [Install Yarn](https://classic.yarnpkg.com/en/docs/install/) if you prefer it over npm.

## Installation

To get started with this project, follow these steps:

## Using npx to Install the App

You can also install the app globally using `npx` if it's been published to npm. Use the following command to scaffold a new app:

```bash
npx ireactts <app-name>
```

This will clone the repository and set up your new React app in the folder `<app-name>`.

## Using Github

1. **Clone the repository:**

   ```bash
   git clone https://github.com/isurueranga-98/ireact.git
   cd ireact
   ```

2. **Install dependencies:**

   After navigating into the project folder, install the necessary packages by running:

   ```bash
   npm install
   ```

   Or, if you use Yarn:

   ```bash
   yarn install
   ```

## Running the Application

After the installation is complete, you can run the application in development mode:

1. **Start the development server:**

   ```bash
   npm start
   ```

   Or with Yarn:

   ```bash
   yarn start
   ```

   This will open the app in your default browser at `http://localhost:1234/` using Parcel's development server.

2. **Build for production:**

   If you want to build the app for production, run the following command:

   ```bash
   npm run build
   ```

   Or with Yarn:

   ```bash
   yarn build
   ```

   The built version of the app will be available in the `dist` directory.

## Folder Structure

After installation, your project will look like this:

```
ireact
├── bin/                 # include cli.js
├── node_modules/        # Installed npm packages
├── public/              # Public assets
├── src/                 # Source code (React components, styling, etc.)
│   └── index.tsx        # Application entry point
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # This file
```

## Contributing

Contributions are welcome! Feel free to open a Pull Request or file an issue.

## License

This project is licensed under the ISC License.
