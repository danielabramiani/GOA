const rectangle = document.getElementById('rectangle');
        const speed = 2;
        let x = 0;
        let direction = 1;

        function animate() {
            const rectWidth = rectangle.offsetWidth;
            const windowWidth = window.innerWidth;

            x += speed * direction;
            if (x + rectWidth > windowWidth || x < 0) {
                direction *= -1;
            }

            rectangle.style.transform = `translateX(${x}px)`;
            requestAnimationFrame(animate);
        }

        animate();