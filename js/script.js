$('#multi').mdbRange({
    single: {
        active: true,
        multi: {
            active: true,
            rangeLength: 1
        },
    }
});




function recive() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    document.getElementById('recive').addEventListener("click", function() {
        if (name == "") {
            alert('please fill in the form correctly');
        } else if (email == "") {
            alert('please fill in the form correctly');
        } else {
            alert('Thank you ' + name + ' we have recieved your application we will contact you via your email');
        }

    });

}