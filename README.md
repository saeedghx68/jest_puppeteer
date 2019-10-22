# End To End Tests boilerplate with jest and Puppeteer
This repository is created for `end to end tests`.
We use `nvm` to install `nodejs` and then install `yarn` to install packages

## Working with this repository

```bash
make setup 
make install # to install the packages
```

### Run all tests in development environment

* `make tests`

### For running one test
* ‍‍`make test url=__tests__/login.test.js`

### Create image from docker file
* `make docker`

### Run all tests in docker environment
* `make run_tests_docker`

### Run one test in docker environment
* `make run_test_docker` url=__tests__/login.test.js


### Run and see options (several options)

* `yarn jest --help`
or
* `docker run --name puppeteer --rm -i -t puppeteer yarn jest --help`


### To check the lint error
* `make lint`

### To clean to installed packages
* `make clean`


### Pull requests

This repo will only accept changes via pull request to either the test or the
release branches.
