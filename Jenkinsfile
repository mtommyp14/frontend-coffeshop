def dockerhub = "mtommyp14/front"
def images_name = "${dockerhub}:new"
def builder 

pipeline{
    
    agent any

    stages{

        stage("Install dependencies"){

            steps{
                nodejs("node14 front"){
                    sh 'yarn install'
                }
            }
        }

        stage("Build Docker"){
            steps{
                script{
                    builder = docker.build("${dockerhub}:new")
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
            steps{
                script{
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'development',
                                verbose: false,
                                transfer: [
                                    sshTransfer(
                                        execCommand: "docker pull ${image_name}; docker kill frontendVue;docker run -d --rm --name frontendVue -p 8080:80 ${image_name}"
                                        execTimeout: 12000000
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