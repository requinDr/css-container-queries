# css-container-queries

Il n’y a pas de code à supprimer. Tout ce qu’il a à ajouter est dans style.css.

### Objectif 1
**Faire en sorte que la taille du h2 s’adapte à son conteneur.**  
Ajouter aux enfants directs de aside la propriété `container-type: inline-size;`.  
Ajouter aux h2 la propriété `font-size: clamp(1.2rem, 12cqi, 3rem);`.

### Objectif 2
**Faire en sorte que lorsque box fait moins de 400 px de largeur, les enfants se mettent en colonne.**  
Définir box comme conteneur et le nommer.  
Ajouter un `@container` qui vient modifier box-child.

### Objectif 3
**Faire en sorte que lorsque box fait entre 665 px et 667 px, #css ne soit plus affiché et soit remplacé par #sus**
