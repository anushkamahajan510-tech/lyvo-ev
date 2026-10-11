#!/usr/bin/env python3
"""
LIVELIFE AUTOTECH PRIVATE LIMITED - Local Production & Development Server
Serves static assets, resolves clean extensionless URLs, and provides API endpoints
for Quotation submissions, Dealer applications, and Contact messages.
"""

import http.server
import socketserver
import json
import os
import sys
import mimetypes
import time
from urllib.parse import urlparse, unquote

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PORT = int(os.environ.get("PORT", 3000))

# Ensure correct mime types for modern web assets
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("image/jpeg", ".jpg")
mimetypes.add_type("image/jpeg", ".jpeg")
mimetypes.add_type("image/png", ".png")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("application/json", ".json")

# Clean URL Routing Map
URL_REWRITES = {
    "/": "/index.html",
    "/about": "/about.html",
    "/why-lyvo": "/why-lyvo.html",
    "/why-livo": "/why-livo.html",
    "/vision-mission": "/vision-mission.html",
    "/become-a-dealer": "/become-a-dealer.html",
    "/dealers/become-dealer": "/become-a-dealer.html",
    "/become-dealer": "/become-a-dealer.html",
    "/dealers": "/dealers.html",
    "/find-dealer": "/dealers.html",
    "/find-a-dealer": "/dealers.html",
    "/contact": "/contact.html",
    "/quotation": "/quotation.html",
    "/privacy": "/privacy-policy.html",
    "/privacy-policy": "/privacy-policy.html",
    "/terms": "/terms.html",
    "/terms-and-conditions": "/terms.html",
    "/products/lyvo-passenger": "/products/lyvo-passenger.html",
    "/products/lyvo-loader": "/products/lyvo-loader.html",
    "/products/lyvo-garbage": "/products/lyvo-garbage.html",
    "/products/livo-passenger": "/products/livo-passenger.html",
    "/products/livo-loader": "/products/livo-loader.html",
    "/products/livo-garbage": "/products/livo-garbage.html"
}

class LivoHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def log_message(self, format, *args):
        sys.stderr.write(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] {format % args}\n")

    def translate_path(self, path):
        # Clean path and decode URL
        path = path.split('?', 1)[0]
        path = path.split('#', 1)[0]
        path = unquote(path)

        # Check rewrite map
        if path in URL_REWRITES:
            path = URL_REWRITES[path]

        # Handle /assets/ -> /public/assets/
        if path.startswith("/assets/"):
            path = "/public" + path

        # Check extensionless HTML files
        local_candidate = os.path.join(BASE_DIR, path.lstrip("/"))
        if not os.path.exists(local_candidate) and not os.path.splitext(path)[1]:
            html_candidate = local_candidate + ".html"
            if os.path.exists(html_candidate):
                path = path + ".html"

        # Delegate to standard SimpleHTTPRequestHandler logic with mapped path
        return super().translate_path(path)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # API: Dealer info
        if path == "/api/dealers":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            data = {
                "company": "LIVELIFE AUTOTECH PRIVATE LIMITED",
                "email": "livelifeautotech09@gmail.com",
                "status": "Operational",
                "message": "Authorized dealer hubs expanding across key commercial zones"
            }
            self.wfile.write(json.dumps(data).encode("utf-8"))
            return

        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path

        content_length = int(self.headers.get("Content-Length", 0))
        post_body = self.rfile.read(content_length)

        try:
            data = json.loads(post_body.decode("utf-8"))
        except Exception:
            data = {}

        # 1. API: Quotation Request
        if path == "/api/quotation":
            record = {
                "id": f"QT-{int(time.time() * 1000)}",
                "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "data": data
            }
            log_file = os.path.join(BASE_DIR, "quotation_enquiries.jsonl")
            with open(log_file, "a") as f:
                f.write(json.dumps(record) + "\n")

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            resp = {
                "success": True,
                "message": "Quotation request successfully received by LIVELIFE AUTOTECH.",
                "id": record["id"],
                "contactEmail": "livelifeautotech09@gmail.com"
            }
            self.wfile.write(json.dumps(resp).encode("utf-8"))
            return

        # 2. API: Dealer Application
        if path == "/api/dealers/apply":
            record = {
                "id": f"DLR-{int(time.time() * 1000)}",
                "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "data": data
            }
            log_file = os.path.join(BASE_DIR, "dealer_applications.jsonl")
            with open(log_file, "a") as f:
                f.write(json.dumps(record) + "\n")

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            resp = {
                "success": True,
                "message": "Dealership expression of interest successfully recorded.",
                "id": record["id"],
                "contactEmail": "livelifeautotech09@gmail.com"
            }
            self.wfile.write(json.dumps(resp).encode("utf-8"))
            return

        # 3. API: Contact Message
        if path == "/api/contact":
            record = {
                "id": f"MSG-{int(time.time() * 1000)}",
                "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "data": data
            }
            log_file = os.path.join(BASE_DIR, "contact_messages.jsonl")
            with open(log_file, "a") as f:
                f.write(json.dumps(record) + "\n")

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            resp = {
                "success": True,
                "message": "Message successfully routed to LIVELIFE AUTOTECH desk.",
                "id": record["id"]
            }
            self.wfile.write(json.dumps(resp).encode("utf-8"))
            return

        # Fallback 404
        self.send_response(404)
        self.end_headers()

def run_server():
    port = PORT
    for attempt in range(5):
        try:
            with socketserver.ThreadingTCPServer(("", port), LivoHTTPRequestHandler) as httpd:
                print(f"================================================================")
                print(f" LIVELIFE AUTOTECH PRIVATE LIMITED - LYVO EV WEB SERVER")
                print(f" CMD: Mr. Sanjay Mahajan | Official EV Brand: LYVO")
                print(f" Serving at: http://localhost:{port}")
                print(f" Base Directory: {BASE_DIR}")
                print(f"================================================================")
                sys.stdout.flush()
                httpd.serve_forever()
        except OSError as e:
            if "Address already in use" in str(e):
                port += 1
            else:
                raise e

if __name__ == "__main__":
    run_server()
