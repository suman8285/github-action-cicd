module.exports = {

    branches: "master",
    repositoryUrl: "https://github.com/suman8285/github-action-cicd",
    plugins: [
            '@semantic-release/commit-analyzer', 
            '@semantic-release/release-notes-generator', 
            '@semantic-release/npm', 
            '@semantic-release/github'
        ]
}