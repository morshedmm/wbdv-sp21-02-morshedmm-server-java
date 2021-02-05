
var $removeBtn, $editBtn, $createBtn;
var $userRowTemplate, $tbody;
var userService = new AdminUserServiceClient();


function createUser() {

}

function deleteUser() {

}
function selectUser() {

}

function updateUser() {

}

function renderUsers(users) {

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



    $createBtn.click(() => {

        createUser({
            username: $userNameFld.val(),
            password: $passwordFld.val(),
            firstname: $firstNameFld.val(),
            lastname: $lastNameFld.val(),
            role: $roleFld.val()

        })

    }

    )

}

jQuery(main)

