/// <reference path="../../../../definitions/dddbase/dddbase.d.ts" />
/// <reference path="./issue-comment.ts" />
/// <reference path="../repository/repository.ts" />

module Github {
    export class IssueId extends DDD.Identity<number> {
        constructor(id: number) {
            super(id);
        }
    }

    export class Issue extends DDD.Entity<IssueId> {
        comments: IssueComments;

        constructor(
            public id: IssueId,
            public issueNumber: number,
            public title: string,
            public body: string,
            commentCount: number
        ) {
            super(id);
            this.comments = new IssueComments(commentCount, id, issueNumber);
        }
    }
}