/// <reference path="./issue.ts" />

module Github {
    export class IssueFactory {
        issuesFromAPIResponse(response: Object[]): Issue[] {
            return response.map(issue => new Issue(
                new IssueId(parseInt(issue['id'], 10)),
                parseInt(issue['number'], 10),
                issue['title'],
                issue['body'],
                parseInt(issue['comments'], 10)
            ));
        }
    }
}