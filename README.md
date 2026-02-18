# Continuous Integration Playground

A hands-on repository for mastering GitHub Actions, Automated Testing, and DevSecOps best practices. This project demonstrates a complete CI pipeline from code quality to automated security scanning.

---

## Features & Learnings

### Automated Testing (Jest)

* Unit Testing: Implemented a suite of tests for core logic in src/operations.js.
* Code Coverage: Configured a 80% line coverage threshold in jest.config.js. If the code is not sufficiently tested, the CI build fails.
* PR Integration: Uses jest-coverage-report-action to comment a detailed coverage table directly on Pull Requests.

### Security & Governance

* Secret Scanning: Enabled to detect hardcoded credentials across the entire git history (tested with a dummy token in src/).
* CodeQL: Automated static analysis (SAST) to find vulnerabilities and coding errors.
* Dependabot: Automated dependency management. Configured via .github/dependabot.yml to perform weekly version updates for npm packages.
* CODEOWNERS: Defined ownership rules to ensure specific teammates are automatically requested for reviews on sensitive files.

### CI/CD Workflows

The pipeline in .github/workflows/unit-test-actions.yml automates the following on every Pull Request:

1. Environment Setup: Configures Node.js.
2. Dependency Management: Clean installs via npm install.
3. Validation: Runs the test suite and generates a coverage report to ensure no regressions are introduced.

---

## Getting Started

### Prerequisites

* Node.js
* npm

### Local Development

1. Install dependencies:
npm install
2. Run tests:
npm test
3. Check coverage:
Running npm test will generate a /coverage folder. Open index.html in your browser for a visual breakdown of line-by-line coverage.

---

## Project Structure

```text
├── .github/
│   ├── workflows/         # CI/CD pipeline definitions
│   ├── CODEOWNERS         # Review permissions and ownership
│   └── dependabot.yml     # Dependency update configuration
├── __test__/              # Jest test suites
├── src/                   # Source code logic
├── jest.config.js         # Jest configuration & thresholds
└── package.json           # Scripts and dev dependencies

```

---

### Key Takeaway

Setting up CI creates a safety net for the team. By combining Coverage Thresholds, Secret Scanning, and Automated Dependency Updates, we ensure the main branch remains stable, secure, and up-to-date.

---

Created by [WARHE8D](https://www.google.com/search?q=https://github.com/WARHE8D)
