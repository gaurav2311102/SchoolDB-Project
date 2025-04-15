var connectToken = "90934277|-31949207736913758|90957610";
var dbName = "SCHOOL-DB";
var relName = "STUDENT-TABLE";
var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIML = '/api/iml';
var jpdbIRL = '/api/irl';

function saveRecno2LS(jsonObj){
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem('recno',lvData.rec_no);
}

function getRollnoAsJsonObj(){
    var rollno = $("#rollno").val();
    var jsonStr ={
        rollno : rollno
    }
    return JSON.stringify(jsonStr)
}

function fillData(jsonObj){
    saveRecno2LS(jsonObj)
    var record = JSON.parse(jsonObj.data).record;
    $("#name").val(record.name);
    $("#class").val(record.class);
    $("#dob").val(record.birth_date);
    $("#address").val(record.address);
    $("#doe").val(record.enrollment_date);
}


function resetForm(){
    $("#rollno").val("");
    $("#name").val("");
    $("#class").val("");
    $("#dob").val("");
    $("#address").val("");
    $("#doe").val("");
    $("#rollno").prop('disabled', false);
    $("#save").prop('disabled', true);
    $("#reset").prop('disabled', true);
    $("#change").prop('disabled', true);
    $("#rollno").focus();
    }


function validateData(){
    var rollno, name, stuclass, birth_date, address, enroll_date;
    rollno = $("#rollno").val();
    name = $("#name").val();
    stuclass = $("#class").val();
    birth_date = $("#dob").val();
    address = $("#address").val();
    enroll_date = $("#doe").val();
    
    if (rollno === ""){
        alert("student ROLL NO missing")
        $("#rollno").focus();
        return ""
    }

    if (name === ""){
        alert("student NAME missing")
        $("#name").focus();
        return ""
    }

    if (stuclass === ""){
        alert("student CLASS missing")
        $("#class").focus();
        return ""
    }

    if (birth_date === ""){
        alert("student BIRTH DATE missing")
        $("#dob").focus();
        return ""
    }

    
    if (address === ""){
        alert("student ADDRESS missing")
        $("#address").focus();
        return ""
    }

    
    if (enroll_date === ""){
        alert("student ENROLLMENT DATE  missing")
        $("#doe").focus();
        return ""
    }

    var jsonStrObj = {
        rollno : rollno,
        name : name,
        class : stuclass,
        birth_date :birth_date,
        address : address,
        enrollment_date : enroll_date,
    };
    return JSON.stringify(jsonStrObj);
}
    

function getStu(){
    var rollNoJsonObj = getRollnoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connectToken, dbName, relName, rollNoJsonObj);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest , jpdbBaseURL , jpdbIRL )
    jQuery.ajaxSetup({async: true});

    if (resJsonObj.status === 400){
        $("#save").prop('disabled', false);
        $("#reset").prop('disabled', false);
        $("#rollno").focus();
    }
    else if(resJsonObj.status === 200){
        $("#rollno").prop('disabled', true);
        fillData(resJsonObj)

        $("#change").prop('disabled', false);
        $("#reset").prop('disabled', false);
        $("#name").focus();

    } 
}


function saveData(){
    var jsonStrObj = validateData();
    if (jsonStrObj === ""){
        return "";
    }
    var putReqStr = createPUTRequest(connectToken,
        jsonStrObj, dbName, relName);
        alert(putReqStr);
        jQuery.ajaxSetup({async: false});
        var resJsonObj = executeCommandAtGivenBaseUrl(putReqStr , jpdbBaseURL , jpdbIML )
        jQuery.ajaxSetup({async: true});
        resetForm();
        $("#rollno").focus();
}


function changeData(){
    $("#change").prop('disabled', true);
    var jsonChg = validateData()
    var updateRequest = createUPDATERecordRequest( connectToken, jsonChg, dbName, relName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest , jpdbBaseURL , jpdbIML )
    jQuery.ajaxSetup({async: true});
    resetForm();
    $("#rollno").focus();
    console.log(resJsonObj)
}