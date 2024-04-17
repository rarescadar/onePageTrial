<template>

    <head>
        <title>Award winning UX Design Agency | Excelence in product design</title>

    </head>

    <body class="m-0 h-screen">
        <header class="bg-midnight text-whiteFont opacity-.7 font-normal text-xs tracking-widest">
            <div class="flex flex-row justify-around">
                <figure class="lg:hidden p-4">
                    <img src="https://interface-design.co.uk/images/logo-creative-navy-design-agency-mobile.svg" alt="">
                </figure>
                <figure class="hidden lg:block p-6">
                    <img src="https://interface-design.co.uk/images/logo-creative-navy-design-agency.svg" alt="">
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
                    class="hidden fixed top-0 left-0 w-full h-full bg-boat-background bg-no-repeat bg-cover bg-center flex flex-col justify-start items-start text-menuFont z-50 transition-opacity duration-500">
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

        <section class="bg-midnight text-whiteFont opacity-.7 font-normal text-xs tracking-widest">
            <section class="bg-midnight text-whiteFont opacity-.7 font-normal text-xs tracking-widest relative">
                <div class="flex flex-col ">
                    <div class="flex flex-row justify-between relative">
                        <div class="flex flex-nowrap flex-col">
                            <h4 class="text-lg p-4 w-3/4 text-goldFont lg:text-lg lg:p-12 lg:mt-32 lg:ml-72">Ranked top
                                10
                                global
                                UX
                                design
                                agencies 2017 to
                                2023</h4>
                            <h1 class="text-4xl w-full p-4 text-menuFont lg:text-6xl lg:w-2/4 lg:p-8  lg:ml-72">
                                The user experience
                                design
                                agency
                                that adds
                                value to digital
                                products</h1>
                        </div>
                    </div>
                    <video class="p-4 lg:w-3/4 self-center lg:mt-10 lg:mb-20"
                        src="https://interface-design.co.uk/video/home-video.mp4" autoplay muted></video>
                </div>
            </section>


            <div class="flex flex-col p-2 content-start">
                <h1 class="text-5xl p-2 mb-5 ml-1 text-menuFont lg:ml-60 lg:p-14">
                    We are <span class="text-goldFont">designers</span> & <span class="text-goldFont">cognitive </span>
                    <span class="text-goldFont">scientists</span>.
                </h1>

                <h3 class="text-xl p-2 text-menuFont mb-8 ml-1 lg:ml-60 lg:p-14 lg:text-5xl lg:w-7/12 ">This blend is a
                    natural
                    continuation
                    of a design
                    tradition
                    that
                    elevates human
                    potential. With a
                    structured understanding of the mind, we map purposeful product strategies and create aesthetic
                    experiences.</h3>
                <div class="flex flex-row border-2 border-goldFont w-1/2 h-10 p-2 mb-8 ml-2 lg:w-56 lg:h-16 lg:ml-72">
                    <a class=" ml-3 self-center text-goldFont w-3/5">Get to know us.</a>
                    <img class="w-1/4 self-center" src="https://interface-design.co.uk/images/right-arrow-gold.svg"
                        alt="">
                </div>
            </div>

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

        });

        closeMenu.addEventListener('click', () => {

            menu.classList.add('hidden');

        }
        )
    }
}
</script>
