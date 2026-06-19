var connToken = "90933133_-9278-4ea2-9445-568bfd013063:90935395";
var dbName = "SCHOOL-DB";
var relName = "STUDENT-TABLE";
var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";

$(document).ready(function () {
    $("#rollNo").focus();
});

function disableDataFields() {
    $("#fullName").prop("disabled", true);
    $("#class").prop("disabled", true);
    $("#birthDate").prop("disabled", true);
    $("#address").prop("disabled", true);
    $("#enrollmentDate").prop("disabled", true);
}

function enableDataFields() {
    $("#fullName").prop("disabled", false);
    $("#class").prop("disabled", false);
    $("#birthDate").prop("disabled", false);
    $("#address").prop("disabled", false);
    $("#enrollmentDate").prop("disabled", false);
}

function resetForm() {
    $("#rollNo").val("");
    $("#fullName").val("");
    $("#class").val("");
    $("#birthDate").val("");
    $("#address").val("");
    $("#enrollmentDate").val("");
    $("#rollNo").prop("disabled", false);
    disableDataFields();
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#rollNo").focus();
}

function validateData() {
    var rollNo = $("#rollNo").val().trim();
    var fullName = $("#fullName").val().trim();
    var studentClass = $("#class").val().trim();
    var birthDate = $("#birthDate").val().trim();
    var address = $("#address").val().trim();
    var enrollmentDate = $("#enrollmentDate").val().trim();

    if (rollNo === "") {
        alert("Roll No is required");
        $("#rollNo").focus();
        return "";
    }
    if (fullName === "") {
        alert("Full Name is required");
        $("#fullName").focus();
        return "";
    }
    if (studentClass === "") {
        alert("Class is required");
        $("#class").focus();
        return "";
    }
    if (birthDate === "") {
        alert("Birth Date is required");
        $("#birthDate").focus();
        return "";
    }
    if (address === "") {
        alert("Address is required");
        $("#address").focus();
        return "";
    }
    if (enrollmentDate === "") {
        alert("Enrollment Date is required");
        $("#enrollmentDate").focus();
        return "";
    }

    var jsonObj = {
        "Roll-No": rollNo,
        "Full-Name": fullName,
        "Class": studentClass,
        "Birth-Date": birthDate,
        "Address": address,
        "Enrollment-Date": enrollmentDate
    };
    return JSON.stringify(jsonObj);
}

function getStudent() {
    var rollNo = $("#rollNo").val().trim();
    if (rollNo === "") {
        return;
    }

    var getRequest = createGET_BY_KEYRequest(connToken, dbName, relName, JSON.stringify({"Roll-No": rollNo}));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});

    if (resJsonObj.status === 400) {
        enableDataFields();
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#update").prop("disabled", true);
        $("#fullName").focus();
    } else if (resJsonObj.status === 200) {
        $("#rollNo").prop("disabled", true);
        var data = JSON.parse(resJsonObj.data).record;
        $("#fullName").val(data["Full-Name"]);
        $("#class").val(data["Class"]);
        $("#birthDate").val(data["Birth-Date"]);
        $("#address").val(data["Address"]);
        $("#enrollmentDate").val(data["Enrollment-Date"]);
        
        enableDataFields();
        $("#save").prop("disabled", true);
        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#fullName").focus();
    }
}

function saveStudent() {
    var jsonStr = validateData();
    if (jsonStr === "") {
        return;
    }
    var putRequest = createPUTRequest(connToken, jsonStr, dbName, relName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status === 200) {
        alert("Record saved successfully");
    }
    resetForm();
}

function updateStudent() {
    var jsonStr = validateData();
    if (jsonStr === "") {
        return;
    }
    var updateRequest = createUPDATERecordRequest(connToken, jsonStr, dbName, relName, $("#rollNo").val().trim());
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status === 200) {
        alert("Record updated successfully");
    }
    resetForm();
}