let btnSearch = document.createElement('a');
btnSearch.setAttribute('id', 'arblpcs-save');
btnSearch.setAttribute('href', '#');
btnSearch.innerHTML = '<i></i> Save';

const panelContainer = document.getElementsByClassName('info')[0];
panelContainer.insertBefore(btnSearch, panelContainer.firstChild);

document.getElementById('arblpcs-save').addEventListener('click', function (e) {
    e.preventDefault();

    const txtSoal = encodeURI(document.getElementsByClassName('qtext')[0].innerText);
    const txtJwb1 = encodeURI(document.getElementsByClassName('r0')[0].innerText);
    const txtJwb2 = encodeURI(document.getElementsByClassName('r1')[0].innerText);
    const txtJwb3 = encodeURI(document.getElementsByClassName('r2')[0].innerText);
    const params = `d[]=${txtSoal}&d[]=${txtJwb1}&d[]=${txtJwb2}`;
    const url = `https://sia.unram.ac.id/___zaf/moodle-quiz/q.php?${params}`;
    // console.log(txtJwb1);
    // console.log(txtJwb2);
    // console.log(url)
    window.open(url, '_blank');

});