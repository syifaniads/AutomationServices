# Source Evidence and Provenance

This document records which claims in the portfolio can still be verified from retained project artifacts.

## 1. Original course proposal

Project title:

**Implementasi CI/CD Pipeline Menggunakan Jenkins untuk Otomatisasi Deployment Sistem Booking Ruangan FILKOM**

The proposal defines a three-person team and a planned delivery path based on Jenkins, Docker, Docker Hub, Git-based source control, and AWS EC2.

It also lists the intended testing categories and deliverables.

Important evidence rule: the proposal describes **planned / expected implementation**. It is not treated as proof that every planned component reached the same final state.

## 2. Current GitHub `main`

Repository:

https://github.com/syifaniads/AutomationServices

Current source provides evidence for:

- TanStack Start / TypeScript application structure;
- Prisma + PostgreSQL persistence;
- Admin / Student roles;
- room and reservation workflows;
- server-side reservation overlap validation;
- current Vitest command;
- a later GitHub Actions -> Vercel deployment workflow.

Relevant examples:

- `src/features/auth/`
- `src/features/rooms/`
- `src/features/reservations/`
- `src/features/users/`
- `prisma/schema.prisma`
- `package.json`
- `.github/workflows/deploy.yml`

## 3. Historical `feature/jenkins` branch

Branch:

https://github.com/syifaniads/AutomationServices/tree/feature/jenkins

This is the strongest retained source for the original DevOps course direction.

Key artifacts:

- [`Jenkinsfile`](https://github.com/syifaniads/AutomationServices/blob/feature/jenkins/Jenkinsfile)
- [`Dockerfile`](https://github.com/syifaniads/AutomationServices/blob/feature/jenkins/Dockerfile)
- [`deploy.sh`](https://github.com/syifaniads/AutomationServices/blob/feature/jenkins/deploy.sh)
- [`docker-compose.yml`](https://github.com/syifaniads/AutomationServices/blob/feature/jenkins/docker-compose.yml)

The Jenkinsfile retains Clone, Docker Build, Docker Hub Push, and SSH Deploy-to-AWS stages.

## 4. Historical `feature/testing` branch

Branch:

https://github.com/syifaniads/AutomationServices/tree/feature/testing

Key evidence:

- project-specific README naming the FILKOM booking system and three team members;
- `Project_Structure.md` describing the application structure and Jenkins / Docker files;
- UI screenshots under `docs/screenshot/`;
- source snapshot for Admin / Student application workflows.

Screenshot directory:

https://github.com/syifaniads/AutomationServices/tree/feature/testing/docs/screenshot

## 5. Authentication discrepancy

The original proposal mentions Google OAuth using UB accounts.

The current retained implementation instead uses application-managed email/password authentication with bcrypt and application session logic.

Without the missing legacy source or GitLab history, this portfolio does not claim that Google OAuth was completed in the final retained build.

## 6. Testing discrepancy

The proposal describes automatic testing in the CI/CD flow.

However:

- `feature/testing` historically used a placeholder `echo test success` script;
- the recovered Jenkinsfile does not contain an explicit Test stage;
- current `main` now uses `vitest run`.

Therefore automated Jenkins test gating is not claimed as a historical completed feature.

## 7. Legacy FILKOM GitLab

The team likely used a FILKOM-managed GitLab environment for some project activity. That source is not currently available to this portfolio reconstruction.

No GitLab-only source, pipeline result, build log, screenshot, or commit is represented here as verified evidence.

If access is restored, useful artifacts to reconcile would include:

- repository URL and commit history;
- Jenkins webhook configuration;
- Jenkins run logs;
- pipeline screenshots;
- Docker registry evidence;
- EC2 deployment logs / screenshots;
- final report and presentation;
- missing tests or deployment scripts.

## Provenance principle

The repository follows this rule:

> Preserve the difference between proposal, retained implementation, and later repository evolution rather than silently combining them into one fictional final state.
