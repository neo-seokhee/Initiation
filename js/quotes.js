const quotes = [
  {
    quotes: 'Covid Blue를 떨쳐내고 이제 그만 집에서 나가자. 움직이자.',
    author: 'Neo',
  },
  {
    quotes: '저지르자. 거친 파도와 기꺼이 맞닥들이자.',
    author: 'Neo',
  },
  {
    quotes:
      '내가 잘 하는 것을 더 선명하게 만들고, 장점을 살릴 수 있는 삶의 방식을 찾아 나가자.',
    author: 'Neo',
  },
  {
    quotes:
      '유튜브, 인스타그램 같은 미디어 중독에서 벗어나고, 시간을 내 스스로의 통제하에 계획하자.',
    author: 'Neo',
  },
  {
    quotes: `실패하지 않으려고 잔머리 굴리면서 일하지 말자. 정면 승부해서 실패하는 건 괜찮다.  \n 젊었을 때 실패는 자산이니, 실패가 무서워서 아무것도 시도하지 않는 어리석은 짓은 하지 말자.`,
    author: 'Neo',
  },
  {
    quotes:
      '극도의 긴장감이 원동력이 되는 삶, \n 내 스스로의 삶에 긴장감을 불러 일으킬 수 있는 선택과 결정을 해나가기.',
    author: 'Neo',
  },
  {
    quotes: '더 하려고 해도 더 할게 없는, 마지막의 마지막까지 다하는 최선',
    author: '정주영',
  },
  {
    quotes:
      '야 실패가 뭔지 아냐? "했다" 는 거의 증거야.  \n 남의 말은 절대 신경쓰지 말어. 느그 허고 싶은 것을 해 ',
    author: '박막례 할머니',
  },
  {
    quotes: '야망은 자기 회의에 의해 무너지는 법이다.',
    author: 'Neo',
  },
  {
    quotes:
      'Stay Hungry, Stay Foolish.  \n 무모할지라도 늘 현재에 만족하지 말고, 더 나은 미래를 갈구하며 하고 싶은 것 하면서 앞으로 나아가라',
    author: 'Steve Jobs',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;
