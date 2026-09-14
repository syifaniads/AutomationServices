# Retained CI/CD Artifacts

This folder mirrors the important **text-based** artifacts preserved on the historical `feature/jenkins` branch so recruiters can inspect the course CI/CD implementation directly from `main`.

The files under [`recovered/`](./recovered/) are historical artifacts, not newly claimed production infrastructure.

## Source branch

https://github.com/syifaniads/AutomationServices/tree/feature/jenkins

## Included artifacts

- `recovered/Jenkinsfile` — Jenkins stages for checkout, Docker build, Docker Hub push, and SSH deployment.
- `recovered/Dockerfile` — Bun-based production container build.
- `recovered/deploy.sh` — pull/replace/run deployment helper for the EC2 host.
- `recovered/docker-compose.yml` — minimal container runtime definition.

## Important caveats

- the Docker image namespace in the historical files belongs to the collaborative project setup;
- the AWS hostname is represented by a placeholder in the historical Jenkinsfile;
- the retained Jenkinsfile does not contain a dedicated Test stage;
- the historical SSH command disables strict host-key checking, which should be corrected in production;
- these files are preserved for evidence and review, not as a claim that the original AWS environment is still active.

See [`../CI_CD.md`](../CI_CD.md) and [`../SECURITY.md`](../SECURITY.md) for analysis.
