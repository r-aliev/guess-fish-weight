# Guess Fish Weight

### Installation

  ```bash
git clone git@github.com:r-aliev/guess-fish-weight.git

## For back end assume  you have set up python virtual environment
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py runserver


## For front end assume you have npm package installed
cd frontend
npm install
npm start

Finally visit http://127.0.0.1:3000/