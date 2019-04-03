import { JSDOM } from 'jsdom';

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
const { document } = (new JSDOM(documentHTML)).window;
global.document = document;
global.window = document.parentWindow;

global.window.resizeTo = (width) => {
  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = width || global.window.innerHeight;
  global.window.dispatchEvent(new Event('resize'));
};

global.window.alert = () => {};
