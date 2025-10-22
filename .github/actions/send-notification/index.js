const to = process.env.INPUT_TO;
const workflow = process.env.INPUT_WORKFLOW;
const linter = process.env.INPUT_LINTER;
const cypress = process.env.INPUT_CYPRESS;
const badge = process.env.INPUT_BADGE;
const deploy = process.env.INPUT_DEPLOY;

console.log("📧 --- NOTIFICACIÓ D'EXECUCIÓ DEL WORKFLOW ---");
console.log(`Destinatari: ${to}`);
console.log("Assumpte: Resultat del workflow executat\n");
console.log(
  `S'ha realitzat un push en la branca main que ha provocat l'execució del workflow ${workflow} amb els següents resultats:\n`
);
console.log(`- linter_job: ${linter}`);
console.log(`- cypress_job: ${cypress}`);
console.log(`- add_badge_job: ${badge}`);
console.log(`- deploy_job: ${deploy}`);
console.log("\n✅ Correu enviat (simulat amb èxit)");
