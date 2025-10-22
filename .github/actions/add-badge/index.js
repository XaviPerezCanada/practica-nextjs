const fs = require("fs");

const outcome = process.env.INPUT_OUTCOME?.trim() || "failure";
const readmePath = "README.md";

const successBadge = "![Cypress Success](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)";
const failureBadge = "![Cypress Failure](https://img.shields.io/badge/test-failure-red)";

let content = fs.readFileSync(readmePath, "utf8");

// Elimina badges anteriors si n'hi ha
content = content.replace(/!\[Cypress (Success|Failure)\]\([^)]+\)/g, "");

// Afegeix el badge nou després del text “RESULTAT DELS ÚLTIMS TESTS”
if (content.includes("RESULTAT DELS ÚLTIMS TESTS")) {
  content = content.replace(/RESULTAT DELS ÚLTIMS TESTS.*/s, `RESULTAT DELS ÚLTIMS TESTS\n${outcome === "success" ? successBadge : failureBadge}`);
} else {
  content += `\n\nRESULTAT DELS ÚLTIMS TESTS\n${outcome === "success" ? successBadge : failureBadge}`;
}

fs.writeFileSync(readmePath, content);
console.log(`✅ Badge added (${outcome})`);
