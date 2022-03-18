const COVID_KEY = 'XztuiLpr3cebf7NJqmPTUGah6lBg59EQ8';

function covidUpdate() {
  const url = `https://api.corona-19.kr/korea/country/new/?serviceKey=${COVID_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const total = document.querySelector('#covid span:first-child');
      const yesterday = document.querySelector('#covid span:last-child');
      total.innerText = `총 누적 확진자 수 : ${data.korea.totalCase}명`;
      yesterday.innerText = `어제 추가 확진자 수 : ${data.korea.newCase}명`;
    });
}

covidUpdate();
