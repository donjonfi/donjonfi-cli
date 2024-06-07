#! /usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import { getAppName } from '@donjonfi/core'
import path from 'path';

const figlet = require("figlet");

const program = new Command();

console.log(figlet.textSync("DonjonFI   CLI"));

program
  .name("djn")
  .version("2024.6.1")
  .description("Client pour analyser votre scénario de fiction interactive DonjonFI.")
  .usage("analyser scenario.dnj");


// commande « analyser »
program.command('analyser <fichier-scenario> [fichier-actions]')
  .description('Analyser le scénario spécifié ainsi que le fichier actions éventuel.')
  .action((scenario, actions) => {
    const fichierScenario = path.resolve(scenario);
    if (!fs.existsSync(fichierScenario))
      program.error(`Le fichier scénario spécifié n’a pas été trouvé : « ${fichierScenario} »`);
    console.log("Ficher scénario trouvé.");

    const fichierActions = actions ? path.resolve(actions) : undefined;
    if (fichierActions) {
      if (!fs.existsSync(fichierActions))
        program.error(`Le fichier actions spécifié n’a pas été trouvé : « ${fichierActions} »`);
      console.log("Ficher actions trouvé.");
    }

    // TODO: analyse du scénario.
    console.warn("L’analyse du scénario n’est pas encore disponible dans cette version.");

  });

// commande « déboguer »
program.command('déboguer <fichier-scenario> [fichier-actions]')
  .description('Déboguer le scénario spécifié ainsi que le fichier actions éventuel.');

// commande « déboguer »
program.command('jouer <fichier-scenario> [fichier-actions]')
  .description('Jouer avec le scénario spécifié ainsi que le fichier actions éventuel.');

// commande « test »
program.command('test')
  .description('Pour réaliser un test')
  .action(() => {
    console.log('AppName: ' + getAppName());
    
  });

program.parse();
