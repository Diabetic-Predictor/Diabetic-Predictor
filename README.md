# Diabetic Predictor for Doctors


The Diabetic Predictor for Doctors is a specialized web application designed to assist healthcare professionals in predicting the likelihood of diabetes in their patients. It utilizes advanced machine learning algorithms to provide accurate predictions based on patient health data and maintains a comprehensive history of all previous patient records.

## Key Technologies:
- **Flask**: The backend of the application is built using Flask, a lightweight and powerful web framework in Python. Flask handles the prediction model's execution and serves the predictions as API endpoints.

- **AI Model Pickle File**: A pre-trained machine learning model is integrated into the Flask service using a pickle file. This model processes patient data and generates accurate predictions.

- **Node.js**: The frontend of the web application is built using Node.js, allowing for seamless handling of user interactions and efficient communication with the Flask backend.

- **React**: The user interface is developed using React, a popular JavaScript library for building dynamic and interactive web applications. React components provide a smooth and responsive user experience.

- **Prisma & MySQL**: Prisma, a modern ORM (Object-Relational Mapping) tool, is utilized to connect the application to a MySQL database. This ensures effective data storage, retrieval, and management, including the maintenance of patient records.

- **JWT Authentication**: The application employs JSON Web Token (JWT) authentication to secure patient data and ensure that only authorized doctors can access patient records and utilize the diabetic prediction service.

## Features:
- **Accurate Diabetic Prediction**: Doctors can input relevant patient health data, and the application will provide an estimated probability of the patient developing diabetes.

- **Patient History**: The application maintains a comprehensive history of all previous patient records, allowing doctors to review past predictions and monitor patients' health progress over time.

- **User Authentication**: Access to the application is restricted to authorized doctors only. Doctors can register, log in, and manage their accounts.

- **Patient Management**: Doctors can add new patients, view existing patient profiles, and edit patient information as needed.

- **Data Visualization**: The application provides interactive data visualization to help doctors analyze and interpret patient data effectively.
How to Run the Diabetic Predictor Website

1. Doctors can request access to the application by contacting the admin or registering with their credentials.
2. Once authorized, doctors can log in to the application and start predicting the likelihood of diabetes for their patients.
3. Doctors can add new patients to the system and input relevant health data for prediction.
4. The application will provide accurate predictions and maintain a detailed history of all patient records.

## How to Run

To run the Diabetic Predictor Website locally on your machine, follow the steps below:

### Prerequisites

- Node.js and npm (Node Package Manager) installed.
- Python 3.x installed on your system.
- MySQL installed and running on your system.

### Step 1: Clone the Repository

Clone the Diabetic Predictor Website repository to your local machine using the following command:

```
git clone https://github.com/your-username/diabetic-predictor.git
```

### Step 2: Python Backend Setup
1- Navigate to the python-service directory within the cloned repository.
2- Install the required Python packages by running:
```
pip install -r requirements.txt
```
3- Start the Flask backend by running:
```
python app.py
 ```
The Flask backend will start running on http://localhost:3002.

### Step 3: Node.js Backend Setup
1- Navigate to the node-service directory within the cloned repository.
2- Install the required Node.js packages by running:
```
npm install
```
3- Start the Node.js backend by running:
```
npm start
 ```
The Node.js backend will start running on http://localhost:3001.

### Step 4: MySQL Database Setup

1. Create a new database for the Diabetic Predictor Website in your MySQL server.

2. Navigate to the `node-service` directory within the cloned repository.

3. Set up Prisma migration by running the following commands:

```
npx prisma migrate save --name initial --experimental
npx prisma migrate up --experimental

``` 
1- Update the database connection settings in `.env` file  

### Step 5: Start Using the App

1- Open your web browser and go to http://localhost:3000 to access the Diabetic Predictor Website.<br/>
2 - Register as a doctor or log in with your credentials. <br/>
3 - Start predicting diabetes likelihood for patients by providing relevant health data. <br/>
4 - Explore the patient history to review past predictions and monitor patient health progress.<br/>

## Postman Collection

<a href="https://www.postman.com/">
  <img src="./front-end/public/assets/postman.jpg" alt="Postman Logo" width="50" height="50">
</a>

This is a Postman collection for the **Diabetic Predictor** API! This collection contains API requests to interact with the Diabetic Predictor service and test its functionalities.

