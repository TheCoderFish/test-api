const aeDataCSV = `"Pilot Test2","MasterMe","MM","TMP_courseName","TMP_courseName","TMP_courseName",[["TMP_subName","TMP_subCode",[["TMP_topicName","TMP_topicCode",[["TMP_subtopicName","TMP_subtopicCode"]]]]]],[["knowledge","kn"],["understanding","un"],["analysis","an"],["application","ap"]],[["0",[4,-1,0],"STRING","b",[["TMP_subCode",[["TMP_topicCode", [["TMP_subCode"]]]]]],[["ap"]]],["1",[0,0,0],"STRING","d",[["TMP_subCode",[["TMP_topicCode", [["TMP_subCode"]]]]]],[["ap"]]],["2",[0,0,0],"STRING","d",[["TMP_subCode",[["TMP_topicCode", [["TMP_subCode"]]]]]],[["ap"]]],["3",[0,0,0],"STRING","a",[["TMP_subCode",[["TMP_topicCode", [["TMP_subCode"]]]]]],[["ap"]]]]`;

const reqButton = document.querySelector('#request');
reqButton.addEventListener('click', sendRequest);

function sendRequest() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://15.206.128.254:10007/mm");
    xhr.setRequestHeader("x-masterme-request", "test/register");
    xhr.setRequestHeader("x-masterme-test", "true");
    xhr.setRequestHeader("x-masterme-user-agent", "buttercup-agent");
    xhr.setRequestHeader("Content-Type", "application/text");
    xhr.setRequestHeader("x-masterme-api-version", "2019-12");

    xhr.send(aeDataCSV);
}