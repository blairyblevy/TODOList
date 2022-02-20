const quotes = [
    {
        quote : "언제나 현재에 집중할수 있다면 행복할것이다 - ",
        author : "파울로 코엘료",
    },

    {
        quote : "신은 용기있는자를 결코 버리지 않는다 - ",
        author : "켄러",
    },

    {
        quote : "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가? - ",
        author : "이드리스 샤흐",
    },

    {
        quote : "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다 - ",
        author : "L.론허바드",
    },

    {
        quote : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다 -  ",
        author : "랄프 왈도 에머슨",
    },

    {
        quote : " 한번의 실패와 영원한 실패를 혼동하지 마라 - ",
        author : "F.스콧 핏제랄드",
    },

    {
        quote : "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다 - ",
        author : "아인슈타인",
    },

    {
        quote : "1퍼센트의 가능성, 그것이 나의 길이다 - ",
        author : "나폴레옹",
    },

    {
        quote : "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다 - ",
        author : "괴테",
    },


    {
        quote : "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다 - ",
        author : "머더 테레사",
    },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysquote.quote;
author.innerText = todaysquote.author;