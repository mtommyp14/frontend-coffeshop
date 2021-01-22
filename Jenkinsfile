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
    }
}