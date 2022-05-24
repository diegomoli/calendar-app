importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);
// Warbucks revisa el archivo o el directorio en el cual estás e instala todo lo que está ahí en el Pericas,
// o bien todo lo que yo estoy definiendo también en este punto estos archivos.

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst } = workbox.strategies;

registerRoute(
  new RegExp("http://localhost:4000/api/auth/renew", new NetworkFirst())
);
registerRoute(
  new RegExp("http://localhost:4000/api/events", new NetworkFirst())
);
registerRoute(
  new RegExp(
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    new NetworkFirst()
  )
);
registerRoute(
  new RegExp(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
  ),
  new CacheFirst()
);
