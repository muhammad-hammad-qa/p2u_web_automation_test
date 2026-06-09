# P2U Web Automation Test

A Cypress-based end-to-end test automation framework for the **P2U Wallet** web application. Covers critical user flows including registration, login, and product purchase, with a clean Page Object Model structure and CI/CD integration via GitHub Actions and Jenkins.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [CI/CD Integration](#cicd-integration)
- [Test Coverage](#test-coverage)
- [Contributing](#contributing)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Cypress](https://www.cypress.io/) | E2E test framework |
| JavaScript | Test scripting language |
| Node.js / npm | Runtime & package management |
| Page Object Model | Test architecture pattern |
| GitHub Actions | Cloud CI pipeline |
| Jenkins | On-premise CI pipeline |

---

## Project Structure

```
p2u_web_automation_test/
│
├── .github/
│   └── workflows/          # GitHub Actions CI configuration
│
├── cypress/
│   ├── e2e/                # Test spec files
│   │   ├── login.spec.cy.js
│   │   ├── purchase.spec.cy.js
│   │   └── registration.spec.cy.js
│   │
│   ├── fixtures/           # Static test data (JSON)
│   │   ├── homePage.json
│   │   ├── loginData.json
│   │   ├── orderFormPage.json
│   │   ├── registrationData.json
│   │   └── urlData.json
│   │
│   ├── pageObjects/        # Page Object Model classes
│   │   ├── basePage.js
│   │   ├── homePage.js
│   │   ├── loginPage.js
│   │   ├── orderNowPage.js
│   │   ├── productDetailPage.js
│   │   ├── productListPage.js
│   │   └── registrationPage.js
│   │
│   ├── reports/            # Generated test reports
│   ├── screenshots/        # Auto-captured screenshots on failure
│   │
│   └── support/            # Cypress setup and custom commands
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js       # Cypress configuration
├── Jenkinsfile             # Jenkins pipeline definition
├── package.json
└── package-lock.json
```

---

## Prerequisites

- **Node.js** v14 or higher
- **npm** v6 or higher
- A supported browser (Chrome, Edge, Firefox, or Electron)

Verify your versions:
```bash
node --version
npm --version
```

---

## Installation

**1. Clone the repository**
```bash
git clone https://github.com/muhammad-hammad-qa/p2u_web_automation_test.git
cd p2u_web_automation_test
```

**2. Install dependencies**
```bash
npm install
```

---

## Running Tests

### Open Cypress Test Runner (interactive mode)
```bash
npx cypress open
```

### Run all tests headlessly
```bash
npx cypress run
```

### Run a specific spec file
```bash
npx cypress run --spec "cypress/e2e/login.spec.cy.js"
```

### Run tests in a specific browser
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

---

## CI/CD Integration

### GitHub Actions
The pipeline is configured in `.github/workflows/`. Tests run automatically on every push and pull request to the `main` branch. Screenshots of failed tests are uploaded as artifacts for easy debugging.

### Jenkins
The `Jenkinsfile` at the project root defines the Jenkins pipeline. To use it:

1. Create a new Pipeline job in Jenkins.
2. Point the job at this repository.
3. Jenkins will automatically detect the `Jenkinsfile` and execute the pipeline stages.

---

## Test Coverage

| Test Suite | Description |
|---|---|
| `login.spec.cy.js` | Valid login, invalid credentials, edge cases |
| `registration.spec.cy.js` | New user registration flow and form validations |
| `purchase.spec.cy.js` | Product browsing, order form submission, purchase flow |

Test data is externalized in `cypress/fixtures/` for easy maintenance without touching test code.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add: description of change"`
4. Push the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

Please follow the existing Page Object Model pattern when adding new tests — selectors and actions belong in `pageObjects/`, assertions in `e2e/`.

---

> **Author:** [muhammad-hammad-qa](https://github.com/muhammad-hammad-qa)
