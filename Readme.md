## Table des matières

- [Réponses aux questions](#réponses-aux-questions)
- [Design pattern Singleton](#design-pattern-singleton)
  - [Contexte](#contexte)
  - [Avantages / Inconvénients](#avantages-inconvenients)
  - [Diagramme de classes UML du pattern](#diagramme-de-classes-uml-du-pattern)
  - [Lancer le projet](#lancer-le-projet)
- [Remarques](#remarques)
## Réponses aux questions

1. _Quel(s) avantage(s) procure le fait de programmer vers une interface et non vers une implémentation ? Vous pouvez illustrer votre réponse avec un code source minimal et/ou avec un diagramme._

Programmer vers une interface plutôt que vers une implémentation offre une flexibilité accrue dans le développement logiciel. Une interface définit ce qu'un objet doit faire, mais pas comment le faire. En utilisant des classes qui implémentent cette interface, on peut changer l'implémentation sous-jacente sans modifier le reste du code, ce qui rend le système plus modulaire, extensible et facile à maintenir. En résumé, la programmation vers une interface favorise une conception souple et adaptable du code.


```

// Interface Clickable
class Clickable {
    click() {
        throw new Error('Not implemented');
    }
}

// Implémentation pour un bouton
class Button extends Clickable {
    click() {
        console.log('Button clicked');
        // Logique spécifique au bouton
    }
}

// Implémentation pour un lien
class Link extends Clickable {
    click() {
        console.log('Link clicked');
        // Logique spécifique au lien
    }
}

// Implémentation pour une zone de clic
class ClickableArea extends Clickable {
    click() {
        console.log('Clickable area clicked');
        // Logique spécifique à la zone de clic
    }
}
```


Dans cet exemple, chaque élément interactif (bouton, lien, zone de clic) implémente l'interface Clickable, ce qui garantit que chaque élément a une méthode click().

En programmant vers cette interface, nous pouvons traiter tous les éléments interactifs de manière générique, sans se soucier de l'implémentation spécifique de chacun.

``` 
function handleElementClick(element) {
    element.click();
}

const button = new Button();
const link = new Link();
const clickableArea = new ClickableArea();

handleElementClick(button);        // Affiche 'Button clicked'
handleElementClick(link);          // Affiche 'Link clicked'
handleElementClick(clickableArea); // Affiche 'Clickable area clicked'

```

2. _Pourquoi, de manière générale, vaut-il mieux préférer la composition à l’héritage ? Vous pouvez illustrer votre réponse avec un code source minimal et/ou avec un diagramme._

Préférer la composition à l'héritage offre une conception plus souple en réduisant le couplage entre les classes. Cela permet une réutilisabilité plus fine du code et évite les problèmes associés à l'héritage. Un exemple concret illustre comment utiliser la composition pour créer une classe `Car` combinant les fonctionnalités d'un moteur et de roues sans hériter de leur structure. En résumé, la composition favorise une conception modulaire et flexible du code.

3. _En programmation orienté objet, qu’est ce qu’une interface ? Remarque : on ne parle pasici du construct PHPinterface._


En programmation orientée objet, une interface est un contrat définissant un ensemble de méthodes abstraites que les classes concrètes doivent implémenter en spécifiant ce que les objets doivents faire sans spécifier comment ils doivent le faire. Elle favorise la cohérence, la réutilisabilité, et l'abstraction dans le code en établissant des normes communes entre les classes.

## Design pattern [Singleton](https://refactoring.guru/fr/design-patterns/singleton)

    
### Contexte

    
Dans le contexte d'une application web de commerce en ligne, nous avons une classe Panier qui est responsable de la gestion des articles que les utilisateurs ajoutent à leur panier d'achat. Chaque utilisateur peut avoir un seul panier, et ce panier doit être accessible et modifiable à partir de différentes parties de l'application, telles que la page de produit, la page du panier et le processus de paiement.

Dans cette situation, nous sommes confrontés au besoin d'assurer qu'un utilisateur ait un seul et unique panier tout au long de sa session de navigation sur le site. Le pattern Singleton serait utile pour garantir qu'une seule instance de la classe Panier est utilisée pour gérer le panier d'un utilisateur, évitant ainsi la création de plusieurs instances dispersées et assurant la cohérence des données du panier.
   
   
### Avantages-Inconvenients
---


Avantages du Pattern Singleton :
Accès Global : Le Singleton offre un moyen simple et partagé pour accéder à une instance unique depuis n'importe où dans le code.

Économie de Ressources : En assurant qu'il n'y a qu'une seule instance, le Singleton économise la mémoire et améliore les performances.

Facilité de Gestion : La gestion d'une ressource unique est centralisée, simplifiant les mises à jour et modifications.

Contrôle d'Accès : Il peut être mis en place pour éviter les problèmes liés à un accès simultané de plusieurs parties du programme.

Inconvénients du Pattern Singleton :
Couplage Fort : Les parties de l'application dépendent fortement du Singleton, ce qui peut rendre le code moins flexible.

Testabilité Réduite : Tester les parties du code dépendant du Singleton peut être plus complexe.

État Global : Le Singleton crée un état global, augmentant le risque d'effets secondaires imprévus.

Violation du Principe d'Inversion de Contrôle : Le Singleton peut aller à l'encontre du principe d'inversion de contrôle en introduisant une dépendance globale.

Difficulté de Sous-Classement : Hériter d'une classe Singleton peut être délicat et introduire des comportements non souhaités.

### Diagramme de classes UML du pattern

<img width="306" alt="SCR-20240104-kpbf" src="https://github.com/Dteeech/MDS-design-pattern/assets/100597736/18c98906-b566-435d-be67-02a44db48f41">

### Lancer le projet
  1. cloner le projet sur votre machine avec la commande `git clone <URL du repo>`
  2. `cd <Nom du projet>`
  3. `npm i`
  4. `node app.js`

## Remarques
Utilisation du package npm [readline sync](https://www.npmjs.com/package/readline-sync) pour faciliter le test du script à l'aide des commandes du terminal.
