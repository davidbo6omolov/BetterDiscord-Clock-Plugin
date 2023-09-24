/**
 * @name Clock
 * @author gun13r
 * @description Displays clock in bottom,great time o drink coffee ☕
 * @version 1.0.0
 */

module.exports = meta => {
    const container = document.querySelector(".container-YkUktl")
    const avatarSection = document.querySelector(".avatarWrapper-1B9FTW")
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    return {
        start: () => {
            setInterval(() => {
                seconds++;
               if(seconds === 60) {
                   minutes++;
                   seconds = 0;
               }else if(minutes === 60) {
                   hours++;
                   minutes = 0;
               }else if(hours === 24) {
                     hours = 0;
               }
                divElement.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
            }, 1000)
            avatarSection.style.cssText="min-width: 90px;margin-right: 3px;";
            const divElement = document.createElement("div");
            const divBottom = document.createElement("div");

            divBottom.style.cssText="position:absolute:bottom:0px;color: white;"
            divElement.style.cssText="color: white; font-size: 12px; width:15%; height:39px;display:flex;align-items:center;border-radius:5px;padding-left:5px;padding-right:5px;transition: all 0.22s ease;font-weight: 600;letter-spacing:1px;"

            divElement.addEventListener("mouseover", function() {
                this.style.backgroundColor = "var(--background-modifier-selected)";
            });
            divElement.addEventListener("mouseout", function() {
                this.style.backgroundColor = "";
            });
            const firstElement = container.firstChild;
            container.insertBefore(divElement, firstElement.nextSibling);
        },
        stop: () => {
            if (divElement) {
                container.removeChild(divElement);
                divElement = null;
            }
        }
    }
};