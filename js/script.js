
    var r = window.location.search;

        const txt1 = document.getElementById('name1');
        const btn1 = document.getElementById('btn1');
        const out1 = document.getElementById('output1');

        function fun1(){
            alert('Logged In Successfully!');
            out1.innerHTML = "Hello" + " " + txt1.value;
        }
        btn1.addEventListener('click', fun1);
