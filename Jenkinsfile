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
                bat "npm ci"
                //bat "npm start"
                //bat "npm run convertCSVtoJSON"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                //bat "npx cypress run"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploy Pipeline"
            }
        }
    }
}