# TKAI Lab Website

## Building locally

To build the website locally, first install the requirements in the `requirements.txt` file.

```sh
# Create venv (pip)
python3 -m venv .venv

# Create venv (uv)
uv venv

# Activte environment and install dependencies
source .venv/bin/activate
pip install -r requirements.txt
```

Once the dependencies have been installed, you can build and serve the website locally by executing the following command:

```sh
# Serve at default address
mkdocs serve

# Specify own address
mkdocs serve -a localhost:9000
```

If the website is built successfully, you should see something like this:

```sh
INFO    -  Building documentation...
INFO    -  Cleaning site directory
INFO    -  Documentation built in 0.16 seconds
INFO    -  [20:25:39] Watching paths for changes: 'docs', 'mkdocs.yml'
INFO    -  [20:25:39] Serving on http://127.0.0.1:8000/
```

Open the address in the last line in your browser and you will be able to view the website.
Note that MkDocs supports live reloading, so any edits to the website will be re-built in real-time.

## Publishing

This repository uses protected branch rules and admin review to control changes to `main`.

- All contributor changes must be proposed through a pull request (PR) into `main`.
- Direct pushes to `main` are restricted by repository rules.
- Code owner review from the admin team is required before merge.
- Site deployment is handled by GitHub Actions after approved changes are merged.

### Admin team review rules

- The admin team is defined as code owners in `.github/CODEOWNERS`.
- The branch ruleset for `main` requires:
  - Pull request before merging
  - At least one approval
  - Code owner review
- The `gh-pages` branch is protected for deployment-only updates.
- Bypass for admins should remain disabled unless temporarily required for emergency fixes.

## Contributing

Use the workflow below to contribute updates.

### 1) Start from the shared contributor branch

```sh
git checkout new-updates
git pull origin new-updates
```

### 2) Make and test your changes on `new-updates`

```sh
mkdocs build --clean
```

Optionally preview:

```sh
mkdocs serve
```

### 3) Commit and push to `new-updates`

```sh
git add .
git commit -m "Describe your update"
git push origin new-updates
```

### 4) Open a pull request to `main`

- Open a PR from `new-updates` into `main`.
- Add context about what changed and why.
- Request review from the admin team if not auto-requested by CODEOWNERS.

### 5) Wait for admin approval and merge

- PRs are merged into `main` only after required admin/code-owner approval.
- Once merged, the publishing workflow deploys the updated website.

### Keep `new-updates` in sync with `main` (recommended)

To reduce merge conflicts, regularly update `new-updates` from `main`:

```sh
git checkout main
git pull origin main
git checkout new-updates
git merge main
git push origin new-updates
```
