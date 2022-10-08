export default function userModel(){
    return generateUserModel();
}

function generateUserModel(){
    let UserModel = {
        email: '',
        password: '',
    }
    return UserModel;
}