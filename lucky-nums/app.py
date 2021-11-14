from flask import Flask, render_template, request, jsonify
import requests
from random import random

app = Flask(__name__)

# The random facts for the number and the year should come from the numbersapi API: http://numbersapi.com/
def getFact(num):
    response = requests.get(f"http://numbersapi.com/{num}")
    return f'{response.text}'

def getResponse(name, email, year, color):
    valid = 0
    validColors = ["red", "green", "orange", "blue"]
    errors = {}
    response = {}

    if len(name) == 0:
        errors["name"] = "Name field is required"
        valid = 1
    
    if len(email) == 0:
        errors["email"] = "Email field is required"
        valid = 1

    if color not in validColors:
        errors["color"] =  "Invalid Color, must be red, green, orange, or blue"
        valid = 1

    try:
        if int(year) < 1900 or int(year) > 2000:
            errors["year"] =  "Invalid year. Must be between 1900 and 2000"
        else:
            response["year"] = { "fact": f'{getFact(int(year))}',
            "year": year }
    except:
        errors["year"] = "Year must be a number with no letters or special characters. Must be between the years 1900 and 2000"
        valid = 1
    
    if valid == 0:
        num = round(random()*100)
        response["num"] = {"fact": f'{getFact(num)}', 
        "num": num}
    else:
        response["errors"] = errors
        
    return response

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

# name: name of user (required)
# email: email of user (required)
# year: birth year (required, must be between 1900 and 2000, inclusive)
# color: their favorite color (required and must be one of “red”, “green”, “orange”, “blue”)
@app.route("/api/get-lucky-num", methods=["POST"])
def luckyNumRoute():
    name = request.json["name"]
    email = request.json["email"]
    year = request.json["year"]
    color = request.json["color"]

    response = getResponse(name, email, year, color)

    try:
        if response["errors"]:
            return jsonify(response)
    except: 
        return jsonify(response)
