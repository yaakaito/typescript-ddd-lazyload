/// <reference path="./issue.ts" />
/// <reference path="./issue-factory.ts" />
/// <reference path="../../../../definitions/dddbase/dddbase.d.ts" />
/// <reference path="../../../../definitions/monapt/monapt.d.ts" />

module Github {
    export class IssueRepository {
        
        private apiClient = new GithubClient();

        issuesForRepository(repository: Repository): monapt.Future<Issue[]> {
            // 本来は repository.onwer と repository.name とかその辺から
            return this.apiClient.issuesForRepositry('yaakaito', 'typescript-ddd-lazyload').map((response, p) => {
                var factory = new IssueFactory();
                p.success(factory.issuesFromAPIResponse(response));
            });
        }

        issuesForId(id: IssueId): monapt.Future<Issue> {
            // キャッシュから拾ってくるみたいなものだと思ってください
            return monapt.future<Issue>(p => new Issue(id, null, null, null, null));
        }

    }
}