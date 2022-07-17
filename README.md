# Guess Fish Weight

### Installation

  ```bash
git clone git@github.com:r-aliev/guess-fish-weight.git

cd guess-fish-weight

## For back end assume  you have set up python virtual environment
cd backend
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py runserver


## For front end assume you have npm package installed
cd guess-fish-weight/frontend
npm install
npm start

Finally visit http://127.0.0.1:3000/

Test submit button using 'test_upload.csv'

### Demo (button 'Submit' doesn't work, because of  wrong import of model. Fix in the future)
Link: https://guess-fish-weight.herokuapp.com/

Deployment ready version: https://github.com/r-aliev/deploy-fish-weight-guess (is not the same as deployed, but cleaner and better)