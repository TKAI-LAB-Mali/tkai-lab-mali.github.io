# TKAI Lab Website

[Trustworthy Knowledge-Driven AI Lab website](https://tkai-lab-mali.github.io/) built using [Material for MkDocs](https://github.com/squidfunk/mkdocs-material).

## Building locally

To build the website locally, first install the requirements in the `requirements.txt` file.

```sh
# Create venv (pip)
python3 -m venv .venv

# Create venv (uv)
uv venv

# Activate environment and install dependencies
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

To enable live reloading, use the command

```sh
mkdocs serve --livereload
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
