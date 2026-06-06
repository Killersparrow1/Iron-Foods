# Data Quality Policy

Iron Foods is committed to providing high-quality nutrition data.

## Accuracy
- We expect all submissions to be based on reliable sources.
- We perform automated validation checks against the canonical schema on every pull request.
- Duplicate detection is enforced during the CI pipeline.

## Review Process
- All contributions undergo a manual review process to check for data anomalies, source reliability, and alias correctness.
- We categorize source reliability: `institutional` > `cited` > `community`.
- We encourage users to report any inaccuracies or data conflicts via GitHub issues.
