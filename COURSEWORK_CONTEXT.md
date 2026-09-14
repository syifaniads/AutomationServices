# Coursework Context and Skill Progression

This repository sits within a broader sequence of FILKOM coursework on infrastructure, automation, and deployment. The assignment descriptions below are retained as contextual evidence and are intentionally separated from implementation claims.

## Timeline

| Date | Coursework item | Assignment focus | Retained evidence |
|---|---|---|---|
| 7 May 2026 | Autoscaling K8S | Kubernetes deployment / load balancing / autoscaling exercise | Related artifacts exist in [`syifaniads/K8S`](https://github.com/syifaniads/K8S) |
| 14 May 2026 | LK IaC - Terraform | Infrastructure as Code exercise using Terraform | Assignment requirement is known, but no matching Terraform source has been verified in the currently accessible GitHub repositories |
| 28 May 2026 | Otomasi proses kerja pengembangan dan operasi | Follow FILKOM CI/CD-on-AWS module, document each stage, and submit screenshots as PDF | Closely aligned with the Jenkins / Docker / AWS artifacts retained in this repository |

## 1. Autoscaling K8S

The coursework required students to work through a Kubernetes exercise based on a FILKOM-provided worksheet and the `LB_DEPLOYMENT.md` tutorial from the course material.

A separate retained repository exists at:

https://github.com/syifaniads/K8S

That repository contains Kubernetes installation / deployment material and a login-application workload with manifests for services, persistent storage, metrics, ingress, load balancing, and Horizontal Pod Autoscaling.

Notable retained HPA artifact:

`k8s-login-app/k8s/login-app-hpa.yaml`

Its current configuration targets the `login-app` Deployment with:

- `autoscaling/v2` HorizontalPodAutoscaler;
- minimum 2 replicas;
- maximum 4 replicas;
- CPU utilization target of 80%;
- scale-up and scale-down stabilization behavior.

This is stronger implementation evidence than the assignment description alone, but it belongs to the separate `K8S` repository rather than this room-booking project.

## 2. LK IaC - Terraform

The course also assigned an Infrastructure as Code worksheet using Terraform.

The assignment itself is known from the course brief, but a corresponding `.tf` implementation has not yet been found in the currently accessible GitHub repositories. For that reason this portfolio does **not** currently claim a verified Terraform implementation from that coursework.

If the original submission PDF, local folder, institutional GitLab repository, or Terraform files are recovered later, they can be added as separate evidence.

## 3. Otomasi proses kerja pengembangan dan operasi

The later coursework required students to run the FILKOM module:

`https://filkom.ub.ac.id/git/widhi/ci-cd-pipeline-aws#`

and document every stage with screenshots before submitting the result as PDF.

This assignment is directly relevant to the infrastructure direction preserved in `AutomationServices`. Historical repository artifacts demonstrate the same major technology path:

```text
Git source
   ↓
Jenkins
   ↓
Docker build
   ↓
Docker Hub
   ↓
AWS EC2 deployment
```

The retained `feature/jenkins` branch includes a `Jenkinsfile`, `Dockerfile`, `deploy.sh`, and `docker-compose.yml`. Therefore the CI/CD and AWS context is not inferred from the assignment description alone; corresponding project artifacts remain in GitHub history.

## Why this context matters

The portfolio should not present Kubernetes, Terraform, Jenkins, Docker, and AWS as unrelated keywords. The coursework shows a progression from:

1. container orchestration and scaling concepts;
2. Infrastructure as Code exposure;
3. automated CI/CD and cloud deployment;
4. a larger room-booking project where Jenkins / Docker / AWS delivery artifacts were retained.

At the same time, each claim should remain bounded by surviving evidence. Kubernetes autoscaling is supported by the separate K8S repository, Jenkins / Docker / AWS are supported here, while Terraform currently has only assignment-context evidence.

## Original assignment references

The assignment information retained from the course includes:

- Autoscaling K8S worksheet and tutorial based on `Widhi-yahya/kubernetes_installation_docker`;
- LK IaC - Terraform worksheet;
- FILKOM `ci-cd-pipeline-aws` module for deployment automation.

Google Docs / Drive submission links and institutional course links may require the original account or FILKOM access. They are therefore treated as provenance references rather than guaranteed public artifacts.
