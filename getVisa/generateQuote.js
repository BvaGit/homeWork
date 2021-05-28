export default function generateQuote () {
    const quotes = [`“A vacation is what you take when you can no longer take what you’ve been taking.” – Earl Wilson`, 
    `“My favorite place to vacation is anyplace by the ocean.” – Nina Arianda`,
    `“An upcoming vacation gives us something to eagerly anticipate.” -Jaime Kurtz`,
    `“Isn’t it amazing how much stuff we get done the day before vacation?” – Zig Ziglar`,
    `“Take vacations, go as many places as you can, you can always make money, you can’t awakes make memories.”`,
    `“The vacation we often need is freedom from our own mind.” -Jack Adam Weber`,
    `“A vacation is having nothing to do and all day to do it in.” – Robert Orben`,
    `“I love my job only when I’m on vacation.”`,
    `“I hope your vacation gives you the pleasure you need so that you don’t have to think of any problems back at home.  Enjoy your vacation.”`,
    `“I need a six month vacation, twice a year.”`];
    const logo = document.getElementById('quote');
    
    setInterval(() => {
        let random = Math.floor(Math.random() * 10);
        logo.textContent = quotes[random];
    }, 5000)
}