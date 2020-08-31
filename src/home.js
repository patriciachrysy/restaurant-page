import TabMenu from './tabMenu';

function displayHome() {
    const myContent = document.querySelector('#content');

    myContent.innerHTML = `
    <div class="sidebar">
        ${TabMenu}
    </div>
    <div class="main-content">
        <section class="welcome">
            <h1> Welcome to <span>The Delish</span>,<br> we bring the best of Africa in your meals.</h1>
        </section>

        <section class="cuisine">
            <div>
                <a href="#"><i class="las la-fish"></i></a>
                <h2>The best ingredients</h2>
            </div>
            <div>
                <a href="#"><i class="las la-concierge-bell"></i></a>
                <h2>The best cooks</h2>
            </div>
            <div>
                <a href="#"><i class="las la-cocktail"></i></a>
                <h2>A breathtaking entviroment</h2>
            </div>
        </section>

        <section class="dishes">
            <h1>Get the real spicy and original african taste that will make you travel</h1>
            <div class="underline"></div>
            <div class="first-row">
                <div class="nigeria">
                    <h2>Nigerian spicy soups</h2>
                </div>
                <div class="cameroun">
                    <h2>Camerounian fresh seafood</h2>
                </div>
            </div>
            <div class="second-row">
                <div class="kenya">
                    <h2>Kenyan king barbecue</h2>
                </div>
                <div class="fufu">
                    <h2>African Fufu feast</h2>
                </div>
            </div>
        </section>
        <section class="booking">
            <h1>Wanna give a try? Book your table today!</h1>
            <div class="underline"></div>
            <div class="first-row">
                <a href="#">Book a table</a>
            </div>
        </section>
    </div>
    `
}

export default displayHome();