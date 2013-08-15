/// <reference path="./domain/github/issue/issue.ts" />
/// <reference path="./domain/github/issue/issue-repository.ts" />

$(() => {
    var repositry = null;
    var repos = new Github.IssueRepository();
    repos.issuesForRepository(repositry).onComplete(r => r.match({
        Success: issues => {
            issues[0].comments.getAll().onSuccess(comments => {
                console.log(comments);    
            })
        },
        Failure: error => console.error(error)
    }));
});