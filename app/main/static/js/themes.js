let appTheme = {
  theme: false,
  THEME_STATE: null
};

function darkModeTheme() {
  document.getElementById('switchButtonWhite').src =
    './images/switchbuttonBlue.png';
  document.getElementById('hamburgerWhite').src = './images/hamburgerWhite.png';
  document.getElementById('nav').classList.add('darkMode');
  document.getElementById('main').classList.add('darkMode');
  document.getElementById('article-section').classList.add('darkMode');
  document.getElementById('loadMore').classList.add('darkMode');
  document.getElementById('arrowGroup').classList.add('darkMode');
  document.getElementById('mobileTab').classList.add('darkMode');
  document.getElementById('sidenav').classList.add('darkMode');
  document.getElementById('footerForm').classList.add('darkMode');
}

const dayLightTheme = () => {
  document.getElementById('nav').classList.remove('darkMode');
  document.getElementById('switchButtonWhite').src = './images/switch.png';
  document.getElementById('hamburgerWhite').src = './images/hamburger.png';
  document.getElementById('article-section').classList.remove('darkMode');
  document.getElementById('main').classList.remove('darkMode');
  document.getElementById('loadMore').classList.remove('darkMode');
  document.getElementById('arrowGroup').classList.remove('darkMode');
  document.getElementById('mobileTab').classList.remove('darkMode');
  document.getElementById('sidenav').classList.remove('darkMode');
  document.getElementById('footerForm').classList.remove('darkMode');
};

const toggleButton = () => {
  appTheme.theme = !appTheme.theme;
  newTheme = { ...appTheme, THEME_STATE: appTheme.theme };
  newTheme.THEME_STATE ? darkModeTheme() : dayLightTheme();
  if (newTheme.THEME_STATE === true) {
    localStorage.setItem('themeState', 'dark');
  } else if (newTheme.THEME_STATE === false) {
    localStorage.setItem('themeState', 'light');
  } else {
    null;
  }
};

const themeState = window.localStorage.getItem('themeState');

console.log('appTheme', appTheme);

console.log('themeState', themeState);

if (themeState === 'dark') darkModeTheme();
if (themeState === 'light') dayLightTheme();

switch (appTheme.THEME_STATE) {
  case true:
    darkModeTheme;
    break;
  case false:
    dayLightTheme();
  default:
    break;
}
