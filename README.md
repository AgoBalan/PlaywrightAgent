
# PlaywrightAgent

## Project Setup

To initialize Playwright in this project, run the following command:

```sh
npm init playwright@latest
```

Recommended options:
- **TypeScript** for language
- **tests** as the end-to-end tests folder
- **Add GitHub Actions workflow:** Yes
- **Install Playwright browsers:** Yes (or run `npx playwright install` manually)

After setup, your project structure will include:
- .github
- node_modules
- tests/
- package-lock.json
- package.json
- playwright.config.ts

---

## Agent Initialization

To enable Playwright Agents in VS Code, run:

```sh
npx playwright init-agents --loop=vscode
```

This creates chatmodes for agents under `.github/chatmodes/`:
- 🎭 generator.chatmode.md
- 🎭 healer.chatmode.md
- 🎭 planner.chatmode.md

After running this command, these three agents will appear in the Copilot Agent dropdown.

**Important:** In Copilot settings, enable the `playwright-test` tool.

---

## Seed File: `tests/seed.spec.ts`

The seed file is used for prerequisites (e.g., navigating to a specific page before tests). The Planner agent always checks for the seed file to perform required setup steps.

---

## Generating a Test Plan

1. Open the seed file in VS Code. This automatically sets the context in Copilot.
2. In Copilot, select the **Planner** agent and prompt:
    > Explore this app and create test plan for https://rahulshettyacademy.com/seleniumPractise/

A comprehensive test plan will be generated and saved as `GreenKart_TestPlan.md`.

---

## Creating Test Cases

1. Switch the agent to **Generator**.
2. Prompt:
    > Can you create test cases for ### 1.1 Add Product to Cart

Manual test cases will be created (copied to the `Manualtestcase` folder). You can then request Playwright automated test cases for the E2E flow.

---

## Running Test Cases

To run the test case for adding a product to the cart, use:

```sh
npx playwright test tests/add-product-to-cart.spec.ts --headed
```

If test cases fail, proceed to healing.

---

## Healing Failed Tests

1. Switch the agent to **Healer**.
2. Prompt:
    > add-product-to-cart.spec.ts failed. Please investigate and fix it

The Healer agent will fix all failures. All test cases should pass after healing.