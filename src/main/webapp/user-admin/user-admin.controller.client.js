
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

    for(var i = 0; i < users.length(); i++) {
        var user = users[$i]

        theTableBody.prepend(`
                <tr class="wbdv-template wbdv-user wbdv-hidden">
                    <td class="wbdv-username">${user.username}</td>
                    <td>&nbsp;</td>
                    <td class="wbdv-first-name">${user.firstname}</td>
                    <td class="wbdv-last-name">${user.lastname}</td>
                    <td class="wbdv-role">${user.role}</td>
                    <td class="wbdv-actions">
                        <span class="pull-right">
                            <button>
                                <i class="fa-2x fa fa-times wbdv-remove"></i>
                            </button>

                            <button>
                                <i class="fa-2x fa fa-pencil wbdv-edit"></i>
                            </button>
                        </span>
                    </td>
                </tr>
        `)
    }



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

