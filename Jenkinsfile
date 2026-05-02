pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: ['ALL', 'SANITY', 'REGRESSION'],
            description: 'Choose which Cypress test suite to run.'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'node -v'
                bat 'npm -v'
                bat 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    def testCommands = [
                        ALL: 'npm run cy:tests',
                        SANITY: 'npm run cy:tests:SANITY:CHROME',
                        REGRESSION: 'npm run cy:tests:REGRESSION:CHROME'
                    ]

                    bat testCommands[params.TEST_SUITE]
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'cypress/reports/**/*, cypress/screenshots/**/*, cypress/videos/**/*',
                allowEmptyArchive: true
            )
            publishHTML(target: [
                reportDir: 'cypress/reports/sauceDemo',
                reportFiles: 'index.html',
                reportName: 'Cypress Mochawesome Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])
        }
        success {
            echo 'Cypress pipeline completed successfully.'
        }
        failure {
            echo 'Cypress pipeline failed. Check the archived Cypress reports, screenshots, and videos.'
        }
    }
}
