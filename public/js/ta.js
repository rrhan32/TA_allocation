
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

var facultyForm = document.querySelector("form");

facultyForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var rollNumber = document.querySelector("#rollNumber").value;
    var cgpa = document.querySelector("#cgpa").value;
    var pref1 = document.querySelector("#pref1").value;
    var pref2 = document.querySelector("#pref2").value;
    var pref3 = document.querySelector("#pref3").value;
    var course_grade_pref_1 = document.querySelector("#course_grade_pref_1").value;
    var course_grade_pref_2 = document.querySelector("#course_grade_pref_2").value;
    var course_grade_pref_3 = document.querySelector("#course_grade_pref_3").value;
    var password = document.querySelector("#password").value;

    var data = {
        "rollNumber": rollNumber,
        "cgpa": cgpa,
        "pref1": pref1,
        "course_grade_pref_1": course_grade_pref_1,
        "pref2": pref2,
        "course_grade_pref_2": course_grade_pref_2,
        "pref3": pref3,
        "course_grade_pref_3": course_grade_pref_3,
        "password": password
    };

    // if (isUgStudentCheckbox.checked) {
    //     // If undergraduate, include course grades in the data object
    //     var course_grade_pref_1 = document.querySelector("#course_grade_pref_1").value;
    //     var course_grade_pref_2 = document.querySelector("#course_grade_pref_2").value;
    //     var course_grade_pref_3 = document.querySelector("#course_grade_pref_3").value;
    //     data.course_grade_pref_1 = course_grade_pref_1;
    //     data.course_grade_pref_2 = course_grade_pref_2;
    //     data.course_grade_pref_3 = course_grade_pref_3;
    // }    

    var url = '/tadetails';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.error(data.error);
            } else {
                console.log(data.rollNumber);
                console.log(data.pref1);
            }
        });
    });


    facultyForm.reset();
});
