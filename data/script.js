        var burger = document.getElementById('hamburger');
        var menu = document.getElementById('menu');
        var showMenu = function () {
            if (menu.style.display === 'block') {
                menu.style.display = null;
            } else {
                menu.style.display = 'block';
            }
        }
        burger.addEventListener('click', showMenu, false);


        var contactData = document.getElementById('address').innerHTML;
        var contactBttn = document.getElementsByClassName('contact');
        var wrapper = document.getElementById('wrapper');

        var showContact = function() {
            this.style.disabled = 'disabled';
            var box = document.createElement('div'),
                closeBttn = document.createElement('button');
            
            box.className = 'popupAddress';
            box.innerHTML = '<h2>Conctact us!</h2>'+contactData+'<form><label for="theme" class="lbl">Theme:</label><input class="inpt theme" id="theme"><label for="authorMail" class="lbl">Your mail:</label><input class="inpt authorMail" id="authorMail"><label for="message" class="lbl">Message:</label><textarea class="txtArea"></textarea><button class="sendBttn">Send</button></form>';
            closeBttn.textContent = '[ x ]';
            closeBttn.className = 'popupCloseBttn';
            closeBttn.addEventListener('click',function ()                      {wrapper.removeChild(box);},false);
            
            box.appendChild(closeBttn);
            wrapper.appendChild(box);
            box.style.opacity = 0;
            var alpha = 0;
            var si = setInterval(function(){
                alpha += 0.1;
                box.style.opacity = alpha;
                setTimeout(function(){
                    clearInterval(si);
                },600);
            },50);
        }

        for (var cont = 0; cont < contactBttn.length; cont++) {
            contactBttn[cont].addEventListener('click', showContact, false);
        }