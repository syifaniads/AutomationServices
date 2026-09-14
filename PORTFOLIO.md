# Portfolio Summary

## 30-second recruiter summary

**FILKOM Room Booking — Jenkins CI/CD Automation** is a three-person DevOps coursework project built around a room-reservation web application and an automated container delivery workflow.

The retained project history shows a TypeScript / TanStack Start application with PostgreSQL + Prisma, Admin / Student workflows, reservation conflict validation, and historical Jenkins artifacts for Docker image build, Docker Hub publication, and SSH-based deployment to AWS EC2.

## Technical highlights

- Jenkins declarative pipeline
- Docker image build / registry push
- Docker Hub
- AWS EC2 deployment over SSH
- deployment helper script / container replacement
- TypeScript
- TanStack Start / React
- Bun / Vite
- PostgreSQL + Prisma ORM
- role-aware Admin / Student flows
- reservation conflict / double-booking validation
- Vitest in the current application
- GitHub Actions / Vercel as a later alternative deployment path

## CV-ready version

> **FILKOM Room Booking — CI/CD Automation** — Collaborated on a three-person room-reservation project and implemented/evaluated an automated delivery workflow using Jenkins, Docker, Docker Hub, and AWS EC2. The retained project includes container build/deployment artifacts, a TypeScript/TanStack + Prisma/PostgreSQL application, role-based booking workflows, and schedule-conflict validation.

## Short portfolio-card version

> Automated CI/CD case study for a FILKOM room-booking application using Jenkins, Docker Hub and AWS EC2, backed by a TypeScript/TanStack + PostgreSQL application.

## Senior-engineer interview talking points

1. **Why containerize the application?** — produce one portable deployment artifact instead of reconstructing runtime state manually on EC2.
2. **Why Jenkins Credentials?** — keep registry and SSH secrets out of source-controlled pipeline files.
3. **Why the current evidence matters?** — the original Jenkinsfile, Dockerfile and deploy script still exist in a historical feature branch.
4. **What would I fix in the pipeline?** — add test gating, immutable image tags, health checks, rollback, and SSH host verification.
5. **Why not claim Google OAuth?** — the proposal mentions it, but the retained application source proves email/password auth instead.
6. **Why document Vercel separately?** — it is a later deployment path, not the same Jenkins/AWS coursework architecture.
7. **What is the booking consistency risk?** — an application-level overlap check can still race under concurrent requests without stronger database transaction/constraint protection.
8. **What is missing?** — legacy FILKOM GitLab history and Jenkins execution logs are currently unavailable, so the portfolio does not fabricate them.

## Suggested portfolio tags

`Jenkins` · `CI/CD` · `Docker` · `AWS EC2` · `Docker Hub` · `DevOps` · `TypeScript` · `TanStack Start` · `PostgreSQL` · `Prisma` · `Vitest`

## Evidence links

- Main repository: https://github.com/syifaniads/AutomationServices
- Jenkins artifacts: https://github.com/syifaniads/AutomationServices/tree/feature/jenkins
- Testing / screenshot artifacts: https://github.com/syifaniads/AutomationServices/tree/feature/testing

For detailed provenance, see [SOURCE_EVIDENCE.md](./SOURCE_EVIDENCE.md).
