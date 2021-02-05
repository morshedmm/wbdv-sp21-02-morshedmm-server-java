
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

    $createBtn = $(".wbdv-create");



    $createBtn.click(() => {

        createUser({
            username:
            password:
            firstname:
            lastname:
            role:

        })

    }

    )

}

jQuery(main)

