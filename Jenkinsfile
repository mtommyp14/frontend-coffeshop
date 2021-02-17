def dockerhub = "mtommyp14/front"
def images_name = "${dockerhub}:${BRANCH_NAME}"
def builder 

pipeline{
    
    agent any

    parameters {
        string(name: 'DOCKERHUB', defaultValue: 'Frontend ID', description: 'DockerID-Frontend')
        booleanParam(name: 'RUNTEST', defaultValue: 'false', description: 'Check to Runnig Test image')
        choice(name: 'DEPLOY', choices: ["main", "production"], description: 'Choice build to')
    }

    stages{

        stage("Install dependencies"){

            steps{
                nodejs("yarn14"){
                    sh 'yarn install'
                }
            }
        }

        stage("Build Docker - Main"){
            when {
                expression {
                    params.DEPLOY == "main"
                }
            }
            steps{
                script{
                    builder = docker.build("${dockerhub}:${env.BRANCH_NAME}")
                }
            }
        }

        stage("Build Docker - Production"){
            when {
                expression {
                    params.DEPLOY == "production"
                }
            }
            steps{
                script{
                    builder = docker.build("${dockerhub}:${env.BRANCH_NAME}")
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

        stage("Deploy Image Main"){
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
                                        execCommand: "docker pull ${images_name}; docker kill frontendVue; docker run -d --rm --name frontendVue -p 7171:7171 ${images_name}",
                                        execTimeout: 1200000
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
        stage("Deploy Image Production"){
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
                                        execCommand: "docker pull ${images_name}; docker kill frontendVue; docker run -d --rm --name frontendVue -p 7171:7171 ${images_name}",
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