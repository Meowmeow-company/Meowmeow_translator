from flask import Flask, redirect, url_for, request
import csv
from csv import writer
import json
import asyncio

app = Flask(__name__)
@app.route('/')
def home():
    return "Hello World"
@app.route('/add',methods = ['POST', 'GET'])
def csv_to_json():
    if request.method == "GET":
        jsonArray = []
        _dict = {}
        with open('dataset.csv', encoding='utf-8') as csvf:
            csvReader = csv.DictReader(csvf)
            for row in csvReader:
                jsonArray.append(row)
                _dict[row['Word list']] = row['Meow list']
        with open('dataset.json', 'w', encoding='utf-8') as jsonf:
            jsonString = json.dumps(_dict, indent=4)
            jsonf.write(jsonString)
        return jsonArray
      
if __name__ == "__main__":
    app.run(debug=True)