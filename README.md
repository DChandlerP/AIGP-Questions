# AIGP Practice Quiz

A modern, fast, and fully tested Web Application for practicing AIGP (AI Governance Professional) concepts.

## 🚀 Getting Started

First, install the project dependencies:
```bash
npm install
```

### Running the Application

To start the local development server:
```bash
npm run dev
```
This will start Vite on `http://localhost:5173`. Any changes to the code will instantly Hot Module Reload (HMR) in your browser.

### Building for Production

To create a highly optimized production build:
```bash
npm run build
```
You can preview the built production assets locally by running:
```bash
npm run preview
```

---

## 🧪 Testing Infrastructure

This project uses a dual testing strategy to ensure reliability: fast unit tests via **Vitest** and robust visual browser tests via **Playwright**.

### 1. Unit & Logic Tests (Vitest)
Unit tests run in an ultra-fast, "headless" JSDOM environment. They are perfect for testing pure JavaScript logic (`utils.js`) and verifying raw DOM states (`main.test.js`) without the overhead of booting a real browser.

**To run unit tests:**
```bash
npm run test
```
*Note: You can also use `npx vitest` to run them in "watch mode" while you code.*

### 2. End-to-End Visual Browser Tests (Playwright)
Playwright spins up an actual Chrome/Chromium browser engine, navigates to your Vite server, and clicks through the UI exactly like a real user would. It answers every question and verifies the final results page.

**To run E2E browser tests in the terminal:**
```bash
npm run test:e2e
```

**To visually watch Playwright control the browser (UI Mode):**
```bash
npm run test:e2e:ui
```
*When the Playwright UI dashboard opens, click the "Run" (▶️) button next to the `quiz.spec.js` file. A Chrome window will open, and you can watch it click through the entire quiz.*
