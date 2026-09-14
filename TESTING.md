# Testing and Validation

## Planned validation scope

The original course proposal defines four testing categories:

1. functional testing for login, room booking, and Admin workflows;
2. pipeline testing for build, test, Docker image creation, image push, and deployment;
3. integration testing across Jenkins, Docker, the Git repository, and AWS EC2;
4. deployment testing to verify that a new repository update can be delivered automatically.

## Evidence retained in GitHub

### UI / functional evidence

The `feature/testing` branch includes screenshots covering:

- Admin Dashboard;
- Student Dashboard;
- Student room browsing;
- successful booking;
- rejected booking;
- Admin reservation review;
- booking history;
- room management;
- user management;
- Admin and Student login screens.

These screenshots are useful evidence that the major UI workflows existed in the project snapshot.

See [docs/SCREENSHOTS.md](./docs/SCREENSHOTS.md).

### Application-level booking validation

The current reservation API performs a server-side conflict lookup before creating a booking. Existing reservations with `PENDING` or `APPROVED` status are checked for overlapping time intervals.

This provides source-level evidence for the project's double-booking prevention behavior.

### Automated test command

The current `main` branch defines:

```json
"test": "vitest run"
```

This means the current application has a real test runner entry point.

## Historical testing caveat

The retained `feature/testing` snapshot defined the test script as:

```text
echo test success
```

and the recovered `feature/jenkins/Jenkinsfile` contains no dedicated Test stage.

For that reason, this portfolio does **not** claim that the historical Jenkins deployment was gated by a meaningful automated test suite.

This is an important difference between:

```text
project objective: build + test + deploy automatically
```

and:

```text
retained historical pipeline evidence: clone + build image + push + deploy
```

## What would make the validation stronger

A production-quality continuation should add:

- unit tests for reservation overlap edge cases;
- authorization tests for Admin vs Student mutations;
- integration tests against a test PostgreSQL instance;
- login/session tests;
- smoke tests after container startup;
- CI test reports and coverage artifacts;
- deployment health checks;
- one negative-path deployment test / rollback exercise.

## Evidence standard

No pipeline result is described as passing unless a retained artifact supports it. If the legacy FILKOM GitLab becomes accessible again, Jenkins logs, test reports, deployment history, or screenshots can be added here with their original dates and source links.
