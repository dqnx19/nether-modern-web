from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__)

@app.route("/api/get-css/<path:filename>")
def get_css(filename):
    return send_from_directory(
        "components/css",
        filename + ".css",
        mimetype="text/css"
    )

@app.route("/api/get-js/<path:filename>")
def get_js(filename):
    return send_from_directory(
        "components/js",
        filename + ".js",
        mimetype="application/javascript"
    )

@app.route("/api/get-readme/<path:filename>")
def get_readme(filename):
    return send_from_directory(
        "components/md",
        filename + ".md",
        mimetype="text/markdown"
    )

@app.route("/api/get-component/<name>")
def get_component(name):

    def read(path):
        with open(path, "r", encoding="utf-8") as f:
            return f.read()

    return jsonify({
        "css": read(os.path.join("components", "css", f"{name}.css")),
        "js": read(os.path.join("components", "js", f"{name}.js")),
        "readme": read(os.path.join("components", "md", f"{name}.md")),
    })

@app.route("/<path:filename>")
def send_file(filename):
    return send_from_directory(".", filename)

@app.route("/")
def send_home():
    return send_from_directory(".", "index.html")

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=7600
    )