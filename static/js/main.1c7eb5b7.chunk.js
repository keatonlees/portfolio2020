(this.webpackJsonpportfolio2020=this.webpackJsonpportfolio2020||[]).push([[0],{21:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),o=a.n(s),c=(a(50),a(5)),r=a(40),l=a.n(r),d=(a(51),a(13)),m=(a(52),a.p+"static/media/logo_circle_light.5511b968.png"),h=a(1);var j=function(){return Object(h.jsx)("div",{className:"preloader-container",children:Object(h.jsx)("div",{className:"preloader-loader",children:Object(h.jsx)("img",{src:m,className:"preloader-img",alt:"logo"})})})},p=a(82),u=a(83),b=a(18),g=(a(54),a.p+"static/media/KeatonLeesResume.9d3c1eb9.pdf");var f=function(){return Object(h.jsxs)(p.a,{className:"navbar-container",fixed:"top",variant:"dark",expand:"md",children:[Object(h.jsx)(p.a.Brand,{children:Object(h.jsx)("img",{src:m,className:"nav-brand",alt:"logo"})}),Object(h.jsx)(p.a.Toggle,{"aria-controls":"navbar-nav"}),Object(h.jsx)(p.a.Collapse,{id:"navbar-nav",children:Object(h.jsxs)(u.a,{className:"ml-auto nav-links",children:[Object(h.jsx)(u.a.Item,{className:"nav-item",children:Object(h.jsx)(b.b,{to:"/",className:"nav-text",children:"Home"})}),Object(h.jsx)(u.a.Item,{className:"nav-item",children:Object(h.jsx)(b.b,{to:"/about",className:"nav-text",children:"About"})}),Object(h.jsx)(u.a.Item,{className:"nav-item",children:Object(h.jsx)(b.b,{to:"/projects",className:"nav-text",children:"Projects"})}),Object(h.jsx)(u.a.Item,{className:"nav-item",children:Object(h.jsx)("div",{onClick:function(){var e;e=g,window.open(e,"_blank").focus()},className:"nav-text",children:"Resume"})})]})})]})};a(62);var v=function(e){return Object(h.jsxs)("div",{className:"banner-container","data-aos":"fade-up",children:[Object(h.jsx)("h1",{className:"banner-pretitle",children:e.pretitle}),Object(h.jsx)("h1",{className:"banner-title",children:e.title}),Object(h.jsx)("h1",{className:"banner-subtitle",children:e.subtitle})]})},w=a(10),O=a(16),x=a.p+"static/media/project_octodo_1.b0c23e4b.png",y=a.p+"static/media/project_jarvis_1.b8d38b8f.png",N=a.p+"static/media/project_drone_1.219a8a02.png",k=a.p+"static/media/project_rethink_1.9f59c579.png",I=a.p+"static/media/project_puppr_1.76a118b7.png",S=a.p+"static/media/project_kong_1.de027adc.png",T=a.p+"static/media/project_first_1.7c0dd874.png",A=[{name:"Octo-Do",marqueeName:"Octo-Do",type:"Personal Project",timeframe:"May 2021 to July 2021",ftdescription:"An interactive and flexible to-do list built using ReactJS, Node.js and MySQL",description:"As a university student, I know how important a to-do list is and how it is an extremely effective time-management tool. There were many alternatives already out there, but none contained the functionality wanted. The goal for Octo-Do was to have a overall task side and a daily tasks side on same page so a user can see both sides when planning out their tasks. \nWith this in mind, Octo-Do was designed and developed using React for the frontend, Node.js and Axios for the backend and MySQL for the database, all of which is hosted on Heroku. In addition, Firebase user authentication was implemented so that each user's tasks stay separate. A large feature of Octo-Do was the ability to drag-and-drop tasks from the overall to-do list to the daily to-do list, so I used react-dnd-beautiful library to achieve this. \nOverall, I am quite happy with the outcome of Octo-Do as it meets all of the current goals that were wanted. In the future, new features and functionality may be added, including more user flexibility in terms of customizing their app settings, and possibly different timeline and calendar views as well.",languages:["JS","React","CSS","Node.js","Axios","MySQL","Firebase","Heroku"],github:"https://github.com/keatonlees/octo-do",link:"https://octo-do.herokuapp.com/login",images:[x],icon:a.p+"static/media/icon_octodo.80b08bd1.png"},{name:"Jarvis Smart Home",marqueeName:"Smart Home",type:"Personal Project",timeframe:"December 2020 to February 2021",ftdescription:'Combining a Raspberry Pi 4, a 5" touchscreen, Python backend, HTML frontend and 3D-printing, I designed, constructed, and developed a personal smart home',description:'I designed and developed a Smart Clock using Flask, RaspberryPi and a captive touchscreen. This Smart Clock shows the time, date, weather and other useful information. Using the touchscreen, it can interact with smart home functions, such as turning on and off lights and other features. \nTo complete my creation, I used SolidWorks to design an enclosure that would hold the Raspberry Pi, speakers, amplifier board, and wiring. I then 3D-printed the enclosure in four large parts and assembled the whole enclosure using M3 screws. I currently use this Jarvis Smart Home as my main bedroom clock and alarm. \nOriginally, I integrated Google Home API with the addition of SnowBoy for custom wake words, which I set to "Jarvis". However, since doing this the Snowboy library has been deprecated and I have not had time to find an alternative, so the Google Home functionality is currently disabled. I attempted to design both the software and enclosure with expandibility in mind. In the future, I would like to possibly add Spotify API integration, Bluetooth capabilities and possibly even a battery pack so that it can be portable.',languages:["RaspberryPi","Python","Flask","HTML","CSS","JS","3DPrinting"],github:"https://github.com/keatonlees/smart-clock",link:"",images:[y],icon:a.p+"static/media/icon_smarthome.9e8f5834.png"},{name:"Arduino Drone",marqueeName:"Drone",type:"Personal Project",timeframe:"January 2021 to March 2021",ftdescription:"An Arduino based drone",description:"I designed, printed, wired and programming an Arduino Drone. The body and arms are created in SolidWorks and 3D-printed on my own printer. The design is modular so that if one arm breaks, I can easily replace the part without having to reprint an entire new body. I have also constructed a radio transmitting module as well. This transmitter consists of two joysticks and two potentiometers wired into an Arduino Nano, which processes and converts the signals to transmit wirelessly by the NRF module. This entire controller is powered off six AA batteries. \nThe drone electronics consist of a receiving NRF module that is wired to another Arduino Nano to convert the signals back and then sends those signals to the brain, another Arduino Nano. Yes, this drone consists of three different Arduinos. This main Arduino Nano, the flight controller, processes the signals from the radio receiver and the gyroscopic module to calculate the angle and velocity of the drone. These calculations are then processed and send to the electronic speed controllers to speed up or slow down the motors. The drone is powered off a single 2200mAh rechargable LiPo battery. In the future, I would like to add a first-person view (FPV) camera to see what the drone is seeing, along with a Go-Pro on top of the drone to capture aerial photos and videos.",languages:["Arduino","3DPrinting","SolidWorks","Soldering"],github:"",link:"",images:[N],icon:a.p+"static/media/icon_drone.5bfc9814.png"},{name:"Rethink",marqueeName:"Rethink",type:"Adobe + Amazon Creative Jam",timeframe:"September 2020",ftdescription:"An application to teach students about design principles",description:"During the 2020 Adobe + Amazon Creative Jam, myself and two other Waterloo students constructed Rethink, an application that teaches students about the principles of design. This app was meant to allow student to discover design, learn the differences between good and bad design, and inspire them to start their design career. Rethink's high fidelity prototype was built using AdobeXD over the span of two weeks. Our project was awarded 1 of 10 honourable mentions and placed in the top 20 out of 420 teams participating.",languages:["AdobeXD","Figma"],github:"",link:"https://xd.adobe.com/view/f0025240-e2f4-45ee-80b6-5dcc01971ae3-a551/screen/03850abc-4097-4d6e-8562-99a8267bb38e?fullscreen",images:[k],icon:a.p+"static/media/icon_rethink.142d6ded.png"},{name:"Puppr",marqueeName:"Puppr",type:"TOHacks 2020",timeframe:"May 2020",ftdescription:"A website to connect users with dogs in need",description:"During TOHacks 2020, myself and two other team members built Puppr, a digital platform to connect lonely, isolated users with local dogs that are available for adoption. These dogs will help with users' mental health as they continue quarintine and reimmerse themselves back into a social world. The entire website was built in 48 hours from scratch. \nPuppr's front end was written in HTML, CSS and Javascript while the backend was written in Python and Firebase. The landing and signup page are both purely HTML and CSS, while the selection page's functionality is Javascript. When selecting the dogs, you are seeing real dogs available from a real shelter. \nUsing Flask to build a web-scraping API, we were able to import that information into our page for the user to easily see. Whether you select the checkmark or not, you will cycle through a variety of dogs (however many are available at the time). If you choose to click the checkmark, the dog's profile will be saved in the left sidebar, where you can click on that saved dog to go the shelter's webpage. Since this entire app was built within a 48 hour time frame, our web-scraping is accurate, but a little slow; if we were to redo this project, that would be one of our key redesigns for Puppr.",languages:["Python","Flask","HTML","CSS","JS","Firebase"],github:"https://github.com/orizabal/puppr",link:"",images:[I],icon:a.p+"static/media/icon_puppr.805f624f.png"},{name:"Donkey Kong",marqueeName:"Donkey Kong",type:"Personal Project",timeframe:"April 2019",ftdescription:"A re-creation of the 1980s Donkey Kong Arcade Game",description:"I decided to recreate the classic 1980s Donkey Kong Arcade game. I was able to completely adapt and re-create the first level in it's entirety. The game included accurate gameplay and exact sprite animations, with the sprites taken from the original spritesheet. Viewing the final product compared to the original, I had almost made an exact replica of the orignal arcade game. \nTo code the game, I used a combination of Java and HTML along with JGEngine to render the environment. A challenging hurdle to overcome was matching the bounding boxes to the spritesheet and create seamless animations, but it turned out quite smooth in the end. I had started with basic keyboard controls, but eventually integrated gyroscopic movement controller. This controller was an alternate way to play the game and added a level of difficulty, both in the programming acclerometer values and completing the level.",languages:["Java","JGEngine","HTML","Gyroscopic Sensor"],github:"https://github.com/keatonlees/donkey-kong",link:"",images:[S],icon:a.p+"static/media/icon_kong.48e7c810.png"},{name:"FIRST Robotics",marqueeName:"FIRST",type:"Senior Lead",timeframe:"2019",ftdescription:"Co-captain of the FIRST Robotics team",description:"I was Co-Captain of the FIRST Robotics Team that competed at the FIRST Western National Competiton. I lead the team through design, fabrication, and testing throughout the robot's construction. The FIRST team was only in it's second year and there were various hiccups along the journey to the Western National Competition. Many of the members did not have any knowledge of fabrication, electronics or programming, so myself and the other captain took it upon ourselves to educate the team as much as we could. \nI taught the students how to think about the many factors and variables that we needed to consider when designing such a robot, but keep the solutions realistic and manageable for the size of our team. We also had to consider the easiest and most efficient way to manufacture said robot within the 6 week timeframe provided. At the end of 6 intense weeks of designing and building, the team arrived at a relatively well designed robot given the materials and time.",languages:["C++","Java","Hardware"],github:"",link:"",images:[T],icon:a.p+"static/media/icon_first.1e128033.png"}],P=[];P.push(A[0]),P.push(A[1]);var C=P;a(21),a(66);var D=function(){var e=Object(c.f)(),t=function(){e.push("/projects")};return Object(h.jsxs)("div",{className:"ftprojects-container","data-aos":"fade-up",children:[Object(h.jsxs)("h1",{className:"homepage-title",children:[Object(h.jsx)("span",{className:"coloured",children:">"})," A Few of My Projects"]}),C.map((function(e,a){return Object(h.jsx)("div",{children:a%2===0?Object(h.jsxs)("div",{className:"ftprojects-item","data-aos":"fade-up",onClick:t,children:[Object(h.jsx)("div",{className:"ftprojects-img-container ftproject-img-left",children:Object(h.jsx)("img",{className:"ftprojects-img",src:e.images[0],alt:"project"})}),Object(h.jsxs)("div",{className:"ftprojects-text-container ftprojects-text-right",children:[Object(h.jsx)("h1",{className:"ftprojects-name",children:e.name}),Object(h.jsx)("p",{className:"ftprojects-description",children:e.ftdescription}),Object(h.jsx)("div",{className:"ftprojects-languages ftprojects-languages-left",children:e.languages.map((function(e,t){return Object(h.jsx)("h1",{className:"ftprojects-language-h1 ftprojects-language-h1-left",children:e},t)}))}),Object(h.jsxs)("div",{className:"ftprojects-link",children:["View project",Object(h.jsx)(w.a,{icon:O.c,className:"ftprojects-arrow"})]})]})]}):Object(h.jsxs)("div",{className:"ftprojects-item","data-aos":"fade-up",onClick:t,children:[Object(h.jsxs)("div",{className:"ftprojects-text-container ftprojects-text-left",children:[Object(h.jsx)("h1",{className:"ftprojects-name",children:e.name}),Object(h.jsx)("p",{className:"ftprojects-description",children:e.ftdescription}),Object(h.jsx)("div",{className:"ftprojects-languages ftprojects-languages-right",children:e.languages.map((function(e,t){return Object(h.jsx)("h1",{className:"ftprojects-language-h1 ftprojects-language-h1-right",children:e},t)}))}),Object(h.jsxs)("div",{className:"ftprojects-link",children:["View project",Object(h.jsx)(w.a,{icon:O.c,className:"ftprojects-arrow"})]})]}),Object(h.jsx)("div",{className:"ftprojects-img-container ftproject-img-right",children:Object(h.jsx)("img",{className:"ftprojects-img ",src:e.images[0],alt:"project"})})]})},a)}))]})};a(67);var F=function(){return Object(h.jsxs)("div",{className:"footer-container",children:[Object(h.jsx)("h1",{className:"footer-text",children:"Designed and Coded by Keaton Lees"}),Object(h.jsx)("img",{src:m,className:"footer-img",alt:"logo"})]})},_=a(19);a(68);var R=function(){var e="klees@uwaterloo.ca",t=function(e){window.open(e,"_blank").focus()},a=function(e){window.open("mailto:".concat(e)).focus()};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"contact-container contact-left",children:[Object(h.jsx)(w.a,{icon:O.a,className:"contact-icon",onClick:function(){a(e)}}),Object(h.jsx)(w.a,{icon:_.c,className:"contact-icon",onClick:function(){t("https://www.linkedin.com/in/keatonlees/")}}),Object(h.jsx)(w.a,{icon:_.a,className:"contact-icon",onClick:function(){t("https://github.com/keatonlees")}}),Object(h.jsx)(w.a,{icon:_.b,className:"contact-icon",onClick:function(){t("https://www.instagram.com/kleez3dprints/")}}),Object(h.jsx)("div",{className:"contact-vl"})]}),Object(h.jsxs)("div",{className:"contact-container contact-right",children:[Object(h.jsx)("h1",{className:"contact-email",onClick:function(){a(e)},children:e}),Object(h.jsx)("div",{className:"contact-vl"})]})]})};var H=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),i=a[0],s=a[1],o=Object(n.useState)(!1),c=Object(d.a)(o,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){s(!0),setTimeout((function(){l(!0)}),e.preloaderTimeout)}),[]),Object(h.jsx)("div",{className:"web-container",children:i?Object(h.jsx)("div",{className:r?"page-hidden":"",onTransitionEnd:function(){s(!1)},children:Object(h.jsx)(j,{})}):Object(h.jsx)("div",{className:i?"":"page-shown",children:Object(h.jsxs)("div",{className:"page-container",children:[Object(h.jsx)(f,{}),Object(h.jsx)(v,{pretitle:"Hi! My name is",title:"Keaton Lees",subtitle:"A Systems Design Engineering Student @ The University of Waterloo"}),Object(h.jsx)(D,{}),Object(h.jsx)(F,{}),Object(h.jsx)(R,{})]})})})},q=(a(69),a.p+"static/media/keaton_portrait.67a22f12.jpg");var J=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),i=a[0],s=a[1],o=Object(n.useState)(!1),c=Object(d.a)(o,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){s(!0),setTimeout((function(){l(!0)}),e.preloaderTimeout)}),[]),Object(h.jsx)("div",{className:"web-container",children:i?Object(h.jsx)("div",{className:r?"page-hidden":"",onTransitionEnd:function(){s(!1)},children:Object(h.jsx)(j,{})}):Object(h.jsx)("div",{className:i?"":"page-shown",children:Object(h.jsxs)("div",{className:"page-container",children:[Object(h.jsx)(f,{}),Object(h.jsx)(v,{pretitle:"Who am I?",title:"A technology enthusiast",subtitle:"Also an exercise fanatic, travel addict and devoted gamer"}),Object(h.jsxs)("div",{className:"about-container","data-aos":"fade-up",children:[Object(h.jsxs)("div",{className:"about-text",children:[Object(h.jsx)("p",{children:"Hi! My name is Keaton Lees and I'm currently studying Systems Design Engineering at the University of Waterloo. I am an enthusiastic learner who loves to explore new technology and continously expand my knowledge of the working world. I equally enjoy and have experience with both software and hardware as I believe both are crucial in achieving the final goal."}),Object(h.jsx)("p",{children:"Previously, I have worked at Ballard Power Systems, located in Burnaby, BC as Systems and Controls Engineer and Systems Engineer. I have also founded my own 3D-printing company, kleez3dprints, and have also worked at RoboKids Canada as a Senior Software Instructor."}),Object(h.jsx)("p",{children:"Outside of school, you can find me doing everything from designing something to 3D-print to going to the gym to messing around with PC's. I have thoroughly enjoyed 3D-printing ever since I bought my own printer in 2018. You can see some of my recent prints on the Projects Page, or on Instagram @kleez3dprints."}),Object(h.jsx)("p",{children:"On the other hand, I love to stay active. I have competed in Track and Field for the past 8 years, as well as being a Level 2 Official, and have only recently stopped due to university. However, I still like to go outside and run, workout at the local gym, or get together with some friends to play some indoor or beach volleyball. Prior to track, I competed in Taekwondo and recieved my 3rd Degree Black Belt after 10 years of dedication; Taekwondo taught me self-discipline and perseverance, characteristics that I still apply to my everyday tasks."})]}),Object(h.jsx)("div",{className:"about-img-container",children:Object(h.jsx)("img",{src:q,className:"about-img",alt:"portrait"})})]}),Object(h.jsx)(F,{}),Object(h.jsx)(R,{})]})})})},L=a(44),M=a.n(L),E=a(45);a(77);var W=function(){var e=function(e){window.open(e,"_blank").focus()};return Object(h.jsxs)("div",{className:"projects-container","data-aos":"fade-up",children:[Object(h.jsx)(M.a,{speed:120,gradientColor:[3,0,46],gradientWidth:100,"data-aos":"fade-up",className:"projects-marquee",children:A.map((function(e,t){return Object(h.jsx)(E.Link,{to:e.marqueeName,smooth:!0,duration:100,offset:-120,children:Object(h.jsxs)("div",{className:"projects-marquee-item",children:[Object(h.jsx)("img",{className:"projects-marquee-img",src:e.icon,alt:"marquee-item"}),Object(h.jsx)("h1",{className:"projects-marquee-text",children:e.marqueeName})]})},t)}))}),Object(h.jsx)("div",{className:"projects-contents",children:A.map((function(t,a){return Object(h.jsx)("div",{children:a%2===0?Object(h.jsxs)("div",{id:t.marqueeName,className:"projects-item","data-aos":"fade-up",children:[Object(h.jsxs)("div",{className:"projects-item-banner projects-item-banner-left",children:[Object(h.jsx)("div",{className:"projects-item-img-container",children:Object(h.jsx)("img",{className:"projects-item-img",src:t.images[0],alt:"project-img"})}),Object(h.jsxs)("div",{className:"projects-item-overview",children:[Object(h.jsx)("h1",{className:"projects-item-overview-name",children:t.name}),Object(h.jsx)("h1",{className:"projects-item-overview-type",children:t.type}),Object(h.jsx)("h1",{className:"projects-item-overview-timeframe",children:t.timeframe}),Object(h.jsx)("h1",{className:"projects-item-overview-languages-container projects-item-overview-languages-container-left",children:t.languages.map((function(e){return Object(h.jsx)("p",{className:"projects-item-overview-language projects-item-overview-language-left",children:e})}))}),Object(h.jsxs)("div",{className:"projects-item-links",children:[t.github?Object(h.jsx)(w.a,{icon:_.a,className:"projects-icon projects-icon-left",onClick:function(){e(t.github)}}):Object(h.jsx)(h.Fragment,{}),t.link?Object(h.jsx)(w.a,{icon:O.b,className:"projects-icon",onClick:function(){e(t.link)}}):Object(h.jsx)(h.Fragment,{})]})]})]}),Object(h.jsx)("div",{children:t.description.split("\n").map((function(e){return Object(h.jsx)("p",{className:"projects-description",children:e})}))})]}):Object(h.jsxs)("div",{id:t.marqueeName,className:"projects-item","data-aos":"fade-up",children:[Object(h.jsxs)("div",{className:"projects-item-banner projects-item-banner-right",children:[Object(h.jsxs)("div",{className:"projects-item-overview",children:[Object(h.jsx)("h1",{className:"projects-item-overview-name",children:t.name}),Object(h.jsx)("h1",{className:"projects-item-overview-type",children:t.type}),Object(h.jsx)("h1",{className:"projects-item-overview-timeframe",children:t.timeframe}),Object(h.jsx)("h1",{className:"projects-item-overview-languages-container projects-item-overview-languages-container-right",children:t.languages.map((function(e){return Object(h.jsx)("p",{className:"projects-item-overview-language projects-item-overview-language-right",children:e})}))}),Object(h.jsxs)("div",{className:"projects-item-links project-item-links-left",children:[t.github?Object(h.jsx)(w.a,{icon:_.a,className:"projects-icon projects-icon-right",onClick:function(){e(t.github)}}):Object(h.jsx)(h.Fragment,{}),t.link?Object(h.jsx)(w.a,{icon:O.b,className:"projects-icon",onClick:function(){e(t.link)}}):Object(h.jsx)(h.Fragment,{})]})]}),Object(h.jsx)("div",{className:"projects-item-img-container",children:Object(h.jsx)("img",{className:"projects-item-img",src:t.images[0],alt:"project-img"})})]}),Object(h.jsx)("div",{children:t.description.split("\n").map((function(e){return Object(h.jsx)("p",{className:"projects-description",children:e})}))})]})},a)}))})]})};var B=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),i=a[0],s=a[1],o=Object(n.useState)(!1),c=Object(d.a)(o,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){s(!0),setTimeout((function(){l(!0)}),e.preloaderTimeout)}),[]),Object(h.jsx)("div",{className:"web-container",children:i?Object(h.jsx)("div",{className:r?"page-hidden":"",onTransitionEnd:function(){s(!1)},children:Object(h.jsx)(j,{})}):Object(h.jsx)("div",{className:i?"":"page-shown",children:Object(h.jsxs)("div",{className:"page-container",children:[Object(h.jsx)(f,{}),Object(h.jsx)(v,{pretitle:"A look into what I've done",title:"My Projects",subtitle:"Designing, devloping, constructing and testing, I do a lot"}),Object(h.jsx)(W,{}),Object(h.jsx)(F,{}),Object(h.jsx)(R,{})]})})})};a(78);var K=function(){var e=1200;return Object(n.useEffect)((function(){l.a.init({duration:1e3,once:!0})}),[]),Object(h.jsxs)(c.c,{children:[Object(h.jsx)(c.a,{path:"/about",children:Object(h.jsx)(J,{preloaderTimeout:e})}),Object(h.jsx)(c.a,{path:"/projects",children:Object(h.jsx)(B,{preloaderTimeout:e})}),Object(h.jsx)(c.a,{path:"/",children:Object(h.jsx)(H,{preloaderTimeout:e})})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(b.a,{children:Object(h.jsx)(K,{})})}),document.getElementById("root")),z()}},[[79,1,2]]]);
//# sourceMappingURL=main.1c7eb5b7.chunk.js.map