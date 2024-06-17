<template>
    <section>
        <!-- MOBILE VIEW -->
        <!-- This is the wrong approach. All the data on the cards should have been taken via an AI and rendered via an array. But for this example, the values are hard coded here -->

        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col lg:hidden">
            <h2 class="text-3xl p-6 w-full mt-8 mb-4">
                We're anchored in London but our design projects are as international as our customers.
            </h2>

            <nav class="flex flex-row justify-evenly p-4">
                <a id="selected" href="#">Selected</a>
                <a id="enterprise" href="#">Enterprise</a>
                <a id="startups" href="#">Startups</a>
                <a id="public" href="#">Public</a>
                <a class="text-blue-button" id="medical" href="#">Medical+</a>
            </nav>

            <div data-aos="fade-left" data-aos-duration="1000" id="selected-div">
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" id="enterprise-div" class="hidden">
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS ENTERPRISE</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" id="startups-div" class="hidden">
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS STARTUP</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" id="public-div" class="hidden">
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS PUBLIC</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" id="medical-div" class="hidden">
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS MEDICAL</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
                <div class="flex flex-col p-4">
                    <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                    <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                    <p>Philips Europe engaged us in a programme of user research, UX design and UI design for the
                        native
                        OS software used by their engineers.</p>
                </div>
            </div>

        </div>

        <!-- WEB VIEW -->
        <!-- This is the wrong approach. All the data on the cards should have been taken via an AI and rendered via an array. But for this example, the values are hard coded here -->

        <div data-aos="fade-left" data-aos-duration="1000" class="hidden lg:block ">
            <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col">
                <h2 data-aos="fade-left" data-aos-duration="1000" class="text-5xl p-14 w-3/5 mt-8 mb-4 ml-44">
                    We're anchored in London but our design projects are as international as our customers.
                </h2>

                <nav data-aos="fade-left" data-aos-duration="1000"
                    class="flex flex-row justify-evenly p-4 text-2xl font-bold">
                    <a id="selectedWeb" href="#">Selected</a>
                    <a id="enterpriseWeb" href="#">Enterprise</a>
                    <a id="startupsWeb" href="#">Startups</a>
                    <a id="publicWeb" href="#">Public</a>
                    <a class="text-blue-button" id="medicalWeb" href="#">Medical+</a>
                </nav>

                <div data-aos="fade-left" data-aos-duration="1000" class="self-center justify-self-center p-16">
                    <div data-aos="fade-left" data-aos-duration="1000" id="selected-div-web"
                        class="grid grid-cols-3 grid-rows-3"
                        style="grid-template-columns: repeat(3,500px); grid-template-rows:repeat(5,200px);">
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 data-aos="fade-left" data-aos-duration="1000"
                                class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 data-aos="fade-left" data-aos-duration="1000" class="font-bold text-xl mt-1 mb-1">
                                Philips</h2>
                            <p data-aos="fade-left" data-aos-duration="1000">Philips Europe engaged us in a
                                programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>

                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000" id="enterprise-div-web"
                        class="hidden grid grid-cols-3 grid-rows-3"
                        style="grid-template-columns: repeat(3,500px); grid-template-rows:repeat(5,200px);">
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS ENTERPRISE</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000" id="startups-div-web"
                        class="hidden grid grid-cols-3 grid-rows-3"
                        style="grid-template-columns: repeat(3,500px); grid-template-rows:repeat(5,200px);">
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS STARTUP</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000" id="public-div-web"
                        class="hidden grid grid-cols-3 grid-rows-3"
                        style="grid-template-columns: repeat(3,500px); grid-template-rows:repeat(5,200px);">
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS PUBLIC</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000" id="medical-div-web"
                        class="hidden grid grid-cols-3 grid-rows-3"
                        style="grid-template-columns: repeat(3,500px); grid-template-rows:repeat(5,200px);">
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS MEDICAL</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                        <div class="flex flex-col p-4">
                            <h1 class="text-goldFont text-goldenFont mb-1">ELECTRONICS</h1>
                            <h2 class="font-bold text-xl mt-1 mb-1">Philips</h2>
                            <p>Philips Europe engaged us in a programme of user research, UX design and UI design
                                for
                                the
                                native
                                OS software used by their engineers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        const selectedNews = document.getElementById('selected');
        const enterpriseNews = document.getElementById('enterprise');
        const startupNews = document.getElementById('startups');
        const publicNews = document.getElementById('public');
        const medicalNews = document.getElementById('medical');

        const selectedArticles = document.getElementById('selected-div');
        const enterpriseArticles = document.getElementById('enterprise-div');
        const startupsArticles = document.getElementById('startups-div');
        const publicArticles = document.getElementById('public-div');
        const medicalArticles = document.getElementById('medical-div');

        const selectedNewsWeb = document.getElementById('selectedWeb');
        const enterpriseNewsWeb = document.getElementById('enterpriseWeb');
        const startupNewsWeb = document.getElementById('startupsWeb');
        const publicNewsWeb = document.getElementById('publicWeb');
        const medicalNewsWeb = document.getElementById('medicalWeb');

        const selectedArticlesWeb = document.getElementById('selected-div-web');
        const enterpriseArticlesWeb = document.getElementById('enterprise-div-web');
        const startupsArticlesWeb = document.getElementById('startups-div-web');
        const publicArticlesWeb = document.getElementById('public-div-web');
        const medicalArticlesWeb = document.getElementById('medical-div-web');

        selectedNews.addEventListener('click', () => {
            event.preventDefault();
            selectedArticles.classList.remove('hidden');
            enterpriseArticles.classList.add('hidden');
            publicArticles.classList.add('hidden');
            startupsArticles.classList.add('hidden');
            medicalArticles.classList.add('hidden');
        });

        enterpriseNews.addEventListener('click', () => {
            event.preventDefault();
            selectedArticles.classList.add('hidden');
            enterpriseArticles.classList.remove('hidden');
            publicArticles.classList.add('hidden');
            startupsArticles.classList.add('hidden');
            medicalArticles.classList.add('hidden');
        });

        startupNews.addEventListener('click', () => {
            event.preventDefault();
            selectedArticles.classList.add('hidden');
            enterpriseArticles.classList.add('hidden');
            publicArticles.classList.add('hidden');
            startupsArticles.classList.remove('hidden');
            medicalArticles.classList.add('hidden');
        });

        publicNews.addEventListener('click', () => {
            event.preventDefault();
            selectedArticles.classList.add('hidden');
            enterpriseArticles.classList.add('hidden');
            publicArticles.classList.remove('hidden');
            startupsArticles.classList.add('hidden');
            medicalArticles.classList.add('hidden');
        });

        medicalNews.addEventListener('click', () => {
            event.preventDefault();
            selectedArticles.classList.add('hidden');
            enterpriseArticles.classList.add('hidden');
            publicArticles.classList.add('hidden');
            startupsArticles.classList.add('hidden');
            medicalArticles.classList.remove('hidden');
        });


        // WEB
        selectedNewsWeb.addEventListener('click', () => {
            event.preventDefault();
            selectedArticlesWeb.classList.remove('hidden');
            enterpriseArticlesWeb.classList.add('hidden');
            publicArticlesWeb.classList.add('hidden');
            startupsArticlesWeb.classList.add('hidden');
            medicalArticlesWeb.classList.add('hidden');
        });

        enterpriseNewsWeb.addEventListener('click', () => {
            event.preventDefault();
            selectedArticlesWeb.classList.add('hidden');
            enterpriseArticlesWeb.classList.remove('hidden');
            publicArticlesWeb.classList.add('hidden');
            startupsArticlesWeb.classList.add('hidden');
            medicalArticlesWeb.classList.add('hidden');
        });

        startupNewsWeb.addEventListener('click', () => {
            event.preventDefault();
            selectedArticlesWeb.classList.add('hidden');
            enterpriseArticlesWeb.classList.add('hidden');
            publicArticlesWeb.classList.add('hidden');
            startupsArticlesWeb.classList.remove('hidden');
            medicalArticlesWeb.classList.add('hidden');
        });

        publicNewsWeb.addEventListener('click', () => {
            event.preventDefault();
            selectedArticlesWeb.classList.add('hidden');
            enterpriseArticlesWeb.classList.add('hidden');
            publicArticlesWeb.classList.remove('hidden');
            startupsArticlesWeb.classList.add('hidden');
            medicalArticlesWeb.classList.add('hidden');
        });

        medicalNewsWeb.addEventListener('click', () => {
            event.preventDefault();
            selectedArticlesWeb.classList.add('hidden');
            enterpriseArticlesWeb.classList.add('hidden');
            publicArticlesWeb.classList.add('hidden');
            startupsArticlesWeb.classList.add('hidden');
            medicalArticlesWeb.classList.remove('hidden');
        });
    }
}
</script>