## 🌐 Live Demo

https://on-board-git-main-martapla.vercel.app/

# React- Basics: Onboarding Digital

En aquest lliurament aplicarem els conceptes bàsics que has après de React en el següent cas pràctic: la creació d'un Onboarding digital. Aquesta aplicació dispondrà de dos botons per a avançar o retrocedir a través de les frases, amb l'acompanyament d'una imatge que es modificarà.

A continuació, presentem un exemple de les 3 pantalles de l'aplicació. En el moment de la seva utilització, només es visualitzarà una pantalla a la vegada.

![example image](<exercise example image.png>)


## Nivell 1

### -- Exercici 1

En aquest exercici, crearem els primers components per implementar la base del projecte. Presentarem el primer pas del tutorial sense cap maquetació.

Passos a seguir:

1. Crear un component: Card.

2. Carregar el component Card dins del component App.

3. En el component App, defineix l'array tutorialData, que conté la informació de cada pas que es mostrarà a l'usuari.

4. Crea el primer estat mitjançant el hook useState, per portar el compte del pas en què ens trobem.

5. Passa mitjançant props les dades del primer pas al component Card.

6. Utilitza a Card.js les dades proporcionades per props per mostrar a l'usuari el títol i la descripció del primer pas.



### -- Exercici 2

Per ara, la teva aplicació pot mostrar només una frase. En aquest exercici farem que pugui mostrar totes les frases de l'onBoarding. 

En aquest exercici farem que es vagin mostrant els diferents passos a l’usuari/ària.

Per dur a terme aquesta funció has de seguir les següents tasques:

1. Implementar una funció nextStep a App.js, que vagi incrementant el valor de l'estat step en una unitat.

2. Passa per props al component Card, la funció nextStep i crida-la des del JSX del component Card. D'aquesta manera, quan l'usuari/ària faci clic al botó en el component Card, s'executarà la funció nextStep, que en modificar el valor de l'estat "step", 

3. Veuràs que passa el següent objecte de l'array tutorialData al component Card.



### -- Exercici 3

Has de maquetar el component Card de forma responsive.


### -- Exercici 4


Ara cal programar la funcionalitat que permet retrocedir un pas en el tutorial.

Crea la funció prevStep al component App, similar a nextStep, però que resti una unitat a l'estat step cada vegada que s'executa.
Passa aquesta funció al component Card mitjançant props i fer-los servir en el JSX.
Hauràs de fer ús del renderitzat condicional per mostrar i amagar els botons de retrocedir i avançar.

Pas 1: només es mostra el botó d'avançar.
Pas 2: es mostren els botons d'avançar i retrocedir.
Pas 3: es mostra el botó de retrocedir.


### -- Exercici 5

En aquest exercici implementarem l'indicador del pas en què ens trobem.

Per a això, segueix aquests passos:

Crea el component Indicator.js i carrega'l dins del component App.
Passa per props la quantitat de passos del tutorial (tutorialData.length) i el pas en què ens trobem (step).
Amb les dades proporcionades per les propietats, pinta dinàmicament el número de boletes utilitzant un .map.
Destaca la boleta on ens trobem fent servir styled components.


## Nivell 2

### -- Exercici 6

ENHORABONA!, ja has creat la base del projecte, ara ens toca afegir noves funcionalitats. 

Necessitem que en fer clic a cada boleta es mostri la frase corresponent.


