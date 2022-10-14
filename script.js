const handleClick = () => {
    alert("Hello from function!")
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded")

    const links = document.querySelectorAll(`.button`)

    links.forEach((link)=>{
        link.addEventListener(`click`, ()=> {
            links.forEach((item)=> {
                item.classList.remove(`active`)
            })

            link.classList.add(`active`)
        })
    })

})