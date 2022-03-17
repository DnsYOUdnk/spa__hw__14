const viewport = document.createElement('meta'),
      charset = document.createElement('meta'),
      author = document.createElement('meta'),
      description = document.createElement('meta'),
      linkStyle = document.createElement('link'),
      favicon = document.createElement('link'),
      title=document.createElement('title')


viewport.setAttribute('name', 'viewport');
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
charset.setAttribute('charset', 'UTF-8');
author.setAttribute('name', 'author');
author.setAttribute('content', 'Dzianis Yudenka');
description.setAttribute('name', 'description');
description.setAttribute('content', 'Single-page application');
linkStyle.setAttribute('rel', 'stylesheet');
linkStyle.setAttribute('href', '../css/style.css');
favicon.setAttribute('rel', 'shortcut icon');
favicon.setAttribute('href', '../image/icons8.svg');
favicon.setAttribute('type', 'image/x-icon');

document.head.appendChild(viewport)
document.head.appendChild(charset)
document.head.appendChild(author)
document.head.appendChild(description)
document.head.appendChild(linkStyle)
document.head.appendChild(favicon)
document.head.appendChild(title)

export { title }