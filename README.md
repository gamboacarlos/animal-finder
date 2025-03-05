# Animal Search Application

A React application for searching and displaying animal information with high test coverage and modern development practices.

## Features

- 🔍 Search functionality with real-time results
- 📱 Responsive design with modular components
- 🎨 Clean UI with CSS Modules
- 🔄 Custom hooks for search and results management
- 🧪 Comprehensive test coverage
- 📡 End-to-end testing with Cypress
- 📊 Type-safe development with TypeScript

## Technologies

- React
- TypeScript
- Vite (bundler)
- Vitest (unit testing)
- Cypress (E2E testing)
- CSS Modules
- pnpm (package manager)

## Installation

```bash
# Install dependencies
npm run install

# Start development server
npm run dev

# Build for production
npm run build
```

## Run Tests

```bash
# Run tests
npm run test

# Generate test coverage report
npm run test:coverage

# Start dev server and run Cypress tests
npm run test:e2e

# Start dev server and open Cypress Test Runner
npm run test:e2e:open
```

## Project Structure

```
src/
├── api/              # API services and models
├── components/       # Reusable UI components
│   ├── Card/
│   ├── Footer/
│   ├── Modal/
│   ├── Navbar/
│   ├── ResultItem/
│   ├── ResultsList/
│   ├── ResultsMessage/
│   ├── SearchButton/
│   └── SearchInput/
├── constants/        # Application constants
├── db/              # Data layer
├── hooks/           # Custom React hooks
├── pages/           # Page components
│   ├── HomePage/
│   └── ResultsPage/
└── utils/           # Utility functions

test/
├── components/      # Component tests
├── custom-render/   # Custom test utilities
├── hooks/          # Hook tests
├── mocks/          # Test mocks
└── pages/          # Page tests

e2e/
└── ResultsPage/    # Cypress tests for the ResultsPage
```

## Test Coverage

The project maintains excellent test coverage across all components and functionality:

- **Overall Coverage**: 99.36%
- **Statement Coverage**: 99.36%
- **Branch Coverage**: 97.91%
- **Function Coverage**: 95.23%
- **Line Coverage**: 99.36%

### Detailed Coverage Report

| Component Category    | Statement % | Branch % | Function % | Line % |
|----------------------|-------------|----------|------------|---------|
| Components           | 100         | 100      | 93.75     | 100     |
| Hooks                | 96.72       | 93.75    | 100       | 96.72   |
| Pages                | 100         | 100      | 100       | 100     |

### Test Statistics
- Total Test Files: 13
- Total Tests: 40
- Test Duration: 3.42s
- All tests passing ✅

## Cypress E2E Testing

The project uses Cypress v14.1.0 for end-to-end testing to ensure the application works correctly across different devices and user interactions.
