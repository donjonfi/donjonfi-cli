#! /usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';

const figlet = require("figlet");

const program = new Command();

console.log(figlet.textSync("DonjonFI   CLI"));

program
  .name("djn")
  .version("0.1.0")
  .description("Client pour analyser votre scénario de fiction interactive DonjonFI.")
  .usage("analyser scenario.dnj")
  // commande « analyser »
  .command('analyser <fichier-scenario> [fichier-actions]')
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

program.parse();
