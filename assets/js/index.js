var startImages = ["head_2.png", "head_3.png", "head_1.png", "head_4.png", "head_5.png"];
var head = 0;
var intervalHeadAnimation = setInterval(animateHead, 1000);

function animateHead() {
    $("#head-image").attr("src", "assets/images/" + startImages[head]);

    switch (head) {
        case 0:
            $("#name-logo").show();
            break;
        case 1:
            $("#wb-logo").show();
            break;
        case 4:
            clearInterval(intervalHeadAnimation);
    };

    head++
}

var intervalDisplayContent = setInterval(displayContent, 12000)

function displayContent() {
    $("#content").show();
    clearInterval(intervalDisplayContent);
};