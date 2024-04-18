# Miro Python client Flask example

This example shows how to use Flask and Miro's Python REST API client library to create a simple web-app running locally
which calls Miro's REST APIs to fetch boards. 

## App Demo

https://github.com/miroapp/app-examples/assets/10428517/aea10102-9b67-4976-8f37-855922b4f1cc

## Prerequisites

- Python 3.9 or higher.

## Installation

To integrate the `miro_api` package into your project, you can use either **pip** or **poetry** as follows:

**Using [pip](https://github.com/pypa/pip)**:

```bash
pip install miro_api
```

**Using [poetry](https://python-poetry.org/docs/)**:

```bash
poetry add miro_api
```

## Install flask

```bash
pip install flask
```

## Install python-dotenv for env variables

If you plan to use `.env` variables as shown below, make sure to install `python-dotenv`.

```bash
pip install python-dotenv
```



## Configuration

We recommend using a `.env` file to store env variables. Go ahead and open the `.sample.env` file, and then add your variables in.

Once you are done, it should look like this (*it is recommended to use http://localhost:5000*):

```bash
MIRO_CLIENT_ID='123456789'
MIRO_CLIENT_SECRET='abcdefghijklmnopqrstuvwxyz'
MIRO_REDIRECT_URL='http://localhost:5000'
```

Ensure you rename the file `.env` and then save it. Run `source .env`.

### Run the app

Run `flask --app app run` to start the dev server. 

Go to `localhost:5000` in your browser.

Install the app on a team, and then you should see a list of all of the boards for that team.

### Reference

- [Miro Python library reference](https://miroapp.github.io/api-clients/python/)

### Examples

See an example of implementing a simple server using Flask library in the [example](https://github.com/miroapp/api-clients/tree/main/packages/miro-api-python/example) directory.
