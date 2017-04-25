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

        for (var cont = 0; cont < contactBttn.length; cont++) {
            contactBttn[cont].addEventListener('click', showContact, false);
        }

        function showContact() {
            var box = document.createElement('div'),
                closeBttn = document.createElement('button'),
                frm = document.createElement('form');
            lbl = document.createElement('label'),
                inpt = document.createElement('input'),
                txtArea = document.createElement('textarea'),
                sendBttn = document.createElement('button');
            box.className = 'popupAddress footer-content';
            box.innerHTML = contactData;
            closeBttn.innerHTML = '[close]';
            closeBttn.className = 'popupCloseBttn';
            closeBttn.addEventListener('click', function () {
                wrapper.removeChild(box);
            }, false);
            lbl.textContent = 'Theme: ';
            lbl.className = 'label';
            inpt.className = 'inpt';
            txtArea.className = 'txtArea';
            sendBttn.className = 'sendBttn';

            box.appendChild(closeBttn);
            box.appendChild(frm);
            box.appendChild(lbl);
            box.appendChild(inpt);
            box.appendChild(txtArea);
            box.appendChild(sendBttn);
            wrapper.appendChild(box);
        }
