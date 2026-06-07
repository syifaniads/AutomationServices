pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'jona2212/web-projek:latest'
    }

    stages {
        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo '🔨 Building Docker Image...'
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo '📤 Pushing Image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials-id', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo \$PASS | docker login -u \$USER --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                echo '🚀 Deploying to AWS EC2...'
                sshagent(['aws-ssh-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@IP_PUBLIC_AWS_JONA "
                        cd ~/AutomationServices && 
                        ./deploy.sh
                        "
                    '''
                }
            }
        }
    }
}
