
var $removeBtn, $editBtn, $createBtn;
var $userRowTemplate, $tbody;
var userService = new AdminUserServiceClient();

var users = [];


function createUser() {

    userService.createUser(user)
        .then (function actualUser {
            users.push(actualUser)
            renderUsers(users)

        })

}

function deleteUser() {

}
function selectUser() {

}

function updateUser() {

}

function renderUsers(users) {

    theTableBody.empty();

    



}

function findAllUsers() { } // optional - might not need this
function findUserById() { } // optional - might not need this



function main() {

    $userNameFld = $(".wbdv-username-fld");
    $passwordFld = $(".wbdv-password-fld");
    $firstNameFld = $(".wbdv-firstname-fld");
    $lastNameFld = $(".wbdv-lastname-fld");
    $roleFld = $(".wbdv-role-fld");

    $createBtn = $(".wbdv-create-user");

    theTableBody = jQuery("tbody")



    $createBtn.click(() => {

        createUser({
            username: $userNameFld.val(),
            password: $passwordFld.val(),
            firstname: $firstNameFld.val(),
            lastname: $lastNameFld.val(),
            role: $roleFld.val()

        })

        // WILL remove the filed values afterwards

    }

    )

}

jQuery(main)

