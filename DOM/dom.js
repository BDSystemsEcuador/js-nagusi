// Elementos del Documento
// console.log(window);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.charset);
// console.log(document.links);
// console.log(document.images);
// console.log(document.scripts);
// console.log(document.styleSheets);
// console.log(document.forms);

// Nodos, Elementos y selectores
// console.log(document.getElementsByTagName('p'));
// console.log(document.getElementsByClassName('menu'));
// console.log(document.getElementsByName('nombre'));
// console.log(document.getElementById('contador'));
// console.log(document.querySelector('p')); // solamente devuelve un elemento
// console.log(document.querySelectorAll('p'));
// console.log(document.querySelectorAll('p').length);
// console.log(document.querySelectorAll('p').forEach(el => console.log(el)));
// console.log(document.querySelector('.menu'));
// console.log(document.querySelectorAll('.menu li'));

// Atributos y data-attributes
// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute('lang'));
// console.log(document.querySelector('.link-dom').href);
// console.log(document.querySelector('.link-dom').getAttribute('href'));

// document.documentElement.lang = 'en';
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute('lang','es-ec');
// console.log(document.documentElement.lang);

// const $linkDom = document.querySelector('.link-dom');
// $linkDom.setAttribute('target', '_blank');
// $linkDom.setAttribute('rel', 'noopener');
// $linkDom.setAttribute('href', 'https://youtube.com/jonmircha');
// console.log($linkDom.hasAttribute('rel'));
// console.log($linkDom.hasChildNodes());
// console.log($linkDom.childNodes.forEach(e => console.log(e)));
// $linkDom.removeAttribute('rel');
// console.log($linkDom.hasAttribute("rel"));

// Data- Attributes
// console.log($linkDom.getAttribute('data-description'));
// console.log($linkDom.dataset);
// console.log($linkDom.dataset.description);
// $linkDom.setAttribute("data-description", "modelo de objeto del documento");
// console.log($linkDom.dataset.description);
// $linkDom.setAttribute("data-description", "suscribete a mi canal xd");
// console.log($linkDom.dataset.description);
// $linkDom.setAttribute("data-id", '2');
// console.log($linkDom.hasAttribute('data-id'));
// $linkDom.removeAttribute("data-id");
// console.log($linkDom.hasAttribute('data-id'));

//Estilos y variables css
// const $linkDOM = document.querySelector(".link-dom");
// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute('style'));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(getComputedStyle($linkDOM));

// console.log(getComputedStyle($linkDOM).getPropertyValue('background-color'));
// $linkDOM.style.setProperty('text-decoration','none');
// $linkDOM.style.setProperty('display','block');
// $linkDOM.style.setProperty('background-color','yellow');
// $linkDOM.style.setProperty('color','black');
// $linkDOM.style.width = '50%'
// $linkDOM.style.margin = 'auto';
// $linkDOM.parentNode.style.listStyle = 'none';
// $linkDOM.style.padding  = '1.5rem'
// $linkDOM.style.setProperty('border-radius','10px');
// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute('style'));
// console.log(getComputedStyle($linkDOM));
// console.clear();
// // Variables CSS - Custom Properties CSS
// const $html = document.documentElement,
//       $body = document.body; 
// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//     varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

// console.log(varDarkColor, varYellowColor);
// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty('--dark-color', '#000');
// varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
// $body.style.setProperty("background-color", varDarkColor);
