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

The current reservation API performs a server-side conflict lookup before creating a booking. Existing reservations with `PENDING` or `APPROVED` status are checked using the canonical interval-overlap predicate:

```text
existing.start < requested.end
AND
existing.end   > requested.start
```

The range is treated as half-open `[start, end)`, so two bookings may touch at a boundary without overlapping.

The logic is isolated in [`src/features/reservations/lib/time-overlap.ts`](./src/features/reservations/lib/time-overlap.ts), and [`tests/reservation-overlap.test.ts`](./tests/reservation-overlap.test.ts) covers:

- request fully inside an existing reservation;
- request fully containing an existing reservation;
- partial overlap on both boundaries;
- adjacent non-overlapping bookings;
- malformed timestamps;
- zero/negative-duration windows; and
- the database predicate generated for Prisma.

This makes the documented double-booking behavior directly testable rather than only source-inspectable.

### Current CI gate

The current `main` branch defines:

```bash
bun run test
bun run build
```

GitHub Actions runs both through [`.github/workflows/quality.yml`](./.github/workflows/quality.yml) on pushes and pull requests. The production deployment workflow also runs the unit tests before its build/deploy steps.

The CI database URL and session value used by the quality workflow are non-production placeholders intended only to satisfy build-time configuration. The unit tests added here do not connect to a live database.

## Historical testing caveat

The retained `feature/testing` snapshot defined the test script as:

```text
echo test success
```

and the recovered `feature/jenkins/Jenkinsfile` contains no dedicated Test stage.

For that reason, this portfolio does **not** retroactively claim that the historical Jenkins deployment was gated by a meaningful automated test suite.

This is an important difference between:

```text
project objective: build + test + deploy automatically
```

and:

```text
retained historical pipeline evidence: clone + build image + push + deploy
current portfolio continuation: unit-test + build checks before current deployment
```

## Remaining testing gaps

The current reservation tests strengthen one business-critical rule, but substantial production-grade validation is still missing:

- database-backed integration tests;
- authorization tests for Admin vs Student mutations;
- login/session tests;
- concurrent booking tests;
- smoke tests after container startup;
- coverage reporting;
- deployment health checks;
- negative-path deployment / rollback exercise.

### Important concurrency limitation

The current booking flow uses a **check-then-create** sequence. Two concurrent requests can theoretically pass the conflict lookup before either write becomes visible, then both create overlapping reservations.

The current unit tests verify interval semantics, not transaction isolation or concurrency safety. A production hardening step should move this invariant into a transaction/locking strategy or another database-backed concurrency control rather than relying only on an application pre-check.

## Evidence standard

No pipeline result is described as passing unless a retained artifact supports it. If the legacy FILKOM GitLab becomes accessible again, Jenkins logs, test reports, deployment history, or screenshots can be added here with their original dates and source links.
