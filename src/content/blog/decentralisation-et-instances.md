---
title: "Décentralisation et multi-instances : pourquoi c'est important"
description: "Comprendre pourquoi Amikone permet de choisir son instance Supabase, et quels sont les avantages pour la vie privée, la résilience et la communauté."
pubDate: 2025-10-20
tags:
  - "technique"
  - "décentralisation"
draft: false
---

# Décentralisation et multi-instances : pourquoi c'est important

L'une des particularités d'Amikone est de permettre à l'utilisateur de **choisir son instance Supabase** au démarrage. Derrière ce choix se cache une volonté forte : réduire la centralisation des applications de rencontre.

## Le problème de la centralisation

La majorité des applications de rencontre actuelles reposent sur **une seule base de données** contrôlée par une unique entreprise. Cette centralisation entraîne plusieurs conséquences :

- **Contrôle unilatéral.** Un acteur peut modifier ses conditions, restreindre l'accès ou fermer l'application du jour au lendemain.
- **Concentration des données.** Des millions de profils, de messages et de données de géolocalisation sont stockés au même endroit.
- **Moindre transparence.** L'utilisateur ne sait pas toujours ce qui est fait avec ses données.
- **Vulnérabilité unique.** Un incident technique touche l'ensemble des utilisateurs.

## Qu'est-ce qu'une « instance » ?

Dans Amikone, une **instance** correspond à un backend Supabase indépendant : propre base de données, propre authentification, propre stockage. L'application cliente (Flutter) reste la même, mais elle se connecte à l'instance choisie.

Concrètement, deux utilisateurs peuvent utiliser la même application, mais :

- soit sur l'**instance communautaire** proposée par défaut,
- soit sur une **instance hébergée par un tiers de confiance**,
- soit sur leur **propre instance** auto-hébergée.

## Pourquoi est-ce important ?

- **Autonomie.** Vous pouvez décider où vivent vos données. Si une instance ne vous convient pas, vous en choisissez une autre.
- **Résilience.** Si une instance ferme, les autres continuent d'exister. Le réseau n'est pas à sens unique.
- **Vie privée.** Moins de concentration signifie moins d'appétit pour la monétisation massive des données personnelles.
- **Communauté.** Des instances peuvent émerger autour de valeurs différentes, tout en partageant le même client open-source.
- **Portabilité.** Le code étant ouvert, n'importe qui peut relancer un environnement compatible.

## Transparence avant tout

Cette approche est cohérente avec la philosophie d'Amikone : **transparence plutôt qu'opacité**. Le client est ouvert, le fonctionnement est explicite, et le choix est laissé à l'utilisateur.

Bien sûr, ce mode de fonctionnement implique une petite prise de responsabilité : l'hébergement d'une instance nécessite un minimum de connaissances techniques. C'est justement pourquoi une instance communautaire est mise à disposition pour permettre à tout le monde de tester l'application sans configuration.

> « L'enjeu n'est pas d'être « décentralisé » juste pour le buzz, mais de redonner du choix à l'utilisateur. »

## À venir

L'objectif à moyen terme est de documenter clairement comment créer et configurer sa propre instance Supabase, afin de rendre ce choix accessible au plus grand nombre. Cette documentation trouvera naturellement sa place sur ce blog.

**Choisir son instance, c'est choisir son degré d'autonomie. C'est ça, la vraie liberté.**
