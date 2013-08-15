/// <reference path="../../../../definitions/dddbase/dddbase.d.ts" />

module Github {

    export class RepositoryId extends DDD.Identity<number> {
        constructor(id: number) {
            super(id);
        }
    }

    export class Repository extends DDD.Entity<RepositoryId> {
        constructor(
            id: RepositoryId,
            owner: string,
            name: string
        ) {
            super(id);
        }
    }
}