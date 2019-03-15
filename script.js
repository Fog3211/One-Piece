// 一次只能放一个音效
let music_lock = false;
let body = document.getElementsByTagName("body")[0];
// audio清除时间
let clear_time = [4, 4, 8, 5, 7, 6, 9, 6, 7, 11];

let avatar_list = document.querySelectorAll("#teamer ul li img");
avatar_list.forEach((el, index) => {
    el.addEventListener("click", () => {
        if(music_lock){
            return;
        }
        let div = document.createElement("div");
        div.innerHTML = `<audio autoplay id="audio">
<source src="./music/${index+1}.ogg" type="audio/ogg" />
</audio>`;
        body.appendChild(div);
        music_lock=true;
        setTimeout(() => {
            body.removeChild(div);
            music_lock=false;
        }, 1000 * clear_time[index]);
    });
})