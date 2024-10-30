# React Boilerplate: High-Performance, Scalable Applications

This boilerplate is designed for developers who need to quickly set up a scalable and high-performance React application. It integrates modern tools, aiming to provide an optimized and efficient development environment right out of the box.

## Project Structure (main files)

```markdown
📦 template-react-tailwind-css/
├── 📂 .husky/
├── 📂 .vscode/
├── 📂 docs/ /* File with project documentation */
├── 📂 public/
│ ├── 📂 assets/
│ │ ├── 📂 images/
│ ├── 📄 mockServiceWorker.js
├── 📂 src/
│ ├── 📂 @types/
│ ├── 📂 components/
│ │ ├── 📂 app/ /* Global components used by the application once */
│ │ ├── 📂 ui/ /* Global components used by the entire application */
│ ├── 📂 constants/ /* Global application constants */
│ ├── 📂 features/ /* Each “feature”, such as auth, has a small “src” inside it, for the "feature" created */
│ │ ├── 📂 auth/
│ │ │ ├── 📂 components/
│ │ │ ├── 📂 hooks/
│ │ │ ├── 📂 services/
│ │ │ ├── 📂 types/
│ ├── 📂 HOC/
│ ├── 📂 hooks/ /* Global application hooks */
│ ├── 📂 layouts/ /* Application layouts */
│ ├── 📂 libs/ /* Library configurations */
│ ├── 📂 styles/ /* Global application styles */
│ ├── 📂 utils/ /* Global application utilities */
│ ├── 📂 pages/
│ │ ├── 📄 SignIn.tsx
│ ├── 📂 router/
│ │ ├── 📄 index.ts /* Routes supplier */
│ │ ├── 📂 config
│ │ │ ├── 📄 route.types.ts /* Route types */
│ │ │ ├── 📄 routePaths.ts /* Route paths */
│ │ │ ├── 📄 app.routes.ts /* Personalized routes with icons and titles */
│ │ │ ├── 📄 routes.ts /* Application routes */
│ │ │ ├── 📄 routesNavigationToConfig.ts /* Method that undoes customized routes */
│ ├── 📄 env.ts /* Type-validated environment variables */
│ ├── 📄 main.ts
```

## Node.js Version

This project is compatible with Node.js versions `>= 20.0.0`. While it may work with older versions, it's recommended to use the latest LTS (Long Term Support) version for optimal performance and compatibility.

## ☕ Useful Commands

- **Start the development server**: Launches the app in development mode.
  ```bash
    npm run dev
  ```
- Build the project: Prepares the app for production by bundling it.
  ```bash
    npm run build
  ```
- Run tests: Executes the test suite.
  ```bash
    npm run test
  ```
- Generate test coverage: Provides test coverage reports.
  ```bash
    npm run coverage
  ```

## :books: Technologies Used

The project leverages the following technologies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Router DOM](https://reactrouter.com/): Declarative routing for React applications.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind](https://tailwindcss.com/): Rapidly build modern websites without ever leaving your HTML.
- [Zustand](https://github.com/pmndrs/zustand): A small, fast, and scalable state management library for React.
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
- [Vite](https://vitejs.dev/): A fast build tool and development server for modern web projects.
- [Vitest](https://vitest.dev/): A Vite-native testing framework.
- [Jest](https://jestjs.io/): A delightful JavaScript testing framework with a focus on simplicity.
- [Testing Library](https://testing-library.com/): Simple and complete testing utilities for React components.
- [MSW (Mock Service Worker)](https://mswjs.io/): API mocking library for testing and development.
- [Husky](https://typicode.github.io/husky): Git hooks made easy, enabling automation of tasks on Git commits.
- [ESLint](https://eslint.org/): A static code analysis tool to identify problematic patterns.
- [Prettier](https://prettier.io/): An opinionated code formatter for consistent code style.
- [Lucide React](https://lucide.dev/): A collection of beautiful & consistent open-source icons for React.



## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch:
   ```bash
     git checkout -b <branch_name>
   ```
3. Make your changes and commit:
   ```bash
     git checkout -b <branch_name>
   ```
4. Push the changes:
   ```bash
     git checkout -b <branch_name>
   ```
5. Open a pull request.
  For more detailed instructions, check the [GitHub guide on pull requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## :page_facing_up: License

This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.

---

Made with :heart: and code by [Marcos Santos](https://github.com/MarcosSantosDev).

