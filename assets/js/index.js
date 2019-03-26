var startImages = ["head_2.png", "head_3.png", "head_1.png", "head_4.png", "head_5.png"];
var head = 0;
var intervalHeadAnimation = setInterval(animateHead, 1000);

function animateHead() {
    $("#start-image").attr("src", "assets/images/" + startImages[head]);
    if (head == 4) {
        clearInterval(intervalHeadAnimation);
    } else {
        head++;
    }
}