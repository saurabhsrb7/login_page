from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/users_db'  # Update with your MongoDB URI
mongo = PyMongo(app)

# Endpoint to register a new user
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'])

    user = {
        'username': data['username'],
        'password': hashed_password
    }

    # Check if the username already exists
    existing_user = mongo.db.users.find_one({'username': data['username']})
    if existing_user:
        return jsonify({'message': 'Username already exists'}), 400

    # Insert the new user into the database
    result = mongo.db.users.insert_one(user)
    new_user_id = result.inserted_id

    return jsonify({'message': 'User registered successfully', 'user_id': str(new_user_id)}), 201

# Endpoint to login a user
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    user = mongo.db.users.find_one({'username': username})
    if not user:
        return jsonify({'message': 'User not found'}), 404

    if check_password_hash(user['password'], password):
        return jsonify({'message': 'Login successful', 'user_id': str(user['_id'])}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)
