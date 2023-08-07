import requests
import json

# Replace this with the actual URL of your Flask API
FLASK_API_URL = 'http://localhost:5000/predict'

# Load the JSON data from the file
with open('test_data.json', 'r') as json_file:
    data = json.load(json_file)

# Make the POST request to the Flask API
response = requests.post(FLASK_API_URL, json=data)

try:
    response_data = response.json()
    print("Prediction result:", response_data)
except json.JSONDecodeError:
    print("Failed to decode JSON response.")
    print("Response content:", response.text)
    print("Response status code:", response.status_code)
