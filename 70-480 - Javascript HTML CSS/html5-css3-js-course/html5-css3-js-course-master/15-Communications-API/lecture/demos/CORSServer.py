from http.server import SimpleHTTPRequestHandler, HTTPServer

class CORSRequestHandler(SimpleHTTPRequestHandler):

    def do_POST(self):

        print("Received a POST request.")
        content_length = int(self.headers['Content-length'])
        bytes_read = 0
        while bytes_read < content_length:
            x = self.rfile.read(1)
            bytes_read += 1
        print("Read POST data")

        self.send_response(200)

        message = "Upload to server complete"
        self.send_header("Access-Control-Allow-Origin", "http://mydomain1:9999")
        self.send_header("Content-Length", str(len(message)))
        self.send_header("Content-Type", "text/plain");
        self.end_headers()

        print(message)
        self.wfile.write(bytes(message, 'UTF-8'))

		
    def do_OPTIONS(self):

        print("Received an OPTIONS request.")
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "http://mydomain1:9999")
        self.send_header("Access-Control-Allow-Methods", "POST")
        self.end_headers()

		
def main():
    try:
        server = HTTPServer(('', 9999), CORSRequestHandler)
        print('Started CORS HTTP server...')
        server.serve_forever()
    except KeyboardInterrupt:
        print('Ctrl+C received, shutting down server')
        server.socket.close()

if __name__ == '__main__':
    main()

