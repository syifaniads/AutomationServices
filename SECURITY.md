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

The retained main source hashes passwords using bcrypt rather than storing plaintext values. Session secrets must still be strong and environment-specific.

The current repository evidence should not be described as university SSO / Google OAuth unless source proving that integration is restored.

## Authorization

Role-aware UI alone is not sufficient authorization. Sensitive Admin mutations should always be protected server-side. A production review should verify every room, reservation, and user-management mutation against authenticated role state.

## Booking race conditions

The application checks reservation overlap before insertion. For high concurrency, production correctness should also consider database transactions, locking, serializable isolation, or a suitable exclusion constraint so two simultaneous requests cannot both pass the pre-check.

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
