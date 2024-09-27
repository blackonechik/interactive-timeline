import { EventTypes, TimelineType } from '../types';

export const DEFAULT_CIRCLE_RADIUS = 265;

export const timelineData: TimelineType = {
  history: {
    name: EventTypes.history,
    events: [
      { year: 1999, description: '13 сентября: Начало Второй чеченской войны' },
      { year: 1945, description: '8 мая: День Победы, конец Второй мировой войны в Европе' },
      { year: 1776, description: '4 июля: Подписание Декларации независимости США' },
      { year: 1969, description: '20 июля: Первая высадка человека на Луну (Нил Армстронг)' },
      { year: 1989, description: '9 ноября: Падение Берлинской стены, символизирующее конец Холодной войны' },
      { year: 1914, description: '28 июля: Начало Первой мировой войны после убийства эрцгерцога Франца Фердинанда' },
      { year: 1914, description: '28 июля: Начало Первой мировой войны после убийства эрцгерцога Франца Фердинанда' },
      { year: 1914, description: '28 июля: Начало Первой мировой войны после убийства эрцгерцога Франца Фердинанда' },
      { year: 1914, description: '28 июля: Начало Первой мировой войны после убийства эрцгерцога Франца Фердинанда' },
      { year: 1914, description: '28 июля: Начало Первой мировой войны после убийства эрцгерцога Франца Фердинанда' },
    ],
  },
  kino: {
    name: EventTypes.kino,
    events: [
      { year: 1987, description: 'Выход фильма "Принцесса-невеста", ставшего культовым в жанре фэнтези' },
      { year: 1939, description: 'Выход фильма "Унесенные ветром", получившего 10 премий Оскар' },
      { year: 1977, description: 'Выход фильма "Звездные войны: Эпизод IV – Новая надежда"' },
      { year: 1994, description: 'Выход фильма "Форрест Гамп", получившего 6 премий Оскар' },
      { year: 2001, description: 'Выход фильма "Властелин колец: Братство кольца", начало трилогии' },
      { year: 1999, description: 'Выход фильма "Матрица", ставшего культовым в жанре научной фантастики' },
      { year: 2008, description: 'Выход фильма "Темный рыцарь", получившего 2 премии Оскар' },
    ],
  },
  music: {
    name: EventTypes.music,
    events: [
      { year: 2015, description: 'Выход альбома "25" Адель, ставшего одним из самых продаваемых альбомов' },
      { year: 1969, description: 'Выход альбома "Abbey Road" The Beatles, ставшего культовым' },
      { year: 1977, description: 'Выход альбома "Rumours" Fleetwood Mac, ставшего одним из самых продаваемых' },
      { year: 1982, description: 'Выход альбома "Thriller" Майкла Джексона, ставшего самым продаваемым альбомом всех времен' },
      { year: 1991, description: 'Выход альбома "Nevermind" Nirvana, ставшего культовым в жанре гранж' },
      { year: 2000, description: 'Выход альбома "Hybrid Theory" Linkin Park, ставшего одним из самых продаваемых альбомов' },
    ],
  },
  sports: {
    name: EventTypes.sports,
    events: [
      { year: 2008, description: 'Олимпийские игры в Пекине, Китай, с участием 204 стран' },
      { year: 1998, description: 'Чемпионат мира по футболу во Франции, победа Франции' },
      { year: 2000, description: 'Олимпийские игры в Сиднее, Австралия, с участием 199 стран' },
      { year: 2010, description: 'Чемпионат мира по футболу в Южной Африке, победа Испании' },
      { year: 2012, description: 'Олимпийские игры в Лондоне, Великобритания, с участием 204 стран' },
    ],
  },
  science: {
    name: EventTypes.science,
    events: [
      { year: 1905, description: 'Теория относительности Альберта Эйнштейна, изменившая наше понимание пространства и времени' },
      { year: 1953, description: 'Открытие структуры ДНК Джеймсом Уотсоном и Фрэнсисом Криком' },
      { year: 1969, description: 'Первая высадка человека на Луну (Нил Армстронг)' },
      { year: 1990, description: 'Запуск телескопа Хаббл, предоставившего уникальные данные о Вселенной' },
      { year: 2003, description: 'Завершение проекта "Геном человека", картирование всех генов человека' },
      { year: 2012, description: 'Открытие бозона Хиггса в Большом адронном коллайдере' },
      { year: 2015, description: 'Обнаружение гравитационных волн, подтверждающих теорию относительности Эйнштейна' },
      { year: 2017, description: 'Запуск космического телескопа TESS для поиска экзопланет' },
      { year: 2017, description: 'Запуск космического телескопа TESS для поиска экзопланет' },
    ],
  },
  art: {
    name: EventTypes.art,
    events: [
      { year: 1889, description: 'Создание картины "Звездная ночь" Винсента Ван Гога, ставшей одной из самых известных в мире' },
      { year: 1504, description: 'Создание картины "Мона Лиза" Леонардо да Винчи, ставшей символом искусства' },
      { year: 1893, description: 'Создание картины "Крик" Эдварда Мунка, ставшей одной из самых известных в мире' },
      { year: 1937, description: 'Создание картины "Герника" Пабло Пикассо, ставшей символом антивоенного искусства' },
      { year: 1952, description: 'Создание картины "Черный квадрат" Казимира Малевича, ставшей символом абстрактного искусства' },
    ],
  },
};

export const TYPE_TO_NAME = {
  [EventTypes.history]: 'История',
  [EventTypes.kino]: 'Кино',
  [EventTypes.science]: 'Наука',
  [EventTypes.art]: 'Искусство',
  [EventTypes.music]: 'Музыка',
  [EventTypes.sports]: 'Спорт',
}