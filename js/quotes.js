const quotes = [
    {
        quote: '창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.',
        author: '미상'
    },
    {
        quote: '일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다',
        author: '짐 론'
    },
    {
        quote: '늘 하던 대로 하면 늘 얻던 것을 얻는다.',
        author: '미상'
    },
    {
        quote: '열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.',
        author: '윈스턴 처칠'
    },
    {
        quote: '나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.',
        author: '토마스 에디슨'
    },
    {
        quote: '당신이 자신의 시간을 가치있게 생각하지 않으면 남들도 마찬가지일 것이다. 시간과 재능을 막 나눠주지 말고 팔아라.',
        author: '킴 가스트'
    },
    {
        quote: '게으른 예술가가 만든 명작은 없다.',
        author: '미상'
    },
    {
        quote: '간단하게 설명할 수 없으면 제대로 이해하지 못하는 것이다.',
        author: '알버트 아인슈타인'
    },
    {
        quote: '매일 당신을 두렵게 만드는 일을 하나씩 하라.',
        author: '미상'
    },
    {
        quote: '성공이란 절대 실수를 하지 않는 게 아니라 같은 실수를 두 번 하지 않는 것에 있다.',
        author: '조지버나드 쇼'
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;