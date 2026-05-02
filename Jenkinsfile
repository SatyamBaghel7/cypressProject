pipeline {
    agent {
        docker {
            image 'cypress/included:15.9.0'
            args '-u root:root'
        }
    }

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
                sh 'node -v'
                sh 'npm -v'
                sh 'npm ci'
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

                    sh testCommands[params.TEST_SUITE]
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
        }
        success {
            echo 'Cypress pipeline completed successfully.'
        }
        failure {
            echo 'Cypress pipeline failed. Check the archived Cypress reports, screenshots, and videos.'
        }
    }
}
