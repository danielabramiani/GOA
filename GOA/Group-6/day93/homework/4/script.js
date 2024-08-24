const lights = document.querySelectorAll('.light');
        const colors = ['red', 'yellow', 'green'];
        let currentIndex = 0;

        function changeLight() {
            lights.forEach(light => light.classList.remove('active'));
            lights[currentIndex].classList.add('active');
            currentIndex = (currentIndex + 1) % colors.length;
        }

        setInterval(changeLight, 1000);