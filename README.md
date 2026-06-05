# 📦 Playwright Demo Automation Framework

A robust end-to-end test automation framework built using **Microsoft Playwright** for web application testing. This project supports cross-browser execution, reporting, and CI/CD integration.

---

## 🚀 Project Overview

- ✅ Web UI automation using Playwright  
- ✅ Cross-browser testing (Chromium, Firefox, WebKit)  
- ✅ Modular and scalable structure  
- ✅ Easy execution and reporting  
- ✅ CI/CD ready setup  

---

## 🛠️ Tech Stack

- Playwright  
- JavaScript / TypeScript  
- Node.js  
- Playwright Test Runner  

---

## 📁 Project Structure

    playwriteDemo/
    │
    ├── tests/                   # Test scripts (spec files)
    │   └── *.spec.js / *.spec.ts
    │
    ├── playwright.config.js     # Playwright configuration
    │
    ├── package.json             # Dependencies & scripts
    ├── package-lock.json        # Lock file
    │
    └── README.md                # Documentation

Optional (future enhancements):

    ├── pages/                   # Page Object Models
    ├── utils/                   # Helper utilities
    ├── test-data/               # Test data

---

## ⚙️ Prerequisites

- Node.js (v16+)
- npm
- Git

---

## 📥 Setup & Installation

### Clone the repository
    git clone https://github.com/averma247/playwriteDemo.git
    cd playwriteDemo

### Install dependencies
    npm install

### Install Playwright browsers
    npx playwright install

---

## ▶️ Test Execution

### Run all tests
    npx playwright test

### Run tests in headed mode
    npx playwright test --headed

### Run tests in specific browser
    npx playwright test --project=chromium

### Run a specific test file
    npx playwright test tests/example.spec.js

---

## 🧪 Debugging

### Debug mode
    npx playwright test --debug

### UI mode
    npx playwright test --ui

---

## 📊 Test Reporting

### Open HTML report
    npx playwright show-report

Includes:
- ✅ Test summary
- ✅ Screenshots
- ✅ Error logs
- ✅ Execution timeline

---

## 🔧 Configuration

Modify settings in:

    playwright.config.js

Configurable options:
- Base URL
- Browsers
- Timeout
- Retries
- Parallel execution

---

## ⚡ NPM Scripts

Add in `package.json`:

    {
      "scripts": {
        "test": "playwright test",
        "test:headed": "playwright test --headed",
        "test:debug": "playwright test --debug",
        "test:ui": "playwright test --ui",
        "report": "playwright show-report"
      }
    }
    
    Run using:
        npm run test
        npm run test:headed
        npm run test:debug
        npm run test:ui
        npm run report
    
---

## 🔁 CI/CD Integration (GitHub Actions)

Create file:
.github/workflows/playwright.yml

Add:

    name: Playwright Tests

    on:
      push:
        branches: [ master ]
      pull_request:
        branches: [ master ]
    
    jobs:
      test:
        runs-on: ubuntu-latest
        timeout-minutes: 30
    
        permissions:
          contents: read
          pages: write
          id-token: write
    
        steps:
          - uses: actions/checkout@v4
    
          - uses: actions/setup-node@v4
            with:
              node-version: 20
    
          - name: Install dependencies
            run: npm ci
    
          - name: Install Playwright Browsers
            run: npx playwright install --with-deps
    
          - name: Run tests
            run: npx playwright test --retries=2
    
          # Upload report for debugging
          - name: Upload Playwright Report (Artifact)
            uses: actions/upload-artifact@v4
            if: always()
            with:
              name: playwright-report
              path: playwright-report/
    
          # ✅ Prepare GitHub Pages
          - name: Setup Pages
            uses: actions/configure-pages@v5
    
          # ✅ Upload report to Pages
          - name: Upload Pages Artifact
            uses: actions/upload-pages-artifact@v3
            if: always()
            with:
              path: playwright-report
    
          # ✅ Deploy to GitHub Pages
          - name: Deploy to GitHub Pages
            uses: actions/deploy-pages@v4
            if: always()
    
          # ✅ Send Email Report
          - name: Send Email Report
            uses: dawidd6/action-send-mail@v3
            if: always()
            with:
              server_address: smtp.gmail.com
              server_port: 587
    
              username: ${{ secrets.EMAIL_USERNAME }}
              password: ${{ secrets.EMAIL_PASSWORD }}
    
              subject: "✅ Playwright Test Report"
              body: |
                Hello,
    
                Playwright test execution has completed.
    
                ✅ Repository: ${{ github.repository }}
                ✅ Branch: ${{ github.ref_name }}
                ✅ Status: ${{ job.status }}
    
                📊 View Full Report:
                https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/
    
                Regards,
                GitHub Actions
    
              to: ${{ vars.RECIPIENT_EMAIL }}
              from: Ajay Automation <${{ secrets.EMAIL_USERNAME }}>
    
              attachments: playwright-report/index.html
        
---

## ✅ Best Practices

- Use Page Object Model  
- Avoid hardcoded waits  
- Reuse locators  
- Keep tests independent  

---

## 🚧 Future Enhancements

- POM structure  
- Allure reporting  
- API automation  
- Docker execution  

---

## 👤 Author

Ajay Verma  
https://github.com/averma247  

---

## 📄 License

MIT License
