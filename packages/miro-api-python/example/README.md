# Miro Python client Flask example

This example shows how to use Flask and Miro's Python REST API client library to create a simple web-app running locally
which calls Miro's REST APIs to fetch boards.

## App Demo 🔉 (Sound On) 🔉

https://github.com/miroapp/app-examples/assets/10428517/aea10102-9b67-4976-8f37-855922b4f1cc

## Prerequisites

- Python 3.9 or higher.

## Install dependencies

This example uses `miro_api`, `flask` and `python-dotenv`. You can use either **pip** or **poetry** as follows:

**Using [pip](https://github.com/pypa/pip)**:

```bash
pip install miro_api flask python-dotenv
```

**Using [poetry](https://python-poetry.org/docs/)**:

```bash
poetry add miro_api flask python-dotenv
```

## Configuration

We recommend using a `.env` file to store env variables. Go ahead and open the `.sample.env` file, and then add your variables in.

Once you are done, it should look like this (_it is recommended to use http://localhost:5000_):

```bash
MIRO_CLIENT_ID='123456789'
MIRO_CLIENT_SECRET='abcdefghijklmnopqrstuvwxyz'
MIRO_REDIRECT_URL='http://localhost:5000'
```

Ensure you rename the file `.env` and then save it.

### Run the app

Run `flask --app app run` to start the dev server.

Go to `localhost:5000` in your browser.

Install the app on a team, and then you should see a list of all of the boards for that team.

### Reference

- [Miro Python library reference](https://miroapp.github.io/api-clients/python/)
