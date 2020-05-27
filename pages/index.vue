<template>
    <div class="site-wrapper">
        <header class="site-header position-relative">
            <div class="container">
                <div class="row justify-content-center align-items-center position-relative">
                    <div class="col-sm-3 col-6 col-lg-2 col-xl-2 order-lg-1">
                        <div class="brand-logo">
                            <!-- <a href=""><img src="../static/image/main-logo.png" alt="" /></a> -->
                        </div>
                    </div>
                    <div class="col-sm-8 col-lg-2 col-xl-2 d-none d-sm-block order-lg-3">
                        <div class="header-btns justify-content-end">
                            <a href="#" class="btn btn-link">Sign In</a>
                        </div>
                    </div>
                    <!-- Menu Block -->
                    <div class="col-sm-1 col-6 col-lg-6 col-xl-6 offset-lg-2  position-static order-lg-2">
                        <div class="main-navigation">
                            <ul class="main-menu">
                                <li class="menu-item has-dropdown">
                                    <a href="#features">Dashboard</a>
                                    <ul class="menu-dropdown">
                                        <li class="single-item">
                                            <a href="">
                                                <h3>View 👀</h3> 
                                                <p>View identified suspects</p>
                                            </a>
                                        </li>
                                        <li class="single-item">
                                            <a href="">
                                                <h3>Find 🔎</h3>
                                                <p>Based on location & footage</p>
                                            </a> 
                                        </li>
                                        <li class="single-item">
                                            <a href="">
                                                <h3>History 📜</h3>
                                                <p>Movement history of criminals</p>
                                            </a> 
                                        </li>
                                        <li class="single-item">
                                            <a href="">
                                                <h3>Track 📍</h3>
                                                <p>And identify wanted criminals</p>
                                            </a> 
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item "><a href="#">About</a></li>
                        
                                <li class="menu-item"><a href="#features">Features</a></li>
                            </ul>
                        </div>
                        <div class="mobile-menu"></div>
                    </div>
                </div>
            </div>
            <div class="shape-holder header-shape" data-aos="fade-down" data-aos-once="true">
                <img src="../static/image/header-shape.svg" alt="">
            </div>
        </header>

        <!-- Hero-Area -->
        <div class="hero-area position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-7 col-12">
                        <div class="hero-content">
                            <h1>Samaritan</h1>
                            <h3><strong>A Criminal Detection System</strong></h3>
                            <br/>
                            <p>Replacing the conventional face recognition based criminal tracking systems with Triple Layer Verification-based distributed national surveillance system.</p>
                            <div class="hero-btn">
                                <a href="#" class="btn btn--orange btn--hover-shine">Get Started</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-5 col-12">
                        <div class="hero-media">
                            <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
                            <div class="media-shape animate-spin"><img src="../static/image/media-shape.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape-holder hero-shape" data-aos="fade-right" data-aos-once="true">
                <img src="../static/image/hero-orange-shape.svg" alt="">
            </div>
        </div>

        <!-- Facts Section -->
        <section class="facts-section">
            <div class="container">
                <div class="position-relative">
                    <div class="fact-absolute">
                        <div class="row justify-content-center">
                            <div class="col-xl-7 col-lg-8 mb--35  text-center">
                                <span class="fact-text">CCTV Cameras are everywhere. Harnessing them for a <br />Safe India.</span>
                            </div>
                        </div>
                        <div class="row justify-content-center space-db--30">
                            <div class="col-md-6 col-lg-3 mb--30" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                                <div class="fact-card" >
                                    <div class="card-content">
                                        <span class="number">500k</span>
                                        <p class="info">CCTV Cameras</p>
                                    </div>
                        
                                    <div class="card-icon">
                                        <img src="../static/image/users-wm.png" alt="">
                                    </div>
                                </div>
                            </div>
                                
                            <div class="col-md-6 col-lg-3 mb--30" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                                <div class="fact-card" >
                                    <div class="card-content">
                                        <span class="number">24 x 7</span>
                                        <p class="info">Surveillance</p>
                                    </div>
                        
                                    <div class="card-icon">
                                        <img src="../static/image/fact-2.png" alt="">
                                    </div>
                                </div>
                            </div>
                                
                            <div class="col-md-6 col-lg-3 mb--30" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="400">
                                <div class="fact-card" >
                                    <div class="card-content">
                                        <span class="number">30-90</span>
                                        <p class="info">Days of Footage</p>
                                    </div>
                            
                                    <div class="card-icon">
                                        <img src="../static/image/fact-3.png" alt="">
                                    </div>
                                </div>
                            </div>
                                
                            <div class="col-md-6 col-lg-3 mb--30" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="600">
                                <div class="fact-card" >
                                    <div class="card-content">
                                        <span class="number">∞</span>
                                        <p class="info">Amount of Data</p>
                                    </div>
                            
                                    <div class="card-icon">
                                        <img src="../static/image/fact-4.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- Course section -->
        <section class="course-section position-relative" id="features">
            <div class="shape-holder">
                <img src="./../static/image/section-2-shape-bg.svg" alt="">
            </div>
            <div class="shape-holder" data-aos="zoom-in"  data-aos-once="true">
                <img src="./../static/image/section-2-shape.svg" alt="">
            </div>
            <div class="shape-holder course-shape-3" data-aos="zoom-in-left" data-aos-once="true">
                <img src="./../static/image/course-yelloow-svg.svg" alt="">
            </div>
            <div class="container pt-lg--85">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="section-title section-black">
                            <h2>How do we stand out?</h2>
                            <p>Establishing new standards of safety by tagging criminals through CCTV footage by using Three Layer Verification and thus reducing false positives.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion course-accordion" id="accordionExample" >
                    <div class="card course-card"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <div class="card-header" id="headingOne">
                            <div class="row">
                                <div class="col-xl-6 col-lg-7">
                                    <div class="acc-left-content d-flex">
                                        <div class="acc-icon d-flex justify-content-center">
                                            <img width="200vw" src="./../static/image/focus.svg" alt="">
                                        </div>
                                        <div class="acc-head-contents">
                                            <h3>Face Recognition</h3>
                                            <p>A face detection layer powered by Retinaface which is robust to positional and resolution changes and can detect faces in an image with great accuracy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-5 offset-xl-2">
                                    <div class="acc-right-content d-flex">
                                        <!-- <div class="course-length-badge">
                                            <span>6 Video Classes</span>
                                            <span>3.4hrs</span>
                                        </div> -->
                                        <button class="btn acc-toggle" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <i class="icon icon-minimal-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <!-- <ul class="course-inline-list">
                                    <li><a href=""><i class="icon icon-check-2"></i>Persona Creation</a></li>
                                    <li><a href=""><i class="icon icon-check-2"></i>Why Persona is Important</a></li>
                                    <li><a href=""><i class="icon icon-check-2"></i>Data-Driven Personas</a></li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                    <div class="card course-card"  data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                        <div class="card-header" id="heading2">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="acc-left-content d-flex">
                                        <div class="acc-icon d-flex justify-content-center">
                                            <img width="200vw" src="./../static/image/search.svg" alt="">
                                        </div>
                                        <div class="acc-head-contents">
                                            <h3>Data Mining</h3>
                                            <p>The internet, especially social media sites are scraped for images of the personnel. Only those images that show more than 85% accuracy are included into our criminal database.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 offset-lg-2">
                                    <div class="acc-right-content d-flex">
                                        <!-- <div class="course-length-badge">
                                            <span>6 Video Classes</span>
                                            <span>3.4hrs</span>
                                        </div> -->
                                        <button class="btn acc-toggle collapsed" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                            <i class="icon icon-minimal-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    
                        </div>
                
                        <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
                            <div class="card-body">
                                <!-- <ul class="course-inline-list">
                                    <li><a href=""><i class="icon icon-check-2"></i>Persona Creation</a></li>
                                    <li><a href=""><i class="icon icon-check-2"></i>Why Persona is Important</a></li>
                                    <li><a href=""><i class="icon icon-check-2"></i>Data-Driven Personas</a></li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                    <div class="card course-card"  data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="400">
                        <div class="card-header" id="heading3">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="acc-left-content d-flex">
                                        <div class="acc-icon d-flex justify-content-center">
                                            <img width="200vw" src="./../static/image/3d.svg" alt="">
                                        </div>
                                        <div class="acc-head-contents">
                                            <h3>3D Comparsion</h3>
                                            <p>Being a false positive outcome in the case of tagging criminals is a serious error. Therefore, a 3D map of the face is constructed and compared.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 offset-lg-2">
                                    <div class="acc-right-content d-flex">
                                        <!-- <div class="course-length-badge">
                                            <span>6 Video Classes</span>
                                            <span>3.4hrs</span>
                                        </div> -->
                                        <button class="btn acc-toggle collapsed" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                            <i class="icon icon-minimal-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    
                        <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#accordionExample">
                            <div class="card-body">
                                <!-- <ul class="course-inline-list">
                                    <li><a href=""><i class="icon icon-check-2"></i>Persona Creation</a></li>
                                    <li><a href=""><i class="icon icon-check-2"></i>Why Persona is Important</a></li>
                                    <li><a href=""><i class="icon icon-check-2"></i>Data-Driven Personas</a></li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                    <div class="card course-card"  data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="600">
                        <div class="card-header" id="heading4">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="acc-left-content d-flex">
                                        <div class="acc-icon d-flex justify-content-center">
                                            <img width="200vw" src="./../static/image/app.svg" alt="">
                                        </div>
                                        <div class="acc-head-contents">
                                            <h3>A Beautiful UI</h3> 
                                            <p>A feature rich, beautiful mobile and web applications that can harness the power of this tagging system.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 offset-lg-2">
                                    <div class="acc-right-content d-flex">
                                        <!-- <div class="course-length-badge">
                                            <span>6 Video Classes</span>
                                            <span>3.4hrs</span>
                                        </div> -->
                                        <button class="btn acc-toggle collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                            <i class="icon icon-minimal-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    
                        <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
                            <div class="card-body">
                                <ul class="course-inline-list">
                                    <li><a href=""><i class="icon icon-check-2"></i>Persona Creation</a></li>
                                    <li><a href=""><i class="icon icon-check-2"></i>Why Persona is Important</a></li>
                                    <li><a href=""><i class="icon icon-check-2"></i>Data-Driven Personas</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section
        <section class="faq-section position-relative">
            <div class="container">
                <div class="faq-accordion">
                    <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="section-title"><h2>Frequently Asked Questions</h2></div>
                
                        <div class="accordion faq-accordion space-db--10" id="accordionExample2">
                        <div class="single-faq mb--10" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <button class="faq-head" type="button" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1">
                            <h2>Will I get full access to the course after purchasing?</h2>
                            <i class="icon icon-minimal-down"></i>
                            </button>
                        
                            <div id="faq1" class="collapse show" aria-labelledby="faq-heading1" data-parent="#accordionExample2">
                            <div class="faq-body">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                            </div>
                            </div>
                        </div>
                        <div class="single-faq mb--10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                                <button class="faq-head collapsed" type="button" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2">
                                <h2>Do you give money back guarantee?</h2>
                                <i class="icon icon-minimal-down"></i>
                                </button>
                        
                            <div id="faq2" class="collapse" aria-labelledby="faq-heading2" data-parent="#accordionExample2">
                            <div class="faq-body">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                            </div>
                            
                            </div>
                        </div>
                        <div class="single-faq mb--10" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">
                                <button class="faq-head collapsed" type="button" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3">
                                <h2>How can I submit my questions after joining?</h2>
                                <i class="icon icon-minimal-down"></i>
                                </button>
                        
                            <div id="faq3" class="collapse" aria-labelledby="faq-heading3" data-parent="#accordionExample2">
                            <div class="faq-body">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                            </div>
                            
                            </div>
                        </div>
                        <div class="single-faq mb--10" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="600">
                                <button class="faq-head collapsed" type="button" data-toggle="collapse" data-target="#faq4" aria-expanded="true" aria-controls="faq4">
                                <h2>Do you offer a discount?</h2>
                                <i class="icon icon-minimal-down"></i>
                                </button>
                        
                            <div id="faq4" class="collapse" aria-labelledby="faq-heading4" data-parent="#accordionExample2">
                            <div class="faq-body">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="faq-guarantee">
                    <div class="row">
                    <div class="col-lg-5 col-md-7 offset-lg-1" data-aos="zoom-in-right"  data-aos-once="true" data-aos-delay="55" data-aos-duration="1500">
                        <div class="content">
                        <h2>Get <span class="text--primary fs-inherit">30 Days</span> Money Back Guarantee.</h2>
                        <p>Create custom landing pages with Shades that convert more visitors than any website, no coding required.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-5 offset-lg-1" data-aos="zoom-in-left"  data-aos-once="true" data-aos-delay="55" data-aos-duration="1500">
                        <div class="flex-all-center h-100">
                        <img src="../static/image/guarnatee.png" alt="">
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="shape-holder faq-shape" data-aos="zoom-in-right" data-aos-once="true"><img src="../static/image/faq-shape.svg" alt=""></div>
        </section> -->

        <!-- Footer Section -->
        <div class="footer-section position-relative">
            <div class="container margin-decrese">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-lg-8 col-xl-7" data-aos="flip-down" data-aos-delay="55" data-aos-duration="2000" data-aos-once="true">
                        <div class="footer-content">
                            <span class="title-small-text">let's dive right in</span>
                            <h2>Ready to catch some bad guys?</h2>
                            <div class="footer-btn"><a href="" class="btn btn--orange btn--hover-shine">Sign In 🔑</a></div>
                        </div>
                    </div>
                    </div>
                    <span class="section-devider mt--130"></span>
                <div class="row mt--70">
                    <div class="col-lg-4 col-xl-4 col-sm-6 col-margin">
                        <span class="ft-title-sm">Help menu</span>
                        <div class="row">
                            <div class="col-lg-5 col-4">
                                <ul class="footer-list">
                                    <li><a href="">About</a></li>
                                    <li><a href="">Features</a></li>
                                    <!-- <li><a href=""></a></li>
                                    <li><a href=""></a></li> -->
                                </ul>
                            </div>

                            <div class="col-lg-7 col-8">
                                <ul class="footer-list">
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Help &amp; Support</a></li>
                                    <!-- <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">Terms &amp; Conditions</a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-xl-3 col-sm-6 col-margin">
                        <span class="ft-title-sm">Product</span>
                        <ul class="footer-list">
                            <li><a href="">Home</a></li>
                            <li><a href="">Dashboard</a></li>
                            <!-- <li><a href="">Karnel Admin Dashboard</a></li>
                            <li><a href="">Gray UI Kit</a></li> -->
                        </ul>
                    </div>
                    <div class="col-lg-5 col-xl-5 col-margin">
                        <div class="ft-newsletter-box">
                            <p>Say hello, email us</p>
                            <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter your email address">
                                <button class="submit-btn"><i class="icon icon-tail-right"></i></button>
                            </div>
                            </form>
                        </div>
                    </div>
                    </div>
            </div>
            <div class="shape-holder footer-shape-1" data-aos="zoom-in-left" data-aos-once="true"><img src="../static/image/cta-shape.svg" alt=""></div>
            <div class="shape-holder footer-shape-2" data-aos="zoom-in-right" data-aos-once="true"><img src="../static/image/footer-shape.svg" alt=""></div>
        </div>
    </div>
</template>

<script>
    import Lottie from './lottie.vue';
    import * as animationData from '../static/lottie/cctv-camera.json';

    export default {

        components: {
            'lottie': Lottie
        },
        data() {
            return {
                defaultOptions: {animationData: animationData.default},
                animationSpeed: 1
            }
        },
        methods: {
            handleAnimation: function (anim) {
                this.anim = anim;
            },

            stop: function () {
                this.anim.stop();
            },

            play: function () {
                this.anim.play();
            },

            pause: function () {
                this.anim.pause();
            },

            onSpeedChange: function () {
                this.anim.setSpeed(this.animationSpeed);
            }
        }
    }
</script>

<style>

</style>