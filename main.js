let noButton = document.querySelector(".no-btn");

let messages = [
    "PLEASE",
    "PLEASE PLEASE ",
    "PRETTY PLEASE ",
    "DI MO NA AKO LAB? :<",
    "CLICK YES ALI PLEASEEEEEE"
];

let index = 0;
let size = 20; // starting font size

function sayNo() {
    // Change button text
    noButton.textContent = messages[index];
    index = (index + 1) % messages.length;

    // Increase size
    size += 10;
    noButton.style.fontSize = size + "px";
    noButton.style.padding = (size / 2) + "px " + size + "px";
}

function sayYes() {
    document.body.innerHTML = `
        <div style="
            background-color: pink;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px;
            font-family: Arial, sans-serif;
        ">
            <div>
                <h1 style="color: red; font-size: 50px;">
                    Hi my pretty, Ali ❤️
                </h1>

                <p style="font-size: 22px; max-width: 800px; margin: auto; line-height: 1.6;">
                    Happy Valentine's Day, Ali.  
                    Ito ang kauna-unahan nating Valentine's na hindi magkasama at doon ako nalungkot.
                    Pero hindi magiging rason iyon para hindi natin i-celebrate ang Valentine's. 💕

                    <br><br>

                    Kaya iniimbitahan kita na mag video call tayo sa Valentine's Day,
                    para kahit papaano ay magkasama tayo kahit sa call lang.

                    <br><br>

                    I miss you so much, Ali.  
                    I hope maging special ang Valentine's natin kahit magkalayo tayo.  
                    I love you so much. ❤️
                </p>

                <br><br>

                <h2 style="color: red;">
                    WHEN: Feb. 14, 2026 <br>
                    WHERE: Through Video Call <br>
                    TIME: 9:00 PM onwards (or after mo gumawa) 
                </h2>

            </div>
        </div>
    `;
}
