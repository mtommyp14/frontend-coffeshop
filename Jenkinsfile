def dockerhub = "mtommyp14/front"
def images_name = "${dockerhub}:${BRANCH_NAME}"
def builder 

pipeline{
    
    agent any

    stages{

        stage("Install dependencies"){

            steps{
                nodejs("yarn14"){
                    sh 'yarn install'
                }
            }
        }

        stage("Build Docker"){
            steps{
                script{
                    builder = docker.build("${dockerhub}:${BRANCH_NAME}")
                }
            }
        }

        stage("Testing Image"){
            steps{
                script{
                    builder.inside{
                        sh 'echo passed'
                    }
                }
            }
        }

        stage("Push Image"){
            steps{
                script{
                        builder.push()
                    }
            }
        }

        stage("Deploy"){
            when {
                expression {
                    params.DEPLOY == "main"
                }
            }
            steps{
                script{
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'development',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "docker pull ${images_name}; docker kill frontendVue; docker run -d --rm --name frontendVue -p 8080:8080 ${images_name}",
                                        execTimeout: 1200000
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
        stage("Deploy"){
            when {
                expression {
                    params.DEPLOY == "production"
                }
            }
            steps{
                script{
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'development',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "docker pull ${images_name}; docker kill frontendVue; docker run -d --rm --name frontendVue -p 8080:8080 ${images_name}",
                                        execTimeout: 1200000
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}