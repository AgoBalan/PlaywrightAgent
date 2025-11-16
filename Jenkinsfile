pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull your repo
                git branch: 'main', url: 'https://github.com/AgoBalan/PlaywrightAgent.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Ensure Node.js and Playwright are installed
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run tests with healing enabled
                // Healing is part of Playwright runtime, so no extra flag is needed
                // Use debug mode if you want to see healing logs
                //sh 'npx playwright test --reporter=html'
                bat 'npx playwright test tests/add-product-to-cart.spec.ts --headed --reporter=html'
            }
        }

        stage('Publish Report') {
            steps {
                // Archive Playwright HTML report
                publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report'
                ])
            }
        }
    }

    post {
        always {
            // Keep test artifacts
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
        failure {
            echo '❌ Playwright tests failed. Check healing logs for locator adjustments.'
        }
        success {
            echo '✅ Playwright tests passed with healing applied where needed.'
        }
    }
}
