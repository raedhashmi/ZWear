from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def index():
    return send_file('templates/index.html')

@app.route('/resources/<path:path>')
def resources(path):
    return send_file(f'templates/{path}')

if __name__ == '__main__':
    app.run()