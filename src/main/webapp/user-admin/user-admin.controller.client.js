
var $removeBtn, $editBtn, $createBtn;
var $userRowTemplate, $tbody;
var userService = new AdminUserServiceClient();

var users = [];


function createUser(user) {

    userService.createUser(user)
        .then (function (actualUser) {
            users.push(actualUser)
            renderUsers(users)

        })

}

function deleteUser(event) {

    var deleteTask = jQuery(event.target);
    var theIndex = deleteTask.attr("id");
    var theId = users[theIndex]._id;
    console.log(theIndex);

    userService.deleteUser(theId)
            .then (function (status) {
                users.splice(theIndex, 1)
                renderUsers(users)

            })

}
function selectUser() {

}

function updateUser() {

}

function renderUsers(users) {

    theTableBody.empty();

    for(var i = 0; i < users.length; i++) {
        var user = users[i]

        theTableBody.prepend(`
                <tr class="wbdv-template wbdv-user wbdv-hidden">
                    <td class="wbdv-username">${user.username}</td>
                    <td>&nbsp;</td>
                    <td class="wbdv-first-name">${user.firstname}</td>
                    <td class="wbdv-last-name">${user.lastname}</td>
                    <td class="wbdv-role">${user.role}</td>
                    <td class="wbdv-actions">
                        <span class="pull-right">
                            <button id="${i}">
                                <i class="fa-2x fa fa-times wbdv-remove" id="${i}"></i>
                            </button>

                            <button>
                                <i class="fa-2x fa fa-pencil wbdv-edit"></i>
                            </button>
                        </span>
                    </td>
                </tr>
        `)
    }

    jQuery(".wbdv-remove")
        .click(deleteUser)



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

    $removeBtn = $("wbdv-remove")

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

    })

    //$removeBtn.click(deleteUser);



    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
          users = actualUsersFromServer
          renderUsers(users)
        })

}

jQuery(main)

