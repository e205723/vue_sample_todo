from flask import Flask, jsonify

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

@app.route('/doing')
def doing():
    message = "To-Do List!"
    return jsonify({'message': message})

@app.route('/done')
def done():
    message = "To-Do List?"
    return jsonify({'message': message})

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
