## Table des matières
- [Réponses aux questions](#réponses-aux-questions)
- [Design pattern Singleton](#design-pattern-singleton)
  - [Contexte](#contexte)
  - [Avantages / Inconvénients](#avantages-inconvenients)
  - [Diagramme de classes UML du pattern](#diagramme-de-classes-uml-du-pattern)
  - [Lancer le projet](#lancer-le-projet)
- [Remarques](#remarques)
## Réponses aux questions
1. Quel(s) avantage(s) procure le fait de programmer vers une interface et non vers uneimplémentation ? Vous pouvez illustrer votre réponse avec un code source minimal et/ou avec un diagramme.
2. Pourquoi, de manière générale, vaut-il mieux préférerla composition à l’héritage ? Vouspouvez illustrer votre réponse avec un code source minimal et/ou avec un diagramme.
3. En programmation orienté objet, qu’est ce qu’une interface ? Remarque : on ne parle pasici du construct PHPinterface.
## Design pattern Singleton
    
### contexte
    
    Dans le contexte d'une application web de commerce électronique, nous avons une classe Panier qui est responsable de la gestion des articles que les utilisateurs ajoutent à leur panier d'achat. Chaque utilisateur peut avoir un seul panier, et ce panier doit être accessible et modifiable à partir de différentes parties de l'application, telles que la page de produit, la page du panier et le processus de paiement.

    Dans cette situation, nous sommes confrontés au besoin d'assurer qu'un utilisateur ait un seul et unique panier tout au long de sa session de navigation sur le site. Le pattern Singleton serait utile pour garantir qu'une seule instance de la classe Panier est utilisée pour gérer le panier d'un utilisateur, évitant ainsi la création de plusieurs instances dispersées et assurant la cohérence des données du panier.
   
   
### Avantages-Inconvenients

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
[alt text] (./uml-singleton.png)

### Lancer le projet

## Remarques
