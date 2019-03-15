let show_music = false;

let avatar_list = document.querySelectorAll("#teamer ul li img");
avatar_list.forEach((el,index) => {
    el.addEventListener("click", () => {

//         `<audio controls="controls">
//   <source src="song.ogg" type="audio/ogg" />
// </audio>`
        console.log(index);
    });
})