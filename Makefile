.PHONY: setup tests test install clean docker run_test_docker lint

home_address := echo ${HOME}
xdg_config_home := echo ${XDG_CONFIG_HOME}
nvm_dir :=  $([ -z "$(xdg_config_home-)" ] && printf %s "$(home_address)/.nvm" || printf %s "$(xdg_config_home)/nvm")

setup:;@echo "Setup project....."; \
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash; \
    echo $(nvm_dir) \
    export NVM_DIR = $(nvm_dir) \
    [ -s "${NVM_DIR}/nvm.sh" ] && \. "${NVM_DIR}/nvm.sh" \
    nvm install; \
    nvm use; \
    npm install -i yarn

install: package.json yarn.lock ;@echo "Installing packages....."; \
	yarn install  # could be replaced with `npm install` if you prefer

clean:;@echo "Removing installed packages....."; \
	rm -rf node_modules

tests:;@echo "Running all tests....."; \
    yarn test

test:;@echo "Running one test ($(url))....."; \
    yarn test:only $(url)

docker:;@echo "Create docker image....."; \
    docker build -t puppeteer .

lint:;@echo "Checking lint errors....."; \
    yarn lint

run_tests_docker:;@echo "Running tests inside the docker"; \
	docker run --name puppeteer --rm -i -t puppeteer yarn test

run_test_docker:;@echo "Running test ($(url)) inside the docker"; \
	docker run --name puppeteer --rm -i -t puppeteer yarn test:only $(url)
