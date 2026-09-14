# Limitations and Non-Claims

A strong portfolio should make clear where the retained evidence stops.

## Evidence limitations

### Legacy FILKOM GitLab is unavailable

Some project material may have lived in an institutional FILKOM GitLab instance. That repository is not currently available in this reconstruction.

As a result, this portfolio does not claim access to:

- GitLab commit history;
- GitLab CI/CD configuration, if any;
- historical webhook settings;
- Jenkins run logs stored outside GitHub;
- deployment screenshots that existed only in GitLab or course storage.

### Jenkins configuration is retained, Jenkins execution logs are not

The historical `feature/jenkins` branch proves that the project contained a Jenkins pipeline for Docker build, Docker Hub push, and SSH deployment to AWS.

It does not prove that every historical pipeline run succeeded, nor that the original EC2 instance is still available.

### Testing scope changed over time

The proposal includes automated testing as a pipeline objective. The retained historical Jenkinsfile has no explicit Test stage, and the historical testing snapshot used a placeholder test command. The current main branch later defines `vitest run`.

Therefore the historical Jenkins workflow should not be presented as test-gated CI.

### Authentication differs from the proposal

The proposal mentions Google OAuth / UB-account authentication. The current retained source implements email/password authentication using bcrypt and application sessions.

Without additional source evidence, Google OAuth is treated as a proposal item rather than a verified final feature.

### Multiple deployment paths exist in repository history

The course architecture is Jenkins -> Docker Hub -> AWS EC2.

The current main branch also contains a later GitHub Actions -> Vercel workflow. These represent different stages / deployment approaches and should not be conflated.

## Technical limitations of the academic deployment

The recovered delivery flow is intentionally simple and does not demonstrate:

- high availability;
- autoscaling;
- blue/green or canary deployment;
- automated rollback;
- application health-gated deployment;
- managed secret storage;
- infrastructure as code;
- comprehensive observability;
- database migration orchestration;
- multi-environment promotion.

The proposal itself explicitly limits the project to one AWS EC2 instance and does not deeply cover monitoring, autoscaling, or high availability.

## Booking consistency limitation

Application code performs an overlap check before inserting a reservation. In a highly concurrent production system, application-level read-then-write validation alone can still be vulnerable to race conditions unless reinforced by a transaction / locking / database constraint strategy.

The portfolio therefore describes the existing logic as **double-booking prevention logic**, not as a formally race-free reservation system.
