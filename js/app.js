const toggleSwitch = document.querySelector('input[type=checkbox]')

const switchName = document.querySelector('.theme__name')


function switchTheme(e) {
    if (e.target.checked) {
        switchName.textContent = "Light Mode"
        document.documentElement.setAttribute('data-theme', "light")
        localStorage.setItem('theme', 'light');
    
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem('theme', 'dark');
        switchName.textContent = "Dark Mode"
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    switchName.textContent = "Dark Mode"

    if (currentTheme === "light") {
        toggleSwitch.checked = true;
        switchName.textContent = "Light Mode"
      }
}

/* Counter increment */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
     //set the value of counter innerText to 0
    counter.innerText = "0";

    const updateCounter = () => {
        //store the data target and convert in numbers using +
        const target = +counter.getAttribute('data-target');
        //store in variable the counter text and convert in numbers using +
        const c = +counter.innerText;

        const increment = target / 250

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }else {
            counter.innerText = target;
        }
    }

    updateCounter();
})