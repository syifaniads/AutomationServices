# Source Evidence and Provenance

This document records which claims in the portfolio can still be verified from retained project artifacts.

## 1. Original course proposal

Project title:

**Implementasi CI/CD Pipeline Menggunakan Jenkins untuk Otomatisasi Deployment Sistem Booking Ruangan FILKOM**

The proposal defines a three-person team and a planned delivery path based on Jenkins, Docker, Docker Hub, Git-based source control, and AWS EC2.

It also lists the intended testing categories and deliverables.

Important evidence rule: the proposal describes **planned / expected implementation**. It is not treated as proof that every planned component reached the same final state.

## 2. Related coursework sequence

Additional course briefs recovered from the same semester help explain the technical progression that preceded / surrounded this project:

- **Autoscaling K8S** — due 7 May 2026. The assignment used a Kubernetes worksheet plus a load-balancing deployment tutorial. A separate retained repository, [`syifaniads/K8S`](https://github.com/syifaniads/K8S), contains relevant Kubernetes artifacts including an `autoscaling/v2` HPA for a `login-app` deployment.
- **LK IaC - Terraform** — due 14 May 2026. The assignment establishes Terraform coursework exposure, but no matching `.tf` implementation has yet been verified in the currently accessible GitHub repositories.
- **Otomasi proses kerja pengembangan dan operasi** — due 28 May 2026. The assignment required running the FILKOM `ci-cd-pipeline-aws` module and documenting each stage with screenshots in a PDF. This course context is strongly aligned with the Jenkins / Docker / AWS artifacts retained in this repository.

These assignments are contextual evidence, not permission to merge every exercise into one implementation claim. See [COURSEWORK_CONTEXT.md](./COURSEWORK_CONTEXT.md).

## 3. Current GitHub `main`

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

## 4. Historical `feature/jenkins` branch

Branch:

https://github.com/syifaniads/AutomationServices/tree/feature/jenkins

This is the strongest retained source for the original DevOps course direction.

Key artifacts:

- [`Jenkinsfile`](https://github.com/syifaniads/AutomationServices/blob/feature/jenkins/Jenkinsfile)
- [`Dockerfile`](https://github.com/syifaniads/AutomationServices/blob/feature/jenkins/Dockerfile)
- [`deploy.sh`](https://github.com/syifaniads/AutomationServices/blob/feature/jenkins/deploy.sh)
- [`docker-compose.yml`](https://github.com/syifaniads/AutomationServices/blob/feature/jenkins/docker-compose.yml)

The Jenkinsfile retains Clone, Docker Build, Docker Hub Push, and SSH Deploy-to-AWS stages.

## 5. Historical `feature/testing` branch

Branch:

https://github.com/syifaniads/AutomationServices/tree/feature/testing

Key evidence:

- project-specific README naming the FILKOM booking system and three team members;
- `Project_Structure.md` describing the application structure and Jenkins / Docker files;
- UI screenshots under `docs/screenshot/`;
- source snapshot for Admin / Student application workflows.

Screenshot directory:

https://github.com/syifaniads/AutomationServices/tree/feature/testing/docs/screenshot

## 6. Kubernetes evidence in separate repository

Repository:

https://github.com/syifaniads/K8S

This repository is not presented as part of the room-booking source tree, but it is relevant evidence for the earlier Autoscaling K8S coursework.

The retained tree includes:

- `metrics-server.yaml`;
- `k8s-login-app/k8s/login-app-hpa.yaml`;
- load-balancing / ingress manifests;
- web and MySQL deployment/service manifests;
- persistent volume configuration;
- Kubernetes installation and deployment documentation.

The HPA currently targets CPU utilization at 80%, with 2 minimum and 4 maximum replicas. This supports a concrete Kubernetes autoscaling claim for that separate exercise.

## 7. Authentication discrepancy

The original proposal mentions Google OAuth using UB accounts.

The current retained implementation instead uses application-managed email/password authentication with bcrypt and application session logic.

Without the missing legacy source or GitLab history, this portfolio does not claim that Google OAuth was completed in the final retained build.

## 8. Testing discrepancy

The proposal describes automatic testing in the CI/CD flow.

However:

- `feature/testing` historically used a placeholder `echo test success` script;
- the recovered Jenkinsfile does not contain an explicit Test stage;
- current `main` now uses `vitest run`.

Therefore automated Jenkins test gating is not claimed as a historical completed feature.

## 9. Terraform evidence boundary

The recovered course brief confirms an IaC / Terraform assignment, but the accessible GitHub repositories do not currently contain a verified Terraform implementation for that task.

Until original `.tf` files, a submission PDF, local folder, or institutional GitLab source is recovered, the portfolio should use wording such as **"Terraform coursework / exposure"** rather than claiming a specific deployed Terraform architecture.

## 10. Legacy FILKOM GitLab

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
- Autoscaling K8S submission PDF;
- Terraform worksheet / `.tf` files;
- CI/CD AWS module documentation PDF;
- missing tests or deployment scripts.

## Provenance principle

The repository follows this rule:

> Preserve the difference between assignment requirement, proposal, retained implementation, and later repository evolution rather than silently combining them into one fictional final state.
