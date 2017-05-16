from flask import *
from flask_socketio import *


app = Flask(__name__)
socketio = SocketIO(app)


@app.route('/')
def do_canvas():
    return render_template('CanvasDraw.html')
	
@app.route('/data/<path:path>')
def static_file(path):
    return app.send_static_file(path)