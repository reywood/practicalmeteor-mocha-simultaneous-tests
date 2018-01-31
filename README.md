This meteor app demonstrates that the practicalmeteor:mocha test runner runs client and server tests at the same time.

Run this app with:

```sh
$ meteor npm install
$ meteor test --full-app --driver-package practicalmeteor:mocha
```

This app runs one client test and one server test. Each test prints its start and end times to the console. The client print statements are visible in the browser's JavaScript console, and the server print statements are visible in the terminal. This should make it clear that both tests are running simultaneously.
