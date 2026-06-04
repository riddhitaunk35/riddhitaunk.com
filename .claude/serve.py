import functools
import http.server
import socketserver

DIRECTORY = "/Users/riddhitaunk/Desktop/portfolio website"
PORT = 4321

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"serving {DIRECTORY} on {PORT}")
    httpd.serve_forever()
