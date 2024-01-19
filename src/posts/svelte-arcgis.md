---

title: ArcGIS Javascript SDK using Svelte and Vercel
description: documenting problems and process.
date: '2024-1-18'
categories: 
    - coding
published: true
---


## Documenting Problems and Process

Hello, this is a document for people (like me) trying to create an ArcGIS JS project with sveltekit and deploying to Vercel.

If you're using the ES modules you'll need to import the component that you have your map in dynamically. Below is how I accomplished this. 


```js
import { onMount } from "svelte";

let EsriMap;
  
onMount(async () => {
    const module =  
        await import("$lib/components/EsriMap.svelte");
    EsriMap = module.default;
});
```

And the component is used like this

```js
<svelte:component this={EsriMap}/>
```

One more thing to note in your imports in the EsriMap component make sure everything is properly capitalized. 

Vite will throw an error when attempting the build in Vercel if it is not, even if everything was running correctly locally.

```js
import ArcGISMap from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import CSVLayer from '@arcgis/core/layers/CSVLayer.js';
```