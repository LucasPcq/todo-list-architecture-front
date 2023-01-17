# Todo List ( Vue 3 - Typescript - Vite )

## Explication

Le but de ce repo était d'avoir un projet simple permettant d'expérimenter et de monter en compétences sur l'architecture logicielle.

On peut donc retrouver sur ce repo une VSA ( Vertical Slice Architecture ) ainsi que certaines pratiques se rapprochant d'une architecture hexagonale.

## Modifier un todo

Pour effectuer la tâche **Modifier un todo**, il va falloir ajouter le code nécessaire dans les différentes fonctions déjà existantes :

- TodoListItem.vue -> On va trouver dans ce fichier le bouton afin de switch le status d'un todo
- UpdateTodo.vue -> On va trouver dans ce fichier, le bouton afin de modifier le titre et la date d'un todo

Vous n'avez pas besoin de vous occuper du côté design, les composants sont déjà prêts !

Vous pouvez retrouver ma version de **Modifier un todo** sur la branche main.

Il n'existe pas qu'une seul façon de faire, peut-être que vous allez l'implémenter différement de la façon de la branche de main sur certains points et c'est pas grave. Le principal ici est d'essayer de comprendre et de respecter le plus possible la découpe de base entre le repository, les adapters, les uses-cases et notre store !

Bonne recherche !

## Installation

- Ne pas oublier de faire l'installation de l'API également !

```bash
git clone https://github.com/LucasPcq/todo-list-architecture-front.git
```

```bash
# NPM
npm install
npm run dev

# pnpm
pnpm install
pnpm run dev
```

## Feature

- [x] Liste des todos
- [x] Ajouter un todo
- [ ] Modifier un todo
- [x] Supprimer un todo
- [x] Supprimer tous les todos
- [ ] Authentication
