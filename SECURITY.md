# Security Notes

## Scope

This repository is an academic DevOps / room-booking project and should not be treated as a hardened production reference without additional review.

## Secrets

Real values for the following should never be committed:

- PostgreSQL connection strings;
- application session secrets;
- Docker Hub passwords / tokens;
- AWS private keys;
- Jenkins credentials;
- cloud API keys;
- production `.env` files.

The repository keeps `.env` ignored and exposes only an `.env.example` template.

The current `iron-session` helper no longer contains a hardcoded fallback secret. It requires `IRON_SESSION_PASSWORD` from the runtime environment and rejects values shorter than 32 characters.

## Jenkins credentials

The historical Jenkins pipeline correctly references credential IDs instead of embedding the Docker Hub password or AWS private key directly into the Jenkinsfile.

The retained pattern uses:

- Jenkins `usernamePassword` binding for registry authentication;
- Jenkins `sshagent` for the deployment key.

That is preferable to hard-coded secrets, but production Jenkins should also restrict credential scope, rotate credentials, and limit who can read or execute deployment jobs.

## SSH deployment caveat

The historical Jenkinsfile uses:

```text
StrictHostKeyChecking=no
```

This is convenient in a lab but weakens SSH host authenticity checks. A production pipeline should pin / manage trusted host keys and keep strict verification enabled.

## Container / registry recommendations

For production use:

- use immutable image tags rather than only `latest`;
- scan images for known vulnerabilities;
- pin base image versions / digests where practical;
- avoid running containers as root when the runtime allows it;
- sign or attest release images;
- restrict Docker Hub / registry write credentials to CI only.

## Application authentication

The retained main source hashes passwords using bcrypt rather than storing plaintext values. The repository also contains an `iron-session` helper whose secret must be supplied through `IRON_SESSION_PASSWORD`.

However, the current route/user-state implementation still relies substantially on browser `localStorage`. That means the existence of a session helper must **not** be interpreted as proof that the application currently has complete server-enforced session authorization.

The current repository evidence should also not be described as university SSO / Google OAuth unless source proving that integration is restored.

## Authorization

Role-aware UI alone is not sufficient authorization. Current browser-side route helpers read the user object from `localStorage`, which a client can modify. Sensitive Admin mutations must therefore be considered insufficiently protected until every server-side operation independently verifies authenticated identity and role.

A production hardening pass should:

- establish identity from a server-validated session rather than client storage;
- reject unauthenticated requests server-side;
- enforce `ADMIN` authorization on room/user/reservation administration mutations;
- enforce ownership rules for student reservation operations;
- add authorization regression tests for both allowed and denied paths.

## Booking race conditions

The application checks reservation overlap before insertion using a canonical half-open interval predicate, and current unit tests verify its boundary semantics.

That check is still a **check-then-create** sequence. Under concurrency, two requests could both observe no conflict and then insert overlapping rows. For production correctness, use a transaction/locking strategy, serializable isolation, a database constraint where suitable, or another database-backed concurrency control.

## Current CI boundary

The current GitHub Actions quality workflow runs unit tests and an application build. These checks improve change safety but do not provide:

- database-backed integration testing;
- authentication/authorization penetration testing;
- dependency or container vulnerability scanning;
- post-deployment smoke tests;
- runtime infrastructure validation.

The historical Jenkins workflow is documented separately and is not retroactively described as having these controls.

## Deployment security

A stronger AWS setup should include:

- least-privilege security groups;
- TLS termination;
- restricted SSH source ranges or Session Manager;
- managed secrets;
- patched host / container runtime;
- centralized logging;
- backup and recovery procedures.

These are recommendations and are not claimed as part of the original course deployment.
