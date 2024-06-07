# donjonfi-cli
Client pour analyser les scénarios DonjonFI
## Installer

### Prérequis
Installer [Node.js](https://nodejs.org)

### Installation
```bash
npm install -g @donjonfi/donjon-cli
```
## Aide
```bash
djn help
djn help analyser
```
## Build

### Déboguer
```bash
npm run build && node ./dist/index.js test
npm run build && node ./dist/index.js analyser exemple/scenario.djn exemple/actions.djn
```

### Publier
```bash
npm run build
npm publish --dry-run
npm publish --access public
npm install -g @donjonfi/cli
```

## Divers

Link dev lib:
```
npm link ..\donjonfi-lib\
```
