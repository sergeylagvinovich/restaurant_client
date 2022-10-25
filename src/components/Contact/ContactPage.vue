<template>
    <div class="title-area">
        <div class="title-inner container paddings-side">
            <div class="title-h1 title-color-white text-lg-center">Contact Us</div>
        </div>
    </div>

    <section class="book-table">
        <div class="book-table-inner container paddings">
            <div class="title-h5 title-thin">Have any questions?</div>
            <div class="title-h2 divider-10">Send a Message</div>
            <img src="/images/stars.jpg" alt="" class="stars divider-20"/>
            <div class="divider-20"></div>
        
            <div class="contact-form-main-wrapper">
                <div class="contact-form-form-wrapper">
                <form action="https://contact-form.com/s/FORM_ID" method="POST">
                    <div class="contact-form-mb-5">
                        <label for="name" class="contact-form-form-label"> Full Name </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            class="contact-form-form-input"
                        />
                    </div>
                    <div class="contact-form-mb-5">
                        <label for="phone" class="contact-form-form-label"> Phone Number </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            class="contact-form-form-input"
                        />
                    </div>
                    <div class="contact-form-mb-5">
                        <label for="message" class="contact-form-form-label"> Message </label>
                        <textarea
                          rows="6"
                          name="message"
                          id="message"
                          placeholder="Type your message"
                          class="contact-form-form-input"
                        ></textarea>
                    </div>
                    <div>
                        <button class="contact-form-btn">Send a message</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </section>


    <section class="section-contact-info">    
        <div class="title-h5 title-thin title-color-white">Contact</div>
        <div class="title-h2 title-color-white divider-10">Information</div>
        <div class="contact-box">
            <div class="contact-box-inner container paddings paddings-side">
                <div class="contact-item">
                    <div class="contact-icon"><iconify-icon icon="bi:geo-alt-fill"></iconify-icon></div>
                    <div class="title-h5 title-color-yellow">Our Address</div>
                    <div class="title-body title-color-white divider-20">908 New Hampshire Avenue <br> Northwest #100, Washington <br> 20037, United States</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><iconify-icon icon="carbon:phone-filled"></iconify-icon></div>
                    <div class="title-h5 title-color-yellow">Our Phones</div>
                    <div class="title-body title-color-white divider-20">Phone: +1 916-875-2235 <br> Mobile: +1 916-875-2235 <br> Fax: +1 916-875-2235</div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><iconify-icon icon="akar-icons:clock"></iconify-icon></div>
                    <div class="title-h5 title-color-yellow">Opening Hours</div>
                    <div class="title-body title-color-white divider-20">Monday-Friday: 8:00 – 23:00 <br>  Saturday: 10:00 – 23:00 <br> Sunday: 10:00 – 20:00 </div>
                </div>
            </div>
        </div>
    </section>


    <section class="contact-socials">
        <div class="contact-socials-inner container paddings">
            <div class="title-h5 title-thin">Visit us on social networks</div>
            <div class="title-h2 divider-10">Follow Us</div>
            <div class="socials-footer">
                <a href="#"><iconify-icon icon="ant-design:twitter-circle-filled" class="icon-account" ></iconify-icon></a>
                <a href="#"><iconify-icon icon="entypo-social:facebook-with-circle" class="icon-account" ></iconify-icon></a>
                <a href="#"><iconify-icon icon="entypo-social:linkedin-with-circle" class="icon-account" ></iconify-icon></a>
                <a href="#"><iconify-icon icon="entypo-social:youtube-with-circle" class="icon-account" ></iconify-icon></a>
                <a href="#"><iconify-icon icon="entypo-social:pinterest-with-circle" class="icon-account" ></iconify-icon></a>
                <a href="#"><iconify-icon icon="entypo-social:instagram-with-circle" class="icon-account" ></iconify-icon></a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: "ContactPage",
};
</script>
<style></style>
