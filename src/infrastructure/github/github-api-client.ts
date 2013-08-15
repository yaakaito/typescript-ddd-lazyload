/// <reference path="../../../definitions/jquery/jquery.d.ts" />
/// <reference path="../../../definitions/monapt/monapt.d.ts" />

module Github {
    export class GithubClient {
        issuesForRepositry(owner: string, repo: string): monapt.Future<Object[]> {
            var p = new monapt.Promise<Object[]>();
            $.get('https://api.github.com/repos/' + owner + '/' + repo + '/issues', (response) => p.success(response));
            return p.future();
        }

        issueCommentsForIssue(owner: string, repo: string, issueNumber: number): monapt.Future<Object[]> {
            var p = new monapt.Promise<Object[]>();
            $.get('https://api.github.com/repos/' + owner + '/' + repo + '/issues/' + issueNumber + '/comments', (response) => p.success(response));
            return p.future();
        }
    }
}