const objectPool = []

export const PoolTime = {
  init: () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/London', false); // Делаем запрос по Лондону
    xhr.send(); // отправляем
    objectPool.push(xhr)
  },
  getPull: () => objectPool
}
