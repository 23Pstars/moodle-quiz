const _refresh = 10000000, _ready = 100, _answer = 100, _click = 100;

setTimeout(function () {
    location.reload();
}, _refresh);

window.onload = function () {

    setTimeout(function () {

        const Http = new XMLHttpRequest();
        const url = 'https://sia.unram.ac.id/___zaf/moodle-quiz/';

        try {

            let btnSearch = document.createElement('a');
            btnSearch.setAttribute('id', 'arblpcs-save');
            btnSearch.setAttribute('href', '#');
            btnSearch.innerHTML = '<i></i> Save';

            const panelContainer = document.getElementsByClassName('info')[0];
            panelContainer.insertBefore(btnSearch, panelContainer.firstChild);

            let txtSoal = document.getElementsByClassName('qtext')[0];
            let txtJwb1 = document.getElementsByClassName('r0')[0];
            let txtJwb2 = document.getElementsByClassName('r1')[0];
            let txtJwb3 = document.getElementsByClassName('r0')[1];
            let txtJwb4 = document.getElementsByClassName('r1')[1];
            let txtJwb5 = document.getElementsByClassName('r0')[2];
            let txtJwb6 = document.getElementsByClassName('r1')[2];
            let txtJwb7 = document.getElementsByClassName('r0')[3];
            let txtJwb8 = document.getElementsByClassName('r1')[3];
            let txtJwb9 = document.getElementsByClassName('r0')[4];
            let txtJwb10 = document.getElementsByClassName('r1')[4];

            if (txtSoal == null) txtSoal = '';
            else txtSoal = encodeURI(txtSoal.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb1 == null) txtJwb1 = '';
            else txtJwb1 = encodeURI(txtJwb1.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb2 == null) txtJwb2 = '';
            else txtJwb2 = encodeURI(txtJwb2.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb3 == null) txtJwb3 = '';
            else txtJwb3 = encodeURI(txtJwb3.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb4 == null) txtJwb4 = '';
            else txtJwb4 = encodeURI(txtJwb4.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb5 == null) txtJwb5 = '';
            else txtJwb5 = encodeURI(txtJwb5.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb6 == null) txtJwb6 = '';
            else txtJwb6 = encodeURI(txtJwb6.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb7 == null) txtJwb7 = '';
            else txtJwb7 = encodeURI(txtJwb7.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb8 == null) txtJwb8 = '';
            else txtJwb8 = encodeURI(txtJwb8.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb9 == null) txtJwb9 = '';
            else txtJwb9 = encodeURI(txtJwb9.innerText.replace(/[\W_]+/g, " "));

            if (txtJwb10 == null) txtJwb10 = '';
            else txtJwb10 = encodeURI(txtJwb10.innerText.replace(/[\W_]+/g, " "));

            document.getElementById('arblpcs-save').addEventListener('click', function (e) {
                e.preventDefault();
                let params = `d[]=${txtSoal}&d[]=${txtJwb1}&d[]=${txtJwb2}&d[]=${txtJwb3}&d[]=${txtJwb4}`;
                params += `&d[]=${txtJwb5}&d[]=${txtJwb6}&d[]=${txtJwb7}&d[]=${txtJwb8}&d[]=${txtJwb9}&d[]=${txtJwb10}`;
                window.open(`${url}q.php?${params}`, '_blank');

            });

            setTimeout(function () {

                Http.open('GET', `${url}a.php`);
                Http.send();

                Http.onreadystatechange = function () {
                    if (Http.readyState === XMLHttpRequest.DONE) {
                        const response = JSON.parse(Http.responseText);
                        console.log(response);

                        response.forEach((element) => {
                            const [soal, jwb] = element;
                            if (txtSoal == soal) {

                                let _i = 99;

                                switch (jwb.substr(2)) {
                                    case decodeURI(txtJwb1).substr(2):
                                        console.log('jwb1');
                                        _i = 0;
                                        break;
                                    case decodeURI(txtJwb2).substr(2):
                                        console.log('jwb2');
                                        _i = 1;
                                        break;
                                    case decodeURI(txtJwb3).substr(2):
                                        console.log('jwb3');
                                        _i = 2;
                                        break;
                                    case decodeURI(txtJwb4).substr(2):
                                        console.log('jwb4');
                                        _i = 3;
                                        break;
                                    case decodeURI(txtJwb5).substr(2):
                                        console.log('jwb5');
                                        _i = 4;
                                        break;
                                    case decodeURI(txtJwb6).substr(2):
                                        console.log('jwb6');
                                        _i = 5;
                                        break;
                                    case decodeURI(txtJwb7).substr(2):
                                        console.log('jwb7');
                                        _i = 6;
                                        break;
                                    case decodeURI(txtJwb8).substr(2):
                                        console.log('jwb8');
                                        _i = 7;
                                        break;
                                    case decodeURI(txtJwb9).substr(2):
                                        console.log('jwb9');
                                        _i = 8;
                                        break;
                                    case decodeURI(txtJwb10).substr(2):
                                        console.log('jwb10');
                                        _i = 9;
                                        break;
                                }

                                if (_i != 99) {

                                    document.querySelectorAll('input[type="radio"]')[_i].click();

                                    setTimeout(function () {
                                        document.querySelectorAll('input[name="next"]')[0].click();
                                    }, _click);

                                }

                            }
                        });

                    }
                }

            }, _answer);


        } catch (err) {

            console.log(err);


        }

    }, _ready);

};