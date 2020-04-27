// Настройка даты
let year = { year: 'numeric' };
let month = { day: 'numeric', month: 'long' };
let weekday = { weekday: 'short' };
let day = { day: 'numeric' };
let oneDay = 24 * 3600 * 1000;

// Константы для NewsApi
const API_KEY = '9cead7682b1d41998768f1d8b169fc12';
const PAST_DATE_STRING = new Date(Date.now() - oneDay * 6).toISOString().slice(0, 10);
const TODAY_DATE_STRING = new Date(Date.now()).toISOString().slice(0, 10);

// Элементы формы
const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form__input');
const submitButton = document.querySelector('.header-form__button');
const errorBubble = document.querySelector('.error-bubble');

// Элементы блока выдачи
const cardsContainer = document.querySelector('.search-results__cards');
const notFoundElement = document.querySelector('.search-results__not-found');
const cardsList = document.querySelector('.search-results__results');
const isLoadingBlock = document.querySelector('.search-results__preloader-block');
const showMoreButton = document.querySelector('.search-results__show-more-button');
const serverErrorBlock = document.querySelector('.search-results__server-error');

// Элементы блока коммитов
const commitsContainer = document.querySelector('.main-carousel');
const sideFadeElements = document.querySelectorAll('.main-carousel__side-fade');

// Элементы блока аналитики
const analyticsTitleKeyword = document.querySelector('.head-keyword');
const newsCount = document.querySelector('.news-all');
const keywordInTitles = document.querySelector('.news-titles');
const diagrams = Array.from(document.querySelectorAll('.analytics-table-diagrams__diagram'));
const dateElements = Array.from(document.querySelectorAll('.analytics-table-diagrams__date'));

// Элемент ошибки сервера
const errorElement = document.querySelector('.error-element');

export {
  API_KEY,
  PAST_DATE_STRING,
  TODAY_DATE_STRING,
  form,
  input,
  submitButton,
  cardsContainer,
  notFoundElement,
  errorBubble,
  cardsList,
  analyticsTitleKeyword,
  newsCount,
  keywordInTitles,
  showMoreButton,
  isLoadingBlock,
  commitsContainer,
  year,
  month,
  day,
  weekday,
  diagrams,
  dateElements,
  errorElement,
  sideFadeElements,
  serverErrorBlock
};
