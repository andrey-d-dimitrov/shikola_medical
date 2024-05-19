from flask import Flask, render_template

app = Flask(__name__)

@app.route('/forus')
def forus():
    return render_template('filkewlkd.html')

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/doctor1')
def about():
    return render_template('doctor1.html')


@app.route('/doctor2')
def doktor2():
    return render_template('doctor2.html')

@app.route('/doctor3')
def doktor3():
    return render_template('doctor3.html')

@app.route('/doctor4')
def doktor4():
    return render_template('doctor4.html')

@app.route('/doctor5')
def doktor5():
    return render_template('doctor5.html')

@app.route('/doctor6')
def doktor6():
    return render_template('dok6.html') 

@app.route('/doctor7')
def doktor7():
    return render_template('dok7.html')

@app.route('/doctor8')
def doktor8():
    return render_template('dok8.html')
@app.route('/doctori')
def doctori():
    return render_template('doktori.html')

if __name__ == '__main__':
    app.run(debug=True)
