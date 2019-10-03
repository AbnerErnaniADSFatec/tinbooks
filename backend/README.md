# tinbooks
Um tinder para leitores ávidos com o objetivo de ajudar você a conhecer pessoas com os mesmos interesses que você.

### Add node_modules:
```
$ npm install
```

### Run node server:
```
$ yarn books
```

### In case of errors:
```
$ echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```