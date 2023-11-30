export const posts = [
  {
    id: 1,
    title: 'HTML',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png',
    content: `L'HyperText Markup Language (lett. "linguaggio di marcatura d'ipertesto"), comunemente noto con l'acronimo HTML, è il linguaggio di marcatura più usato per i documenti web. Nato per la formattazione e impaginazione di documenti ipertestuali disponibili nel web 1.0, oggi è utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup) e la sua rappresentazione, gestita tramite gli stili CSS per adattarsi alle nuove esigenze di comunicazione e pubblicazione all'interno di Internet.`,
    tags: ['sviluppo-web', 'html', 'front-end', 'back-end'],
    published: true,
  },
  {
    id: 2,
    title: 'CSS',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    content: `Cascading Style Sheets, meglio noto come CSS (in italiano fogli di stile a cascata), è un linguaggio usato per definire la formattazione di documenti HTML, XHTML e XML, ad esempio i siti web e relative pagine web. Le regole per comporre il CSS sono contenute in un insieme di direttive (Recommendations) emanate a partire dal 1996 dal W3C.
      L'introduzione del CSS si è resa necessaria per separare i contenuti delle pagine HTML dalla loro formattazione o layout e permettere una programmazione più chiara e facile da utilizzare, sia per gli autori delle pagine stesse sia per gli utenti, garantendo contemporaneamente anche il riutilizzo di codice ed una sua più facile manutenzione.`,
    tags: ['sviluppo-web', 'css', 'front-end', 'back-end'],
    published: true,
  },
  {
    id: 3,
    title: 'JavaScript',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
    content: `In informatica JavaScript è un linguaggio di programmazione multi paradigma orientato agli eventi, utilizzato sia nella programmazione lato client web che lato server (NodeJs) per la creazione di rest API, applicazioni desktop e embedded, siti web e applicazioni web, di effetti dinamici interattivi tramite funzioni di script invocate da eventi innescati a loro volta in vari modi dall'utente sulla pagina web in uso (mouse, tastiera, caricamento della pagina ecc...).`,
    tags: ['sviluppo-web', 'front-end', 'back-end', 'js'],
    published: true,
  },
  {
    id: 4,
    title: 'Node Js',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png',
    content: `Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.`,
    tags: ['sviluppo-web', 'back-end', 'js'],
    published: false,
  },
  {
    id: 5,
    title: 'Tailwind CSS',
    image: '',
    content: `Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.`,
    tags: ['sviluppo-web', 'front-end', 'css', 'framework'],
    published: true,
  },
];
