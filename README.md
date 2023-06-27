# sheldon-game
mouredev - Reto #6: PIEDRA, PAPEL, TIJERA, LAGARTO, SPOCK

**STATEMENT**
 Crea un programa que calcule quien gana más partidas al piedra,
 papel, tijera, lagarto, spock.
 - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 - La función recibe un listado que contiene pares, representando cada jugada.
 - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 - Debes buscar información sobre cómo se juega con estas 5 posibilidades.

 **RULES**
 "🗿": ["✂️", "🦎"],  Piedra aplasta a lagarto y a tijera
 "📄": ["🗿", "🖖"],  Papel tapa a piedra y desautoriza a Spock
 "✂️": ["📄", "🦎"],  Tijera corta a papel y decapita a lagarto
 "🦎": ["📄", "🖖"],  Lagarto devora a papel y envenena a Spock
 "🖖": ["🗿", "✂️"],  Spock vaporiza a piedra y rompe tijera

**SOURCE**
https://retosdeprogramacion.com/semanales2023

**INFORMATION**
https://es.wikipedia.org/wiki/Archivo:Rock_Paper_Scissors_Lizard_Spock_es.svg


**Nilto ©**
