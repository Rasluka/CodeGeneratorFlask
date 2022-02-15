from flask import Flask, render_template, url_for

app =  Flask(__name__)

@app.route('/')

def index():
    return render_template('index.html')

@app.route('/count-down/')

def count_down():
    return render_template('count-down.html')

if __name__ == "__main__":
    app.run(debug=True) 