from flask import Flask, request, jsonify
import pickle
import pandas as pd ;
import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder, FunctionTransformer
from sklearn.compose import make_column_transformer, make_column_selector, ColumnTransformer
import joblib



app = Flask(__name__)

# Load the pickle model
with open('final_model.pkl', 'rb') as model_file:
    model = joblib.load(model_file)
print("Model loaded successfully.")

def feat_eng(df):
    df['AgeCat'] = pd.cut(df['age'],
                           bins=[-np.inf, 1, 12, 18, 65, np.inf],
                           labels=['infant', 'child', 'teenager', 'adult', 'older_adult'])

    df['BMICat'] = pd.cut(df['bmi'],
                            bins=[-np.inf, 18.5, 25, 30, np.inf],
                            labels=['underweight', 'normal', 'overweight', 'obese'])

    df['GlucoseCat'] = pd.cut(df['blood_glucose_level'],
                                bins=[-np.inf, 140, 200, np.inf],
                                labels=['normal', 'impaired', 'diabetic'])
    
    df['HbA1cCat'] = pd.cut(df['HbA1c_level'],
                            bins=[0, 5.6, 6.4, np.inf],
                            labels=['normal', 'prediabetic', 'diabetic'])
    return df


num_pl = Pipeline([
    ('imputenum', SimpleImputer(strategy='median')),
    ('stdscale', StandardScaler())
])

cat_pl = Pipeline([
    ('imputecat', SimpleImputer(strategy='most_frequent')),
    ('onehotencode', OneHotEncoder(handle_unknown='ignore'))
])

log_pl = Pipeline([
    ('imputelog', SimpleImputer(strategy='median')),
    ('log', FunctionTransformer(np.log1p, feature_names_out='one-to-one')),
    ('stdscalelog', StandardScaler())
])


def preprocess_data(data):

    numerical_columns_except_bmi = list(make_column_selector(dtype_include=np.number)(data))
    numerical_columns_except_bmi.remove('bmi')
    preprocessing = ColumnTransformer([
        ('num_pipeline', num_pl, numerical_columns_except_bmi),
        ('log_transform', log_pl, ['bmi']),
        ('cat_pipeline', cat_pl, make_column_selector(dtype_include=['category', 'object']))
    ])
  
  
    preprocessed_data = preprocessing.fit_transform(data)

    return preprocessed_data



@app.route('/predict', methods=['POST'])
def predict_diabetes():
    try:
        data = request.get_json()
        user_data = pd.DataFrame([data])     
        user_data = feat_eng(user_data)
        preprocessed_data = preprocess_data(user_data)
             # Make the prediction using the loaded model
        prediction = model.predict(user_data)
        probability = model.predict_proba(user_data)[0][1] * 100
        probability = round(probability, 2)

        prediction_list = prediction.tolist()  # Convert NumPy array to a list
        predictionResult = False
        if(prediction_list[0]) :
            predictionResult = True      
        return jsonify({"prediction":predictionResult ,
                        "precentage": probability})
    
    except Exception as e:
        print("Error occurred:", str(e))
        return jsonify({"error": "An error occurred while processing the request."}), 500
    

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=3002)
