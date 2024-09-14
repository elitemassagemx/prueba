document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/";
    
    // Definición de servicios y paquetes (mantén tu objeto services existente)
    const services = {
        // ... tu objeto services existente
    };

    function renderServices(category) {
        // ... tu función renderServices existente
    }

    function renderPackages() {
        // ... tu función renderPackages existente
    }

    function showPopup(data) {
        // ... tu función showPopup existente
    }

    function sendWhatsAppMessage(action, serviceTitle) {
        // ... tu función sendWhatsAppMessage existente
    }

    // Nuevas funciones

    function changeLanguage(lang) {
        console.log(`Cambiando idioma a: ${lang}`);
        updateContent(lang);
    }

    function updateContent(lang) {
        const translations = {
            es: {
                title: "Elite Massage",
                welcome: "Bienvenido a tu Oasis de Tranquilidad",
                // ... más traducciones
            },
            en: {
                title: "Elite Massage",
                welcome: "Welcome to your Oasis of Tranquility",
                // ... más traducciones
            },
            // ... otros idiomas
        };

        document.querySelector('h1').textContent = translations[lang].title;
        document.querySelector('#inicio h2').textContent = translations[lang].welcome;
        // ... actualizar más elementos
    }

    function smoothScroll(target, duration) {
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Paginación
    var btns = document.querySelectorAll('.btn');
    var paginationWrapper = document.querySelector('.pagination-wrapper');
    var bigDotContainer = document.querySelector('.big-dot-container');
    var littleDot = document.querySelector('.little-dot');

    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', btnClick);
    }

    function btnClick() {
        if(this.classList.contains('btn--prev')) {
            paginationWrapper.classList.add('transition-prev');
        } else {
            paginationWrapper.classList.add('transition-next');  
        }
        
        var timeout = setTimeout(cleanClasses, 500);
    }

    function cleanClasses() {
        if(paginationWrapper.classList.contains('transition-next')) {
            paginationWrapper.classList.remove('transition-next')
        } else if(paginationWrapper.classList.contains('transition-prev')) {
            paginationWrapper.classList.remove('transition-prev')
        }
    }

    // Acordeón
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.link');
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
                $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }	

        var accordion = new Accordion($('#accordion'), false);
    });

    // Venetian Blinds
    var options = {
        imgSrc2: "//s3-us-west-2.amazonaws.com/s.cdpn.io/261873/TelephoneBananaInverted.jpg",
        imgSrc2: "//s3-us-west-2.amazonaws.com/s.cdpn.io/261873/TelephoneBananaInverted.jpg",
        containerName : "placeholder",
        columns:16,
        margin:3
    }

    function VenetianBlinds(defaults)
    {
        var cols = defaults.columns;
        var margin = defaults.margin;
        var img1 = defaults.imgSrc1;
        var img2 = defaults.imgSrc2;
        var placeholder = document.getElementsByClassName(defaults.containerName)[0];
        var directionX, directionY;
        
        var column, blind, blindImg;
        var bgImg, rot;
        var colL;
        var colW = (placeholder.offsetWidth / cols) - margin;
        for (var i=0; i < cols; i++)
        {
            colL = ((colW + margin) * i);
            
            column = document.createElement('div');
            column.className = "column";
            column.style.width = colW + "px";
            column.style.left = colL + "px";
            placeholder.appendChild(column); 
            
            for (var j=0; j<4; j++)
            {
                blind = document.createElement('div');
                blind.className = "blind";
                blind.style.width = colW + "px";
                blindImg = document.createElement('div');
                blindImg.className = "blindImg";
                
                switch (j){
                    case 0:
                        TweenMax.set(blind, {rotationY: "0"});
                        bgImg = img1;
                        break;
                    case 1:
                        TweenMax.set(blind, {rotationY: "90"});
                        bgImg = img2;
                        break;
                    case 2: 
                        TweenMax.set(blind, {rotationY: "180"});
                        bgImg = img1;
                        break;              
                    case 3:
                        TweenMax.set(blind, {rotationY: "270"});
                        bgImg = img2;
                        break;
                }
                blindImg.style.width = placeholder.offsetWidth + "px";
                blindImg.style.backgroundImage = "url("+bgImg+")";
                blindImg.style.left = -colL + "px";

                column.appendChild(blind);
                blind.appendChild(blindImg);
                
                TweenMax.set(blind, { transformOrigin:"50% 50% " + -colW/2, transformStyle: "preserve-3d"});
            }
            
            TweenMax.set(column, {transformStyle:"preserve-3d", transformPerspective:1000, rotationY:0});
            
            column.addEventListener("mouseenter", function(event){
                var elem = event.currentTarget;
                var rotY = elem._gsTransform.rotationY;
                
                if(directionX > 0){
                    TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90+90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
                }else{
                    TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90-90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
                }
            })
        }
        document.addEventListener('mousemove', function (event) {
            directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
        });
    }

    VenetianBlinds(options);

    // Event listeners
    const translateIcon = document.getElementById('translate-icon');
    const languageOptions = document.querySelector('.language-options');

    translateIcon.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (event) => {
            const lang = event.currentTarget.dataset.lang;
            changeLanguage(lang);
            languageOptions.style.display = 'none';
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'), 1000);
        });
    });

    // Inicialización
    function init() {
        renderServices('individual');
        renderPackages();
        // Otras inicializaciones que puedas tener
    }

    // Llamada a la función de inicialización
    init();
});
