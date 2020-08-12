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

            const txtSoal = encodeURI(document.getElementsByClassName('qtext')[0].innerText.replace(/[\W_]+/g, " "));
            const txtJwb1 = encodeURI(document.getElementsByClassName('r0')[0].innerText.replace(/[\W_]+/g, " "));
            const txtJwb2 = encodeURI(document.getElementsByClassName('r1')[0].innerText.replace(/[\W_]+/g, " "));
            const txtJwb3 = encodeURI(document.getElementsByClassName('r0')[1].innerText.replace(/[\W_]+/g, " "));
            const txtJwb4 = encodeURI(document.getElementsByClassName('r1')[1].innerText.replace(/[\W_]+/g, " "));

            document.getElementById('arblpcs-save').addEventListener('click', function (e) {
                e.preventDefault();
                const params = `d[]=${txtSoal}&d[]=${txtJwb1}&d[]=${txtJwb2}&d[]=${txtJwb3}&d[]=${txtJwb4}`;
                window.open(`${url}q.php?${params}`, '_blank');

            });

            setTimeout(function () {

                Http.open('GET', `${url}a.php`);
                Http.send();

                Http.onreadystatechange = function () {
                    if (Http.readyState === XMLHttpRequest.DONE) {
                        const response = JSON.parse(Http.responseText);

                        response.forEach((element) => {
                            const [soal, jwb] = element;
                            if (txtSoal == soal) {

                                let _i = 99;

                                switch (jwb) {
                                    case decodeURI(txtJwb1):
                                        console.log('jwb1');
                                        _i = 0;
                                        break;
                                    case decodeURI(txtJwb2):
                                        console.log('jwb2');
                                        _i = 1;
                                        break;
                                    case decodeURI(txtJwb3):
                                        console.log('jwb3');
                                        _i = 2;
                                        break;
                                    case decodeURI(txtJwb4):
                                        console.log('jwb4');
                                        _i = 3;
                                        break;
                                }

                                document.querySelectorAll('input[type="radio"]')[_i].click();

                                setTimeout(function () {
                                    document.querySelectorAll('input[name="next"]')[0].click();
                                }, _click);

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