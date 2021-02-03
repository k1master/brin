export const langOptions = [
  {
    name: 'DE',
    lang: 'German',
    regex: /[^a-zA-Z0-9äöüÄÖÜß]/g
  },
  {
    name: 'EN',
    lang: 'English',
    regex: /^[a-zA-Z]+$/
  },
  {
    name: 'FR',
    lang: 'French',
    regex: /^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i
  },
  {
    name: 'ES',
    lang: 'Spanish',
    regex: /^[0-9a-zñáéíóúü]+$/i
  },
  {
    name: 'RU',
    lang: 'Russian',
    regex: /[\w\u0430-\u044f]+/ig
  }
]