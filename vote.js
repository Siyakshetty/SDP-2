function validateVote() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    if (age >= 18) {

        document.getElementById("Answer").innerHTML =
            name + " is eligible to vote";

    } else {

        document.getElementById("Answer").innerHTML =
            name + " is not eligible to vote";

    }
}