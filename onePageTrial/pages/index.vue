<template>

    <head>
        <title>Award winning UX Design Agency | Excelence in product design</title>

    </head>

    <body class="m-0 h-screen">
        <header class="bg-midnight text-whiteFont opacity-.7 font-normal text-xs tracking-widest">
            <div class="flex flex-row justify-around">
                <figure class="p-4">
                    <img src="https://interface-design.co.uk/images/logo-creative-navy-design-agency-mobile.svg" alt="">
                </figure>
                <nav class="p-4 flex flex-row">
                    <a class="p-4" href="">ABOUT</a>
                    <a class="hidden lg:block p-4" href="">WORK</a>
                    <a class="hidden lg:block p-4" href="">LAB</a>
                    <a class="hidden lg:block p-4" href="">BLOG</a>
                    <a class="hidden lg:block p-4" href="">JOBS</a>
                    <a class="hidden lg:block p-4" href="">CONTACT</a>
                    <a class="lg:hidden p-4 underline decoration-solid font-bold text-menuFont" href="#"
                        id="toggleMenu">MORE+</a>
                </nav>
                <div id="menu"
                    class="hidden fixed top-0 left-0 w-full h-full bg-boat-background bg-no-repeat bg-cover bg-center flex flex-col justify-start items-start text-menuFont">
                    <div class="flex flex-row justify-between w-full">
                        <img class="p-4"
                            src="https://interface-design.co.uk/images/logo-creative-navy-design-agency-mobile.svg"
                            alt="">
                        <a class="p-4 underline decoration-solid" href="#" id="closeMenu">CLOSE</a>
                    </div>
                    <div class="text-center mt-8 font-bold">
                        <a class="block p-4 text-xl" href="">Work</a>
                        <a class="block p-4 text-xl" href="">Lab</a>
                        <a class="block p-4 text-xl" href="">Blog</a>
                        <a class="block p-4 text-xl" href="">Jobs</a>
                        <a class="block p-4 text-xl" href="">Contact</a>

                        <div class="mt-16 font-normal text-grayFont">
                            <a class="block p-4 text-sm" href="https://medium.com/@creativenavy">Medium</a>
                            <a class="block p-4 text-sm" href="https://www.instagram.com/creativenavy/">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section>
            s1
        </section>

        <section>
            s2
        </section>

        <section>
            s3
        </section>

        <section>
            s4
        </section>

        <section>
            s5
        </section>

        <footer>
        </footer>
    </body>
</template>

<script>
export default {
    mounted() {
        const toggleMenu = document.getElementById('toggleMenu');
        const closeMenu = document.getElementById('closeMenu');
        const menu = document.getElementById('menu');

        toggleMenu.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.style.opacity = 0;
            setTimeout(() => {
                menu.style.opacity = 1;
            }, 50);
        });

        closeMenu.addEventListener('click', () => {
            menu.style.opacity = 0;
            setTimeout(() => {
                menu.classList.add('hidden');
                menu.style.opacity = 1;
            }, 50);
        });
    }
}
</script>
