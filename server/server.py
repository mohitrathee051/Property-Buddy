from flask import Flask, request, jsonify
from flask_cors import CORS
import util

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    """
    Endpoint to retrieve available location names.
    """
    try:
        locations = util.get_location_names()
        response = jsonify({
            'locations': locations
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    """
    Endpoint to predict the home price based on input data.
    """
    try:
        # Parse JSON payload
        data = request.get_json()
        if not data:
            return jsonify({'error': 'Invalid JSON payload'}), 400

        # Extract and validate required fields
        total_sqft = float(data['total_sqft'])
        location = data['location']
        bhk = int(data['bhk'])
        bath = int(data['bath'])

        # Call utility function to get estimated price
        estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)

        # Return the estimated price
        response = jsonify({
            'estimated_price': estimated_price
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except KeyError as e:
        return jsonify({'error': f'Missing key: {e}'}), 400
    except ValueError as e:
        return jsonify({'error': f'Invalid value: {e}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()  # Load necessary model artifacts
    app.run(host='0.0.0.0', port=5000, debug=True)  # Bind to all network interfaces
