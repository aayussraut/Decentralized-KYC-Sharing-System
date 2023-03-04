//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract KycForm {
    // Structure to store form data of a user
    struct UserData {
        string first_name;
        string last_name;
        string middle_name;
        string dob;
        string id_type;
        string id_no;
        string gender;
        string marital_status;
        string caste;
        string religion;
        string profession;
        string phone_number;
        string state;
        string district;
        string local_level;
        string ward_no;
        string village_tole;
        string house_no;
        string temp_state;
        string temp_district;
        string temp_local_level;
        string temp_ward_no;
        string temp_village_tole;
        string temp_house_no;
        string father_first_name;
        string father_middle_name;
        string father_last_name;
        string mother_first_name;
        string mother_middle_name;
        string mother_last_name;
        string spouse_first_name;
        string spouse_middle_name;
        string spouse_last_name;
        string grandfather_first_name;
        string grandfather_middle_name;
        string grandfather_last_name;
        string grandmother_first_name;
        string grandmother_middle_name;
        string grandmother_last_name;
    }
    mapping(address => bool) approvedReceivers;
    mapping(address => bool) public isAsking;
    mapping(address => address) public bankAddress;

    // Mapping to store form data of all users
    mapping(address => UserData) public userData;

    // Event to log form data storage
    event FormDataStored(address user);
    event DataAccessRequested(address user, address bank);
    event DataAccessGranted(address bank);
    event DataAccessDenied(address bank);
    event requested(bool status);

    // Function to store form data of a user
    function storeFormData(UserData memory _userData) public {
        userData[msg.sender].first_name = _userData.first_name;
        userData[msg.sender].last_name = _userData.last_name;
        userData[msg.sender].middle_name = _userData.middle_name;
        userData[msg.sender].dob = _userData.dob;
        userData[msg.sender].id_type = _userData.id_type;
        userData[msg.sender].id_no = _userData.id_no;
        userData[msg.sender].gender = _userData.gender;
        userData[msg.sender].marital_status = _userData.marital_status;
        userData[msg.sender].caste = _userData.caste;
        userData[msg.sender].religion = _userData.religion;
        userData[msg.sender].profession = _userData.profession;
        userData[msg.sender].phone_number = _userData.phone_number;
        userData[msg.sender].state = _userData.state;
        userData[msg.sender].district = _userData.district;
        userData[msg.sender].local_level = _userData.local_level;
        userData[msg.sender].ward_no = _userData.ward_no;
        userData[msg.sender].village_tole = _userData.village_tole;
        userData[msg.sender].house_no = _userData.house_no;
        userData[msg.sender].temp_state = _userData.temp_state;
        userData[msg.sender].temp_district = _userData.temp_district;
        userData[msg.sender].temp_local_level = _userData.temp_local_level;
        userData[msg.sender].temp_ward_no = _userData.temp_ward_no;
        userData[msg.sender].temp_village_tole = _userData.temp_village_tole;
        userData[msg.sender].temp_house_no = _userData.temp_house_no;
        userData[msg.sender].father_first_name = _userData.father_first_name;
        userData[msg.sender].father_last_name = _userData.father_last_name;
        userData[msg.sender].father_middle_name = _userData.father_middle_name;
        userData[msg.sender].mother_first_name = _userData.mother_first_name;
        userData[msg.sender].mother_last_name = _userData.mother_last_name;
        userData[msg.sender].mother_middle_name = _userData.mother_middle_name;
        userData[msg.sender].spouse_first_name = _userData.spouse_first_name;
        userData[msg.sender].spouse_last_name = _userData.spouse_last_name;
        userData[msg.sender].spouse_middle_name = _userData.spouse_middle_name;
        userData[msg.sender].grandfather_first_name = _userData
            .grandfather_first_name;
        userData[msg.sender].grandfather_last_name = _userData
            .grandfather_last_name;
        userData[msg.sender].grandfather_middle_name = _userData
            .grandfather_middle_name;
        userData[msg.sender].grandmother_first_name = _userData
            .grandmother_first_name;
        userData[msg.sender].grandmother_last_name = _userData
            .grandmother_last_name;
        userData[msg.sender].grandmother_middle_name = _userData
            .grandmother_middle_name;
        isAsking[msg.sender] = false;
        emit FormDataStored(msg.sender);
    }

    //funfction to show the request to user
    // function showRequest(address _bank) public view  {
    //     return userData[_bank].approvedReceivers[msg.sender];
    // }

    // Function to request form data access of a user
    function requestDataAccess(address _userAddress) public returns (bool) {
        if (bankAddress[_userAddress] == msg.sender) {
            isAsking[_userAddress] = false;
            emit requested(true);
            return (true);
        } else {
            isAsking[_userAddress] = true;
            bankAddress[_userAddress] = msg.sender;
            emit DataAccessRequested(_userAddress, msg.sender);
            emit requested(false);
            return (false);
        }
    }

    //function to get the request status from user side
    function getIsAsking() public view returns (bool, address) {
        return (isAsking[msg.sender], bankAddress[msg.sender]);
    }

    // Function to allow a user to send form data to another user
    function allowAccess(address _receiver) public {
        approvedReceivers[_receiver] = true;
        isAsking[msg.sender] = false;
        // getFormData();
        emit DataAccessGranted(_receiver);
    }

    // Function to revoke access for a user
    function revokeAccess(address _receiver) public {
        approvedReceivers[_receiver] = false;
        isAsking[msg.sender] = false;
        emit DataAccessDenied(_receiver);
    }

    function getOwnData() public view returns (string[] memory) {
        return getFormData(msg.sender);
    }

    // Function to retrieve form data of a user
    function getFormData(address _user) public view returns (string[] memory) {
        string[] memory ret = new string[](39);
        ret[0] = userData[_user].first_name;
        ret[1] = userData[_user].last_name;
        ret[2] = userData[_user].middle_name;
        ret[3] = userData[_user].dob;
        ret[4] = userData[_user].id_type;
        ret[5] = userData[_user].id_no;
        ret[6] = userData[_user].gender;
        ret[7] = userData[_user].marital_status;
        ret[8] = userData[_user].caste;
        ret[9] = userData[_user].religion;
        ret[10] = userData[_user].profession;
        ret[11] = userData[_user].phone_number;
        ret[12] = userData[_user].state;
        ret[13] = userData[_user].district;
        ret[14] = userData[_user].local_level;
        ret[15] = userData[_user].ward_no;
        ret[16] = userData[_user].village_tole;
        ret[17] = userData[_user].house_no;
        ret[18] = userData[_user].temp_state;
        ret[19] = userData[_user].temp_district;
        ret[20] = userData[_user].temp_local_level;
        ret[21] = userData[_user].temp_ward_no;
        ret[22] = userData[_user].temp_village_tole;
        ret[23] = userData[_user].temp_house_no;
        ret[24] = userData[_user].father_first_name;
        ret[25] = userData[_user].father_middle_name;
        ret[26] = userData[_user].father_last_name;
        ret[27] = userData[_user].mother_first_name;
        ret[28] = userData[_user].mother_middle_name;
        ret[29] = userData[_user].mother_last_name;
        ret[30] = userData[_user].spouse_first_name;
        ret[31] = userData[_user].spouse_middle_name;
        ret[32] = userData[_user].spouse_last_name;
        ret[33] = userData[_user].grandfather_first_name;
        ret[34] = userData[_user].grandfather_middle_name;
        ret[35] = userData[_user].grandfather_last_name;
        ret[36] = userData[_user].grandmother_first_name;
        ret[37] = userData[_user].grandmother_middle_name;
        ret[38] = userData[_user].grandmother_last_name;
        if (_user == msg.sender) {
            return (ret);
        }
        require(approvedReceivers[bankAddress[_user]], "Access not allowed");
        return (ret);
    }
}
