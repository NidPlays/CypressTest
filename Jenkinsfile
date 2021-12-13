pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/integration/**/**", description:"Enter the script path that you would like to execute")
        choice(name: 'BROWSER', choices:['chrome','edge'], description:"Choose Browser")
    }
    //options{}

    stages{
        stage('Building'){
        steps{
            echo "Build"
        }
    }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploy Pipeline"
            }
        }
    }
}