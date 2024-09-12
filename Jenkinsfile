pipeline {
    agent any
     
    
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        
        stage('Run Cypress Tests') {
            steps {
                
                sh "npx playwright test --reporter=html"
             }
        }
}
 post {
        always {
            junit 'test-results/**/*.json'
        }
    }
 
}
