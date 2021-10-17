# demo kong-plugin-the-middleman

## Prepare
1. clone kong template in your workspace
```bash
git clone https://github.com/nuhwilai/kong-template kong-demo
```

2. clone plugins location `kong-demo/plugins` 
```bash
mkdir kong-demo/plugins
cd kong-demo/plugins
git clone https://github.com/nuhwilai/kong-plugin-the-middleman
```

3. add plugins
- edit file  `kong-demo/conf/kong.conf` and add your plugins
    ```diff
    - plugins = bundled
    + plugins = bundled, the-middleman
    ``` 
- edit file `kong-demo/scripts/plugin_setup.sh`
    ```diff
    + cd /usr/local/custom/kong/plugins/kong-plugin-the-middleman && luarocks make
    ``` 
## Getting Started
1. start your kong from kong-demo
```bash
cd kong-demo
docker-compose up
```
   
2. start your demo service

```bash
cd demo-kong-plugin-the-middleman 
yarn install // or npm install
docker-compose up
```

3. config konga goto `http://localhost:1337`
   1. setup connections
      1. name = `kong`
      2. kong-admin-url = `http://kong:8001`
   2. setup service
      1. name = `book-api`
      2. port = `3000`
      3. host = `book-api`
      4. path = `/api/book`
   3. setup route
      1. name = `book-v1`
      2. paths = `/v1/api/book` (remember, must enter)
   4. setup plugins
      1. add plugin name = `the-middleman` (this is custom plugin from docker-compose setup)
      2. url = `http://validate-api:8080/validate/book`
      3. enable all
      4. change cache to header and edit cache-header
        ```diff
        - authorization
        + x-credential
        ```


## Playground with postman
you can import file `kong.postman_collection.json` to postman for playground all demo api
#### Description
- validate-api = request validate succes case
- [ERR] validate-api = request validate fail case
- book = request book api
- [K] request book = request book api with kong success case
- [K:ERR] request book = request book api with kong fail case 

--------

Note: This project for demo, this configuration is insecure and somewhat simplified.
