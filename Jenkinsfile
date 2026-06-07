pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'echo Build Start'
            }
        }
        stage('Test') {
            steps {
                sh 'echo Testing'
            }
        }
    }
}
