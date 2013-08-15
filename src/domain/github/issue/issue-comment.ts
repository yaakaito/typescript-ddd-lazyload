/// <reference path="../../../../definitions/dddbase/dddbase.d.ts" />
/// <reference path="../../../../definitions/monapt/monapt.d.ts" />

module Github {
    export class IssueComments {
        constructor(
            public count: number,
            private issueId: IssueId,
            private issueNumber: number
        ) {

        }

        getAll(): monapt.Future<IssueComment[]> {
            var repository = new IssueCommentRepositry();
            // 本来はissueIdからIssueを取ってきたりするのだが略
            // ...
            return repository.commentsForIssue(null);
        }
    }

    export class IssueComment extends DDD.Entity<DDD.NumberIdentity> {
        constructor(
            id: DDD.NumberIdentity,
            body: string
        ) {
            super(id);
        }
    }

    class IssueCommentRepositry {
        private apiClient = new GithubClient();

        commentsForIssue(issue: Issue): monapt.Future<IssueComment[]> {
            return this.apiClient.issueCommentsForIssue('yaakaito', 'typescript-ddd-lazyload', 1).map((response, p) => {
                var factory = new IssueCommentFactory();
                p.success(factory.issueCommentsFromAPIResponse(response));
            });
        }
    }

    class IssueCommentFactory {
        issueCommentsFromAPIResponse(response: Object[]): IssueComment[] {
            return response.map(comment => new IssueComment(
                new DDD.NumberIdentity(parseInt(comment['id'], 10)),
                comment['body']
            ));
        }
    }
}