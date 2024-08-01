pipeline {
    agent any

    environment {
        HARBOR_DOCKER_REPO = '192.168.100.17:80'
        DOCKER_IMAGE_NAME = "mta/mta-ui"
        DOCKER_IMAGE_TAG = "mta_release-${BUILD_NUMBER}"
    }

    stages {
        stage('Docker Build') {
            steps {
                script {
                    echo '--- Building Docker Image ---'
                    sh "docker build -t ${HARBOR_DOCKER_REPO}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} ."
                }
            }
        }

        stage('Docker Push') {
            steps {
                script {
                    echo '--- Pushing Image to Docker Registry ---'
                    sh "docker push ${HARBOR_DOCKER_REPO}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    echo '--- Cleaning up ---'
                    sh "docker rmi ${HARBOR_DOCKER_REPO}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo '--- Triggering Deployment Pipeline ---'
                    build job: 'Deploy/MTA-UI', parameters: [string(name: 'TAG_FROM_BUILD', value: "${DOCKER_IMAGE_TAG}")]
                }
            }
        }
    }

    post {
        success {
            echo '--- Pipeline successful! ---'
            // Add notifications or other post-success actions here
        }

        failure {
            echo '--- Pipeline failed! ---'
            // Add notifications or other post-failure actions here
        }
    }
}

