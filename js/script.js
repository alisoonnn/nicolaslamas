
$( document ).ready(function() {

    let section1 = $(".section1")
    let section2 = $(".section2")
    let section3 = $(".section3")
    let section4 = $(".section4")
    let section5 = $(".section5")
    let section6 = $(".sectionfin")


    // section1 

    gsap.registerPlugin(ScrollTrigger);

    
    gsap.to(".logo", {
      opacity: 1,
      scrollTrigger: {
        y: 0,
        scale: 1,
        trigger: ".logo", 
        start: "top =250", 
        end: "bottom =300", 
        onUpdate: self => {
           
            gsap.set(".logo", { 
                scale: 1 - self.progress * 0.3,
                y: 0 - self.progress * 340,
            });     
          },
        scrub: true, // Effet de "scrubbing" pendant le défilement
        // markers: true, // Afficher les marqueurs pour le débogage
      },
    });

    gsap.to(".section1 p", {
        opacity: 1, 
        scrollTrigger: {
          opacity: 1,
          trigger: ".logo", 
          start: "top =250", 
          end: "bottom =300", 
          onUpdate: self => {
              gsap.set(".section1 p", { 
                  opacity: 1 - self.progress * 1,
              }); 
                  
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
        //   markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".section1", {
        opacity: 0, 
        scrollTrigger: {
          opacity: 1,
          trigger: ".section1", 
          start: "top -=100", 
          end: "bottom =0", 
          onUpdate: function(self) {
            // Vérifiez la propriété opacity à chaque mise à jour
            if(section1.css('opacity') === '0') {
                console.log('La propriété opacity de .section1 est égale à 0');
                section1.hide()
            } else {
                section1.show()
            }
        },
          scrub: true, // Effet de "scrubbing" pendant le défilement
        //   markers: true, // Afficher les marqueurs pour le débogage
        },
      }
      
      
);

// FIN SECTION 1

// FIN SECTION2

    gsap.to(".section2 img", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top =50", 
          end: "bottom =200", 
          onUpdate: self => {
              gsap.set(".section2 img", { 
                  opacity: 0 + self.progress * 1,
                  x: 0 - self.progress * 8 + 'vh',
              }); 
                  
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

    gsap.to(".line1", {
        scrollTrigger: {
          opacity: 0,
          y: 0,
          trigger: ".section2 img", 
          start: "top =50", 
          end: "bottom =200", 
          onUpdate: self => {
              gsap.set(".line1", { 
                  y: 0 + self.progress * 100 + 'vh',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
        //   markers: true, // Afficher les marqueurs pour le débogage
        },
      });

    gsap.to(".line2", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top -=200", 
          end: "bottom -=50", 
          onUpdate: self => {
              gsap.set(".line2", { 
                  x: 0 + self.progress * 100 + 'vw',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      // ligne verticle

      gsap.to(".line4", {
        scrollTrigger: {
          opacity: 0,
          y: 0,
          trigger: ".section2 img", 
          start: "top -=400", 
          end: "bottom -=200", 
          onUpdate: self => {
              gsap.set(".line4", { 
                  y: 0 + self.progress * 100 + 'vh',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".line5", {
        scrollTrigger: {
          opacity: 0,
          y: 0,
          trigger: ".section2 img", 
          start: "top -=400", 
          end: "bottom -=200", 
          onUpdate: self => {
              gsap.set(".line5", { 
                  y: 0 + self.progress * 50 + 'vh',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".line6", {
        scrollTrigger: {
          opacity: 0,
          y: 0,
          trigger: ".section2 img", 
          start: "top -=400", 
          end: "bottom -=200", 
          onUpdate: self => {
              gsap.set(".line6", { 
                  y: 0 + self.progress * 80 + 'vh',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      // ligne horizontale

      gsap.to(".line3", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top -=400", 
          end: "bottom -=200", 
          onUpdate: self => {
              gsap.set(".line3", { 
                  x: 0 + self.progress * 60 + 'vw',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });
gsap.to(".line7", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top -=400", 
          end: "bottom -=200", 
          onUpdate: self => {
              gsap.set(".line7", { 
                  x: 0 - self.progress * 65 + 'vw',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });
      

      gsap.to(".line8", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top -=400", 
          end: "bottom -=200", 
          onUpdate: self => {
              gsap.set(".line8", { 
                  x: 0 - self.progress * 40 + 'vw',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".layer", {
        scrollTrigger: {
          opacity: 0.75,
          
          trigger: ".section2 img", 
          start: "top -=400", 
          end: "bottom -=200", 
          onUpdate: function(self) {
              gsap.set(".layer", { 
                  opacity: 0.75 + self.progress * 1,
                  
              });
              if($('.layer').css('opacity') >= 1){
                $('.layer').css('mix-blend-mode', 'normal') 
              }
              else{
                $('.layer').css('mix-blend-mode', 'hard-light')
              }
              ; 
            }
          ,
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".deuxtxt1", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top -=700", 
          end: "bottom -=400", 
          onUpdate: self => {
              gsap.set(".deuxtxt1", { 
                  x: 0 - self.progress * 1.5 + 'vw',
                  opacity: 0 + self.progress * 1,
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".deuxtxt2", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top -=800", 
          end: "bottom -=500", 
          onUpdate: self => {
              gsap.set(".deuxtxt2", { 
                  x: 0 - self.progress * 1.5 + 'vw',
                  opacity: 0 + self.progress * 1,
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".section2 article", {
        scrollTrigger: {
          opacity: 1,
          trigger: ".section2 img", 
          start: "top -=1200", 
          end: "bottom -=1000", 
          onUpdate: self => {
              gsap.set(".section2 article", { 
                  opacity: 1 - self.progress * 1,
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".section2 img", {
        scrollTrigger: {
          opacity: 1,
          trigger: ".section2 img", 
          start: "top -=1200", 
          end: "bottom -=1000", 
          onUpdate: self => {
              gsap.set(".section2 img", { 
                  opacity: 1 - self.progress * 1,
              }); 
              if($('.section2 img').css('opacity') === '0'){
                $('.section2').css('background-image', 'none')
                $('.section2').css('background-color', 'transparent')
                $('.section3').css('display', 'flex')
              }
              else{
                $('.section2').css('z-index', '1')
                $('.section3').hide()
              }
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".line7", {
        scrollTrigger: {
          x: 35 + 'vw',
          trigger: ".section2 img", 
          start: "top -=1200", 
          end: "bottom -=1000", 
          onUpdate: self => {
              gsap.set(".line7", { 
                  x: -65 + self.progress * 65 + 'vw',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".line8", {
        scrollTrigger: {
          x: 60 + 'vw',
          trigger: ".section2 img", 
          start: "top -=1200", 
          end: "bottom -=1000", 
          onUpdate: self => {
            gsap.set(".line8", {
             x: -40 + self.progress * 40 + 'vw'
          });
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });


      // a garder pour slide après

      gsap.to(".line3", {
        scrollTrigger: {
          opacity: 0,
          y: 0,
          x: 60 + 'vw',
          trigger: ".section2 img", 
          start: "top -=1400", 
          end: "bottom -=1300", 
          onUpdate: self => {
              gsap.set(".line3", { 
                  y: 0 - self.progress * 2 + 'vh',
                  x: 60 + self.progress * 40 + 'vw'
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".line4", {
        scrollTrigger: {
          opacity: 0,
          x: 0 + 'vh',
          trigger: ".section2 img", 
          start: "top -=1400", 
          end: "bottom -=1300", 
          onUpdate: self => {
              gsap.set(".line4", { 
                  x: 0 + self.progress * 17 + 'vh',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".line5", {
        scrollTrigger: {
          opacity: 0,
          y: 50 + 'vw',
          trigger: ".section2 img", 
          start: "top -=1200", 
          end: "bottom -=1000", 
          onUpdate: self => {
              gsap.set(".line5", { 
                  y: 50 - self.progress * 50 + 'vh',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".line6", {
        scrollTrigger: {
          opacity: 0,
          y: 80 + 'vw',
          trigger: ".section2 img", 
          start: "top -=1200", 
          end: "bottom -=1000", 
          onUpdate: self => {
              gsap.set(".line6", { 
                  y: 80 - self.progress * 80 + 'vh',
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

   

      // section3


      gsap.to(".section3", {
        scrollTrigger: {
          opacity: 0,
          trigger: ".section2 img", 
          start: "top -=1400", 
          end: "bottom -=1200", 
          onUpdate: self => {
              gsap.set(".section3", { 
                  opacity: 0 + self.progress * 1,
              }); 
              if($('.section3').css('opacity') === '1'){
                $('.section2 .layer').hide()
                $('.section3').css('z-index', '1')
                $('.section2').css('z-index', '2')
                $('section2 img').hide()
                $('section2 article').hide()
              }
              else{
                $('.section2 .layer').show()
                $('.section3').css('z-index', '0')
                $('.section2').css('z-index', '1')
                $('section2 img').css('display', 'flex')
                $('section2 article').css('display', 'flex')
              }
              if($('.section4').css('display') === 'flex'){
                $('.section2').css('z-index', '-1')
              }else{
                $('.section2').css('z-index', '2')
              }
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".nicolaslamas", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top -=1700", 
          end: "bottom -=1450", 
          onUpdate: self => {
              gsap.set(".nicolaslamas", { 
                  x: 0 + self.progress * 3 + 'vh',
                  opacity: 0 + self.progress * 2.5,
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          markers: true, // Afficher les marqueurs pour le débogage
        },
      });
      
      gsap.to(".txt1", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top -=1900", 
          end: "bottom -=1800", 
          onUpdate: self => {
              gsap.set(".txt1", { 
                  x: 0 + self.progress * 5 + 'vh',
                  opacity: 0 + self.progress * 2.5,
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".txt2", {
        scrollTrigger: {
          opacity: 0,
          x: 0,
          trigger: ".section2 img", 
          start: "top -=1900", 
          end: "bottom -=1800", 
          onUpdate: self => {
              gsap.set(".txt2", { 
                  x: 0 - self.progress * 5 + 'vh',
                  opacity: 0 + self.progress * 2.5,
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".txt1", {
        scrollTrigger: {
          opacity: 0,
          x: 1,
          trigger: ".section2 img", 
          start: "top -=2400", 
          end: "bottom -=2300", 
          onUpdate: self => {
              gsap.set(".txt1", { 
                  opacity: 1 - self.progress * 2.5,
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          markers: true, // Afficher les marqueurs pour le débogage
        },
      });
      
      gsap.to(".txt2", {
        scrollTrigger: {
          opacity: 0,
          x: 1,
          trigger: ".section2 img", 
          start: "top -=2400", 
          end: "bottom -=2300", 
          onUpdate: self => {
              gsap.set(".txt2", { 
                  opacity: 1 - self.progress * 2.5,
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      gsap.to(".nicolaslamas", {
        scrollTrigger: {
          opacity: 0,
          x: 1,
          trigger: ".section2 img", 
          start: "top -=2400", 
          end: "bottom -=2300", 
          onUpdate: self => {
              gsap.set(".nicolaslamas", { 
                  opacity: 1 - self.progress * 2.5,
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          markers: true, // Afficher les marqueurs pour le débogage
        },
      });
      
      // top 85vh
      gsap.to(".line3", {
        scrollTrigger: {
          opacity: 0,
          y: 0,
          trigger: ".section2 img", 
          start: "top -=2600", 
          end: "bottom -=2500", 
          onUpdate: self => {
              gsap.set(".line3", { 
                  y: 0 + self.progress * 23 + 'vh'
              }); 
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      // left 55vh
      gsap.to(".line4", {
        scrollTrigger: {
          opacity: 0,
          x: 17 + 'vh',
          trigger: ".section2 img", 
          start: "top -=2600", 
          end: "bottom -=2500", 
          onUpdate: self => {
              gsap.set(".line4", { 
                  x: 17 - self.progress * 12 + 'vh',
              }); 

              // if($('.line4').css('translate')= '0'){}
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });
  
      gsap.to(".section3", {
        scrollTrigger: {
          opacity: 1,
          trigger: ".section2 img", 
          start: "top -=2600", 
          end: "bottom -=2500", 
          onUpdate: self => {
              gsap.set(".section3", { 
                  opacity: 1 - self.progress * 1,
              }); 
              // Récupérer la couleur actuelle et la couleur cible
              var currentColor = $('.line4').css('background-color');
              var targetColor = '#222222'; // Couleur de transition
              var white = '#eaeaea'

              // Interpoler les couleurs en fonction de la progression
              var newColor = gsap.utils.interpolate(white, targetColor, self.progress);

              

              if($('.section3').css('opacity') < '1'){
              $('.line4').css('background-color', newColor);
              $('.line3').css('background-color', newColor);
              $('.line4').css('width', '1.5px');
              $('.line3').css('height', '1.5px');
              $('.line2').css('background-color', newColor);
              $('.line1').css('background-color', newColor);
              $('.section4').css('display', 'flex')
            }
            else{
              $('.line4').css('background-color', white);
              $('.line3').css('background-color', white);
              $('.line2').css('background-color', white);
              $('.line1').css('background-color', white);
              $('.section4').hide()
              
            }

            if($('section3').css('opacity') === '0'){
              $('.section3').hide()
            }
            else {
              $('.section3').css('display', 'flex')
            }
            
            if($('section3').css('opacity') === '0'){
              $('.section3').hide()
            }
            else {
              $('.section3').css('display', 'flex')
            }
            },
          scrub: true, // Effet de "scrubbing" pendant le défilement
          // markers: true, // Afficher les marqueurs pour le débogage
        },
      });

      $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
  



 });//ready