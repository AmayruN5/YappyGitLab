exports.Errors = {
    REQUIRE_QUERY: 'A query is required',
    NO_REPO_CONFIGURED: (e) =>
        `Repository for this channel hasn't been configured. Please tell the server owner that they need to run \`${e.bot.prefix}conf set repo <user/repo>\`.`,
    REPO_ALREADY_INITIALIZED: (e) => `Repository \`${e.repo}\` is already initialized in this channel`,
};

const api = `https://gitlab.com/api/v4`;

exports.Endpoints = {
    projects: `${api}/projects`,
    Project: (projectID) => {
        if (projectID.repo) projectID = projectID.repo.replace(/\//g, '%2F');
        const base = `${api}/projects/${projectID}`;
        return {
            toString: () => base,
            issues: `${base}/issues`,
            Issue: (issueID) => `${base}/issues/${issueID}`,
            MergeRequest: (mrID) => `${base}/merge_requests/${mrID}`,
            MergeRequests: (params) => `${base}/merge_requests/${params ? '?' : ''}`,
        };
    },
    groups: `${api}/projects`,
    Group: (group) => {
        const base = `${api}/groups/${group}`;
        return {
            toString: () => base,
            projects: `${base}/projects`,
        };
    },
};
