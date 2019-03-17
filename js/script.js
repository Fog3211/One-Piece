setTimeout(function(){
    document.getElementsByClassName("loading")[0].classList.add("hidden");
    document.getElementsByClassName("main")[0].classList.remove("hidden");
    
    // 一次只能放一个音效
    let music_lock = false;
    let body = document.getElementsByTagName("body")[0];
    // audio清除时间
    let clear_time = [4, 4, 8, 5, 8, 6, 10, 6, 7, 11];

    let avatar_list = document.querySelectorAll("#teamer ul li img");
    avatar_list.forEach((el, index) => {
        el.addEventListener("click", () => {
            if (music_lock) {
                return;
            }
            let div = document.createElement("div");
            div.innerHTML = `<audio autoplay id="audio">
<source src="./music/${index+1}.ogg" type="audio/ogg" />
</audio>`;
            body.appendChild(div);
            music_lock = true;
            setTimeout(() => {
                body.removeChild(div);
                music_lock = false;
            }, 1000 * clear_time[index]);
        });
    })

    // 梯形动画
    let shaped_left = document.getElementsByClassName("shaped-left")[0];
    let shaped_right = document.getElementsByClassName("shaped-right")[0];
    let container = document.getElementsByClassName("container")[0];

    shaped_left.addEventListener("mouseover", () => {
        shaped_right.style.clipPath = "polygon(60% 0, 100% 0, 100% 100%, 20% 100%)";
    })
    shaped_right.addEventListener("mouseover", () => {
        shaped_right.style.clipPath = "polygon(40% 0, 100% 0, 100% 100%, 0 100%)";
    })
    container.addEventListener("mouseleave", () => {
        shaped_right.style.clipPath = "polygon(50% 0, 100% 0, 100% 100%, 10% 100%)";
    })
}
