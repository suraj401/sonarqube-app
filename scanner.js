const scanner = require("sonarqube-scanner");
scanner({
serverUrl : 'http://192.168.0.114:9000/',
token : "d148629929cda06a4d53150739229544124d2d4d",
options: {
"sonar.projectKey": "git",
"sonar.sources": "/home/suraj/sonarqube-app/"
},
},
() => {
// callback is required
}
);
