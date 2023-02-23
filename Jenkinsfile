pipeline {
    agent any

    tools{nodejs "node"}

    stages {

        stage("Cypress parallel test suit") {
            parallel {
                stage("Slave node1") {
                    agent {
                        lable "remote_node1"
                    }
                    steps {
                        git url: "https://github.com/SaboorArif09/cypress-atuomation-endtoend-.git"
                        bat "npm install"
                        bat "npm update"
                        bat "npm run parallelDashboardtest" 
                    }
                }
                stage("Slave node2") {
                    agent {
                        lable "remote_node2"
                    }
                    steps {
                        git url: "https://github.com/SaboorArif09/cypress-atuomation-endtoend-.git"
                        bat "npm install"
                        bat "npm update"
                        bat "npm run parallelDashboardtest" 
                    }
                }
            }

        }
    }
}