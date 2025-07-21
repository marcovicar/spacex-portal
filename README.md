# 🚀 SpaceX Portal

A modern and responsive web application that displays information about SpaceX launches and rockets using the official SpaceX GraphQL API. Built with Next.js 15, Apollo Client, TailwindCSS and tested with Jest and Cypress.

---

## ✨ Features

- 🛰️ Explore all SpaceX launches and view detailed information
- 🚀 Browse detailed data of all SpaceX rockets
- 🌐 Client-side and Server-side rendering strategies
- 📱 Responsive UI optimized for mobile and desktop
- ✅ Unit and End-to-End tests included
- 💡 Smooth animations and skeleton loaders for better UX

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **GraphQL Client**: [Apollo Client](https://www.apollographql.com/docs/react/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) + [tailwindcss-animate](https://github.com/https://github.com/joe-bell/tailwindcss-animate)
- **Data Source**: [SpaceX GraphQL API](https://main--spacex-l4uc6p.apollographos.net/graphql) [SpaceX GraphQL API GitHub](https://github.com/apollographql/SpaceX)
- **Testing**:
    - Unit: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
    - E2E: [Cypress](https://www.cypress.io/)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/spacex-portal.git
cd spacex-portal
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open http://localhost:3000 in your browser to see the application running locally.

### 4. Run unit tests
We use Jest with React Testing Library for unit tests.
```bash
npm run test
```
You can find tests inside the src/__tests__ folder

### 5. Run E2E tests (Cypress)
We use Cypress for end-to-end testing. To run it:
```bash
npm run cypress
```
Cypress will open its interactive test runner.

### 6. Build for production
We use Cypress for end-to-end testing. To run it:
```bash
npm run build
```
After that, you can run:
```bash
npm start
```
